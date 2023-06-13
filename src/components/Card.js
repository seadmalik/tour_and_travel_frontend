import React, { useState } from 'react'
import './Card.css'


function Card({ title, country, description, imageSrc }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newCountry, setNewCountry] = useState(country);
  const [newDescription, setNewDescription] = useState(description);
  const [newImageSrc, setNewImageSrc] = useState(imageSrc);



  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleSaveClick = () => {
    // TODO: Save the updated card data to your backend or local storage
    setIsEditing(false);
  }

  const handleCancelClick = () => {
    // TODO: Reset the form and discard any changes
    setIsEditing(false);
  }
  
  if (isEditing) {
    return (
      <div className='card-holder'>
        <div>
          <input className='input-field' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <input className='input-field' value={newCountry} onChange={(e) => setNewCountry(e.target.value)} />
          <textarea className='input-field' value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
          <input className='input-field' value={newImageSrc} onChange={(e) => setNewImageSrc(e.target.value)} />
          <div className="button-container">
            <button className='save-button' onClick={handleSaveClick}>Save</button>
            <button className='cancel-button' onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className='card-holder'>
        <div>
          <img className='img-holder' src={imageSrc} alt={title}/>
          <div className='overlay'>
            <h2 className='title'>{title},{country}</h2>
            <p className='description'>{description}</p>
          </div>
          <div className="EditBut col row">
            <button className='edit' onClick={handleEditClick}>Edit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card