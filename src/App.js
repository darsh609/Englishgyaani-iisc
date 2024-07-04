import "./App.css";
import {getDatabase,ref,set} from "firebase/database";
import {database} from "./firebase";
import {useForm} from "react-hook-form";
// import Login from "./login";
import React from "react";
// import Signin from "./signin";
// import Dashboard from "./dashboard";
import Dashboard2 from "./dashboard2";
import {Route,Routes} from "react-router-dom"
import { Filters } from "./Filters";
import { useState } from "react";
// import India from "./india";
import { Home } from "./Home";
import { Collect } from "./Collect";
import { Table } from "./Table";
import { Tablemale } from "./Tablemale";
import { Tablefemale } from "./Tablefemale";
import { Stimulifemale } from "./Stimulifemale";
import { Stimulimale } from "./Stimulimale";
// import { Map } from "./Map";

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
  const[statet,setstate]=useState('')
  const [male,setmale]=useState([])
  const [female,setfemale]=useState([])
  const [malelinks,setmalelinks]=useState([])
  const [femalelinks,setfemalelinks]=useState([])

  const [malestimuli,setmalestimuli]=useState([])
    const[femalestimuli,setfemalestimuli]=useState([])
    const [appliedmothertounge,setappliedmt]=useState('')
    const [numbers,setnumbers]=useState('')

  return (
    <div className="  h-screen overflow-x-hidden  bg-cover   bg-slate-500">
      <div className="md:text-[1.7rem] lg:text-[2rem] text-[1.4rem] font-bold  ">
       English Gyaani Audio Fetching Dashboard
      </div>
    


       <div className="text-[1.8rem] text-center ">
       <Routes>
       {/* <Route path="/Dashboard2" element={<Dashboard2 audioinfo={audioinfo}  setaudioinfo={setaudioinfo}/>}/>
          <Route path="filters" element={<Filters audioinfo={audioinfo}  setaudioinfo={setaudioinfo} malestimuli={malestimuli} setmalestimuli={setmalestimuli}
          femalestimuli={femalestimuli} setfemalestimuli={setfemalestimuli} numbers={numbers} setnumbers={setnumbers}/>}/>
          

          
          <Route path="collect" element={<Collect/>}/> */}



          <Route path="/" element={<Home statet={statet} setstate={setstate} setfemalelinks={setfemalelinks} setappliedmt={setappliedmt} appliedmothertounge={appliedmothertounge}  male={male} setmale={setmale} female={female} setfemale={setfemale}/>}/>
          <Route path="Table" element={<Table malelinks={malelinks} setappliedmt={setappliedmt} appliedmothertounge={appliedmothertounge}  setfemalelinks={setfemalelinks} setmalelinks={setmalelinks} femalelinks={femalelinks} statet={statet} setstate={setstate} female={female} setfemale={setfemale} male={male} setmale={setmale}/>}/>
          <Route path="Female" element={<Tablefemale setappliedmt={setappliedmt} appliedmothertounge={appliedmothertounge}  malelinks={malelinks} setfemalelinks={setfemalelinks} setmalelinks={setmalelinks} femalelinks={femalelinks}  statet={statet} setstate={setstate} female={female} setfemale={setfemale} male={male} setmale={setmale}/>}/>
          <Route path="Male" element={<Tablemale setappliedmt={setappliedmt} appliedmothertounge={appliedmothertounge}  malelinks={malelinks} setfemalelinks={setfemalelinks} setmalelinks={setmalelinks} femalelinks={femalelinks}  statet={statet} setstate={setstate} female={female} setfemale={setfemale} male={male} setmale={setmale}/>}/>
          <Route path="Stimulifemale" element={<Stimulifemale statet={statet} setstate={setstate} setappliedmt={setappliedmt} appliedmothertounge={appliedmothertounge}  malestimuli={malestimuli} setmalestimuli={setmalestimuli}
          femalestimuli={femalestimuli} setfemalestimuli={setfemalestimuli} femalelinks={femalelinks} numbers={numbers}/>}/>
          <Route path="Stimulimale" element={<Stimulimale statet={statet} setstate={setstate} setappliedmt={setappliedmt} appliedmothertounge={appliedmothertounge}  malestimuli={malestimuli} setmalestimuli={setmalestimuli}
          femalestimuli={femalestimuli} setfemalestimuli={setfemalestimuli} numbers={numbers} malelinks={malelinks} setnumbers={setnumbers}/>}/>
{/* <Route path="/Map" element={<Map/>} /> */}
        </Routes>



        

       
        

       </div>



      

 
      
      

        </div>
  );
}

export default App;
