
import "./App.css"
import data from "./data/words.json"
import { Audio2 } from './Audio2';
import {Howl} from "howler"
import 'react-h5-audio-player/lib/styles.css';
import "./App.css"
import { useLocation } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import RingLoader from 'react-spinners/RingLoader'
import { GrSearch } from "react-icons/gr";
import { set } from 'react-hook-form';
export const Filters = (props) => {
    const audioinfo=props.audioinfo
    const malelinks=props.malelinks
    const femalelinks=props.femalelinks
    const [malestimuli,setmalestimuli]=useState([])
    const[femalestimuli,setfemalestimuli]=useState([])


    // const femalestimuli=props.femalestimuli
    // const malestimuli=props.malestimuli
    // const setmalestimuli=props.setmalestimuli
    // const setfemalestimuli=props.setfemalestimuli

    const [filteredinfo,setfilterinfo]=useState([])
    const[testing,settest]=useState([])
    const [filter,setfilters]=useState('')
   const [numbers,setnum]=useState('')
    const numberso=props.numbers
    const setnumo=props.setnumbers
    const [submit,setsubmit]=useState(false)
    // const [malestimuli,setmalestimuli]=useState([])
    // const[femalestimuli,setfemalestimuli]=useState([])
    const navigate=useNavigate();

    
    
    const [loading,setloading]=useState(false)
    // useEffect(()=>{
    //   setloading(false)
    //   setTimeout(()=>{
    //     setloading(false)
    //   },4000)
      
    // },[])
//     useEffect(()=>{
// setnumo(numbers)
//     },[numbers])


   const soundPlay=(src)=>{
        const sound=new Howl({
            src,
            html5:true
        })
        sound.play();
    }


const g=0




    const handler=(event)=>{
        setsubmit(false)
        setfilters(event.target.value)

    }
    

    const onsearch=(searchTerm,nok)=>{
        setsubmit(false)

        setfilters(searchTerm)
        setnum(nok)   
        
      

 
        console.log("idsss----->",nok)    
        // const g= data.find(el=>el.words==filter)
        // if(g==null){

        // }else{
        //     setnum(g.ids)
        //     console.log("numbers--->",numbers)
        // }
// console.log("this is the word------>>>",searchTerm)
console.log(".........",numbers)
    }
    useEffect(()=>{
      
        const fetch=()=>{
          setfemalestimuli([])
             console.log("ALLLLLLL==========",femalestimuli)
          
          femalelinks?.map((ele,i)=>{
                const j=ele
                // console.log("----->",ele)
                if(ele.split('_')[4]==numbers){
                    setfemalestimuli((prev)=>[...prev,ele])
                    
        
                 }
                 else{

                 }
        
               })
              
        }

        fetch();
    },[numbers])





    // useEffect(()=>{
    //     settest(filteredinfo)

    // },[filteredinfo])
    useEffect(()=>{
      const fetch=()=>{
          console.log("ALLLLLLL==========",malelinks)
          setmalestimuli([])
                    malelinks?.map((ele,i)=>{
              const j=ele
              // console.log("----->",ele)
              if(ele.split('_')[4]==numbers){
                
                  setmalestimuli((prev)=>[...prev,ele])
                  
      
               }
      
             })

            //  settest(filteredinfo)
             
            //  console.log("filteredaudio---->",filteredinfo)
      }

      fetch();
  },[numbers])




  return (
    <div className=''>
        <div className=' text-center mb-32 ml-96 text-[#000000] font-extrabold '>
        
        </div>
        <div className='mx-auto '>
        <div className='flex gap-1  '>

<div className='w-full'>
    <label  htmlFor="text" className="      font-bold"></label>
<input type="text" className="filter text-sm md:text-2xl lg:text-3xl h-[2rem] md:h-[3.7rem] lg:h-[4.3rem] w-[20rem] md:w-[29rem] lg:w-[30rem] mx-auto rounded-3xl bg-[#000000]  border-black lg:border-2 md:border-2 border-2" value={filter} onChange={handler} name="fill" id="fill" placeholder='Select Stimuli from dropdown'> 
</input>

</div>
 

<div>
{/* <button onClick={()=>{setsubmit(true)}} className="btno rounded-lg "><GrSearch/></button> */}

</div>




        </div>
           
        <div className='dropdown mx-auto w-[19rem] md:w-[25rem] lg:w-[30rem] rounded-3xl  ' >
                {
                    data.filter((item)=>{const searchTerm=filter.toLowerCase()
                        const ans=item.words.toLowerCase()
                        return( searchTerm && ans.startsWith(searchTerm)&&ans!==searchTerm);
                    }
                ).slice(0,20).map((item,i)=>(
                        <div onClick={()=>onsearch(item.words,item.ids)} className='text-sm md:text-2xl lg:text-3xl text-white dropdown-row px-10'
                        key={i}>
                            {item.words}
                            </div>

                    ))
                }

            </div>



            


            

        </div>









        <div className="w-full  flex-col mt-32 mx-auto ">
        {/* { loading ?<div className='flex-col '><RingLoader color="#9B59B6 "  size={200} className='mx-auto'/> <div>Please wait 
        </div></div>:  */}
        <div className="font-bold">
           <div className='align-middle text-center mx-auto mt-10'>
{/*     
      <button onClick={()=>navigate("/")}
      className={`flex gap-3 mx-auto  rounded-3xl mb-10 text-2xl border-4  border-neutral-600 bg-meutral-400 p-2`}>
         <div className=' font-semibold'>
        GO BACK TO DASHBOARD
        </div> 
        
        <div className=' mt-1'>

        <FaArrowRight /> 

        </div>
               </button> */}


            <div>
            <table className="shadow-lg w-full h-[18rem]  text-base  md:text-2xl lg:text-3xl   font-bold border-collapse bg-[#b7b7b7]">
  <tr className=" border-b-4 border-black">
    <th className="   border-black border-2   font-extrabold">GENDER</th>
    <th className="     border-black border-2   font-extrabold">STIMULI COUNT</th>
    {/* <th className="   bg-teal-100 border-black border-4 text-left px-16 py-4 font-extrabold">NO. OF AUDIOS</th> */}
    <th className="   border-black border-2  font-extrabold">AUDIOS</th>
  </tr>
  <tr
    className=""
    tabIndex="0"
  >
    <td className=" border-black border-2">Male</td>
    <td className=" border-black border-2 ">
      {malestimuli.length}
      </td>
    {/* <td className=" border-black border-4 px-16 py-4">{loading ?<div className='flex-col  text-base'><RingLoader color="#393E46"  size={50} className='mx-auto'/> <div>Fetching Audios
      <br/>
      <div className=" text-xs">
      This May Take A While
      </div>
       
    </div></div>:<div></div>}</td> */}
    <td className=" border-black border-2 "><Link state={numbers}   to='/Stimulimale' className=" underline"> Link</Link></td>
    {/* <td className={` border-black border-4 px-16 py-4  ${maleaudio?"opacity-20 text-2xl":""}`}><button onClick={()=>navigate("/Male")} >Link</button></td> */}
  </tr>
  <tr
   className=""
    tabIndex="0"
  >
    <td className=" border-black border-2 ">Female</td>
    <td className=" border-black border-2">{femalestimuli.length}</td>
    {/* <td className=" border-black border-4 px-16 py-4">{loading ?<div className='flex-col  text-base'><RingLoader color="#393E46"  size={50} className='mx-auto'/> <div>Fetching Audios
      <br/>
      <div className=" text-xs">
      This May Take A While
      </div>
       
    </div></div>:<div></div>}</td> */}
    <td className=" border-black border-2"><Link state={numbers} to='/Stimulifemale' className=" underline"> Link</Link></td>  </tr>
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



  

         </div>    
         

        
           
          <div className="w-full flex flex-wrap  gap-14   justify-evenly    ">
            
            {
                filteredinfo?.map((j,i)=>(
                    <div key={i}>
 
 {/* <AudioPlayer
            
            src={j}
            customAdditionalControls={[]}
            showJumpControls={false}
        
            onPlay={e => console.log("onPlay")}
            // other props here
            className=' mt-11 mb-'
          />  */}
          <div className=" mx-auto flex-col w-[1100px] mt-2  h-80 mb-20   border-purple-700     rounded-full border-[9px]">
          {filter}
          <div className="  mt-44 mb-4">
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

        


        
    </div>





        

      </div>


  )
}
