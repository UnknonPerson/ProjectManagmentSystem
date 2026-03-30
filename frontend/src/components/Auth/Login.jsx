import React from 'react'

const Login = () => {
  return (
    <div className=''>
      <div>
        <form>
            <input required className='outline-none bg-transparent rounded-full px-6 py-2 text-lg border-2 border-emerald-600 font-medium placeholder:text-gray-400' type='email' placeholder='Enter Your Email' />
            <input required className='outline-none bg-transparent rounded-full px-6 py-2 text-lg border-2 border-emerald-600 font-medium placeholder:text-gray-400' type='password' placeholder='Enter Your password' />
            <button className='mt-7 text-white border-none outline-none hover:bg-emerald-600 text-lg py-2 px-8 w-full placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
