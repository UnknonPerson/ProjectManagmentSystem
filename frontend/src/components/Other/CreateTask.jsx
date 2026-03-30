import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-[#1c1c1c] flex p-5 items-center justify-between h-[45%]'>
      <div className='flex flex-col'>
        <h3>Task Title</h3>
        <input type='text' placeholder='Make a UI design' className='border-white'/>

        <h3>Date</h3>
        <input type='date' placeholder='dd/mm/yyyy' className='border-white'/>

        <h3>Asigne To</h3>
        <input type='text' placeholder='Employee Name' className='border-white' />

        <h3>Category</h3>
        <input type='text' placeholder='desigine, dev, etc..' className='border-white'/>
      </div>

      <div>
        <h3>Description</h3>
        <textarea name='description' placeholder='Description' />
        <input type='submit' placeholder='Create Task' />
      </div>
    </div>
  )
}

export default CreateTask
