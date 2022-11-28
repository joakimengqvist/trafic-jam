import React from 'react';
import { memo } from 'react';
import Table from 'react-bootstrap/Table';
import { EstimatedCall } from '../../__generated__/graphql';
import ExpectedArrival from '../time/ExpectedArrival';
import ExpectedDeparture from '../time/ExpectedDeparture';
import SimpleTimeWriter from '../time/SimpleTimeWriter';

const StopTimeTable = ({ estimatedCall, index } : { estimatedCall: EstimatedCall, index: number }) => {
    const { 
      aimedArrivalTime, 
      expectedArrivalTime, 
      aimedDepartureTime, 
      expectedDepartureTime,
      destinationDisplay
    } = estimatedCall;

    const destinationName = destinationDisplay?.frontText || 'Destination unknown';

  return (<>
  <h5 className="mt-2">{destinationName}</h5>
    <Table striped bordered responsive key={aimedArrivalTime + index} className="mb-2">
      <tbody>
      <tr>
        <td>Aimed Arrival</td>
        <td>expected Arrival</td>
        <td>Aimed Departure</td>
        <td>expected departure</td>
      </tr>
      <tr>
        <td><SimpleTimeWriter dateTime={aimedArrivalTime} /></td>
        <td><ExpectedArrival expectedArrival={expectedArrivalTime} aimedArrival={aimedArrivalTime} /></td>
        <td><SimpleTimeWriter dateTime={aimedDepartureTime} /></td>
        <td><ExpectedDeparture expectedDeparture={expectedDepartureTime} aimedDeparture={aimedDepartureTime} /></td>
      </tr>
    </tbody>
  </Table>
  </>)
}

export default memo(StopTimeTable);