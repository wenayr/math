// tests/common.test.ts
import {
  GetEnumKeys,
  isDate,
  shallowClone,
  deepClone,
  deepEqual,
  shallowEqual,
  BSearch,
  BSearchNearest,
  NormalizeDouble,
  MaxCommonDivisor,
  DblToStrAnd,
  CreateArrayProxy
} from '../../src/Common/common';

describe("Тестирование функций из common.ts", () => {
  // Пример enum для теста
  enum TestEnum {
    KEY1,
    KEY2,
    KEY3
  }

  test("GetEnumKeys - получение ключей из enum", () => {
    const keys = GetEnumKeys(TestEnum);
    expect(keys).toEqual(["KEY1", "KEY2", "KEY3"]);
  });

  test("isDate - проверка объекта на тип Date", () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate("Not a date" as any)).toBe(false);
  });

  test("shallowClone - поверхностное клонирование", () => {
    const obj = { a: 1, b: { c: 2 } };
    const clone = shallowClone(obj);

    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj); // Поскольку объект новый
    expect(clone.b).toBe(obj.b); // Поверхностное клонирование
  });

  test("deepClone - глубокое клонирование", () => {
    const obj = { a: 1, b: { c: 2 } };
    const clone = deepClone(obj);

    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj); // Объект новый
    expect(clone.b).not.toBe(obj.b); // Вложенные объекты тоже новые
  });

  test("deepEqual - глубокое сравнение", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    const obj3 = { a: 1, b: { c: 3 } };

    expect(deepEqual(obj1, obj2)).toBe(true);
    expect(deepEqual(obj1, obj3)).toBe(false);
  });

  test("shallowEqual - поверхностное сравнение", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const obj3 = { a: 1, b: 3 };

    expect(shallowEqual(obj1, obj2)).toBe(true);
    expect(shallowEqual(obj1, obj3)).toBe(false);
  });

  test("BSearch - бинарный поиск", () => {
    const array = [1, 3, 5, 7, 9];
    const index = BSearch(array, 5, "equal", "ascend");
    expect(index).toBe(2);

    const notFoundIndex = BSearch(array, 6, "equal", "ascend");
    expect(notFoundIndex).toBe(-1);
  });

  test("BSearchNearest - ближайший элемент", () => {
    const array = [1, 3, 7, 10];
    const index = BSearchNearest(array, 5);
    expect(index).toBe(1); // Ближайшее значение 3

    const exactIndex = BSearchNearest(array, 10);
    expect(exactIndex).toBe(3);
  });

  test("NormalizeDouble - нормализация числа", () => {
    const value = 123.456789;
    const normalized = NormalizeDouble(value, 2);
    expect(normalized).toBe(123.46);
  });

  test("MaxCommonDivisor - НОД", () => {
    const gcd = MaxCommonDivisor(24, 36);
    expect(gcd).toBe(12);
  });

  test("DblToStrAnd - преобразование числа в строку с точностью", () => {
    const result = DblToStrAnd(0.123456789, { digitsPoint: 3 });
    expect(result).toBe("0.123");

    const rounded = DblToStrAnd(12345.6789, { digitsR: 3 });
    expect(rounded).toBe("12300");
  });

  test("CreateArrayProxy - Прокси для доступа к массиву", () => {
    const array = [10, 20, 30];
    const target: { [key: number]: number } = {};
    const proxy = CreateArrayProxy(target, array);

    expect(proxy[0]).toBe(10);
    expect(proxy[1]).toBe(20);

    proxy[0] = 100;
    expect(proxy[0]).toBe(100);
  });
});