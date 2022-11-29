import React, { memo } from 'react';
interface ArrivalComponentProps {
  aimedArrival: string,
  expectedArrival: string,
}

const ExpectedArrival = ({ aimedArrival, expectedArrival }: ArrivalComponentProps) => {
  if (!expectedArrival) return <p>No current time</p>;

  const aimedArrivalDate = new Date(aimedArrival);
  const expectedArrivalDate = new Date(expectedArrival);

  if (expectedArrivalDate > aimedArrivalDate) {
    return <p data-testid="expectedArrival">{expectedArrivalDate.toLocaleTimeString()} - <span data-testid="expectedArrivalDelay" style={{color: 'coral'}}>Delayed</span></p>
  } else {
    return <p data-testid="expectedArrival">{expectedArrivalDate.toLocaleTimeString()}</p>
  }
}

export default memo(ExpectedArrival);