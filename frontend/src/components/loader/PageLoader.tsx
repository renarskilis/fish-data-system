import React from 'react'
import './PageLoader.css'

const PageLoader: React.FC = () => {
  return (
    <div className='overlay'>
      <div className='loading-spinner'>
        <span className="loader"></span>
      </div>
    </div>
  )
}

export default PageLoader
