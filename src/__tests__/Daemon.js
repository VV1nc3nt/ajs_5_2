import Daemon from '../Daemon';

test('Testing Daemon class', () => {
  const recieved = new Daemon('Crowley', 'Daemon');
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    name: 'Crowley',
    type: 'Daemon',
    level: 1,
  };
  expect(expected).toEqual(recieved);
});
