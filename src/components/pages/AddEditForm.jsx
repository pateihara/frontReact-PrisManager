// src/components/AddEditForm.js
import React, { useState } from 'react';
import '../../css/AddEditForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faSave } from '@fortawesome/free-solid-svg-icons';
//import request.register 
function AddEditForm({ isOpen, onClose, onSave, data = {} }) {
  const [formData, setFormData] = useState(data);
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const endpoint = 'https://prismanager-back-end-5y3x7xfa2-pateiharas-projects.vercel.app/users/';

    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    try {
      
      const response = await fetch(endpoint, requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      
      onSave(data);

      
      onClose();
    } catch (error) {
      
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleCancel = () => {
    onClose();
  };
  
  return (
    isOpen && (
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <label>Nome:
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </label>
          <label>E-mail:
            <input
              type="text"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
          </label>
          <label>Senha:
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
          </label>
          <div className='form-buttons'>
            <button
              type='submit'
            >
              <FontAwesomeIcon
                icon={faSave}
              />
                Salvar
            </button>
            <button
              type="button"
              onClick={handleCancel}
            >
              <FontAwesomeIcon
                icon={faCancel}
              />
                Cancelar
            </button>
          </div>
        </form>
      </div>
    )
    );
  }
  
  export default AddEditForm;