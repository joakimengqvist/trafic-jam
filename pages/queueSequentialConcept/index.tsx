// @ts-nocheck
import React, { useEffect, useState } from 'react';
import StopPlaceTimeInfo from '../../src/components/timeTables/StopPlaceTimeInfo'
import { useRequestPipeline } from '../../src/requestPipeline/requestSequentialConceptPipelineWithData';

const Stop = () => {
  const [numberOfRuns, setNumberOfRuns] = useState(0);
  const [lastResult, setLastResult] = useState([]);
  const [state, dispatch] =  useRequestPipeline();

  useEffect(() => {
    const fetchData = async () => {
      await state.currentRequest().then((response : any) => {
        setNumberOfRuns(prev => prev + 1);
        setLastResult(response);
        dispatch({ type: 'RESET_REQUESTS', requestFunction: state.requestQueue[state.requestQueue.length - 1] });
      })
    };
    const timer = setTimeout(() => fetchData(), 1000);
    return () => clearTimeout(timer);
  }, [numberOfRuns]);

  return (
    <div style={{maxWidth: '1080px', margin: '0 auto'}}>
      <h1>Sequential Queue Concept</h1>
      <h4>Number of completed requests causing update: {numberOfRuns}</h4>
      {lastResult.length > 0 && (
        <StopPlaceTimeInfo estimatedCalls={lastResult} />
      )}
    </div>
  )
}

export default Stop;