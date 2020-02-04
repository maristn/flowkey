import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers/index'
import './index.css';
import App from './App.jsx';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

let store = createStore(appReducers);
const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>, document.getElementById('root'));
  