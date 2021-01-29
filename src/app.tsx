import React from 'react';
import {Provider} from 'react-redux'
import {storeState} from "./models";
import './app.scss'

interface props {
  children: object
}

const App = ({children}: props) => {
  return <Provider store={storeState}>{children}</Provider>
}

export default App
