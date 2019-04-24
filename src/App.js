import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from './Courses'

const client = new ApolloClient({
  uri: ""
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">React and GraphQL Application</a>
      </nav>
        <div>
          <Courses />
        </div>
    </div>
  </ApolloProvider>
);

export default App;
