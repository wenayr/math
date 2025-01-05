// // tests/funcTimeWait.test.ts
import {funcTimeW} from '../../src/Common/funcTimeWait';



describe('funcTimeW - Functional Tests', () => {
  let manager: ReturnType<typeof funcTimeW>;
  const mockType = "UID"; // Тестируем на ключе UID

  beforeEach(() => {
    manager = funcTimeW();
  });

  /**
   * Тест метода "add"
   */
  describe('add', () => {
    test('Adds a single event with timestamp and weight', () => {
      const event = { type: mockType, weight: 10 };
      const before = Date.now();

      manager.add(event);

      const after = Date.now();
      const [timestamp, weight] = manager.dStatic[mockType][0];

      expect(manager.dStatic[mockType]).toHaveLength(1);
      expect(weight).toBe(10);
      expect(timestamp).toBeGreaterThanOrEqual(before);
      expect(timestamp).toBeLessThanOrEqual(after);
    });

    test('Adds multiple events and maintains order by insertion', () => {
      const events= [
        { type: mockType, timeStamp: 1000, weight: 5 },
        { type: mockType, timeStamp: 2000, weight: 10 },
      ];

      events.forEach(e => manager.add(e));

      expect(manager.dStatic[mockType]).toHaveLength(2);
      expect(manager.dStatic[mockType]).toEqual([
        [1000, 5],
        [2000, 10],
      ]);
    });
  });

  /**
   * Тест метода "cleanByTime"
   */
  describe('cleanByTime', () => {
    test('Removes events older than specified time frame', () => {
      const now = Date.now();
      const events= [
        { type: mockType, timeStamp: now - 120000, weight: 5 }, // 120 секунд назад
        { type: mockType, timeStamp: now - 30000, weight: 10 }, // 30 секунд назад
      ];

      events.forEach(e => manager.add(e));

      manager.cleanByTime(mockType, 60000); // Интервал 60 секунд

      const remaining = manager.dStatic[mockType];
      expect(remaining).toHaveLength(1);
      expect(remaining[0][1]).toBe(10); // Остается только событие с весом 10
    });

    test('Does not remove anything if all events are within time frame', () => {
      const now = Date.now();
      const events= [
        { type: mockType, timeStamp: now - 30000, weight: 5 },
        { type: mockType, timeStamp: now - 5000, weight: 10 },
      ];

      events.forEach(e => manager.add(e));

      manager.cleanByTime(mockType, 60000);

      const remaining = manager.dStatic[mockType];
      expect(remaining).toHaveLength(2);
    });

    test('Handles empty arrays without crashing', () => {
      manager.cleanByTime(mockType, 60000);
      expect(manager.dStatic[mockType]).toBeUndefined(); // Массив для типа `mockType` не создан
    });
  });

  /**
   * Тест метода "weight"
   */
  describe('weight', () => {
    test('Correctly calculates total weight within time frame', () => {
      const now = Date.now();
      const events= [
        { type: mockType, timeStamp: now - 90000, weight: 5 }, // 90 секунд назад
        { type: mockType, timeStamp: now - 30000, weight: 10 }, // 30 секунд назад
      ];

      events.forEach(e => manager.add(e));

      const totalWeight = manager.weight(mockType, 60000); // Интервал 60 секунд
      expect(totalWeight).toBe(10); // Только вес последнего события (в пределах интервала)
    });

    test('Returns 0 for type without data', () => {
      expect(manager.weight(mockType, 60000)).toBe(0);
    });

    test('Does not mutate data unnecessarily during weight calculation', () => {
      const now = Date.now();
      const events= [
        { type: mockType, timeStamp: now - 90000, weight: 5 },
        { type: mockType, timeStamp: now - 30000, weight: 10 },
      ];

      events.forEach(e => manager.add(e));
      manager.weight(mockType, 60000);

      // Ожидаем, что слушок очищен только для старых событий
      expect(manager.dStatic[mockType]).toHaveLength(2); // Проверяем неизменность массива
    });
  });

  /**
   * Тест метода "byWeight"
   */
  describe('byWeight', () => {
    test('Returns correct timestamp when weight exceeds target', () => {
      const now = Date.now();
      const events= [
        { type: mockType, timeStamp: now - 50000, weight: 10 },
        { type: mockType, timeStamp: now - 30000, weight: 20 },
        { type: mockType, timeStamp: now - 10000, weight: 30 },
      ];

      events.forEach(e => manager.add(e));
      const timestamp = manager.byWeight(mockType, 55);

      expect(timestamp).toBe(now - 30000); // Сумма превышает 55 в момент второго события (30000 назад)
    });

    test('Returns 0 if weight is unachievable', () => {
      const now = Date.now();
      const events= [
        { type: mockType, timeStamp: now - 50000, weight: 10 },
      ];

      events.forEach(e => manager.add(e));
      const timestamp = manager.byWeight(mockType, 20);

      expect(timestamp).toBe(0); // Недостаточно веса
    });
  });

  /**
   * Тест метода "byWeightTimeNow"
   */
  describe('byWeightTimeNow', () => {
    test('Handles intermediate timeNow value correctly', () => {
      const now = Date.now();
      const timeNow = now - 15000; // Настраиваем "сейчас" как 15 секунд назад
      const events= [
        { type: mockType, timeStamp: now - 50000, weight: 10 },
        { type: mockType, timeStamp: now - 30000, weight: 20 },
        { type: mockType, timeStamp: now - 10000, weight: 30 },
      ];

      events.forEach(e => manager.add(e));
      const timestamp = manager.byWeightTimeNow(mockType, timeNow, 25);

      expect(timestamp).toBe(now - 30000); // Только учитываем события до `timeNow`
    });
  });
});