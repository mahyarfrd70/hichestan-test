import React from 'react';
import ReactDOM from 'react-dom';
import moment from "moment";
import fa from "moment/locale/fa"
import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

moment.locale("fa" , fa)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
