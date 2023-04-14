import Zombie from '../Zombie';

test('Testing Zombie class', () => {
  const recieved = new Zombie('Franken', 'Zombie');
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    name: 'Franken',
    type: 'Zombie',
    level: 1,
  };
  expect(expected).toEqual(recieved);
});
