import React, { useEffect, useState } from 'react'
import RingLoader from 'react-spinners/RingLoader'
export const Audio = (props) => {
    let audioinfo=props.audioinfo
    
    const [loading,setloading]=useState(false)
    useEffect(()=>{
      setloading(true)
      setTimeout(()=>{
        setloading(false)
      },1000)
      
    },[])

  return (
    <div className="w-full text-center ">
      
      
      {/* <audio controls>
        <source src="https://firebasestorage.googleapis.com/v0/b/imprint2024.appspot.com/o/2024%2F03%2F12%2F4V21DgkdCAZ8yuMXz76lB4SBuiC3%2F4V21DgkdCAZ8yuMXz76lB4SBuiC3%2Fenglish%2F_4V21DgkdCAZ8yuMXz76lB4SBuiC3_4V21DgkdCAZ8yuMXz76lB4SBuiC3_english_545_1710243091390.wav?alt=media&token=9f61363a-742b-4aa4-a812-72bf448bdbc5">
        </source>
      </audio> */}
      <br/>
    <div className='mx-auto '>
      {loading ?<div className='flex-col'><RingLoader color="#9B59B6 "  size={200} className='mx-auto'/> <div>Please wait 
        </div>
      </div>
      :
      <div>
        NUMBER OF AUDIOS-
          {audioinfo.length}

          <div className='w-full text-center '>
  
  
  {
    

audioinfo?.map((ab,i)=>(
  
      <div key={i}  className='mx-auto  ml-96 '>
         <audio controls className=" w-96 h-24">
      <source src={`${ab}`}>
      </source>
      

    </audio>
    <a href={`${ab}`} target="_blank"> audio</a>
    
        
        </div>
        //https://firebasestorage.googleapis.com/v0/b/imprint2024.appspot.com/o/2023%2F12%2F24%2FLKOOCw6tw7TfBxspoBKTwtwVi5Q2%2FLKOOCw6tw7TfBxspoBKTwtwVi5Q2%2Fenglish%2F_${ab.link}?alt=media&token=861b2bea-0b1f-45a5-ad77-26f0909b862f
    ))
  }
  
</div>


        </div>

      }
   
      
    
    </div>
  
  <div>
   
  </div>
  
  </div>
  )
}
