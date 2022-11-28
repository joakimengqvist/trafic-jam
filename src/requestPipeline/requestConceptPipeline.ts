import { useEffect, useReducer } from "react";

interface PromiseQueueObject {
  number: number,
  request: Promise<object>
}

interface StateObject {
  promiseQueue: Array<PromiseQueueObject>,
  promiseCount: number,
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
  const _timeOut = Math.floor(Math.random() * (15000 - 10000) + 10000);
  setTimeout(() => {
    resolve(`request completed! Timeout was: ${_timeOut}`);
  }, _timeOut);
});

const initialState = {
  resetCycle: false,
  promiseCount: 1,
  promiseQueue: [{ number: 1, request: firstRequestPromise}],
}

export const useRequestPipeline = () => {
  const [{ ...state }, dispatch] = useReducer(reducer, initialState);

  const requestPromise = new Promise((resolve) => {
    const _timeOut = Math.floor(Math.random() * (15000 - 10000) + 10000);
    setTimeout(() => {
      resolve(`request completed! Timeout was: ${_timeOut}`);
    }, _timeOut);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'ADD_REQUEST', request: requestPromise }); 
    }, 2000);
    return () => clearTimeout(timer);
  });

    return [state, dispatch]
}