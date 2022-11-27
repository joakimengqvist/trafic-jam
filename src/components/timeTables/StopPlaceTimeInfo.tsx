import { memo } from 'react';
import { EstimatedCall } from '../../__generated__/graphql';
import StopTimeTable from './StopTimeTable';


const StopPlaceTimeInfo = ({ estimatedCalls } : Array<EstimatedCall>) => {
  return estimatedCalls.map((estimatedCall : EstimatedCall, index: number) => (
    <StopTimeTable 
      key={`StopTimeTableItem__${estimatedCall?.destinationDisplay?.frontText}__${index}`}
      estimatedCall={estimatedCall}
      index={index}
      />)
    );
}

export default memo(StopPlaceTimeInfo);