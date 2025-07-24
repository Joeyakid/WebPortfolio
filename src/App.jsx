import React from 'react'
import Pages from './Static/Pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Pages/>}/>
      </Routes>
      </Router>
      {/* <Pages/> */}
    </div>
  )
}

export default App