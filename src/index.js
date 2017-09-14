import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);

// export default connect(
//     mapStateToProps, // specifies the state you want to expose to the component
//     mapDispatchToProps // specifies the actions you want to expose
// )(AuthorPage);