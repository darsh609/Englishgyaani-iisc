import "./App.css";
import {getDatabase,ref,set} from "firebase/database";
import {database} from "./firebase";
import {useForm} from "react-hook-form";
import Login from "./login";
import React from "react";
import Signin from "./signin";
import Dashboard from "./dashboard";
import Dashboard2 from "./dashboard2";
import {Route,Routes} from "react-router-dom"
import { Filters } from "./Filters";
import { useState } from "react";
// const db=getDatabase(database);



function App() {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: {errors, isSubmitSuccessful}
  // } = useForm();
  // const putData=()=>{
  //   set(ref(db,"users/piyush"),{
  //     id:1,
  //     name:"Piyush",
  //     age:21,
  //   })
  // }
  // const submit=(data)=>{
  //   set(ref(db,"iisc/dashboard"),{
  //     data

  //   })
  // }
  const[audioinfo,setaudioinfo]=useState([]);
  return (
    <div className="  h-screen overflow-x-hidden bg-purple-300   bg-cover">
    


       <div className="text-4xl text-center ">
       <Routes>
       <Route path="/" element={<Dashboard2 audioinfo={audioinfo}  setaudioinfo={setaudioinfo}/>}/>
          <Route path="filters" element={<Filters audioinfo={audioinfo}  setaudioinfo={setaudioinfo}/>}/>
        </Routes>



        

       
        

       </div>



      

 
      
      

        </div>
  );
}

export default App;
