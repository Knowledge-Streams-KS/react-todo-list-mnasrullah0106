import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Counter from './components/counter.jsx'
import TaskList from './components/taskList/index.jsx'
// import TaskList from './components/taskList/index.jsx'
// import './index.css'
import LiveSearchComponent from './components/search/index.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <Counter value=0/> */}
      <TaskList/>
      <LiveSearchComponent/>
    </React.StrictMode>,
  )

