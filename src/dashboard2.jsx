import React, { useEffect } from 'react'
import  {useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import {database,firebaseApp} from "./firebase";
import state from "./data/state.json"
import gender from "./data/gender.json"
import { Audio } from './Audio';
import { FaArrowRight } from "react-icons/fa";
import { Audio2 } from './Audio2';
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
const Dashboard2 = (props) => {
  const audioinfo=props.audioinfo
  const setaudioinfo=props.setaudioinfo
const [filters,setData]=useState({
    statet:'',
    gendert:'',
    moth:''
})
//FOR SETTING THE AUIDO
const [audioAllData, setaudioAllData] = useState([]);//to save all the information of whose audio is being fetched
const g=[]
const [audioId,setid]=useState([]);//to save all the ids
const[allid,setallid]=useState([])

const[displayid,setdisplay]=useState([])

const[audiolink,setaudlink]=useState([])
const[changed,setchanged]=useState(false);
const[submitted,setsubmit]=useState(false);

const db=getFirestore()
const storage = getStorage();

//SETTING THE INPUTS IN THE ARRAY
const handle=(event)=>{
  // console.log("TTTThandle--1",filters);
  setchanged(true)
  let inputs={[event.target.name]:event.target.value}
  setData({...filters,...inputs})
  // console.log("FILTERS APPLIED",filters);


}
const [usersId,setuser]=useState([]);
//********************SAVING ALL THE IDS IN LOCAL STORAGE*********************************//

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
  const g=JSON.parse(localStorage.getItem("SavedAllId"))||[]


setallid(g)

const rough=[]
  
  }
  saveinlocal();
},[])







useEffect(()=>{
  //SAVING ALL THE IDS FROM THE LOCAL STORAGE TO CONST DATA //
   const getdata=async()=>{
   const data=JSON.parse(localStorage.getItem("SavedAllId"))||[]//FETCHED ALL THE IDS SUCCESSFULLY
  //  console.log("ALL THE IDS(DATA) ",data)
  console.log(data)
  if(filters.moth){
//     data.map(async(elem)=>{
//       const f=query(collection(database,`users/${elem.id}/subjects`),where('origin','==',filters.statet),where('gender','==',filters.gendert),where('mt','==',filters.moth))
//       console.log("whats inside===>",f)     
//         if(f != null){
// g.push([elem.id])
//       }

//     })
//     console.log("ALL THE REQUIRED IDS=======>",g);

setaudioAllData([])
    data.map(async(elem)=>{
      setsubmit(false)
      const audio=query(collection(database,`users/${elem.id}/subjects`),where('origin','==',filters.statet),where('gender','==',filters.gendert),where('mt','==',filters.moth))
      const audioj=await getDocs(audio)
      const audiojj=audioj?.docs?.map((doc)=>({
        id:doc.id

      }))
      // if(audiojj != null){
      //   g.push(audiojj)

      // }
      if(audiojj.length>0){
        setaudioAllData((prev)=>[...prev,audiojj])
      }
    })
    // console.log("AUDIO ALL DATA-*****************************------------------>",audioAllData)
  
  }
  function is2DObject(obj) {
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        for (const item of obj[key]) {
          if (Array.isArray(item)) {
            return true; 
          }
        }
      } else if (typeof obj[key] === 'object') {
        return true; 
      }
    }
    return false; 
  }

// else{

//   const g=[];
//     data.map(async(elem)=>{
//       const audio=query(collection(database,`users/${elem.id}/subjects`),where('origin','==',filters.statet),where('gender','==',filters.gendert))
//       const audioj=await getDocs(audio)
//       const audiojj=audioj?.docs?.map((doc)=>({
//         id:doc.id

//       }))
//       // if(audiojj != null){
//       //   g.push(audiojj)

//       // }
//       setaudioAllData((prev)=>[...prev,audiojj])
         
      

//     })
//     console.log("FILTERED INFO OTHE THAN ANONYMUS(G)",audioAllData)
    
//       // setaudioAllData(g)
    
  



//   // const q3=query(collection(db,`users/Anonymous/subjects`),

//   // where('origin','==',filters.statet),
//   // where('gender','==',filters.gendert),
//   // )

//   // const snapshot3=await getDocs(q3)
//   // const data3=snapshot3.docs?.map((doc)=>({
//   //   ...doc.data(),id:doc.id

//   // }))
//   // setaudioAllData((prev)=>[...prev,data3]);
//   console.log("WE need Audio of the below INFOOO .. ",audioAllData);

//   // console.log("FILTERED INFO OF ANONYMUS",data3)









//  }





  

//

  }

  getdata();
},[filters])



