import React from 'react';
import CustomNavigation from 'src/components/commons/navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

test('navigation render test', () => {
  render(
    <Router>
      <CustomNavigation />
    </Router>,
  );
  const CustomNavigationMenu = screen.getByRole('menu');
  expect(CustomNavigationMenu).toBeInTheDocument();
});

test('navigation items test', () => {
  render(
    <Router>
      <CustomNavigation />
    </Router>,
  );
  const navigationNamesArray = [
    'companies',
    'tasks',
    'activity journals',
    'oportunities',
    'quotes',
    'messages',
    'more',
  ];
  const CustomNavigationMenuItem = screen.queryAllByRole('menuitem');
  expect(CustomNavigationMenuItem.length).toBe(7);
  CustomNavigationMenuItem.forEach((element, index) =>
    expect(element.textContent).toBe(navigationNamesArray[index]),
  );
});
