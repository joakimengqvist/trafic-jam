import { createSelector } from 'reselect'
import { StateStopDataObject } from '../types';

const getName = ({ stopData } : StateStopDataObject) => stopData?.name || 'name';

export const stopNameSelector = createSelector([getName], name => name);
