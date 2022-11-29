import { useEffect, useReducer } from "react";
import createEnturService from '@entur/sdk';

const service = createEnturService({
  clientName: 'gjensidige-codeinterviewtest'
});

interface StateObject {
  requestQueue: Array<Function>
  currentRequest: Function,
}

const EventTypes = {
  ADD_REQUEST: 'ADD_REQUEST',
  RESET_REQUESTS: 'RESET_REQUESTS'
};

interface AddRequestAction {
  type: typeof EventTypes.ADD_REQUEST
  requestFunction: Function
};

interface ResetRequestAction {
  type: typeof EventTypes.RESET_REQUESTS
  requestFunction: Function
};

type Actions = AddRequestAction | ResetRequestAction;

const reducer = (state : StateObject, event : Actions) : StateObject => {
  switch(event.type) {
    case EventTypes.ADD_REQUEST: {
        state.requestQueue.push(event.requestFunction);
        return state;
      }
    case EventTypes.RESET_REQUESTS:
      return {
        ...state,
        requestQueue: [event.requestFunction],
      }
    default: {
    return state;
    }
  }
}

const firstRequestPromise = async () => {
  const request = await service.getDeparturesFromStopPlace('NSR:StopPlace:4000', { limit: 20 });
  return request;
};

const initialState : StateObject = {
  currentRequest: firstRequestPromise,
  requestQueue: [],
}

export const useRequestPipeline = () => {
  const [state , dispatch] = useReducer(reducer, initialState);

  const requestPromise = async () => {
    const request = await service.getDeparturesFromStopPlace('NSR:StopPlace:4000', { limit: 20 });
    return request;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      console.log({ numberOfRequest: state.requestQueue.length, requestQueue: state.requestQueue});
      dispatch({ type: 'ADD_REQUEST', requestFunction: requestPromise }); 
    }, 200);
    return () => clearInterval(timer);
  });

    return [state, dispatch]
}