const { orderByProps, obj, sortSeq } = require('../sort.js');
const { propsExtractor, character } = require('../destructing.js');

test('oreder by properties', () => {
  
  const expected = [
    {key: "name", value: "мечник"}, // порядок взят из массива с ключами
    {key: "level", value: 2}, // порядок взят из массива с ключами
    {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ];
  
  const received = orderByProps(obj, sortSeq);

  expect(received).toEqual(expected);

});

test('order by properties (with an error)', () => {

  
  
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

  const sortSeq = ["name", "heal"];

  expect(() => orderByProps(obj, sortSeq)).toThrow(Error);
  
});

test('extraction of values from the obj', () => {
  
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно'
    }
  ];

  const received = propsExtractor(character);
  
  expect(received).toEqual(expected);

});