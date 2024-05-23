import React, { useEffect } from 'react'
import  {useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import {database,firebaseApp} from "./firebase";
import state from "./data/state.json"
import gender from "./data/gender.json"
import { Audio } from './Audio';
// import firebase from 'firebase/app'
// import * as admin from 'firebase-admin'
//import { initializeApp } from 'firebase-admin/app';
//import firebase from "./firebase";



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
// const firestore =getFirestore(app);






//OUR FUNCTION 
const Dashboard2 = () => {
const [filters,setData]=useState({
    statet:'',
    gendert:'',
    moth:''
})
//FOR SETTING THE AUIDO
const [audioAllData, setaudioAllData] = useState([]);//to save all the information of whose audio is being fetched
const g=[]
const [audioId,setid]=useState([]);//to save all the ids

const[audioinfo,setaudioinfo]=useState([]);

const[audiolink,setaudlink]=useState([])
const[changed,setchanged]=useState(false);
const[submitted,setsubmit]=useState(false);

//SETTING THE INPUTS IN THE ARRAY
const handle=(event)=>{
  // console.log("TTTThandle--1",filters);
  setchanged(true)
  let inputs={[event.target.name]:event.target.value}
  setData({...filters,...inputs})
  console.log("TTTTTThandle",filters);


}
const [usersId,setuser]=useState([]);

//  useEffect(()=>{
//   const hg=handle();
 
//  },[])

// const dbInstance=collection(database,'users');
// const getData= async ()=>{

//     const collectionRef=collection(firestore,"users");
//     console.log("helloo",collectionRef);
    
//     const q=query(collectionRef,where("origin","==",filters.statet));
//     console.log("helloo2",q);
//     const snapshot=await getDocs(q);
//     console.log("helloo3",snapshot);
//     snapshot.forEach((yu)=>console.log(yu.docs().data));
//     console.log("helloo4");

// }

// const db = getFirestore();


// const auth = getAuth();
// const audioRef = collection(database,'users');
// // Fetch audio data on component mount and filter based on selected criteria
// useEffect(() => {
 
//   console.log("test-1",filters.statet,"..",filters.gendert,"...",filters.moth,"........",audioRef);


//  const q=query(audioRef,where('origin','==',filters.statet),where('gender','==',filters.gendert),where('mt','==',filters.moth));
// //  let audioQuery = query(audioRef);

//   // if (filters.statet) {
//   //   audioQuery = query(audioQuery, where('origin', '==', filters.statet));
//   // }
//   // if (filters.gendert) {
//   //   audioQuery = query(audioQuery, where('gender', '==', filters.gendert));
//   // }
//   // if (filters.moth) {
//   //   audioQuery = query(audioQuery, where('mt', '==', filters.moth));
//   // }

//   // console.log("audio query",audioQuery);
// console.log("test-2",q)
// const unsub=onSnapshot(q,(snapshot) => {
//     const fetchedaudioAllData = [];
    
//     snapshot.forEach((doc) => {
//       console.log("snapshot...=>",doc.data())
//       fetchedaudioAllData.push(doc);
//     });
//     console.log("fetchesaudioAllData ......=>",fetchedaudioAllData);
//     setaudioAllData(fetchedaudioAllData);

//   //  setaudioAllData(fetchedaudioAllData.filter((audio) => audio.text?.includes(searchText) || !searchText));

//    });
//    return()=>{
//     // console.log("fetchesaudioAllData ......=>",fetchedaudioAllData);
//     unsub();
//   }
// }, [filters]);




//npm install firebase react-firebaseui react-player @material-ui/core

// const listall=()=>{
//   return getDocs(collection(firestore,"users"))
// }
// useEffect(()=>{
//   console.log("in useEFFect")
//   listall().then((docs)=>console.log(docs.data));
// },[]);








//Whole fetching is still in useeffect
useEffect(()=>{
  const getdata=async()=>{
    const db=getFirestore()
    const q=query(collection(db,'users'))
    // console.log("Query....." , q)
    const snapshot=await getDocs(q)
    const data=snapshot.docs?.map((doc,i)=>({
      ...doc.data(),id:doc.id

    }))
   console.log("ALL THE IDS OTHER THAN",data)

    
  if(filters.moth){

    const g=[];
    data.map(async(elem)=>{
      const audio=query(collection(database,`users/${elem.id}/subjects`),where('origin','==',filters.statet),where('gender','==',filters.gendert),where('mt','==',filters.moth))
      const audioj=await getDocs(audio)
      const audiojj=audioj?.docs?.map((doc)=>({
        ...doc.data(),id:doc.id

      }))
      // if(audiojj != null){
      //   g.push(audiojj)

      // }
      setaudioAllData((prev)=>[...prev,audiojj])
      

    })
    console.log("FILTERED INFO OTHE THAN ANONYMUS(G)",audioAllData)
      
    

  //   const q3=query(collection(db,`users/Anonymous/subjects`),
  
  //   where('origin','==',filters.statet),
  //   where('gender','==',filters.gendert),
  //   where('mt','==',filters.moth))
  
  //   const snapshot3=await getDocs(q3)
  //   const data3=snapshot3.docs?.map((doc)=>({
  //     ...doc.data(),id:doc.id
  
  //   }))
  //  setaudioAllData((prev)=>[...prev,data3]);


  //  console.log("FILTERED INFO OF ANONYMUS",data3)
  // const q1=query(collection(db,`users/06v8FzaAF1S4zCery67IZzE66Bb2/subjects`))
  // const snapshot1=await getDocs(q1)
  // const data1=snapshot1.docs?.map((doc)=>({
  //   ...doc.data(),id:doc.id

  // }))
  // console.log("TTThloo",data1)

//working fetching code.........


console.log("WE need Audio of the beloW INFOO .. ",audioAllData);

  }


  



else{

  const g=[];
    data.map(async(elem)=>{
      const audio=query(collection(database,`users/${elem.id}/subjects`),where('origin','==',filters.statet),where('gender','==',filters.gendert))
      const audioj=await getDocs(audio)
      const audiojj=audioj?.docs?.map((doc)=>({
        id:doc.id

      }))
      // if(audiojj != null){
      //   g.push(audiojj)

      // }
      setaudioAllData((prev)=>[...prev,audiojj])
         
      

    })
    console.log("FILTERED INFO OTHE THAN ANONYMUS(G)",audioAllData)
    
      // setaudioAllData(g)
    
  



  // const q3=query(collection(db,`users/Anonymous/subjects`),

  // where('origin','==',filters.statet),
  // where('gender','==',filters.gendert),
  // )

  // const snapshot3=await getDocs(q3)
  // const data3=snapshot3.docs?.map((doc)=>({
  //   ...doc.data(),id:doc.id

  // }))
  // setaudioAllData((prev)=>[...prev,data3]);
  console.log("WE need Audio of the below INFOOO .. ",audioAllData);

  // console.log("FILTERED INFO OF ANONYMUS",data3)









 }





  

//

  }
// copying links to an array(NOT WORKING)
  // const savelinks=()=>{
  //   audioinfo?.map((e)=>(
  //     console.log("audioinfo....",e.service.name)
  
  
  //     ))
  
  // }
  getdata();
  // savelinks();


},[filters])



//deriving ids of audio
useEffect(()=>{

const ids=audioAllData?.map((student, index) => (
    {id:student.id}
  ))
  setid(ids)
  console.log("Id...is here...",audioId);
  
// console.log("checkingg-audioID",Array.isArray(audioId))
},[audioAllData])










// get audio funcytion

// useEffect(()=>{
//   const getAudio=()=>{
  
//     //gs://imprint2024.appspot.com
//     //2023...2024
//     //2023-12-24-id-english-audio
//     //2023-12-27-id-id-english-audio
  
//     //2024-01-(17..20,23)-id-id-english
//     //2024-03-(9.16,19..30)
//     //2024-04-(2,3,9,19,21)
//     //2024-4-9-anonymus-id-eng
//     //2024-5-(6,10,17,18,19)
//     //2024-5-6-anonymus-id
//     // console.log("audioinfooo11111k==>>",audioinfo)
  
// console.log("checkingg-before",Array.isArray(audioinfo))
// console.log("checkingg-before",Array.isArray(audiolink))
  
  
  
//     // gs://imprint2024.appspot.com/2024/04/09/Anonymous/XQyXKDi96VqvhnWHHREj/english/_Anonymous_XQyXKDi96VqvhnWHHREj_english_201_1712654331369.wav
//   //gs://imprint2024.appspot.com/2024/03/10/PM0TzYnFNvdaNiRGmA9djuZSJmD3/PM0TzYnFNvdaNiRGmA9djuZSJmD3/english/_PM0TzYnFNvdaNiRGmA9djuZSJmD3_PM0TzYnFNvdaNiRGmA9djuZSJmD3_english_357_1710078589246.wav
  
//   // const storage=firebase.storage().ref()
//   // const list=storage.child();
  
  
  
  
  
//   ///////for storage*********************************************7777777777777777755542324225
//   const storage =getStorage();
//   // audioId?.map((ele)=>(
//   //   ref(storage,`2023/12/24/${ele.id}/${ele.id}/english`)
  
  
//   // ))

//   const d=ref(storage,`2023/12/24/LKOOCw6tw7TfBxspoBKTwtwVi5Q2/LKOOCw6tw7TfBxspoBKTwtwVi5Q2/english`)
  
//   const f=  listAll(d).then((res)=>res.items.map((x)=>(
//     {link:x.name}

//   )
    
//     //   //improve
//     // var t=audioinfo;
    
//     //   t.push(x);
//     //   setaudioinfo(t)
//   ))
//   setaudioinfo(f);
//   //  const h= audioinfo?.forEach((e,index)=>(
//   //     // let y=audiolink;
//   //     //  y.push({link:e.name});
//   //     // setaudlink(y);
//   //    {link:e.name}
      
  
//   //  ))
//   // setaudlink(h)
//     console.log("audioinfo=====>>>",audioinfo);
//     setaudlink(audioinfo)
//     console.log("audiolink=====>>",audiolink);
// console.log("checkingg-f",Array.isArray(audioinfo))
// console.log("checkingg",Array.isArray(audiolink))   
  
  
//   // console.log("audioinfo222==>>",audioinfo.valueOf())
  
//   console.log("TYPE OF AUDIO INFO",typeof audioinfo)
//   // console.log("audioinfo test",audioinfo.values)
//   }
//   // const linklaga=()=>{
//   // //////////////////////////////////////////////////////////////////
//   //        // setchanged(false)
//   // }
//   getAudio();






// },[filters])
useEffect(()=>{
  const getthat=()=>{
    const storage = getStorage();
    const rough=[]
    const files=['LKOOCw6tw7TfBxspoBKTwtwVi5Q2','WbR1f18DgIMqDBvtwzOuvsPJaWm1']
  files.map( 
    (filename) => {
     
        
        listAll(ref( storage, `2023/12/24/${filename}/${filename}/english` ))
        .then( (url) => 
          // console.log( "Got download url: ", url.items );
          // rough.push(url.items)
          url.items.map((x)=>(
            rough.push({link:x.name})

          ))
          
        );
  });

  
console.log("ROUGH-->",rough)
setaudioinfo(rough)
console.log("AUDIO-INFO",audioinfo)
}
 
getthat();
},[filters])




  return (
    <div >
      <div className=' bg-blue-400 text-3xl text-center'>
        PENDING WORK.............................................

        <li>
          Frontend
        </li>
        <li>
          Making a Proper form design ....
          
        </li>
        
            
            <li>
            attractive UI
              </li>
        <li>
          Text-Area-for keywords
        </li>
        <li>
          Fetching Audio
        </li>
        <li>
          Displaying Audio
        </li>
        <li>
          Responsiveness

        </li>
        <li>
          Auth-if required
        </li>
      </div>
      <div className='text-2xl text-center mb-32 mt-24'>
        ENTER THE DETAILS

      </div>
        <div className='flex-row gap-8 text-xl justify-items-center text-center'>
          <div>
          <label htmlFor="state">
                State
                <br></br>

            </label> 
        <select
              type="text"
              name="statet"
              id="statet"
              placeholder="Enter your state"
              value={filters.statet}
              onChange={(events)=>handle(events)} 
              
              required

              className="bg-red-400 mb-14 "

            >
              {state.map((ele) => {
                return (
                  <option value={ele.name} key={ele.key}>
                    {ele.name}
                  </option>
                )
              })}
            </select>


          </div>

          <div>
          <label htmlFor="gender">
                Gender
                <br></br>

            </label> 
            <select
             className="bg-red-400 mb-14"
              type="text"
              name="gendert"
              id="gendert"
              value={filters.gendert}
              placeholder="Enter first name"
              onChange={(events)=>handle(events)}
              
              required
             
            >
              {gender.map((ele,i) => {
                return (
                  <option value={ele.name} key={i}>
                    {ele.name}
                  </option>
                )
              })}
            </select>


          </div>
             




<div>
<label htmlFor="moth">
                Mother-tounge
                <br></br>
            </label>

            <input type="text" name="moth" id="moth" value={filters.moth} onChange={(events)=>handle(events)} 
            placeholder='Enter Your Mother-Tounge' className="bg-yellow-300"/>

           
</div>

<div>
<button   className='w-[180px] mt-24 bg-emerald-400 mtext-2xl' >
                Submit



            </button>

</div>
<div>
  
  {

//PROBLEM HERE IS THAT SINCE A PROMISE STATEMENT IS USED TO SAVE THE FILES IN AUDIO INFO 
//I M UNABLE TO GET THE DATA INSIDE IT


audioinfo.map((ab,i)=>(
      <h1 key={i}><a href={`https://firebasestorage.googleapis.com/v0/b/imprint2024.appspot.com/o/2023%2F12%2F24%2FLKOOCw6tw7TfBxspoBKTwtwVi5Q2%2FLKOOCw6tw7TfBxspoBKTwtwVi5Q2%2Fenglish%2F_${ab.link}?alt=media&token=861b2bea-0b1f-45a5-ad77-26f0909b862f`} target="_blank">
   audio-{i} - {ab.link} 
        </a></h1>
        //https://firebasestorage.googleapis.com/v0/b/imprint2024.appspot.com/o/2023%2F12%2F24%2FLKOOCw6tw7TfBxspoBKTwtwVi5Q2%2FLKOOCw6tw7TfBxspoBKTwtwVi5Q2%2Fenglish%2F_${ab.link}?alt=media&token=861b2bea-0b1f-45a5-ad77-26f0909b862f
    ))




//TRYING USING PROMISE BUT UNSUCCESFUL :(
// Promise.resolve(audioinfo).then((y)=>{
//   y.map((ab)=>(
// <h1 ><a href={`https://firebasestorage.googleapis.com/v0/b/imprint2024.appspot.com/o/2023%2F12%2F24%2FLKOOCw6tw7TfBxspoBKTwtwVi5Q2%2FLKOOCw6tw7TfBxspoBKTwtwVi5Q2%2Fenglish%2F_${ab.link}?alt=media&token=861b2bea-0b1f-45a5-ad77-26f0909b862f`} target="_blank">{ab.link}       </a></h1>
//   ))

// })

// Object.keys(audioinfo).map((key)=>{
//   <h3>{key}:{audioinfo.key.link}</h3>
// })



  }
</div>

<div className='align-middle bg-lime-300'>


<table className="table  text-xs border-spacing-10 border-separate border-slate-900  mx-auto">
            {/* <tr>
                <th>Name</th>
                <th>Recordings-Recorded</th>
                <th>Mother-Tounge</th>
            </tr> */}
  
            {
            // audioAllData?.map((student, index) => (
            //   <tr data-index={index} >
            //     {/* <td className='border border-slate-900'>{student.name}</td>
            //     <td className='border border-slate-900'>{student.recordingsRecorded}</td>
            //     <td className='border border-slate-900'>{student.mt}</td> */}
            //     {/* <td className='border border-slate-900'>{student.id}</td> */}
            //   </tr>
            // ))
            }
  
      </table>
        
  
</div>

{/* <div>
  {
    audioId?.map((ab,i)=>(
      <h1 key={i}>{ab.id}</h1>
    ))
  }
</div> */}
<div className=' text-teal-500'>
  LINKS
</div>

{/* <div>
  <Audio audiolink={audiolink}/>

</div> */}
             
            
            </div>
            
        
    </div>
  )
}

export default Dashboard2;
