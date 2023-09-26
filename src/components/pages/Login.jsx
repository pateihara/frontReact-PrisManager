import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRipple,
  MDBCardImage,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import user_icon from "../../Assets/person.png"
import email_icon from "../../Assets/email.png"
import password_icon from "../../Assets/password.png"

export const Login = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='text' />
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='text' />
        </div>
        </div>
        </div>
  )
}

export default Login;
