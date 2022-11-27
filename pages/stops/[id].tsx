import React from 'react';
import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client';
import StopTimeTable from '../../src/components/timeTables/StopPlaceTimeInfo';
import { UPDATE_STOP } from '../../src/store/types';
import { useDispatch, useSelector } from 'react-redux';
import { stopNameSelector } from '../../src/store/selectors/getStopName';
import { estimatedCallsSelector } from '../../src/store/selectors/getEstimatedCalls';

const GET_STOP_DATA = gql`
query stopPlace($id: String!, $timeRange: Int, $numberOfDepartures: Int) {
  stopPlace(id: $id) {
    id
    name
    estimatedCalls(timeRange: $timeRange, numberOfDepartures: $numberOfDepartures) {     
      realtime
      aimedArrivalTime
      aimedDepartureTime
      expectedArrivalTime
      expectedDepartureTime
      expectedArrivalTime
      expectedDepartureTime
      date
      forBoarding
      forAlighting
      destinationDisplay {
        frontText
      }
      quay {
        id
      }
      serviceJourney {
        journeyPattern {
          line {
            id
            name
            transportMode
          }
        }
      }
    }
  }
}
`;

const Stop = () => {
  const { query } = useRouter();
  const stopId = query.id;
  const dispatch = useDispatch();

  const { loading, data } = useQuery(
    GET_STOP_DATA, {
    variables: { id: `NSR:StopPlace:${stopId}` },
    pollInterval: 2000,
    onCompleted: data => { dispatch({ type: UPDATE_STOP, payload: data.stopPlace})},
    },
  );

  const name = useSelector(stopNameSelector);
  const estimatedCalls = useSelector(estimatedCallsSelector);

  if (!data || loading) return;

  return (
    <div style={{maxWidth: '1080px', margin: '0 auto'}}>
    <h1 className="mt-4">{name}</h1>
    <StopTimeTable estimatedCalls={estimatedCalls} />
    </div>
  )
}

export default Stop;