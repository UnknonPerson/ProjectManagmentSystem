import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between mb-5'>
      <div className=' '>
        <h3>Hello</h3>
        <h1>Tanish 🙌</h1>
      </div>
      <div>
        <button className='bg-red-400 p-2 rounded'>Log Out</button>
      </div>
    </div>
  )
}

export default Header
