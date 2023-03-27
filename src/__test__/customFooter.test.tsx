import React from 'react';
import CustomFooter from 'src/components/commons/customFooter';
import { render, screen } from '@testing-library/react';

test('render test', () => {
  render(<CustomFooter />);
  const customFooterElement = screen.getByTestId('custom-footer-id');
  expect(customFooterElement).toBeInTheDocument();
});

test('space container test', () => {
  render(<CustomFooter />);
  const customFooterElement = screen.getByTestId('space-footer-id');
  expect(customFooterElement).toHaveAttribute(
    'class',
    'ant-space css-dev-only-do-not-override-sk7ap8 ant-space-horizontal ant-space-align-center',
  );
});

test('footer title test', () => {
  render(<CustomFooter />);
  const customFooterElement = screen.queryByText(/powered by/i);
  expect(customFooterElement).toBeInTheDocument();
});

test('footer logo test', () => {
  render(<CustomFooter />);
  const customFooterElement = screen.getAllByRole('img');
  expect(customFooterElement).toBeTruthy();
  expect(customFooterElement[0]).toHaveAttribute('alt', 'Powered by Repfabric');
  expect(customFooterElement[0]).toHaveAttribute('src', 'repfabric.png');
});
