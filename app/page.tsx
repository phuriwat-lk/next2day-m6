"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [message, setMessage] = useState("Hello");

  const handleCange =() => {
    if (message == "Hello") {
      setMessage("New Value");
    } else {
      setMessage("Hello")
    }
  }

  const showAlert = async () => {
    const button = await Swal.fire({
      title: 'My Alert',
      text:'Hello Sweet Alert',
      icon:'question', // success ,info , error , warning, question
      timer: 3000,
      showConfirmButton:true,
      showCancelButton:true
    })

    if (button.isConfirmed) {
      alert('your confirm')
    }
  }

  return (
    <div className="text-2xl font-bold text-center py-10">
      <div className="my-4">Hello Next.js {message}</div>
      <div>
        <input 
          className="bg-white m-2 p-2 rounded-md  ring-1 shadow-lg hover:ring-2"
          onChange={(e) => setMessage(e.target.value)} />
      </div>
      
      <div>
        <button 
        className="mx-2 bg-blue-400 px-4 py-2 rounded-md hover:bg-blue-600 hover:ring-1 hover:text-white"
        onClick={handleCange}
      >
        Click Me
      </button>

      <button 
      onClick={showAlert} 
      className="mx-2 bg-red-400 px-4 py-2 rounded-md hover:bg-red-600 hover:ring-1 hover:text-white">
          Alert
      </button>
      </div>
        
    </div>
  );
}
