const SimpleTimeWriter = ( {dateTime } : { dateTime: string }) => {
  if (!dateTime) return <p>No current time</p>;
  const inputDate = new Date(dateTime);
  return <p>{inputDate.toLocaleTimeString()}</p>
};

export default SimpleTimeWriter;