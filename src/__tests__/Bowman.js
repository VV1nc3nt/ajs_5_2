import Bowman from '../Bowman';

test('Testing Bowman class', () => {
  const recieved = new Bowman('Legolas', 'Bowman');
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    name: 'Legolas',
    type: 'Bowman',
    level: 1,
  };
  expect(expected).toEqual(recieved);
});
