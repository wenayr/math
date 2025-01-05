import { CObjectEventsArr, tListEvent } from '../../src/Common/event';

describe('CObjectEventsArr', () => {
  let eventArray: CObjectEventsArr<any>;

  beforeEach(() => {
    eventArray = new CObjectEventsArr();
  });

  test('Добавление событий в начало и конец', () => {
    const mockEvent1: tListEvent = { func: jest.fn() };
    const mockEvent2: tListEvent = { func: jest.fn() };

    eventArray.AddStart(mockEvent1);
    expect(eventArray.count()).toBe(1);

    eventArray.AddEnd(mockEvent2);
    expect(eventArray.count()).toBe(2);
  });

  test('Выполнение событий с помощью OnEvent', () => {
    const mockFunc1 = jest.fn();
    const mockFunc2 = jest.fn();
    eventArray.Add({ func: mockFunc1 });
    eventArray.Add({ func: mockFunc2 });

    eventArray.OnEvent();

    expect(mockFunc1).toHaveBeenCalledTimes(1);
    expect(mockFunc2).toHaveBeenCalledTimes(1);
  });

  test('Удаление событий через del', () => {
    const mockFunc1 = jest.fn();
    const mockOnDel = jest.fn();

    const event: tListEvent = { func: mockFunc1, OnDel: mockOnDel };
    eventArray.Add(event);

    expect(eventArray.count()).toBe(1);

    event.del?.(); // Удаление события вручную

    expect(eventArray.count()).toBe(0);
    expect(mockOnDel).toHaveBeenCalled();
  });

  test('Очистка всех событий через Clean', () => {
    const mockDel1 = jest.fn();
    const mockDel2 = jest.fn();

    eventArray.Add({ func: jest.fn(), OnDel: mockDel1 });
    eventArray.Add({ func: jest.fn(), OnDel: mockDel2 });

    expect(eventArray.count()).toBe(2);
    eventArray.Clean(); // Очищаем все события

    expect(eventArray.count()).toBe(0);
    expect(mockDel1).toHaveBeenCalled();
    expect(mockDel2).toHaveBeenCalled();
  });

  test('Правильное количество событий', () => {
    expect(eventArray.count()).toBe(0);

    eventArray.Add({ func: jest.fn() });
    eventArray.Add({ func: jest.fn() });

    expect(eventArray.count()).toBe(2);

    eventArray.Clean();

    expect(eventArray.count()).toBe(0);
  });
});