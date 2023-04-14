import Undead from '../Undead';

test('Testing Undead class', () => {
  const recieved = new Undead('Zomboid', 'Undead');
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    name: 'Zomboid',
    type: 'Undead',
    level: 1,
  };
  expect(expected).toEqual(recieved);
});
