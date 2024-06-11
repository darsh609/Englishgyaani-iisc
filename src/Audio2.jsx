
import {Howl} from "howler"
import 'react-h5-audio-player/lib/styles.css';
import "./App.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import RingLoader from 'react-spinners/RingLoader'
import AudioPlayer from 'react-h5-audio-player';

import "./styles.css"


export const Audio2 = (props) => {
  const navigate=useNavigate();
    const audioinfo=props.audioinfo
    
    
    const [loading,setloading]=useState(false)
    useEffect(()=>{
      setloading(true)
      setTimeout(()=>{
        setloading(false)
      },3000)
      
    },[])
   const soundPlay=(src)=>{
        const sound=new Howl({
            src,
            html5:true
        })
        sound.play();
    }
    // const j="https://firebasestorage.googleapis.com/v0/b/imprint2024.appspot.com/o/2024%2F03%2F12%2F4V21DgkdCAZ8yuMXz76lB4SBuiC3%2F4V21DgkdCAZ8yuMXz76lB4SBuiC3%2Fenglish%2F_4V21DgkdCAZ8yuMXz76lB4SBuiC3_4V21DgkdCAZ8yuMXz76lB4SBuiC3_english_545_1710243091390.wav?alt=media&token=9f61363a-742b-4aa4-a812-72bf448bdbc5"
  return (
    <div className="w-full mx-auto flex-col ">
        { loading ?<div className='flex-col '><RingLoader color="#9B59B6 "  size={200} className='mx-auto'/> <div>Please wait 
        </div></div>: 
        <div className="font-bold">
           <div className='align-middle text-center mx-auto mt-10'>
    
      <button onClick={()=>navigate("/filters")}
      className={`flex gap-3 mx-auto  rounded-3xl mb-10 text-2xl border-4  border-purple-700 bg-purple-400 p-2`}>
        <div className=' font-semibold'>
        GET Audios By Word/Sentences
        </div>
        
        <div className=' mt-1'>

        <FaArrowRight />

        </div>
               </button>


   {/* <div className='text-center mx-auto '>

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
         

        NUMBER OF AUDIOS- 
           {audioinfo?.length} 
          <div className="w-full flex flex-wrap  gap-14   justify-evenly   mt-24 ">
            
            {
                audioinfo?.map((j,i)=>(
                    <div key={i}>
 
 {/* <AudioPlayer
            
            src={j}
            customAdditionalControls={[]}
            showJumpControls={false}
        
            onPlay={e => console.log("onPlay")}
            // other props here
            className=' mt-11 mb-'
          />  */}
          <div className=" mx-auto flex-col w-[470px] mt-2  h-52 mb-20   border-purple-700     rounded-full border-[9px]">
          AUDIO-{i+1}
          <div className=" mt-20 mb-4">
          <button key={i} onClick={()=>(soundPlay(`${j}`))} class="btn  mb-8">
                    PLAY
        
                </button>
            </div>
          

            </div>

                        

                        </div>
                    

                ))
            }
            </div>



                            </div>

        }


        
    </div>
  )
}
