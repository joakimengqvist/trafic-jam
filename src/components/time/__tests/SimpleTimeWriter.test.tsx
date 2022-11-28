/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import '@testing-library/jest-dom';
 
 import SimpleTimeWriter from '../SimpleTimeWriter';

 
 test('Simple time writer test', async () => {
   render(<SimpleTimeWriter dateTime="2022-11-28T19:35:42+01:00" />)
 
   expect(screen.getByText('19:35:42')).toBeInTheDocument();
 });