import "./App.css";
import {getDatabase,ref,set} from "firebase/database";
import {database} from "./firebase";
import {useForm} from "react-hook-form";
import Login from "./login";
import React from "react";
import Signin from "./signin";
import Dashboard from "./dashboard";
import Dashboard2 from "./dashboard2";

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
  return (
    <div className="  h-screen overflow-x-hidden bg-purple-300   bg-cover">
    


       <div className="text-4xl text-center ">
        

        <Dashboard2/>

       </div>


      


 
      
      

        </div>
  );
}

export default App;
