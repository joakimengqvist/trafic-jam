## Run the project

```
yarn install

yarn dev
```

## 4 different page with different approaches

I chose to do 4 different functionality to display that I understand the assignment, but also the concept of handling promises. They all share the same react components, but have different functionality of fetching the data.

Bare in mind I am not 100% 'fluent' in TypeScript but I am eager to get better, and I did my best here for the time at my disposal :)

## sequential requests handlement - POC

#### queueSequentialConcept is a proof of concept handling unsent request in an Array.

According to the assignement the requests that are saved during the first request call should not have been called. This serves as an example of saving the async function in an array, and when the initial request is finished, all requests are overiden by the latest async function in the array.

## queueConcept - POC

#### queueConcept is a proof of concept handling request promises in an Array.

First off to basics about handling promises that resolves during different intervals, I made a small proof of concept that saves each
promise in an array. The array then consists of several promises, and as soon as the first ([0]) promise get resolved, the array gets overriden by the last promise ([.length - 1]).

## queueConceptStop - POC with real requests

#### queueConceptStop is an example of the proof of concept with real requests returning data once Promise is resolved.

This is a further extension of the proof of concept applying real requests that returns real data. To be aware of is that the requests does not handle any .catch cases, this is due to the time effort of the project.

## stopApollo - GraphQL client

#### stopApollo is an example of using Apollo client to handle several graphQl requests requests using the feature polling.

This is a more proper implementation of a feature using graphQl. Apollo Client helps out with polling and makes sure there is no duplications of requests.
