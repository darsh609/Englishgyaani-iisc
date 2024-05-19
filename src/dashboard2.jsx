import React, { useEffect } from 'react'
import  {useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import {database,firebaseApp} from "./firebase";
import state from "./data/state.json"
import gender from "./data/gender.json"
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
const [audios, setAudios] = useState([]);


//SETTING THE INPUTS IN THE ARRAY
const handle=(event)=>{
  // console.log("TTTThandle--1",filters);
  let inputs={[event.target.name]:event.target.value}
  setData({...filters,...inputs})
  console.log("TTTTTThandle",filters);


}
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
//     const fetchedAudios = [];
    
//     snapshot.forEach((doc) => {
//       console.log("snapshot...=>",doc.data())
//       fetchedAudios.push(doc);
//     });
//     console.log("fetchesaudios ......=>",fetchedAudios);
//     setAudios(fetchedAudios);

//   //  setAudios(fetchedAudios.filter((audio) => audio.text?.includes(searchText) || !searchText));

//    });
//    return()=>{
//     // console.log("fetchesaudios ......=>",fetchedAudios);
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









useEffect(()=>{
  const getdata=async()=>{
    const db=getFirestore()
    const q=query(collection(db,'users'))
    // console.log("Query....." , q)
    const snapshot=await getDocs(q)
    const data=snapshot.docs.map((doc)=>({
      ...doc.data(),id:doc.id

    }))
     console.log("TEST_MODE........",data)

    data.map(async(elem)=>{
      const audio=query(collection(database,`users/${elem.id}/subjects`),where('origin','==',filters.statet),where('gender','==',filters.gendert),where('mt','==',filters.moth))
      const audioj=await getDocs(audio)
      const audiojj=audioj.docs.map((doc)=>({
        ...doc.data(),id:doc.id

      }))
      console.log("TTTTTTTTestt mode...",audiojj)

    })
    const q1=query(collection(db,`users/06v8FzaAF1S4zCery67IZzE66Bb2/subjects`))
    const snapshot1=await getDocs(q1)
    const data1=snapshot1.docs.map((doc)=>({
      ...doc.data(),id:doc.id

    }))
    console.log("TTThloo",data1)





//working fetching code.........
    const q3=query(collection(db,`users/Anonymous/subjects`),where('origin','==',filters.statet),where('gender','==',filters.gendert),where('mt','==',filters.moth))
    const snapshot3=await getDocs(q3)
    const data3=snapshot3.docs.map((doc)=>({
      ...doc.data(),id:doc.id

    }))
    await setAudios(data3);
    console.log("WE need Audio of the below files .. ",audios);
    console.log("TTT...hloo....333",data3)

  

    

    




  }
  getdata();

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
              {gender.map((ele) => {
                return (
                  <option value={ele.name} key={ele.key}>
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
<button  className='w-[180px] mt-24 bg-emerald-400 mtext-2xl'>
                Submit



            </button>

</div>

<div className='align-middle bg-lime-300'>
<table className="table  text-4xl border-spacing-10 border-separate border-slate-900  mx-auto">
            <tr>
                <th>Name</th>
                <th>Recordings-Recorded</th>
                <th>Mother-Tounge</th>
            </tr>
  
            {audios.map((student, index) => (
              <tr data-index={index} >
                <td className='border border-slate-900'>{student.name}</td>
                <td className='border border-slate-900'>{student.recordingsRecorded}</td>
                <td className='border border-slate-900'>{student.mt}</td>
              </tr>
            ))}
  
        </table>
  
</div>
             
            
            </div>
            
        
    </div>
  )
}

export default Dashboard2;
