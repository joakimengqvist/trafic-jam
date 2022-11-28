## Run the project

```
yarn install

yarn dev

```

# Things I am not pleased with (short on time) :D

- Tests are very simple.
- Some unecesarry duplication of code (request cycles mostly).
- GraphQL query is isolated on 1 page.
- I am not 100% confident in typeScript, I did the best I could for the time that I had. (I definately overused <any>) :)

## queueConcept is a proof of concept handling request promises in an Array.

First off to basics about handling promises that resolves during different intervals, I made a small proof of concept that saves each
promise in an array. The array then consists of several promises, and as soon as the first ([0]) promise get resolved, the array gets overriden by the last promise ([.length - 1]).

## queueConceptStop is an example of the proof of concept with real requests returning data once Promise is resolved.

This is a further extension of the proof of concept applying real requests that returns real data. To be aware of is that the requests does not handle any .catch cases, this is due to the time effort of the project.

## stopApollo is an example of using Apollo client to handle several graphQl requests requests using the feature polling.

This is a more proper implementation of a feature using graphQl. Apollo Client helps out with polling and makes sure there is no duplications of requests.
