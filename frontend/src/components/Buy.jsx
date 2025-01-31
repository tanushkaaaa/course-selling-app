import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {Link, useNavigate, useParams } from 'react-router-dom'

function Buy() {
  const {courseId} = useParams(); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'))
  const token = user?.token;  //using optional chaining to avoid crashing incase token is not there!!!

  const handlePurchase=async()=>{
    if(!token){
      //console.log(user);
      toast.error("Please login to purchase");
      return;
   }
    try {
      setLoading(true);
      const response= await axios.post(`http://localhost:4002/api/v1/course/buy/${courseId}`,{},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, 
        })
        toast.success(response.data.message || "Course Purchased Successfully");
        navigate("/purchases")
        setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error?.response?.status === 400) {
        toast.error("You have already purchased this course");
        navigate("/purchases");
      } else {
        toast.error(error?.response?.data?.errors);
      }
    }
  };
  return (
    <div className='flex h-screen items-center justify-center'>
      <button className= 'bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-800 duration-300' onClick={handlePurchase} disabled={loading}>  {loading ? "Processing..." : "Buy Now"} </button>
      
    </div>
  )
}

export default Buy
