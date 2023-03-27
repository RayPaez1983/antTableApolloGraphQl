import React from 'react';
import CustomToolTip from 'src/components/commons/customPopover';
import { render, screen } from '@testing-library/react';

test('test the CustomToolTip render', () => {
  render(
    <CustomToolTip title='Test tooltip text'>
      <p>Testing text</p>
    </CustomToolTip>,
  );
  const CustomToolTipElementChildren = screen.getByText(/testing text/i);
  expect(CustomToolTipElementChildren).toBeInTheDocument();
});
