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
// import "react-svg-map/lib/index.css";
import { SVGMap } from "react-svg-map";
import PropTypes from 'prop-types';
import India from "@svg-maps/india";

// import { CheckboxSVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";

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
  const today = new Date();
  const month = today.getMonth() + 1;

  const year = today.getFullYear();
  const date = today.getDate();
  
  const statet=props.statet
  const setappliedmt=props.setappliedmt
 const appliedmothertounge = props.appliedmothertounge 
  const setstate=props.setstate
  const male=props.male
  const female=props.female
  const setmale=props.setmale
  const setfemale=props.setfemale
  const[isselected,setlanguage]=useState(false)
  const [stateName,setStateName]=useState('')

  const[mother,setmother]=useState(new Set())
  const[motherarray,setmotherarray]=useState([])
  

  const onLocationClick = (event) => {
      setstate(event.target.getAttribute("name"));
      console.log("Name", event.target.getAttribute("name"));
    };


  const navigate=useNavigate();
 
const[locall,setlocal]=useState([])
  const db=getFirestore()
  const storage = getStorage();

  // useEffect(()=>{
  //   const savelinksinlocal=()=>{
  //     const data=JSON.parse(localStorage.getItem(`${month}/${date}/${year}`))||[]
  //     data?.map((filename)=>{
  //             setlocal([])
  //       for(let y=2024;y>=2023;y--){
  //           for(let i=1;i<=12;i++){
  //               i=i.toString()
  //               y=y.toString()
  //               if(i<10){
  //               for(let j=1;j<=31;j++){
  //                 j=j.toString()
  //                 if(j<10){

  //                   listAll(ref( storage, `${y}/${`0`+i}/${`0`+j}/${filename.id}/${filename.id}/english` ))
  //                   .then( (url) => 
  //                     // console.log( "Got download url: ", url.items );
  //                     // rough.push(url.items)
  //                     url.items.forEach((x)=>{
  //                       getDownloadURL(x).then((fetch)=>{
  //                         setlocal((prev)=>[...prev,fetch])
            
                          
  //                       })                
            
  //               })
  //                       )
                      
                     
                            
    
  //                 }
  //                 else{
  //                   listAll(ref( storage, `${y}/${`0`+i}/${j}/${filename.id}/${filename.id}/english` ))
  //                   .then( (url) => 
  //                     // console.log( "Got download url: ", url.items );
  //                     // rough.push(url.items)
  //                     url.items.forEach((x)=>{
  //                       getDownloadURL(x).then((fetch)=>{
  //                          setlocal((prev)=>[...prev,fetch])
            
                          
  //                       })                
            
  //               })
  //                       )
                      
                        
  //                 }
    
    
                 
    
    
  //               }
    
                
  //               }
    
    
  //               else{
  //                 /////////////////////////
  //                 for(let j=1;j<=31;j++){
  //                   j=j.toString()
  //                   if(j<10){
  //                     listAll(ref( storage, `${y}/${i}/${`0`+j}/${filename.id}/${filename.id}/english` ))
  //                     .then( (url) => 
  //                       // console.log( "Got download url: ", url.items );
  //                       // rough.push(url.items)
  //                       url.items.forEach((x)=>{
  //                         getDownloadURL(x).then((fetch)=>{
  //                           setlocal((prev)=>[...prev,fetch])              
                            
  //                         })                
              
  //                 })
  //                         )
                        
                          
    
    
  //                   }
  //                   else{
  //                     listAll(ref( storage, `${y}/${i}/${j}/${filename.id}/${filename.id}/english` ))
  //                     .then( (url) => 
  //                       // console.log( "Got download url: ", url.items );
  //                       // rough.push(url.items)
  //                       url.items.forEach((x)=>{
  //                         getDownloadURL(x).then((fetch)=>{
  //                           setlocal((prev)=>[...prev,fetch])
              
                            
  //                         })                
              
  //                 })
  //                         )
                        
    
  //                   }
    
    
                   
    
    
  //                 }
                  
                  
  //               }
    
  //             }
    
    
  //       }
  //       console.log("--->",{filename})
  //       localStorage.setItem(`${filename.id}`,locall)

          
        
    
    
  //       })

  //   }
  //   savelinksinlocal()
  // },[])

  useEffect(()=>{
   const changetoarray=()=>{
      setmotherarray([...mother])

    }
    changetoarray()
  },[mother])

  useEffect(()=>{
    const saveinlocal=async()=>{
      const q=query(collection(db,'users'))
    // console.log("Query....." , q)
    const snapshot=await getDocs(q)
    const data=snapshot.docs?.map((doc,i)=>({
      ...doc.data(),id:doc.id
  

    }))


console.log("orignial data---->",data)
  
    const x=JSON.stringify(data)
    localStorage.setItem(`${date}/${month}/${year}`,x)
    //setValue//
    // const g=JSON.parse(localStorage.getItem("SavedAllId"))||[]
  
  // setallid(g)
  
  // const rough=[]
    
    }
    saveinlocal();
  },[date])

  //add date here

