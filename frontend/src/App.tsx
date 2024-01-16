import React, {Suspense, lazy} from 'react'
import {Route, Routes} from 'react-router-dom'
import pMinDelay from 'p-min-delay'
import PageLoader from './components/loader/PageLoader'
import './App.css'

const App: React.FC = () => {

  const FishesTable = lazy(() => pMinDelay(import('./views/FishesTable'), 500))
  const FishesTableByParameter = lazy(() => pMinDelay(import('./views/FishesTableByParameter'), 500))

  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        <Route path="/" element={<FishesTable/>}/>
        <Route path="/fishes" element={<FishesTable/>}/>
        <Route path="/fishes-by-parameter" element={<FishesTableByParameter/>}/>
      </Routes>
    </Suspense>
  )
}

export default App
