import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';


const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;
