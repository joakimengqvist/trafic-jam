interface DepartureComponentProps {
  expectedDeparture: string,
  aimedDeparture: string,
};

const ExpectedDeparture = ({ expectedDeparture, aimedDeparture }: DepartureComponentProps) => {
  if (!expectedDeparture) return <p>No current time</p>;

  const aimedDepartureDate = new Date(aimedDeparture);
  const expectedDepartureDate = new Date(expectedDeparture);

  if (expectedDepartureDate > aimedDepartureDate) {
    return <p>{expectedDepartureDate.toLocaleTimeString()} - <span style={{color: 'coral'}}>Delayed</span></p>
  } else {
    return <p>{expectedDepartureDate.toLocaleTimeString()}</p>
  }
};

export default ExpectedDeparture;