import React from 'react';
import {Provider} from 'react-redux'
import {store} from "./models";
import './app.scss'

interface props {
  children: object
}

const App = ({children}: props) => {
  return <Provider store={store}>{children}</Provider>
}

export default App
