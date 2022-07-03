import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import { HttpLink } from '@apollo/client';

// const customFetch = (uri, options) => {
//     let Hawk;
//     const { header } = Hawk.client.header(
//         "http://laravel8_graphql.test/graphql",
//         "POST",
//         { credentials: this.credentials, ext: "some-app-data" }
//     );
//     options.headers.Authorization = header;
//     return fetch(uri, options);
// };

// const link = new HttpLink({ fetch: customFetch });

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache()
});

// const client = new ApolloClient({
//     uri: 'http://laravel8_graphql.test/graphql',
//     cache: new InMemoryCache()
// })

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
);
