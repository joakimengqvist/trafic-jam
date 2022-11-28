/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import '@testing-library/jest-dom';
 
 import ExpectedArrival from '../ExpectedArrival';

 const higherDateTime : string = "2022-11-28T19:36:42+01:00";
 const lowerDateTime : string = "2022-11-28T19:35:42+01:00"

 beforeEach(() => {
  jest.clearAllMocks();
});

 test('Delayed arrival', async () => {
   render(<ExpectedArrival expectedArrival={higherDateTime} aimedArrival={lowerDateTime} />)
 
   expect(screen.getByTestId('expectedArrival')).toHaveTextContent('19:36:42 - Delayed');
 });

 test('On time arrival', async () => {
  render(<ExpectedArrival expectedArrival={lowerDateTime} aimedArrival={higherDateTime} />)

  expect(screen.getByTestId('expectedArrival')).toHaveTextContent('19:35:42');
});