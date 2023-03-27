import React from 'react';
import CustomButton from 'src/components/commons/customButton';
import { render, screen, fireEvent } from '@testing-library/react';
import { GithubOutlined } from '@ant-design/icons';

test('test default configuration', () => {
  render(<CustomButton />);
  const defaultButton = screen.getByTestId('customButton');
  expect(defaultButton).toBeInTheDocument();
  expect(defaultButton).toHaveAttribute(
    'class',
    'ant-btn css-dev-only-do-not-override-sk7ap8 ant-btn-default ant-btn-lg sc-bcXHqe laVTeM',
  );
  expect(defaultButton).toHaveAttribute('type', 'button');
  expect(defaultButton).toHaveTextContent(/unknown/i);
});

test('test only icon', () => {
  render(<CustomButton onlyIcon />);
  const defaultButton = screen.getByTestId('customButton');
  expect(defaultButton).toBeInTheDocument();
  const defaultButtonText = screen.queryByText(/unknown/i);
  expect(defaultButtonText).not.toBeInTheDocument();
  const spanImg = screen.getAllByRole('img');
  expect(spanImg).toBeTruthy();
  expect(spanImg[0]).toHaveAttribute('class', 'anticon anticon-question-circle');
});

test('test disabled', () => {
  render(<CustomButton disabled />);
  const defaultButton = screen.getByTestId('customButton');
  expect(defaultButton).toBeInTheDocument();
  expect(defaultButton).toHaveAttribute('disabled');
});

test('test all properties used', () => {
  render(
    <CustomButton
      title='testing title'
      type='primary'
      size='middle'
      shape='round'
      icon={<GithubOutlined />}
      block
      danger
      ClassName='button-router'
      dataTestId='newCustomButton'
    />,
  );
  const defaultButton = screen.getByTestId('newCustomButton');
  expect(defaultButton).toBeInTheDocument();
  expect(defaultButton).toHaveAttribute(
    'class',
    'ant-btn css-dev-only-do-not-override-sk7ap8 ant-btn-round ant-btn-primary ant-btn-block ant-btn-dangerous sc-bcXHqe laVTeM button-router',
  );
  const defaultButtonText = screen.getByText(/testing title/i);
  expect(defaultButtonText).toBeInTheDocument();
  const spanImg = screen.getAllByRole('img');
  expect(spanImg).toBeTruthy();
  expect(spanImg[0]).toHaveAttribute('class', 'anticon anticon-github');
});

test('test click event', () => {
  const handleClick = jest.fn();
  render(<CustomButton onClick={handleClick} />);
  const defaultButton = screen.getByTestId('customButton');
  expect(defaultButton).toBeInTheDocument();
  fireEvent.click(defaultButton);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
