import React, { memo } from 'react';

interface DepartureComponentProps {
  expectedDeparture: string,
  aimedDeparture: string,
};

const ExpectedDeparture = ({ expectedDeparture, aimedDeparture }: DepartureComponentProps) => {
  if (!expectedDeparture) return <p>No current time</p>;

  const aimedDepartureDate = new Date(aimedDeparture);
  const expectedDepartureDate = new Date(expectedDeparture);

  if (expectedDepartureDate > aimedDepartureDate) {
    return <p data-testid="expectedDeparture">{expectedDepartureDate.toLocaleTimeString()} - <span data-testid="expectedDepartureDelay" style={{color: 'coral'}}>Delayed</span></p>
  } else {
    return <p data-testid="expectedDeparture">{expectedDepartureDate.toLocaleTimeString()}</p>
  }
};

export default memo(ExpectedDeparture);