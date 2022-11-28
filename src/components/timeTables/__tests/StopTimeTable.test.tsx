/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import StopTimeTable from '../StopPlaceTimeInfo';

const estimatedCalls =   [{
  __typename: 'EstimatedCall',
  realtime: true,
  aimedArrivalTime: '2022-11-28T19:36:00+01:00',
  aimedDepartureTime: '2022-11-28T19:36:00+01:00',
  expectedArrivalTime: '2022-11-28T19:35:42+01:00',
  expectedDepartureTime: '2022-11-28T19:36:40+01:00',
  date: '2022-11-28',
  forBoarding: true,
  forAlighting: true,
  destinationDisplay: {
      __typename: 'DestinationDisplay',
      frontText: 'Tjuvholmen'
  },
  quay: {
      __typename: 'Quay',
      id: 'NSR:Quay:7203'
  },
  serviceJourney: {
      __typename: 'ServiceJourney',
      journeyPattern: {
          __typename: 'JourneyPattern',
          line: {
              __typename: 'Line',
              id: 'RUT:Line:54',
              name: 'Tjuvholmen - Kjelsås stasjon',
              transportMode: 'bus'
          }
      }
  }
},
]


test('loads and displays greeting', async () => {
  render(<StopTimeTable estimatedCalls={estimatedCalls} />)

  expect(screen.getByText('Tjuvholmen')).toBeInTheDocument();
  expect(screen.getByText('Aimed Arrival')).toBeInTheDocument();

  expect(screen.getByTestId('expectedArrival')).toHaveTextContent('19:35:42');
  expect(screen.getByTestId('expectedDeparture')).toHaveTextContent('19:36:40');

  expect(screen.getByText('Delayed')).toBeInTheDocument();

});