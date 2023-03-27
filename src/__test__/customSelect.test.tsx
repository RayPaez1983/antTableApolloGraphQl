import React from 'react';
import CustomSelect from 'src/components/commons/customSelect';
import { render, screen } from '@testing-library/react';

const testOptions = [
  { value: 'test1', label: 'Testing one' },
  { value: 'test2', label: 'Testing two' },
  { value: 'test3', label: 'Testing three' },
];

test('select render test', () => {
  render(<CustomSelect options={testOptions as []} defaultValue={testOptions[0].value} />);
  const CustomSelectElement = screen.getByTestId('custom-select-id');
  expect(CustomSelectElement).toBeInTheDocument();
});

test('select class test', () => {
  render(<CustomSelect options={testOptions as []} defaultValue={testOptions[0].value} />);
  const CustomSelectElement = screen.getByTestId('custom-select-id');
  expect(CustomSelectElement).toHaveAttribute(
    'class',
    'ant-select css-dev-only-do-not-override-sk7ap8 ant-select-single ant-select-show-arrow',
  );
  expect(CustomSelectElement).toHaveAttribute('style', 'min-width: 130px;');
});

test('select options test', () => {
  render(<CustomSelect options={testOptions as []} defaultValue={testOptions[0].value} />);
  const CustomSelectElementTwo = screen.getByText(/testing one/i);
  expect(CustomSelectElementTwo).toBeInTheDocument();
});
