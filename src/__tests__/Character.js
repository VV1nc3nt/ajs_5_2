/* eslint-disable no-unused-vars */
import Character from '../Character';

test('Testing Character class', () => {
  const recieved = new Character('Legolas', 'Bowman');
  const expected = {
    attack: 0,
    defence: 0,
    health: 100,
    name: 'Legolas',
    type: 'Bowman',
    level: 1,
  };
  expect(expected).toEqual(recieved);
});

test('Testing Character name length shortness error', () => {
  expect(() => {
    const li = new Character('Li', 'Undead');
  }).toThrow(new Error('Имя короче двух символов или длиннее десяти!'));
});

test('Testing Character name length longness error', () => {
  expect(() => {
    const richardTheLionheart = new Character('Richard the Lionheart', 'Swordsman');
  }).toThrow(new Error('Имя короче двух символов или длиннее десяти!'));
});

test('Testing Character type error', () => {
  expect(() => {
    const simba = new Character('Simba', 'Lion');
  }).toThrow(new Error('Такого класса не существует!'));
});

test('Testing levelUp function', () => {
  const recieved = new Character('Artur', 'Swordsman');
  recieved.levelUp();
  const expected = {
    attack: 0,
    defence: 0,
    health: 100,
    name: 'Artur',
    type: 'Swordsman',
    level: 2,
  };
  expect(expected).toEqual(recieved);
});

test('Testing levelUp function on dead Character', () => {
  expect(() => {
    const recieved = new Character('Artur', 'Swordsman');
    recieved.health = 0;
    recieved.levelUp();
  }).toThrow('Персонаж мертв!');
});

test('Testing damage function', () => {
  const recieved = new Character('Artur', 'Swordsman');
  recieved.damage(50);
  const expected = {
    attack: 0,
    defence: 0,
    health: 50,
    name: 'Artur',
    type: 'Swordsman',
    level: 1,
  };
  expect(expected).toEqual(recieved);
});

test('Testing damage function on dead Character', () => {
  expect(() => {
    const recieved = new Character('Artur', 'Swordsman');
    recieved.health = 0;
    recieved.damage(1);
  }).toThrow('Персонаж мертв!');
});
