import React, {Suspense, lazy} from 'react'
import {Route, Routes} from 'react-router-dom'
import pMinDelay from 'p-min-delay'
import PageLoader from './components/loader/PageLoader'
import './App.css'

const App: React.FC = () => {

  const DataTable = lazy(() => pMinDelay(import('./views/DataTable'), 500))

  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        <Route path="/" element={<DataTable/>}/>
        <Route path="/table" element={<DataTable/>}/>
        <Route path="/graphic-by-years" element={<DataTable/>}/>
      </Routes>
    </Suspense>
  )
}

export default App
