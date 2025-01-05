import {
  enhancedDecorator,
  enhancedTransformer,
  Decorator,
  Transformer,
} from "../../src/Common/Decorator";

describe("Decorator.ts tests", () => {
  
  it("enhancedDecorator should correctly modify parameters and results", () => {
    const originalFunction = (x: number, y: number) => x + y;

    const decoratedFunction = enhancedDecorator(originalFunction, {
      beforeParams: (...args) => {
        expect(args).toEqual([2, 3]); // Проверим корректный вызов с оригинальными параметрами
      },
      modifyParams: (...args) => [args[0] * 2, args[1] * 2] as [number, number], // Удвоим входные параметры
      afterParams: (...args) => {
        expect(args).toEqual([2, 3]); // Оригинальные параметры не изменены
      },
      onResult: (result) => {
        expect(result).toBe(10); // Результат вызова функции с модифицированными параметрами
      },
      modifyResult: (result) => result / 2, // Уменьшим результат в два раза
    });

    const result = decoratedFunction(2, 3);
    expect(result).toBe(5); // Проверяем модифицированный результат
  });

  it("enhancedDecorator should work without options", () => {
    const fn = (a: number, b: number) => a * b;
    const decoratedFn = enhancedDecorator(fn);

    const result = decoratedFn(3, 4);
    expect(result).toBe(12); // Результат функции без модификаций
  });

  it("enhancedTransformer should correctly transform results", () => {
    const multiply = (x: number, y: number) => x * y;

    const transformedFunction = enhancedTransformer(multiply, ([args, result]) => ({
      input: args,
      output: result,
    }));

    const result = transformedFunction(4, 5);
    expect(result).toEqual({
      input: [4, 5],
      output: 20,
    });
  });

  it("Decorator should correctly delegate to enhancedDecorator", () => {
    const fn = (a: string, b: string) => a + b;

    const decoratedFn = Decorator(fn, {
      parameters: (...args) => {
        expect(args).toEqual(["Hello", "World"]);
      },
      parametersModifier: (...args) => [args[0].toUpperCase(), args[1].toUpperCase()] as const,
      result: (res) => {
        expect(res).toBe("HELLOWORLD");
      },
      resultModifier: (res) => res.toLowerCase(),
    });

    const result = decoratedFn("Hello", "World");
    expect(result).toBe("helloworld");
  });

  it("Transformer should correctly delegate to enhancedTransformer", () => {
    const concat = (x: string, y: string) => x + y;

    const transformedFn = Transformer(concat, ([args, result]) => ({
      params: args,
      finalResult: result,
    }));

    const result = transformedFn("Frontend", "Backend");
    expect(result).toEqual({
      params: ["Frontend", "Backend"],
      finalResult: "FrontendBackend",
    });
  });
});