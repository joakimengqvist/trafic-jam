import { createSelector } from 'reselect'
import { StateStopDataObject } from '../types';

const getEstimatedCalls = ({ stopData } : StateStopDataObject) => stopData?.estimatedCalls || [];

export const estimatedCallsSelector = createSelector([getEstimatedCalls], estimatedCalls => estimatedCalls);


