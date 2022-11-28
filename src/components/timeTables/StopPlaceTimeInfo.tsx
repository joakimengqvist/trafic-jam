import { memo } from 'react';
import { EstimatedCall } from '../../__generated__/graphql';
import StopTimeTable from './StopTimeTable';

interface EstimatedCalls extends Array<EstimatedCall>{}

const StopPlaceTimeInfo = ({ estimatedCalls } : { estimatedCalls: EstimatedCalls} ) => {
  const stopInfo = estimatedCalls.map((estimatedCall : EstimatedCall, index: number) => (
    <StopTimeTable 
      key={`StopTimeTableItem__${estimatedCall?.destinationDisplay?.frontText}__${index}`}
      estimatedCall={estimatedCall}
      index={index}
      />)
    );

    return <>{stopInfo}</>;
}

export default StopPlaceTimeInfo;