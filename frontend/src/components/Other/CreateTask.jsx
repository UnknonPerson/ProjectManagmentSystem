import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div>
        <h3>Task Title</h3>
        <input type='text' placeholder='Make a UI design' />

        <h3>Date</h3>
        <input type='date' placeholder='dd/mm/yyyy' />

        <h3>Asigne To</h3>
        <input type='text' placeholder='Employee Name' />

        <h3>Category</h3>
        <input type='text' placeholder='desigine, dev, etc..' />
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
