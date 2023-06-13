import React, { useState } from 'react';
import './Edit.css'
import axios from 'axios';

const Edit = () => {
  const [title, setTitle] = useState(''); 
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = async (e) => { 
    e.preventDefault(); 

    const formData = new FormData();
    formData.append('title', title);
    formData.append('location', location);
    formData.append('description', description);
   

    await axios.post('http://localhost:7000/api/post', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  


  return (
    <div className='form-container'>  
      <h1 className='form-title'>Add New Destination</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title' className='form-label'>Title</label>
          <input
            type='text'
            id='title'
            className='form-input'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>    
<div className='form-group'>
<label htmlFor='location' className='form-label'>Location</label>
<input
type='text'
id='location'
className='form-input'
value={location}
onChange={(event) => setLocation(event.target.value)}
required
/>
</div>
<div className='form-group'>
<label htmlFor='description' className='form-label'>Description</label>
<input
type='text'
id='description'
className='form-input'
value={description}
onChange={(event) => setDescription(event.target.value)}
required
/>
</div>
<button type='submit' className='form-btn'>Save Changes</button>
</form>
</div>
);
};

export default Edit;