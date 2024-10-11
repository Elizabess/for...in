import { orderByProps } from './orderByProps';

describe('orderByProps', () => {
  test('should return sorted properties according to the given order', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ['name', 'level'];
    
    const result = orderByProps(obj, order);
    
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  test('should handle empty objects', () => {
    const obj = {};
    const order = [];
    
    const result = orderByProps(obj, order);
    
    expect(result).toEqual([]);
  });

  test('should handle properties not in the order array', () => {
    const obj = { name: 'мечник', health: 10 };
    const order = ['name'];
    
    const result = orderByProps(obj, order);
    
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'health', value: 10 },
    ]);
  });
});
