import { EstimatedCall } from "../__generated__/graphql";

export const UPDATE_STOP = 'UPDATE_STOP';

export interface StateStopDataObject {
  stopData: StateStopDataObjectName
}

export interface StateStopDataObjectName {
  name: string
  estimatedCalls: Array<EstimatedCall>
}