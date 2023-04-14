import Swordsman from '../Swordsman';

test('Testing Swordsman class', () => {
  const recieved = new Swordsman('Artur', 'Swordsman');
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    name: 'Artur',
    type: 'Swordsman',
    level: 1,
  };
  expect(expected).toEqual(recieved);
});
