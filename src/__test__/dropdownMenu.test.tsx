import React from 'react';
import CustomDropdown from 'src/components/commons/dropdownMenu';
import { render, screen } from '@testing-library/react';

test('render test', () => {
  render(<CustomDropdown />);
  const CustomDropdownElement = screen.getByTestId('menu-outlined');
  expect(CustomDropdownElement).toBeInTheDocument();
});
