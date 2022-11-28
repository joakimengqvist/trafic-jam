/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import '@testing-library/jest-dom';
 
 import ExpectedDeparture from '../ExpectedDeparture';

 const higherDateTime : string = "2022-11-28T19:36:42+01:00";
 const lowerDateTime : string = "2022-11-28T19:35:42+01:00"

 beforeEach(() => {
  jest.clearAllMocks();
});

 test('Delayed departure', async () => {
   render(<ExpectedDeparture expectedDeparture={higherDateTime} aimedDeparture={lowerDateTime} />)
 
   expect(screen.getByTestId('expectedDeparture')).toHaveTextContent('19:36:42 - Delayed');
 });

 test('On time departure', async () => {
  render(<ExpectedDeparture expectedDeparture={lowerDateTime} aimedDeparture={higherDateTime} />)

  expect(screen.getByTestId('expectedDeparture')).toHaveTextContent('19:35:42');
});