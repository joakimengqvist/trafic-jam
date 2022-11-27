import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { wrapper, store } from "../src/store/store";
import { Provider } from "react-redux";

const httpLink = createHttpLink({
  uri: 'https://api.entur.io/journey-planner/v3/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      'ET-Client-Name': 'gjensidige-codeinterviewtest'
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      pollInterval: 2000,
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
};

export default wrapper.withRedux(App);