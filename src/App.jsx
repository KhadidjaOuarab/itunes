import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Spec1 from './Pages/Spec1'

import store from './store';
import { Provider } from 'react-redux';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Provider store={store}>
        <Spec1 />
      </Provider>
    </div>
  )
}

export default App
