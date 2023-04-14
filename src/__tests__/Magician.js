import Magician from '../Magician';

test('Testing Magician class', () => {
  const recieved = new Magician('Gendalf', 'Magician');
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    name: 'Gendalf',
    type: 'Magician',
    level: 1,
  };
  expect(expected).toEqual(recieved);
});
