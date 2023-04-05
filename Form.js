import React, { useState } from 'react';
import SubmittedForm from './SubmittedForm';


function Form() {
    const [Name, setName] = useState('');
    const [dest, setdest] = useState('');
    const [res, setres] = useState('');
    const [pass, setpass] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
   const [isValid, setIsValid] = useState(false);
   const [email, setEmail] = useState("");
   const [Valid, setValid] = useState(false);
   const [travelDate, setTravelDate] = useState('');
   const [returnDate, setReturnDate] = useState('');
   const [errorMsg, setErrorMsg] = useState('');

   const validateEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  }

  const handleisChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setValid(validateEmail(inputEmail));
  }

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  }
