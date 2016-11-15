import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Results from './results';
import Error from './error';
import {Provider} from 'react-redux';
import store from './store';
import { syncHistoryWithStore} from 'react-router-redux';
import { Router, Route, hashHistory } from 'react-router';

const history = syncHistoryWithStore(hashHistory, store)
var routes = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
			  <Route path="/address" component={Results} />
			  <Route path="/error" component={Error} />
			</Route>
		  </Router>
	</Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
