import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';

const cache = new InMemoryCache();

const stateLink = withClientState({
    cache,
    defaults,
    resolvers,
});

const client = new ApolloClient({
    cache,
    link: ApolloLink.from([
        stateLink
    ])
});



ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root')
);


