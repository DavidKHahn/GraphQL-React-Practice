import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: ""
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My First Apollo Application</h2>
    </div>
  </ApolloProvider>
);

export default App;
