import activeStatusFilterFunc from 'src/utils/functions/companiesFunctions';

const testData = [
  {
    name: 'Apple',
    active: true,
  },
  {
    name: 'Google',
    active: false,
  },
  {
    name: 'Tesla',
    active: true,
  },
];

const activeData = [
  {
    name: 'Apple',
    active: true,
  },
  {
    name: 'Tesla',
    active: true,
  },
];

const inactiveData = [
  {
    name: 'Google',
    active: false,
  },
];

test('all operations test', () => {
  expect(
    activeStatusFilterFunc(testData, 'all' as unknown as React.FormEvent<HTMLInputElement>),
  ).toStrictEqual(testData);
  expect(
    activeStatusFilterFunc(testData, 'active' as unknown as React.FormEvent<HTMLInputElement>),
  ).toStrictEqual(activeData);
  expect(
    activeStatusFilterFunc(testData, 'inactive' as unknown as React.FormEvent<HTMLInputElement>),
  ).toStrictEqual(inactiveData);
  expect(
    activeStatusFilterFunc(testData, 'larger' as unknown as React.FormEvent<HTMLInputElement>),
  ).toBe('Unrecognized operation!');
});
