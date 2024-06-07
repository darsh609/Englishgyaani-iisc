
import "./App.css"
import data from "./data/words.json"
import { Audio2 } from './Audio2';
import {Howl} from "howler"
import 'react-h5-audio-player/lib/styles.css';
import "./App.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import RingLoader from 'react-spinners/RingLoader'
import { GrSearch } from "react-icons/gr";
import { set } from 'react-hook-form';
export const Filters = (props) => {
    const audioinfo=props.audioinfo
    const [filteredinfo,setfilterinfo]=useState([])
    const[testing,settest]=useState([])
    const [filter,setfilters]=useState('')
    const [numbers,setnum]=useState('')
    const [submit,setsubmit]=useState(false)
    const navigate=useNavigate();

    
    
    const [loading,setloading]=useState(false)
    useEffect(()=>{
      setloading(true)
      setTimeout(()=>{
        setloading(false)
      },4000)
      
    },[])
   const soundPlay=(src)=>{
        const sound=new Howl({
            src,
            html5:true
        })
        sound.play();
    }







    const handler=(event)=>{
        setsubmit(false)
        setfilters(event.target.value)

    }
    

    const onsearch=(searchTerm,nok)=>{
        setsubmit(false)

        setfilters(searchTerm)
        setnum(nok)        
        // const g= data.find(el=>el.words==filter)
        // if(g==null){

        // }else{
        //     setnum(g.ids)
        //     console.log("numbers--->",numbers)
        // }
console.log("this is the word------>>>",searchTerm)
console.log(".........",numbers)
    }
    useEffect(()=>{
        const fetch=()=>{
            console.log("ALLLLLLLLLLLL===========",audioinfo)
            setfilterinfo([])
            audioinfo?.map((ele,i)=>{
                const j=ele
                // console.log("----->",ele)
                if(ele.split('_')[4]==numbers){
                    setfilterinfo((prev)=>[...prev,ele])
                    
        
                 }
        
               })
               settest(filteredinfo)
               
               console.log("filteredaudio---->",filteredinfo)
        }

        fetch();
    },[numbers])

    useEffect(()=>{
        settest(filteredinfo)

    },[filteredinfo])


// useEffect(()=>{ 
//     const fetchaudio=()=>{
//        const g=data.find((e)=>e.words==filter)
//         console.log(g.ids)
//         const f=g
//         if(g==null){
//          // alert("AUDIO FILE DOESN'T CONTAIN FOLLOWING WORD ")
//         }
//         else{ 
//         setfilterinfo([])
//         setnum(f.ids)
//        audioinfo?.map((ele,i)=>{
//          const j=ele
//          if(ele.split('_')[4]==numbers){
//              setfilterinfo((prev)=>[...prev,ele])
//              console.log("filteredaudio---->",filteredinfo)
 
//          }
 
//         })
//  console.log("filteredaudi#################o---->",filteredinfo)
//  //     const v="https://firebasestorage.googleapis.com/v0/b/imprint2024.appspot.com/o/2023%2F12%2F24%2FLKOOCw6tw7TfBxspoBKTwtwVi5Q2%2FLKOOCw6tw7TfBxspoBKTwtwVi5Q2%2Fenglish%2F_LKOOCw6tw7TfBxspoBKTwtwVi5Q2_LKOOCw6tw7TfBxspoBKTwtwVi5Q2_english_2_1703419697222.wav?alt=media&token=861b2bea-0b1f-45a5-ad77-26f0909b862f"
//  //    const d= v.split('_')[4]
 
 
//         }
        

//      }


// fetchaudio();
// },[submit])

     
 
 

    console.log("oooooooooooooo--------------->",filteredinfo)
  return (
    <div className='w-[1100px]'>
        <div className='text-4xl text-center mb-32 ml-96 text-purple-900  font-extrabold '>
        FILTERS
        </div>
        <div className='mx-auto '>
        <div className='flex gap-1  block'>

<div className=''>
    <label  htmlFor="text" className=" text-xl    mr-24  font-bold">Select words from dropdown </label>
<input type="text" className="filter ml-[400px] rounded-3xl" value={filter} onChange={handler} name="fill" id="fill" placeholder='Enter The Word/Sentence'> 
</input>

</div>
 

<div>
{/* <button onClick={()=>{setsubmit(true)}} className="btno rounded-lg "><GrSearch/></button> */}

</div>




        </div>
           
        <div className='dropdown rounded-3xl  ml-[400px]' >
                {
                    data.filter((item)=>{const searchTerm=filter.toLowerCase()
                        const ans=item.words.toLowerCase()
                        return( searchTerm && ans.startsWith(searchTerm)&&ans!==searchTerm);
                    }
                ).slice(0,15).map((item,i)=>(
                        <div onClick={()=>onsearch(item.words,item.ids)} className='dropdown-row px-10'
                        key={i}>
                            {item.words}
                            </div>

                    ))
                }

            </div>



            


            

        </div>









        <div className="w-full mx-auto flex-col ml-56 ">
        {/* { loading ?<div className='flex-col '><RingLoader color="#9B59B6 "  size={200} className='mx-auto'/> <div>Please wait 
        </div></div>:  */}
        <div className="font-bold">
           <div className='align-middle text-center mx-auto mt-10'>
    
      <button onClick={()=>navigate("/")}
      className={`flex gap-3 mx-auto  rounded-3xl mb-10 text-2xl border-4  border-purple-700 bg-purple-400 p-2`}>
        <div className=' font-semibold'>
        GO BACK TO DASHBOARD
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
           {filteredinfo?.length} 
          <div className="w-full flex flex-wrap  gap-14   justify-evenly   mt-24 ">
            
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
          <div className=" mx-auto flex-col w-[900px] mt-2  h-80 mb-20   border-purple-700     rounded-full border-[9px]">
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