const getlang=()=>{
  const data=JSON.parse(localStorage.getItem(`${date}/${month}/${year}`))||[]
  /////

setmotherarray([])
  setmother([])
  setappliedmt('')
  data.map((e)=>{
    if(e.origin==statet){
      // console.log("true??------>",mother)
      
        // setmother((prev)=>prev.filter((exs)=>exs !==e.mt))
        console.log("Mother Tounge of e-->",e)
        setmother((prev)=>new Set([e.mt,...prev]))
        // setmotherarray([...mother])
    }
  }
)
// mother.filter((v,i)=> mother.indexOf(v) === i)
// let uh=[...new Set(mother)]

console.log("Mother0----->", motherarray)



}
  useEffect(()=>{

    const data=JSON.parse(localStorage.getItem(`${date}/${month}/${year}`))||[]
    //////////////////
    console.log("data---->",data)
    // const g=statet?data.find((e)=>e.origin==statet):''
    // console.log("g--->",g)
    const getrequireid=()=>{
      setmale([])
      setfemale([])
      
       
    
  data.map((e)=>{
        
        
    if(e.origin==statet && e.gender=="male"){
      console.log("")
      setmale((prev)=>[...prev,e.id])
      // if(mother.includes(e.mt)){
      //   setmother((prev)=>prev.filter((exs)=>exs !==e.mt))
      // }
      // else{
      //   setmother((prev)=>[...prev,e.mt])
      

      // }
      



    }
    else if(e.origin==statet && e.gender=="female"){
      setfemale((prev)=>[...prev,e.id])
      // if(mother.includes(e.mt)){
      //   setmother((prev)=>prev.filter((exs)=>exs !==e.mt))
      // }
      // else{
      //   setmother((prev)=>[...prev,e.mt])
      console.log("Mother Tounge of e--3-->",e.moth)

      // }

    }

  }
  

)


      
     
      console.log("--->langaue-->",mother)
      console.log("female---->",female)
  

    }

    getrequireid()
    getlang()


  },[statet]
)

useEffect(()=>{
  if(appliedmothertounge){
    setlanguage(true)
  }
})

