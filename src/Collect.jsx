import React, { useEffect } from 'react'
import  {useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import {database,firebaseApp} from "./firebase";
import state from "./data/state.json"
import gender from "./data/gender.json"
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



//
export const Collect = () => {
    const db=getFirestore()
const storage = getStorage();
useEffect(()=>{
   
    
  },[])
  
    
const[numberofaudios,setnumaudios]=useState([])
const[audioall,setaudioall]=useState([])
const[tempid,settemp]=useState([])
const[sub,setsub]=useState(false)

const[links,setlinks]=useState([])
    

useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("Id-collection"))||[]
    const saveinlocal=async()=>{
        const q=query(collection(db,'users'))
      // console.log("Query....." , q)
      const snapshot=await getDocs(q)
      const data=snapshot.docs?.map((doc,i)=>({
        ...doc.data(),id:doc.id
    
      }))
    
      const x=JSON.stringify(data)
      localStorage.setItem("Id-collection",x)
      const g=JSON.parse(localStorage.getItem("Id-collection"))||[]
    
    
  
    
  
      
      }

    const SavenumAudio=()=>{

        
        state.map((ele)=>{
    
            gender.map((f)=>{
                setaudioall([])
                data.map(async(i)=>{
                    const audio=query(collection(database,`users/${i.id}/subjects`),where('origin','==',ele.name),where('gender','==',f.name))
                    console.log("----------->",ele.name)
                    const audioj=await getDocs(audio)
                    const audiojj=audioj?.docs?.map((doc)=>({
                        id:doc.id
                
                      }))
                      if(audiojj.length>0){
                        setaudioall((prev)=>[...prev,audiojj])
                      }
                      
              })
              console.log("id--->",audioall);
              settemp([])

              const h=audioall.length
          
          for(let i=0;i<h;i++){
          // console.log("checking audioID====>",audioAllData[i],i)
          audioall[i]?.map((ek)=>(
          // g.push(e.id)
          settemp((prev)=>[...prev,ek.id])
          ))
          //data
          // console.log("Data---------->",);
          // data.map((e)=>(
          // ))
          }

          console.log("ele--->",{ele},{f},tempid)
        
            })
            
        
        })
        
    }
saveinlocal()
    SavenumAudio()


},[])






  return (
    <div><button onClick={()=>setsub(true)}> clicl here</button>


Collectttt

    </div>
  )
}
