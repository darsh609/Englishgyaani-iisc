import React from 'react'
import  {useState,useEffect} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import {database,firebaseApp} from "./firebase";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import state from "./data/state.json"
import gender from "./data/gender.json"
import { Audio } from './Audio';
import { FaArrowRight } from "react-icons/fa";
import { Audio2 } from './Audio2';

import India from "@svg-maps/india";

import { CheckboxSVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

// Create a reference with an initial file path and name

// import firebase from "firebase/app"
// import "firebase/storage"
// import db from './firebase'
import{
    collection,
    getDocs,
    query,
    where,
    getDoc,
    getFirestore,
    onSnapshot,limit

} from 'firebase/firestore'
import { Table } from './Table';



export const Home = (props) => {
  const statet=props.statet
  const setstate=props.setstate
  const male=props.male
  const female=props.female
  const setmale=props.setmale
  const setfemale=props.setfemale

  const navigate=useNavigate();
 

  const db=getFirestore()
  const storage = getStorage();
useEffect(()=>{
  const allids=JSON.parse(localStorage.getItem("SavedAllId"))||[]

  allids.map((ele)=>({

  }

  ))

})







  
  useEffect(()=>{
    const saveinlocal=async()=>{
      const q=query(collection(db,'users'))
    // console.log("Query....." , q)
    const snapshot=await getDocs(q)
    const data=snapshot.docs?.map((doc,i)=>({
      ...doc.data(),id:doc.id
  
    }))
  
    const x=JSON.stringify(data)
    localStorage.setItem("SavedAllId",x)
    // const g=JSON.parse(localStorage.getItem("SavedAllId"))||[]
  
  
  // setallid(g)
  
  // const rough=[]
    
    }
    saveinlocal();
  },[])

  useEffect(()=>{

    const data=JSON.parse(localStorage.getItem("SavedAllId"))||[]
    console.log("data---->",data)
    // const g=statet?data.find((e)=>e.origin==statet):''
    // console.log("g--->",g)
    const getrequireid=()=>{
      setmale([])
      setfemale([])


      data.map((e)=>{
        if(e.origin==statet && e.gender=="male"){
          setmale((prev)=>[...prev,e.id])
  
  
        }
        else if(e.origin==statet && e.gender=="female"){
          setfemale((prev)=>[...prev,e.id])

        }
  
      })

      console.log("male---->",male)
      console.log("female---->",female)
  

    }

    getrequireid()
    


  },[statet]
)




    
    const[chang,setchang]=useState(false)
    const handle=(event)=>{
        // console.log("TTTThandle--1",filters);
        setchang(false)
        // let inputs={[event.target.name]:event.target.value}
        setstate(event.target.value)
        console.log(statet)
        // console.log("FILTERS APPLIED",filters);
      
      
      }
  return (
    <div>

<div>
<div className='w-[full] h-[full]'>
        
        <select
              type="text"
              name="state"
              id="state"
              placeholder="Select Your State"
              value={statet}
              onChange={(events)=>handle(events)} 
              defaultValue="none"
              
              required

              className="  rounded-3xl  border-4  border-slate-900  p-2"

            >
              <option disabled={true} value="">
          --Choose State--
        </option>
              {state.map((ele) => {
                return (
                  <option value={ele.name} key={ele.key}>
                    {ele.name}
                  </option>
                )
              })}
            </select>


          </div>



          <div className='align-middle text-center mx-auto mt-10'>
    
      <button onClick={()=>navigate("/Table")}
      className={`flex gap-3 mx-auto  rounded-3xl  text-2xl border-4  border-slate-600 ${chang ? " bg-slate-600 opacity-0" : " bg-slate-400" }  p-2`}>
        <div className=' font-semibold'>
        GET AUDIO
        </div>
        
        <div className=' mt-1'>

        <FaArrowRight />

        </div>
               </button>

{/* 
   <div className='text-center mx-auto '>

            {
              
            audioId?.map((student, index) => (
            
                
                <div className='border  border-amber-500  text-3xl' key={index}>{student}</div>
              
            ))
            }
  
</div> */}

{/* <div>
  {
    audioId?.map((ab,i)=>(
      <h1 key={i}>{ab.id}</h1>
    ))
  }
</div> */}
{/* <div className=' text-teal-500'>
  LINKS
</div> */}

  

         </div>    
{/* 
         <div>
          {
           chang? <Table/>:<div>Select from the dropdown </div>
            
          }
         </div> */}






</div>
    </div>
  )
}
