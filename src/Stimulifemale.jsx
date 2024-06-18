
import { Audio2 } from './Audio2';
import {Howl} from "howler"
import { useLocation } from 'react-router-dom';
import 'react-h5-audio-player/lib/styles.css';
import "./App.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import RingLoader from 'react-spinners/RingLoader'
import { GrSearch } from "react-icons/gr";
import { set } from 'react-hook-form';
import data from "./data/words.json"
export const Stimulifemale = (props) => {
    // const femalestimuli=props.femalestimuli
    
    const location = useLocation();
    const numbers=location.state
    // const numbers=number.num
    // const filter=location.filter

    console.log("female----")
    console.log("--->",numbers)
    // const setnum=props.setnumbers
    const [malestimuli,setmalestimuli]=useState([])
    const[femalestimuli,setfemalestimuli]=useState([])
    const[word,setword]=useState(data.find(el=>el.ids==numbers).words)

    // const malestimuli=props.malestimuli
    // const setmalestimuli=props.setmalestimuli
    // const setfemalestimuli=props.setfemalestimuli
    const femalelinks=props.femalelinks
    useEffect(()=>{
        const fetch=()=>{
            console.log("ALLLLLLL==========",femalelinks)
            setfemalestimuli([])
                      femalelinks?.map((ele,i)=>{
                const j=ele
                // console.log("----->",ele)
                if(ele.split('_')[4]==numbers){
                  
                    setfemalestimuli((prev)=>[...prev,ele])
                    
        
                 }
        
               })
  
              //  settest(filteredinfo)
               
              //  console.log("filteredaudio---->",filteredinfo)
        }
  
        fetch();
    },[numbers])

  return (
    <div>
              <div className="ml-[530px]">
                <div className='text-4xl font-bold mr-96 mb-40'>
                
                    {word}-{numbers}
                

                </div>
            <table className="shadow-lg text-4xl  font-bold border-collapse bg-slate-600">
  <tr className=" border-b-8 border-black">
    <th className="  bg-teal-100  border-black border-4 text-left px-16 py-4  font-extrabold">GENDER</th>
    <th className="   bg-teal-100  border-black border-4 text-left px-16 py-4 font-extrabold">STIMULI COUNT</th>
    {/* <th className="   bg-teal-100 border-black border-4 text-left px-16 py-4 font-extrabold">NO. OF AUDIOS</th> */}
    {/* <th className="  bg-teal-100 border-black border-4 text-left px-16 py-4 font-extrabold">AUDIOS</th> */}
  </tr>
  <tr
    className=""
    tabIndex="0"
  >
    <td className=" border-black border-4 px-16 py-4">Female</td>
    <td className=" border-black border-4 px-16 py-4">{femalestimuli.length}</td>
    {/* <td className=" border-black border-4 px-16 py-4">{loading ?<div className='flex-col  text-base'><RingLoader color="#393E46"  size={50} className='mx-auto'/> <div>Fetching Audios
      <br/>
      <div className=" text-xs">
      This May Take A While
      </div>
       
    </div></div>:<div></div>}</td> */}
    {/* <td className=" border-black border-4 px-16 py-4"><Link to='/Male' className=" underline"> Link</Link></td> */}
    {/* <td className={` border-black border-4 px-16 py-4  ${maleaudio?"opacity-20 text-2xl":""}`}><button onClick={()=>navigate("/Male")} >Link</button></td> */}
  </tr>
  
  {/* <tr
    class="hover:bg-gray-50 focus:bg-gray-300 active:bg-red-200"
    tabindex="0"
  >
    <td class="border px-8 py-4">Ernst Handel</td>
    <td class="border px-8 py-4">Maggie O'Neill</td>
    <td class="border px-8 py-4">Austria</td>
  </tr> */}
</table>

              </div>   

              <div>
                <Audio2 audioinfo={femalestimuli}/>
              </div>



    </div>

  )
}
