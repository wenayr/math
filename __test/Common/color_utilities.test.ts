import { 
  rgb, 
  colorGenerator, 
  colorGenerator2, 
  colorGeneratorByCount, 
  colorGeneratorByCount2, 
  colorStringToRGBA, 
  toColorString, 
  isSimilarColors 
} from '../../src/Common/Color';

describe('Color Utilities', () => {
  
  // Тест функции rgb()
  test('rgb() should return valid ColorString', () => {
    const color = rgb(255, 0, 0);
    expect(color).toBe('rgb(255,0,0)');
  });

  // Тест генератора цветов colorGenerator
  test('colorGenerator() should generate valid colors within range', () => {
    const generator = colorGenerator(0, 255);
    const firstColor = generator.next().value;
    expect(firstColor).toEqual(expect.arrayContaining([expect.any(Number), expect.any(Number), expect.any(Number)]));
    expect(firstColor).toEqual([expect.any(Number), expect.any(Number), expect.any(Number)]);
  });

  // Тест генератора цветов colorGenerator2
  test('colorGenerator2() should generate valid colors within range', () => {
    const generator = colorGenerator2({ min: 0, max: 255 });
    for (let color of generator) {
      if (color.every((c) => c === -1)) {
        break; // проверяем завершение цикла
      } else {
        expect(color).toEqual([expect.any(Number), expect.any(Number), expect.any(Number)]);
      }
    }
  });

  // Тест colorGeneratorByCount2
  test('colorGeneratorByCount2() should generate correct RGB values', () => {
    const color = colorGeneratorByCount2(180, 100, 5);
    expect(color).toEqual([expect.any(Number), expect.any(Number), expect.any(Number)]);
    expect(Math.max(...color)).toBeLessThanOrEqual(180);
  });

  // Тест colorGeneratorByCount
  test('colorGeneratorByCount() should return valid rgb string', () => {
    const colorString = colorGeneratorByCount(180, 100, 5);
    expect(colorString).toMatch(/^rgb\(\d+,\d+,\d+\)$/);
  });

  // Тест colorStringToRGBA
  test('colorStringToRGBA() should parse valid rgb strings', () => {
    const rgba = colorStringToRGBA('rgb(255,0,0)');
    expect(rgba).toEqual([255, 0, 0, 1]);
  });

  test('colorStringToRGBA() should parse valid rgba strings', () => {
    const rgba = colorStringToRGBA('rgba(255,0,0,0.5)');
    expect(rgba).toEqual([255, 0, 0, 0.5]);
  });

  test('colorStringToRGBA() should return undefined for invalid strings', () => {
    const rgba = colorStringToRGBA('invalid-color');
    expect(rgba).toBeUndefined();
  });

  // Тест toColorString
  test('toColorString() should validate and return valid ColorString', () => {
    const colorString = toColorString('rgb(255,0,0)');
    expect(colorString).toBe('rgb(255,0,0)');
  });

  test('toColorString() should throw error for invalid color strings', () => {
    expect(() => toColorString('invalid-color')).toThrow();
  });

  // Тест isSimilarColors
  test('isSimilarColors() should return true for similar colors', () => {
    const color1 = 'rgb(100,100,100)';
    const color2 = 'rgb(105,105,105)';
    const result = isSimilarColors(color1, color2, 15);
    expect(result).toBe(true);
  });

  test('isSimilarColors() should return false for very different colors', () => {
    const color1 = 'rgb(100,100,100)';
    const color2 = 'rgb(200,200,200)';
    const result = isSimilarColors(color1, color2, 15);
    expect(result).toBe(false);
  });
});