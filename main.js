// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
//
// ReactDOM.render(<App />, document.getElementById('app'));


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


import App from './App.jsx';
import TaskCreator from './TaskCreator.jsx';
import reducer from './reducers';


const store = createStore(
                          reducer,
                          composeWithDevTools(applyMiddleware(thunk))
);
const history = syncHistoryWithStore(hashHistory, store);



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path='/addTask' component={TaskCreator}/>
    </Router>
  </Provider>,
  document.getElementById('app'));
