import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './Reducers/reducers'
import { BrowserRouter } from "react-router-dom";


const myStore = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
