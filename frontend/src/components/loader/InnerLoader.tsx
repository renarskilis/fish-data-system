import React from 'react'
import {PulseLoader} from 'react-spinners'
import './InnerLoader.css'

const InnerLoader: React.FC = () => {
  return (
    <div className='spinner-container'>
      <div className='loading-spinner'>
        <PulseLoader color="#ff5f62"/>
      </div>
    </div>
  )
}

export default InnerLoader