//deriving ids of audio
const  Test=()=>{

}

//SAVING ALL THE IDS
useEffect(()=>{

  const saveid=()=>{
    
    setid([])
    const h=audioAllData.length

for(let i=0;i<h;i++){
// console.log("checking audioID====>",audioAllData[i],i)
audioAllData[i]?.map((e)=>(
// g.push(e.id)
setid((prev)=>[...prev,e.id])
))
//data
// console.log("Data---------->",);
// data.map((e)=>(
// ))
}
// console.log("G---------->",g);
// setid(g)
console.log("AUDIO ID------------>",audioId);

// console.log("DISPLAY ===>> ID------------>",displayid);

  }
  saveid();
// console.log("checkingg-audioID",Array.isArray(audioId))
},[audioAllData])



//&&&&&&&&&&&&&*****************************FOR FETCHING LINKSSS------------------------------>>>>>>>>>>>>
useEffect(()=>{
  
  const getthat=()=>{ 
    setaudioinfo([])

  audioId?.map( 
    (filename) => {

        listAll(ref( storage, `2023/12/24/${filename}/${filename}/english` ))
        .then( (url) => 
          // console.log( "Got download url: ", url.items );
          // rough.push(url.items)
          url.items.forEach((x)=>{
            getDownloadURL(x).then((fetch)=>{
              setaudioinfo((prev)=>[...prev,fetch])

              
            })
            

    })
            ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})




            listAll(ref( storage, `2023/12/27/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/01/17/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})

            listAll(ref( storage, `2024/01/18/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/01/19/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/01/20/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/01/23/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/09/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/10/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/11/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/12/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/14/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                
            listAll(ref( storage, `2024/03/15/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/16/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/19/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/20/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/21/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                listAll(ref( storage, `2024/03/21/Anonymous/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                listAll(ref( storage, `2024/03/22/Anonymous/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})

                listAll(ref( storage, `2024/03/23/Anonymous/${filename}/english` ))
                .then( (url) => 
                  // console.log( "Got download url: ", url.items );
                  // rough.push(url.items)
                  url.items.forEach((x)=>{
                    getDownloadURL(x).then((fetch)=>{
                      setaudioinfo((prev)=>[...prev,fetch])
        
                      
                    })
                    
        
            })
                    ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                    listAll(ref( storage, `2024/03/25/Anonymous/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})

    
            listAll(ref( storage, `2024/03/22/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/23/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/24/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/25/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/03/26/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                listAll(ref( storage, `2024/03/26/Anonymous/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})

            listAll(ref( storage, `2024/03/27/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})

            listAll(ref( storage, `2024/03/28/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})

            listAll(ref( storage, `2024/03/29/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                listAll(ref( storage, `2024/03/27/Anonymous/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                listAll(ref( storage, `2024/03/28/Anonymous/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})


            listAll(ref( storage, `2024/03/31/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/04/02/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/04/03/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/04/09/Anonymous/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/04/19/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/04/21/Anonymous/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/05/06/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/05/06/Anonymous/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})

            listAll(ref( storage, `2024/05/10/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/05/17/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
            listAll(ref( storage, `2024/05/18/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})

            listAll(ref( storage, `2024/05/19/${filename}/${filename}/english` ))
            .then( (url) => 
              // console.log( "Got download url: ", url.items );
              // rough.push(url.items)
              url.items.forEach((x)=>{
                getDownloadURL(x).then((fetch)=>{
                  setaudioinfo((prev)=>[...prev,fetch])
    
                  
                })
                
    
        })
                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})

                listAll(ref( storage, `2024/05/22/${filename}/${filename}/english` ))
                .then( (url) => 
                  // console.log( "Got download url: ", url.items );
                  // rough.push(url.items)
                  url.items.forEach((x)=>{
                    getDownloadURL(x).then((fetch)=>{
                      setaudioinfo((prev)=>[...prev,fetch])
        
                      
                    })
                    
        
            })
                    ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                    listAll(ref( storage, `2024/05/23/${filename}/${filename}/english` ))
                    .then( (url) => 
                      // console.log( "Got download url: ", url.items );
                      // rough.push(url.items)
                      url.items.forEach((x)=>{
                        getDownloadURL(x).then((fetch)=>{
                          setaudioinfo((prev)=>[...prev,fetch])
            
                          
                        })
                        
            
                })
                        ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                        listAll(ref( storage, `2024/05/24/${filename}/${filename}/english` ))
                        .then( (url) => 
                          // console.log( "Got download url: ", url.items );
                          // rough.push(url.items)
                          url.items.forEach((x)=>{
                            getDownloadURL(x).then((fetch)=>{
                              setaudioinfo((prev)=>[...prev,fetch])
                
                              
                            })
                            
                
                    })
                            ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                            listAll(ref( storage, `2024/05/25/${filename}/${filename}/english` ))
                            .then( (url) => 
                              // console.log( "Got download url: ", url.items );
                              // rough.push(url.items)
                              url.items.forEach((x)=>{
                                getDownloadURL(x).then((fetch)=>{
                                  setaudioinfo((prev)=>[...prev,fetch])
                    
                                  
                                })
                                
                    
                        })
                                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                                listAll(ref( storage, `2024/05/26/${filename}/${filename}/english` ))
                                .then( (url) => 
                                  // console.log( "Got download url: ", url.items );
                                  // rough.push(url.items)
                                  url.items.forEach((x)=>{
                                    getDownloadURL(x).then((fetch)=>{
                                      setaudioinfo((prev)=>[...prev,fetch])
                        
                                      
                                    })
                                    
                        
                            })
                                    ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                                    listAll(ref( storage, `2024/05/26/Anonymous/${filename}/english` ))
                                    .then( (url) => 
                                      // console.log( "Got download url: ", url.items );
                                      // rough.push(url.items)
                                      url.items.forEach((x)=>{
                                        getDownloadURL(x).then((fetch)=>{
                                          setaudioinfo((prev)=>[...prev,fetch])
                            
                                          
                                        })
                                        
                            
                                })
                                        ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                                    listAll(ref( storage, `2024/05/27/${filename}/${filename}/english` ))
                                    .then( (url) => 
                                      // console.log( "Got download url: ", url.items );
                                      // rough.push(url.items)
                                      url.items.forEach((x)=>{
                                        getDownloadURL(x).then((fetch)=>{
                                          setaudioinfo((prev)=>[...prev,fetch])
                            
                                          
                                        })
                                        
                            
                                })
                                        ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                                        listAll(ref( storage, `2024/05/29/${filename}/${filename}/english` ))
                                        .then( (url) => 
                                          // console.log( "Got download url: ", url.items );
                                          // rough.push(url.items)
                                          url.items.forEach((x)=>{
                                            getDownloadURL(x).then((fetch)=>{
                                              setaudioinfo((prev)=>[...prev,fetch])
                                
                                              
                                            })
                                            
                                
                                    })
                                            ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                                            listAll(ref( storage, `2024/05/30/${filename}/${filename}/english` ))
                                            .then( (url) => 
                                              // console.log( "Got download url: ", url.items );
                                              // rough.push(url.items)
                                              url.items.forEach((x)=>{
                                                getDownloadURL(x).then((fetch)=>{
                                                  setaudioinfo((prev)=>[...prev,fetch])
                                    
                                                  
                                                })
                                                
                                    
                                        })
                                                ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})



                                                for(let i=1;i<=31;i++){
                                                 

                                                  if(i<10){
                                                    i=i.toString()

                                                    listAll(ref( storage, `2024/06/${`0`+i}/${filename}/${filename}/english` ))
                                                    .then( (url) => 
                                                      // console.log( "Got download url: ", url.items );
                                                      // rough.push(url.items)
                                                      url.items.forEach((x)=>{
                                                        getDownloadURL(x).then((fetch)=>{
                                                          setaudioinfo((prev)=>[...prev,fetch])
                                            
                                                          
                                                        })                
                                            
                                                })
                                                        ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                                                      
                                                        listAll(ref( storage, `2024/06/${`0`+i}/Anonymous/${filename}/english` ))
                                                        .then( (url) => 
                                                          // console.log( "Got download url: ", url.items );
                                                          // rough.push(url.items)
                                                          url.items.forEach((x)=>{
                                                            getDownloadURL(x).then((fetch)=>{
                                                              setaudioinfo((prev)=>[...prev,fetch])
                                                
                                                              
                                                            })
                                                            
                                                
                                                    })
                                                            ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
  

                                                  }
                                                  else{

                                                    i=i.toString()

                                                    listAll(ref( storage, `2024/06/${i}/${filename}/${filename}/english` ))
                                                    .then( (url) => 
                                                      // console.log( "Got download url: ", url.items );
                                                      // rough.push(url.items)
                                                      url.items.forEach((x)=>{
                                                        getDownloadURL(x).then((fetch)=>{
                                                          setaudioinfo((prev)=>[...prev,fetch])
                                            
                                                          
                                                        })                
                                            
                                                })
                                                        ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                                                      
                                                        listAll(ref( storage, `2024/06/${i}/Anonymous/${filename}/english` ))
                                                        .then( (url) => 
                                                          // console.log( "Got download url: ", url.items );
                                                          // rough.push(url.items)
                                                          url.items.forEach((x)=>{
                                                            getDownloadURL(x).then((fetch)=>{
                                                              setaudioinfo((prev)=>[...prev,fetch])
                                                
                                                              
                                                            })
                                                            
                                                
                                                    })
                                                            ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
  
                                                  }
                                                 

                                                          
                                                        }

                                                          for(let i=7;i<=12;i++){
                                                            i=i.toString()
                                                            if(i<10){
                                                              //////
                                                              

                                                            for(let j=1;j<=31;j++){
                                                              j=j.toString()
                                                              if(j<10){
                                                                listAll(ref( storage, `2024/${`0`+i}/${`0`+j}/${filename}/${filename}/english` ))
                                                                .then( (url) => 
                                                                  // console.log( "Got download url: ", url.items );
                                                                  // rough.push(url.items)
                                                                  url.items.forEach((x)=>{
                                                                    getDownloadURL(x).then((fetch)=>{
                                                                      setaudioinfo((prev)=>[...prev,fetch])
                                                        
                                                                      
                                                                    })                
                                                        
                                                            })
                                                                    ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                                                                  
                                                                    listAll(ref( storage, `2024/${`0`+i}/${`0`+j}/Anonymous/${filename}/english` ))
                                                                    .then( (url) => 
                                                                      // console.log( "Got download url: ", url.items );
                                                                      // rough.push(url.items)
                                                                      url.items.forEach((x)=>{
                                                                        getDownloadURL(x).then((fetch)=>{
                                                                          setaudioinfo((prev)=>[...prev,fetch])
                                                            
                                                                          
                                                                        })
                                                                        
                                                            
                                                                })
                                                                        ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
              

                                                              }
                                                              else{
                                                                listAll(ref( storage, `2024/${`0`+i}/${j}/${filename}/${filename}/english` ))
                                                                .then( (url) => 
                                                                  // console.log( "Got download url: ", url.items );
                                                                  // rough.push(url.items)
                                                                  url.items.forEach((x)=>{
                                                                    getDownloadURL(x).then((fetch)=>{
                                                                      setaudioinfo((prev)=>[...prev,fetch])
                                                        
                                                                      
                                                                    })                
                                                        
                                                            })
                                                                    ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                                                                  
                                                                    listAll(ref( storage, `2024/${`0`+i}/${j}/Anonymous/${filename}/english` ))
                                                                    .then( (url) => 
                                                                      // console.log( "Got download url: ", url.items );
                                                                      // rough.push(url.items)
                                                                      url.items.forEach((x)=>{
                                                                        getDownloadURL(x).then((fetch)=>{
                                                                          setaudioinfo((prev)=>[...prev,fetch])
                                                            
                                                                          
                                                                        })
                                                                        
                                                            
                                                                })
                                                                        ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})

                                                              }


                                                             


                                                            }

                                                            
                                                            }


                                                            else{
                                                              /////////////////////////
                                                              for(let j=1;j<=31;j++){
                                                                j=j.toString()
                                                                if(j<10){
                                                                  listAll(ref( storage, `2024/${i}/${`0`+j}/${filename}/${filename}/english` ))
                                                                  .then( (url) => 
                                                                    // console.log( "Got download url: ", url.items );
                                                                    // rough.push(url.items)
                                                                    url.items.forEach((x)=>{
                                                                      getDownloadURL(x).then((fetch)=>{
                                                                        setaudioinfo((prev)=>[...prev,fetch])
                                                          
                                                                        
                                                                      })                
                                                          
                                                              })
                                                                      ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                                                                    
                                                                      listAll(ref( storage, `2024/${i}/${`0`+j}/Anonymous/${filename}/english` ))
                                                                      .then( (url) => 
                                                                        // console.log( "Got download url: ", url.items );
                                                                        // rough.push(url.items)
                                                                        url.items.forEach((x)=>{
                                                                          getDownloadURL(x).then((fetch)=>{
                                                                            setaudioinfo((prev)=>[...prev,fetch])
                                                              
                                                                            
                                                                          })
                                                                          
                                                              
                                                                  })
                                                                          ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                
  
                                                                }
                                                                else{
                                                                  listAll(ref( storage, `2024/${i}/${j}/${filename}/${filename}/english` ))
                                                                  .then( (url) => 
                                                                    // console.log( "Got download url: ", url.items );
                                                                    // rough.push(url.items)
                                                                    url.items.forEach((x)=>{
                                                                      getDownloadURL(x).then((fetch)=>{
                                                                        setaudioinfo((prev)=>[...prev,fetch])
                                                          
                                                                        
                                                                      })                
                                                          
                                                              })
                                                                      ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                                                                    
                                                                      listAll(ref( storage, `2024/${i}/${j}/Anonymous/${filename}/english` ))
                                                                      .then( (url) => 
                                                                        // console.log( "Got download url: ", url.items );
                                                                        // rough.push(url.items)
                                                                        url.items.forEach((x)=>{
                                                                          getDownloadURL(x).then((fetch)=>{
                                                                            setaudioinfo((prev)=>[...prev,fetch])
                                                              
                                                                            
                                                                          })
                                                                          
                                                              
                                                                  })
                                                                          ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
  
                                                                }
  
  
                                                               
  
  
                                                              }
                                                              
                                                              
                                                            }

                                                          }






                                                
                                               
                                            //         listAll(ref( storage, `2024/06/04/${filename}/${filename}/english` ))
                                            //     .then( (url) => 
                                            //       // console.log( "Got download url: ", url.items );
                                            //       // rough.push(url.items)
                                            //       url.items.forEach((x)=>{
                                            //         getDownloadURL(x).then((fetch)=>{
                                            //           setaudioinfo((prev)=>[...prev,fetch])
                                        
                                                      
                                            //         })
                                                    
                                        
                                            // })
                                            //         ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                                            //         listAll(ref( storage, `2024/06/05/${filename}/${filename}/english` ))
                                            //     .then( (url) => 
                                            //       // console.log( "Got download url: ", url.items );
                                            //       // rough.push(url.items)
                                            //       url.items.forEach((x)=>{
                                            //         getDownloadURL(x).then((fetch)=>{
                                            //           setaudioinfo((prev)=>[...prev,fetch])
                                        
                                                      
                                            //         })
                                                    
                                        
                                            // })
                                            //         ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                    
                
            

  });


console.log("AUDIO-LINKS(SAVED IN AUDIO INFO) =====>",audioinfo)

}
 if(submitted && audioId.length>0){
  getthat();
 }

},[submitted])




  return (


    <div className='mx-auto  w-[1200px] flex-col gap-7' >
      
      <div className='text-4xl text-center mb-32   text-gray-800  font-extrabold '>
        AUDIO FETCHING DASHBOARD
        

      </div>
        <div className='flex mx-auto  gap-32 text-2xl justify-items-center text-center'>
          <div className=''>
        
        <select
              type="text"
              name="statet"
              id="statet"
              placeholder="Select Your State"
              value={filters.statet}
              onChange={(events)=>handle(events)} 
              defaultValue="none"
              
              required

              className="  rounded-3xl  border-4  border-neutral-600  p-2"

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


          <div>
          {/* <label htmlFor="gender">
                Gender
                <br></br>

            </label>  */}
            <select
              className="  rounded-3xl  border-4  border-neutral-600 p-2"
              type="text"
              name="gendert"
              id="gendert"
              value={filters.gendert}
              placeholder="Your"
              defaultValue="none"
              onChange={(events)=>handle(events)}
              
              required
             
            >
               <option disabled={true} value="">
          --Choose Gender--
        </option>
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

            <input type="text" name="moth" id="moth" value={filters.moth} onChange={(events)=>handle(events)} 
            placeholder='Your Mother-Tounge'  className="  rounded-3xl  border-4  border-neutral-600 p-2"/>

</div>
  </div>
  <div className='  text-2xl  mt-24'>{
  submitted?
  <Audio2 audioinfo={audioinfo} />:<h6>Enter The Above Details</h6>
  }
  

</div>


 <div className='align-middle text-center mx-auto mt-10'>
    
      <button onClick={()=>(setsubmit(true))}
      className={`flex gap-3 mx-auto  rounded-3xl  text-2xl border-4  border-neutral-600 ${submitted ? " bg-zinc-800 opacity-0" : " bg-neutral-500" }  p-2`}>
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
  
</div> 

*/}

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
            
        
    </div>
  )
}

export default Dashboard2;
