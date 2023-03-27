import React from 'react';
import CustomHeader from 'src/components/commons/customHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

test('render test', () => {
  render(
    <Router>
      <CustomHeader />
    </Router>,
  );
  const customHeaderElement = screen.getByTestId('custom-header-id');
  expect(customHeaderElement).toBeInTheDocument();
});

test('row container test', () => {
  render(
    <Router>
      <CustomHeader />
    </Router>,
  );
  const customHeaderElement = screen.getByTestId('custom-header-row-container-id');
  expect(customHeaderElement).toBeInTheDocument();
  expect(customHeaderElement).toHaveAttribute(
    'class',
    'ant-row ant-row-middle css-dev-only-do-not-override-sk7ap8',
  );
});

test('space container test', () => {
  render(
    <Router>
      <CustomHeader />
    </Router>,
  );
  const customHeaderElement = screen.getByTestId('custom-header-space-container-id');
  expect(customHeaderElement).toBeInTheDocument();
  expect(customHeaderElement).toHaveAttribute(
    'class',
    'ant-space css-dev-only-do-not-override-sk7ap8 ant-space-horizontal ant-space-align-center',
  );
});

test('navigation button test', () => {
  render(
    <Router>
      <CustomHeader />
    </Router>,
  );
  const PlusCircleOutlined = screen.getByTestId('plus-circle-outlined');
  expect(PlusCircleOutlined).toBeInTheDocument();
  const QuestionOutlined = screen.getByTestId('question-outlined');
  expect(QuestionOutlined).toBeInTheDocument();
  const SearchOutlined = screen.getByTestId('search-outlined');
  expect(SearchOutlined).toBeInTheDocument();
  const BellOutlined = screen.getByTestId('bell-outlined');
  expect(BellOutlined).toBeInTheDocument();
});

test('avatar test', () => {
  render(
    <Router>
      <CustomHeader />
    </Router>,
  );
  const Avatar = screen.getByTestId('avatar-view');
  expect(Avatar).toBeInTheDocument();
});
