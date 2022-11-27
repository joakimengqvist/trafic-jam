interface ArrivalComponentProps {
  aimedArrival: string,
  expectedArrival: string,
}

const ExpectedArrival = ({ aimedArrival, expectedArrival }: ArrivalComponentProps) => {
  if (!expectedArrival) return <p>No current time</p>;

  const aimedArrivalDate = new Date(aimedArrival);
  const expectedArrivalDate = new Date(expectedArrival);

  if (expectedArrivalDate > aimedArrivalDate) {
    return <p>{expectedArrivalDate.toLocaleTimeString()} - <span style={{color: 'coral'}}>Delayed</span></p>
  } else {
    return <p>{expectedArrivalDate.toLocaleTimeString()}</p>
  }
}

export default ExpectedArrival;