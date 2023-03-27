import React from 'react';
import PrimaryButton from 'src/components/commons/primaryButton';
import { render, screen } from '@testing-library/react';

import { ApolloProvider } from '@apollo/client';

import client from '../services/api/index';

test('test the ButtonTestting render', () => {
  const mockCallBack = jest.fn();
  render(
    <ApolloProvider client={client}>
      <PrimaryButton title='Show the first record' onClick={mockCallBack} ClassName='button' />
    </ApolloProvider>,
  );
  const linkElement = screen.getByText(/Show the first record/i);
  expect(linkElement).toBeInTheDocument();
});
