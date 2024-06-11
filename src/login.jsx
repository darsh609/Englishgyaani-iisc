import  {useState} from "react";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import {database} from "./firebase";
 
// const auth=getAuth(database);



const Login=()=>{
    // const [email,setEmail]=useState("")
    // const [password,setPassword]=useState("")
    // const createUser=()=>{
    //     createUserWithEmailAndPassword(auth,email,password).then((value)=>alert('success'));

    // };

    return(
        <div className="text-black">
            {/* <h1>SIGN UP HERE </h1>
            <label>
                Ema
            </label>
            <input className="text-black" onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required placeholder="Enter Your Email Here"/>

            
             <label>   
                  Password
         </label>
         <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password"  required placeholder="Enter Your Password Here"/>
         <button onClick={createUser}>
            Signup
         </button> */}


        </div>
    )
}

export default Login;