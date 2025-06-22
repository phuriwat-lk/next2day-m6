"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassord] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      //       alert(`Username :  ${username}
      // Password : ${password}`);
      showSuccess()
    } else {
      //alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      showAlert()
    }
  };

  const showSuccess = async () => {
    await Swal.fire({
      title: "Status-Login",
      text: `Username :  ${username} , Password : ${password}`,
      icon: "success", // success ,info , error , warning, question
    });
  };
  
  const showAlert = async () => {
    await Swal.fire({
      title: "Status-Login",
      text: "กรุณากรอกข้อมูลให้ครบถ้วน",
      icon: "warning", // success ,info , error , warning, question
    });

}


  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
        <div className="text-xl font-semibold">Sign In to Backoffice</div>
        <div>Username</div>
        <input
          className="border-1 p-2 text-2xl"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>Password</div>
        <input
          className="border-1 p-2 text-2xl"
          type="password"
          onChange={(e) => setPassord(e.target.value)}
        />
        <button className="btn">
          <i className="fa fa-check mr-2"></i>
          Sign-In
        </button>
      </form>
    </>
  );
};
