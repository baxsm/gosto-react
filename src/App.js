import React from 'react'
import { Provider } from 'react-redux'
import Pages from './components/home/pages/Pages'
import "./styles/main.scss"
import store from './controller/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Pages />
      </Provider>
    </>
  )
}

export default App