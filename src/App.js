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
    <div className="w-full h-full">
      <div>
 {/* <div className="w-80 h-full mx-auto caret-lime-900 text-2xl ">
      Dashboard
      <button  onClick={putData}>
        put-data
      </button>


{/* 

      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="gender">
          Gender
          </label>
          <select
                            name='gender'
                            id="gender"
                            className='bg-yellow-50 w-[80px]'
                            {...register("gender",{required:true})}
                        >
                            
                                
                                    
                                        <option>
                                            Male
                                        </option>
                                        
                                        <option>
                                            FeMale
                                        </option>
                                        
                                        <option>
                                            Other
                                        </option>
                                    
              
                        </select>
          


        


      </form> */}

      {/* <Login/>
      <Signin/>
      <br>
      </br>
      <br>
      </br>

       */}
      </div>
       
{/*      
       <div className=" mt-8">

        <Dashboard/> 
       </div> */}

       <div className="mt-8 text-4xl text-center">
        
{/* <div className="">
  <h1>Doubts</h1>
  
  <li>using anonymus - in which the fieldsare there, I fetched some ids </li>
  <li>
    by using ida we can fetch the audio links
  </li>
  <li>
    now the problem comes --since in the cloud storage there are number of folders,
    we have to make a number of permutations of every type and then apply the logic.
    
  </li>
  <li>
    Also I m getting problem in fetching on applying map function from cloud storage
  </li>
  <li>Not able to get link from the data fetched using id from cloud\
    
  </li>

  <li className="  mt-32 text-4xl text-amber-900">
    <li>
      NOT WORKING ON CLICK

      //FORM
    </li>
    <li>
      ON MULTIPLE CLICKS MULTIPLE TIME SAVE

      //form
    </li>
    <li>
      HOW TO USE LINK TO GET AUDIOS
    </li>

    <li>make fields in the database ,Either it is not possible to fetch ids by using query</li>

    <li>
      CLOUD STORAGE HAS NUMBER OF FOLDERS
    </li>
    <li>
      applyimg map function on cloud
    </li>
    <li>
      NOT ABLE TO SHOW LINKS ON FRONTEND-LINE 576 Dashboard2

    </li>
    <li>
      HOW TO SAVE USESTATE ARRAY WHILE LOOP
    </li>

  </li>

</div> */}

        <Dashboard2/>

       </div>


      


 
      
      

        </div>
  );
}

export default App;