//
const getaudiobylanguage=((e)=>{
  setappliedmt(e.target.value)

  console.log("setappliedmt-->",appliedmothertounge)
  // navigate("/Table")
//  navigate("/Table")
})
//
useEffect(()=>{
  setmale([])
  setfemale([])
  const data=JSON.parse(localStorage.getItem(`${date}/${month}/${year}`))||[]
  ////////////////////////////////////////////////////////
const fun=()=>{

  data.map((e)=>{
        
        
    if(e.origin==statet && e.gender=="male" &&e.mt==appliedmothertounge){
      console.log("")
      setmale((prev)=>[...prev,e.id])
      // if(mother.includes(e.mt)){
      //   setmother((prev)=>prev.filter((exs)=>exs !==e.mt))
      // }
      // else{
      //   setmother((prev)=>[...prev,e.mt])
      

      // }
      



    }
    else if(e.origin==statet && e.gender=="female"&&e.mt==appliedmothertounge){
      setfemale((prev)=>[...prev,e.id])
      // if(mother.includes(e.mt)){
      //   setmother((prev)=>prev.filter((exs)=>exs !==e.mt))
      // }
      // else{
      //   setmother((prev)=>[...prev,e.mt])
      console.log("Mother Tounge of e--3-->",e.moth)

      // }

    }

  }
  

)


}

fun()
},[appliedmothertounge])




    
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
    <div className=' text-[#000000]'>

<div className=' text-[#000000] mt-[7rem] flex flex-row flex-wrap  justify-evenly  '>






{/* ṃap */}

{/* //see hereeeeeee */}

           <div className='lg:w-[43rem] md:w-[34rem] w-[20rem]'>
        <SVGMap map={India} onLocationClick={onLocationClick} 
 className={` svg-map`}/>
        
        </div>


{/* content */}
        <div className='flex  flex-wrap gap-[4rem]  flex-col justify-evenly'>
          
{/* state */}
        <div className=' flex flex-col justify-between '>
        <h3 className=" lg:text-[2.9rem] md:text-[2.3rem] sm:[1.4rem] font-serif font-bold display-2 mb-[1rem]">{statet}</h3>

        <div className=' align-middle text-center mx-auto '>
    {
      isselected?<div></div>:

       <button onClick={()=>navigate("/Table")}
      className={` gap-3 flex flex-row mx-auto  rounded-3xl    border-2  border-[#000000] ${statet ? " bg-[#8c8c8c] " : " bg-[#8c8c8c] opacity-0" }  p-2`}>
        <div className=' font-semibold lg:text-[1.4rem]  text-[1.1rem]  '>
        GET ALL AUDIO
        </div>
        
        <div className=''>

        <FaArrowRight />

        </div>
               </button>
    }
     

         </div>    
        </div>


  
  {/* //mother tougne */}
  <div className=''>
    {
      motherarray.length>0?
      <div className='flex flex-col justify-between'>
        <div className=' font-semibold border-4 border-b-black lg:text-[2rem] text-[1.4rem] mb-[1rem] '>Get By Mother Tounge:-</div>
      
      {}

<select
              type="text"
              name="statet"
              id="statet"
              placeholder="Select Your State"
              value={appliedmothertounge}
              onChange={(events)=>getaudiobylanguage(events)} 
              defaultValue="none"
              
              required

              className="  rounded-3xl mb-[1rem] border-2 lg:text-[2rem] text-[1.6rem]  border-[#000000]  p-4"

            >
              <option disabled={true} className='font-semibold' value="">
          --Choose Language--
        </option>
              {motherarray?.map((ele,i) => {
                return (
                  <option value={ele} key={i} className='font-semibold'>
                    {ele}
                  </option>
                )
              })}
            </select>
            <div className=' '>
            {
              isselected?<button onClick={()=>navigate("/Table")}
              className={`  gap-3 flex flex-row mx-auto  rounded-3xl   bg-[#8c8c8c]  lg:text-[1.8rem] md:text-[1.4rem] text-[1.3rem] border-2  border-[#000000] ${statet ? " bg-[#8c8c8c]" : " bg-[#8c8c8c]opacity-0" }  p-2`}>
                <div className=' font-semibold'>
                GET AUDIO
                </div>
                
                <div className=' mt-1'>
        
                <FaArrowRight />
        
                </div>
                       </button>:<div></div>
            }
              </div>



        </div>:<div>
          </div>
        

    }
    
  </div>
        
        

        
       
        
           </div>






</div>
    </div>
  )
}
