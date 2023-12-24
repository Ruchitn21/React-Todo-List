'use client'
import React, { useState } from 'react';
import Navbar from "@/Components/navbar";
import Form from "@/Components/form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function page() {
  
  return (
    <>
      <Navbar />
      <Form />
      <ToastContainer />
    </>
  );
}

export default page;