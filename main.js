
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';



import App from './App.jsx';
import TaskCreator from './TaskCreator.jsx';
import TaskEditor from './TaskEditor.jsx';
import reducer from './reducers';
import { indexUrl, addTaskUrl, editTaskUrl } from './constants/appUrls';



const browserHistoryMiddlware = routerMiddleware(browserHistory);
const store = createStore(
                          reducer,
                          composeWithDevTools(applyMiddleware(thunk, browserHistoryMiddlware))
);
const history = syncHistoryWithStore(hashHistory, store);



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={indexUrl} component={App}/>
      <Route path={addTaskUrl} component={TaskCreator}/>
      <Route path= {editTaskUrl + ':id'} component={TaskEditor}/>
    </Router>
  </Provider>,
  document.getElementById('app'));


export default store;
