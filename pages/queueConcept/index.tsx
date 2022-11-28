// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useRequestPipeline } from '../../src/requestPipeline/requestConceptPipeline';

const Stop = () => {
  const [numberOfRuns, setNumberOfRuns] = useState(0);
  const [lastResult, setLastResult] = useState('');
  const [state, dispatch] = useRequestPipeline();
  useEffect(() => {
    const fetchData = async () => {
      await state.promiseQueue[0].request.then((response : any) => {
        setNumberOfRuns(prev => prev + 1);
        setLastResult(response);
        dispatch({ type: 'RESET_REQUESTS', request: state.promiseQueue[state.promiseQueue.length - 1].request });
      })
    };
    fetchData();      
  }, [numberOfRuns]);

  return (
    <div style={{maxWidth: '1080px', margin: '0 auto'}}>
      <h1>Queue Concept</h1>
      <h4>Number of requests in queue: {state.promiseQueue.length}</h4>
      <h4>Promise guard counter: {state.promiseCount}</h4>
      <h4>Number of component runs: {numberOfRuns}</h4>
      <h4>Last result: {lastResult}</h4>
    </div>
  )
}

export default Stop;