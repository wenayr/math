// tests/List.test.ts
import { CList, ListNode } from '../../src/Common/List';

describe('CList Tests', () => {
    let list: CList<number>;

    beforeEach(() => {
        // Инициализация списка перед каждым тестом
        list = new CList();
    });

    /**
     * Тесты конструктора
     */
    describe('Constructor', () => {
        test('Initializes an empty list', () => {
            expect(list.count).toBe(0);
            expect(list.first).toBeUndefined();
            expect(list.last).toBeUndefined();
        });

        test('Initializes a list with values from an iterable', () => {
            list = new CList([1, 2, 3]);

            expect(list.count).toBe(3);
            expect([...list.values()]).toEqual([1, 2, 3]);
        });
    });

    /**
     * Тесты метода add
     */
    describe('add', () => {
        test('Adds a single element to the list', () => {
            const node = list.add(10);

            expect(list.count).toBe(1);
            expect(list.first?.value).toBe(10);
            expect(list.last?.value).toBe(10);

            expect(node.value).toBe(10);
        });

        test('Adds multiple elements in sequence', () => {
            list.add(10);
            list.add(20);

            expect(list.count).toBe(2);
            expect([...list.values()]).toEqual([10, 20]);
        });
    });

    /**
     * Тесты методов addFirst и addLast
     */
    describe('addFirst / addLast', () => {
        test('addFirst adds elements to the beginning of the list', () => {
            list.add(20);
            list.addFirst(10);

            expect(list.count).toBe(2);
            expect(list.first?.value).toBe(10);
            expect(list.last?.value).toBe(20);
            expect([...list.values()]).toEqual([10, 20]);
        });

        test('addLast adds elements to the end of the list', () => {
            list.add(10);
            list.addLast(20);

            expect(list.count).toBe(2);
            expect(list.first?.value).toBe(10);
            expect(list.last?.value).toBe(20);
            expect([...list.values()]).toEqual([10, 20]);
        });
    });

    /**
     * Тесты методов addBefore и addAfter
     */
    describe('addBefore / addAfter', () => {
        test('addBefore inserts elements before the given node', () => {
            const node1 = list.add(20);
            list.addBefore(node1, 10);

            expect(list.count).toBe(2);
            expect([...list.values()]).toEqual([10, 20]);
        });

        test('addAfter inserts elements after the given node', () => {
            const node1 = list.add(10);
            list.addAfter(node1, 20);

            expect(list.count).toBe(2);
            expect([...list.values()]).toEqual([10, 20]);
        });

        test('Throws error if addAfter is called with invalid node', () => {
            const invalidNode = {} as ListNode<number>;

            expect(() => {
                list.addAfter(invalidNode, 20);
            }).toThrow('Wrong node object');
        });
    });

    /**
     * Тесты методов delete, deleteFirst, и deleteLast
     */
    describe('delete / deleteFirst / deleteLast', () => {
        test('delete removes a given node by reference', () => {
            const node1 = list.add(10);
            const node2 = list.add(20);

            list.delete(node1);

            expect(list.count).toBe(1);
            expect([...list.values()]).toEqual([20]);
            expect(list.first).toBe(node2);
        });

        test('deleteFirst removes the first node', () => {
            list.add(10);
            list.add(20);

            list.deleteFirst();

            expect(list.count).toBe(1);
            expect([...list.values()]).toEqual([20]);
        });

        test('deleteLast removes the last node', () => {
            list.add(10);
            list.add(20);

            list.deleteLast();

            expect(list.count).toBe(1);
            expect([...list.values()]).toEqual([10]);
        });

        test('delete does not crash for non-existent values', () => {
            list.add(10);
            list.delete(100); // Value 100 does not exist

            expect(list.count).toBe(1);
            expect([...list.values()]).toEqual([10]);
        });
    });

    /**
     * Тесты методов find и findLast
     */
    describe('find / findLast', () => {
        test('find locates the first node with the given value', () => {
            list.add(10);
            list.add(20);

            const node = list.find(10);
            expect(node?.value).toBe(10);
        });

        test('findLast locates the last node with the given value', () => {
            list.add(10);
            list.add(20);
            list.add(10);

            const node = list.findLast(10);
            expect(node?.value).toBe(10);
            expect(list.prev(node!)?.value).toBe(20);
        });

        test('find returns undefined if value is not found', () => {
            list.add(10);

            const node = list.find(20);
            expect(node).toBeUndefined();
        });
    });

    /**
     * Тесты итераторов values, reversedValues
     */
    describe('Iterators: values / reversedValues', () => {
        test('values iterates through all node values in order', () => {
            list.add(10);
            list.add(20);
            list.add(30);

            expect([...list.values()]).toEqual([10, 20, 30]);
        });

        test('reversedValues iterates through all node values in reverse order', () => {
            list.add(10);
            list.add(20);
            list.add(30);

            expect([...list.reversedValues()]).toEqual([30, 20, 10]);
        });
    });

    /**
     * Тесты метода clear
     */
    describe('clear', () => {
        test('Clears all nodes in the list', () => {
            list.add(10);
            list.add(20);

            list.clear();

            expect(list.count).toBe(0);
            expect([...list.values()]).toEqual([]);
        });
    });

    /**
     * Тесты метода has
     */
    describe('has', () => {
        test('Returns true if list contains the given value', () => {
            list.add(10);

            expect(list.has(10)).toBe(true);
        });

        test('Returns true if list contains the given node', () => {
            const node = list.add(10);

            expect(list.has(node)).toBe(true);
        });

        test('Returns false if list does not contain the value or node', () => {
            expect(list.has(10)).toBe(false);
        });
    });
});