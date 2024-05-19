import React from 'react'
import  {useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
// import {database} from "./firebase";
// const auth=getAuth(database);

const Signin = () => {
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const signUser=()=>{
//         signInWithEmailAndPassword(auth,email,password).then((value)=>alert('logedd inn'))
//         .catch((err)=>alert('Id not exist'));

//     };

  return (
     <div>
    {/* //     <h1>SIGNIN HERE</h1>
    //     <label>
    //             Email
    //         </label>
    //         <input className="text-black" onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required placeholder="Enter Your Email Here"/>

            
    //          <label>   
    //               Password
    //      </label>
         
    //      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password"  required placeholder="Enter Your Password Here"/>
    
    // <button onClick={signUser}>
    //     signin

    // </button> */}
    </div>
  )
}
export default Signin;
