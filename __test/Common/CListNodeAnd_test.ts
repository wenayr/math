// tests/CListNodeAnd.test.ts
import { CListNodeAnd } from '../../src/Common/ListNodeAnd';

describe('CListNodeAnd', () => {
  test('Создание нового списка', () => {
    const list = new CListNodeAnd<number>();
    expect(list.count).toBe(0);
    expect(list.First()).toBeUndefined();
    expect(list.End()).toBeUndefined();
    expect(list.isForbidden()).toBe(true);
  });

  test('Добавление элемента в начало списка', () => {
    const list = new CListNodeAnd<number>();
    const node = list.AddStart(10);
    expect(list.count).toBe(1);
    expect(list.dataFirst).toBe(10);
    expect(node.data).toBe(10);
    expect(node.isForbidden()).toBe(false);
  });

  test('Добавление элемента в конец списка', () => {
    const list = new CListNodeAnd<number>();
    list.AddStart(10);
    list.AddStart(20);
    let endNode = list.AddEnd(30);

    expect(list.count).toBe(3);
    expect(list.dataEnd).toBe(30);
    expect(endNode.data).toBe(30);

    endNode = list.AddEnd(40);
    expect(list.dataEnd).toBe(40);
    expect(list.count).toBe(4);
  });

  test('Перебор элементов списка (forEach)', () => {
    const list = new CListNodeAnd<number>();
    list.AddStart(10);
    list.AddEnd(20);
    list.AddEnd(30);

    const result: number[] = [];
    list.forEach((item) => result.push(item));
    expect(result).toEqual([10, 20, 30]);
  });

  test('Поиск элемента в списке', () => {
    const list = new CListNodeAnd<number>();
    list.AddStart(10);
    list.AddEnd(20);
    list.AddEnd(30);

    const foundNode = list.find((node) => node.data === 20);
    expect(foundNode).toBeDefined();
    expect(foundNode?.data).toBe(20);

    const notFoundNode = list.find((node) => node.data === 50);
    expect(notFoundNode).toBeUndefined();
  });

  test('Удаление узла из списка', () => {
    const list = new CListNodeAnd<number>();
    const node1 = list.AddStart(10);
    const node2 = list.AddEnd(20);
    const node3 = list.AddEnd(30);

    node2.DeleteLink();
    expect(list.count).toBe(2);

    const result: number[] = [];
    list.forEach((item) => result.push(item));
    expect(result).toEqual([10, 30]);
  });

  test('Удаление всех узлов из списка', () => {
    const list = new CListNodeAnd<number>();
    list.AddStart(10);
    list.AddEnd(20);
    list.AddEnd(30);

    // Удаляем все узлы
    let node = list.First();
    while (node) {
      const next = node.Next();
      node.DeleteLink();
      node = next;
    }

    expect(list.count).toBe(0);
    expect(list.First()).toBeUndefined();
  });

  test('Проверка закольцованности списка через _Init', () => {
    const list = new CListNodeAnd<number>();
    list.AddStart(10);
    list.AddEnd(20);
    expect(list.End()?.Next()).toBeUndefined();
    expect(list.First()?.Prev()).toBeUndefined();
  });

  test('Проверка корректности текущих данных узла', () => {
    const list = new CListNodeAnd<number>();
    list.AddStart(10);
    list.AddEnd(20);

    const firstNode = list.First();
    const lastNode = list.End();

    expect(firstNode?.dataThis).toBe(10);
    expect(lastNode?.dataThis).toBe(20);
  });

  test('Доступ к следующим и предыдущим узлам', () => {
    const list = new CListNodeAnd<number>();
    const node1 = list.AddStart(10);
    const node2 = list.AddEnd(20);
    const node3 = list.AddEnd(30);

    expect(node1.Next()?.data).toBe(20);
    expect(node2.Prev()?.data).toBe(10);
    expect(node2.Next()?.data).toBe(30);
    expect(node3.Prev()?.data).toBe(20);
  });

  test('Преобразование списка в массив', () => {
    const list = new CListNodeAnd<number>();
    list.AddStart(10);
    list.AddEnd(20);
    list.AddEnd(30);

    const array = list.GetArray();
    expect(array).toEqual([10, 20, 30]);
  });
});