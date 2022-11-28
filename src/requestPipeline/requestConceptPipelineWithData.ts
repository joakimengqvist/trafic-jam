import { useEffect, useReducer } from "react";
import createEnturService from '@entur/sdk';

const service = createEnturService({
  clientName: 'gjensidige-codeinterviewtest'
});

interface PromiseQueueObject {
  number: number,
  request: Promise<object>
}

interface StateObject {
  promiseQueue: Array<PromiseQueueObject>,
  promiseCount: number,
  resetCycle: boolean,
}

interface EventObject {
  type: string,
  request: Promise<Object>,
}

const reducer = (state : StateObject, event : EventObject) => {
  switch(event.type) {
    case 'ADD_REQUEST': {
      const _promiseCount = state.promiseCount + 1;
        if (state.promiseQueue[state.promiseQueue.length - 1].number < _promiseCount) {
          state.promiseQueue.push({ number: _promiseCount, request: event.request });
        }
        return {
          ...state,
          promiseCount: _promiseCount,
        }
      }
    case 'RESET_REQUESTS':
      if (state.promiseCount > 1) {
        return {
          ...state,
          promiseCount: 1,
          promiseQueue: [{ number: 1, request: event.request}],
          resetCycle: true,
        }
      }
      return {
        ...state,
        promiseCount: 1,
        promiseQueue: [{ number: 1, request: event.request }],
        resetCycle: false,
      }
    default: {
    return state;
    }
  }
}

const firstRequestPromise = new Promise((resolve) => {
  service.getDeparturesFromStopPlace('NSR:StopPlace:4000', {
    limit: 20,
    })
    .then(response => resolve(response));
});

const initialState = {
  resetCycle: false,
  promiseCount: 1,
  promiseQueue: [{ number: 1, request: firstRequestPromise}],
}

export const useRequestPipeline = () => {
  const [{ ...state }, dispatch] = useReducer(reducer, initialState);

  const requestPromise = new Promise((resolve) => {
    service.getDeparturesFromStopPlace('NSR:StopPlace:4000', {
      limit: 20,
      })
      .then(response => resolve(response));
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'ADD_REQUEST', request: requestPromise }); 
    }, 400);
    return () => clearTimeout(timer);
  });

    return [state, dispatch]
}