

import {Howl} from "howler"
import 'react-toastify/dist/ReactToastify.css';
import 'react-h5-audio-player/lib/styles.css';
import "./App.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import RingLoader from 'react-spinners/RingLoader'
import AudioPlayer from 'react-h5-audio-player';
import { Audio2 } from './Audio2';
import { ToastContainer,toast } from "react-toastify";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import{
    collection,
    getDocs,
    query,
    where,
    getDoc,
    getFirestore,
    onSnapshot,limit

} from 'firebase/firestore'
import { Tablemale } from "./Tablemale";
import { Filters } from "./Filters";
//--legacy-peer-deps
export const Table = (props) => {
  const navigate=useNavigate(props);
    const [loading,setloading]=useState(false)
    useEffect(()=>{
      setloading(true)
      setTimeout(()=>{
        setloading(false)
      },30000)
      
    },[])

    const statet=props.statet
    const setstate=props.setstate
    const male=props.male
    const setappliedmt=props.setappliedmt
    const appliedmothertounge = props.appliedmothertounge 
  const female=props.female
  const db=getFirestore()
  const storage = getStorage();
  const[maleaudio,setmaleaudio]=useState(false)
  const[femaleaudio,setfemaleaudio]=useState(false)

  // const [malelinks,setmalelinks]=useState([])
  // const [femalelinks,setfemalelinks]=useState([])
  const malelinks=props.malelinks
  const setmalelinks=props.setmalelinks
  const setfemalelinks=props.setfemalelinks
  const femalelinks=props.femalelinks
  // const showmaleaudio=()=>{
  //   setfemaleaudio(false)
  //   if(maleaudio){
  //       setmaleaudio(false)
  //   }
  //   else{
  //       setmaleaudio(true)

  //   }
    
  // }
  // const showfemaleaudio=()=>{
  //   setmaleaudio(false)
  //   if(femaleaudio){
  //       setfemaleaudio(false)
  //   }
  //   else{
  //       setfemaleaudio(true)

  //   }
    
  // }
// useEffect(()=>{
// const getmalelinks=()=>{
//     setmalelinks([])
    

//     male?.map((filename)=>{
//         //2023
//         // for(let i=12;i<=12;i++){
//         //     i=i.toString()
//         //     if(i<10){
//         //       //////
              

//         //     for(let j=24;j<=27;j++){
//         //       j=j.toString()
//         //       if(j<10){
//         //         listAll(ref( storage, `2023/${`0`+i}/${`0`+j}/${filename}/${filename}/english` ))
//         //         .then( (url) => 
//         //           // console.log( "Got download url: ", url.items );
//         //           // rough.push(url.items)
//         //           url.items.forEach((x)=>{
//         //             getDownloadURL(x).then((fetch)=>{
//         //               setmalelinks((prev)=>[...prev,fetch])
        
                      
//         //             })                
        
//         //     })
//         //             )
                  
//         //             listAll(ref( storage, `2023/${`0`+i}/${`0`+j}/Anonymous/${filename}/english` ))
//         //             .then( (url) => 
//         //               // console.log( "Got download url: ", url.items );
//         //               // rough.push(url.items)
//         //               url.items.forEach((x)=>{
//         //                 getDownloadURL(x).then((fetch)=>{
//         //                   setmalelinks((prev)=>[...prev,fetch])
            
                          
//         //                 })
                        
            
//         //         })
//         //                 )


//         //       }
//         //       else{
//         //         listAll(ref( storage, `2023/${`0`+i}/${j}/${filename}/${filename}/english` ))
//         //         .then( (url) => 
//         //           // console.log( "Got download url: ", url.items );
//         //           // rough.push(url.items)
//         //           url.items.forEach((x)=>{
//         //             getDownloadURL(x).then((fetch)=>{
//         //               setmalelinks((prev)=>[...prev,fetch])
        
                      
//         //             })                
        
//         //     })
//         //             )
                  
//         //             listAll(ref( storage, `2023/${`0`+i}/${j}/Anonymous/${filename}/english` ))
//         //             .then( (url) => 
//         //               // console.log( "Got download url: ", url.items );
//         //               // rough.push(url.items)
//         //               url.items.forEach((x)=>{
//         //                 getDownloadURL(x).then((fetch)=>{
//         //                   setmalelinks((prev)=>[...prev,fetch])
            
                          
//         //                 })
                        
            
//         //         })
//         //                 )

//         //       }


             


//         //     }

            
//         //     }


//         //     else{
//         //       /////////////////////////
//         //       for(let j=24;j<=27;j++){
//         //         j=j.toString()
//         //         if(j<10){
//         //           listAll(ref( storage, `2023/${i}/${`0`+j}/${filename}/${filename}/english` ))
//         //           .then( (url) => 
//         //             // console.log( "Got download url: ", url.items );
//         //             // rough.push(url.items)
//         //             url.items.forEach((x)=>{
//         //               getDownloadURL(x).then((fetch)=>{
//         //                 setmalelinks((prev)=>[...prev,fetch])
          
                        
//         //               })                
          
//         //       })
//         //               )
                    
//         //               listAll(ref( storage, `2023/${i}/${`0`+j}/Anonymous/${filename}/english` ))
//         //               .then( (url) => 
//         //                 // console.log( "Got download url: ", url.items );
//         //                 // rough.push(url.items)
//         //                 url.items.forEach((x)=>{
//         //                   getDownloadURL(x).then((fetch)=>{
//         //                     setmalelinks((prev)=>[...prev,fetch])
              
                            
//         //                   })
                          
              
//         //           })
//         //                   )


//         //         }
//         //         else{
//         //           listAll(ref( storage, `2023/${i}/${j}/${filename}/${filename}/english` ))
//         //           .then( (url) => 
//         //             // console.log( "Got download url: ", url.items );
//         //             // rough.push(url.items)
//         //             url.items.forEach((x)=>{
//         //               getDownloadURL(x).then((fetch)=>{
//         //                 setmalelinks((prev)=>[...prev,fetch])
          
                        
//         //               })                
          
//         //       })
//         //               )
                    
//         //               listAll(ref( storage, `2023/${i}/${j}/Anonymous/${filename}/english` ))
//         //               .then( (url) => 
//         //                 // console.log( "Got download url: ", url.items );
//         //                 // rough.push(url.items)
//         //                 url.items.forEach((x)=>{
//         //                   getDownloadURL(x).then((fetch)=>{
//         //                     setmalelinks((prev)=>[...prev,fetch])
              
                            
//         //                   })
                          
              
//         //           })
//         //                   )

//         //         }


               


//         //       }
              
              
//         //     }

//         //   }
//     //2024
//     for(let y=2024;y>=2023;y--){
        
//         for(let i=1;i<=12;i++){
//             i=i.toString()
//             y=y.toString()
//             if(i<10){
//             for(let j=1;j<=31;j++){
//               j=j.toString()
//               if(j<10){
//                 listAll(ref( storage, `${y}/${`0`+i}/${`0`+j}/${filename}/${filename}/english` ))
//                 .then( (url) => 
//                   // console.log( "Got download url: ", url.items );
//                   // rough.push(url.items)
//                   url.items.forEach((x)=>{
//                     getDownloadURL(x).then((fetch)=>{
//                       setmalelinks((prev)=>[...prev,fetch])
        
                      
//                     })                
        
//             })
//                     )
                  

//               }
//               else{
//                 listAll(ref( storage, `${y}/${`0`+i}/${j}/${filename}/${filename}/english` ))
//                 .then( (url) => 
//                   // console.log( "Got download url: ", url.items );
//                   // rough.push(url.items)
//                   url.items.forEach((x)=>{
//                     getDownloadURL(x).then((fetch)=>{
//                       setmalelinks((prev)=>[...prev,fetch])
        
                      
//                     })                
        
//             })
//                     )
                  
               

//               }


             


//             }

            
//             }


//             else{
//               /////////////////////////
//               for(let j=1;j<=31;j++){
//                 j=j.toString()
//                 if(j<10){
//                   listAll(ref( storage, `${y}/${i}/${`0`+j}/${filename}/${filename}/english` ))
//                   .then( (url) => 
//                     // console.log( "Got download url: ", url.items );
//                     // rough.push(url.items)
//                     url.items.forEach((x)=>{
//                       getDownloadURL(x).then((fetch)=>{
//                         setmalelinks((prev)=>[...prev,fetch])
          
                        
//                       })                
          
//               })
//                       )
                    

//                 }
//                 else{
//                   listAll(ref( storage, `${y}/${i}/${j}/${filename}/${filename}/english` ))
//                   .then( (url) => 
//                     // console.log( "Got download url: ", url.items );
//                     // rough.push(url.items)
//                     url.items.forEach((x)=>{
//                       getDownloadURL(x).then((fetch)=>{
//                         setmalelinks((prev)=>[...prev,fetch])
          
                        
//                       })                
          
//               })
//                       )
                    
//                 }


               


//               }
              
              
//             }

//           }


//     }
        

//     })

//     // console.log("Male-links--->",malelinks)


// }
// getmalelinks()

// },[male])
//#


useEffect(()=>{
  const toastt=()=>{
    male.length>0?toast.success('Audio Found For Male'):toast.error('No Audio Found For Male')
    
    female.length>0?toast.success('Audio Found For Female',{backgroundColor: '#8329C5',
      color: '#ffffff',}):toast.error('No Audio Found For Female',{backgroundColor: '#33F2FF',
        color: '#33F2FF',deplay:12000})
  }
  toastt()

},[])


useEffect(()=>{
    const getfemalelinks=()=>{
        setfemalelinks([])
        
    
        female?.map((filename)=>{
            //2023
        //     for(let i=12;i<=12;i++){
        //         i=i.toString()
        //         if(i<10){
        //           //////
                  
    
        //         for(let j=24;j<=27;j++){
        //           j=j.toString()
        //           if(j<10){
        //             listAll(ref( storage, `2023/${`0`+i}/${`0`+j}/${filename}/${filename}/english` ))
        //             .then( (url) => 
        //               // console.log( "Got download url: ", url.items );
        //               // rough.push(url.items)
        //               url.items.forEach((x)=>{
        //                 getDownloadURL(x).then((fetch)=>{
        //                   setfemalelinks((prev)=>[...prev,fetch])
            
                          
        //                 })                
            
        //         })
        //                 )
                      
        //                 listAll(ref( storage, `2023/${`0`+i}/${`0`+j}/Anonymous/${filename}/english` ))
        //                 .then( (url) => 
        //                   // console.log( "Got download url: ", url.items );
        //                   // rough.push(url.items)
        //                   url.items.forEach((x)=>{
        //                     getDownloadURL(x).then((fetch)=>{
        //                         setfemalelinks((prev)=>[...prev,fetch])                
                              
        //                     })
                            
                
        //             })
        //                     )
    
    
        //           }
        //           else{
        //             listAll(ref( storage, `2023/${`0`+i}/${j}/${filename}/${filename}/english` ))
        //             .then( (url) => 
        //               // console.log( "Got download url: ", url.items );
        //               // rough.push(url.items)
        //               url.items.forEach((x)=>{
        //                 getDownloadURL(x).then((fetch)=>{
        //                     setfemalelinks((prev)=>[...prev,fetch])
            
                          
        //                 })                
            
        //         })
        //                 )
                      
        //                 listAll(ref( storage, `2023/${`0`+i}/${j}/Anonymous/${filename}/english` ))
        //                 .then( (url) => 
        //                   // console.log( "Got download url: ", url.items );
        //                   // rough.push(url.items)
        //                   url.items.forEach((x)=>{
        //                     getDownloadURL(x).then((fetch)=>{
        //                         setfemalelinks((prev)=>[...prev,fetch])
                
                              
        //                     })
                            
                
        //             })
        //                     )
    
        //           }
    
    
                 
    
    
        //         }
    
                
        //         }
    
    
        //         else{
        //           /////////////////////////
        //           for(let j=24;j<=27;j++){
        //             j=j.toString()
        //             if(j<10){
        //               listAll(ref( storage, `2023/${i}/${`0`+j}/${filename}/${filename}/english` ))
        //               .then( (url) => 
        //                 // console.log( "Got download url: ", url.items );
        //                 // rough.push(url.items)
        //                 url.items.forEach((x)=>{
        //                   getDownloadURL(x).then((fetch)=>{
        //                     setfemalelinks((prev)=>[...prev,fetch])
              
                            
        //                   })                
              
        //           })
        //                   )
                        
        //                   listAll(ref( storage, `2023/${i}/${`0`+j}/Anonymous/${filename}/english` ))
        //                   .then( (url) => 
        //                     // console.log( "Got download url: ", url.items );
        //                     // rough.push(url.items)
        //                     url.items.forEach((x)=>{
        //                       getDownloadURL(x).then((fetch)=>{
        //                         setfemalelinks((prev)=>[...prev,fetch])
                  
                                
        //                       })
                              
                  
        //               })
        //                       )
    
    
        //             }
        //             else{
        //               listAll(ref( storage, `2023/${i}/${j}/${filename}/${filename}/english` ))
        //               .then( (url) => 
        //                 // console.log( "Got download url: ", url.items );
        //                 // rough.push(url.items)
        //                 url.items.forEach((x)=>{
        //                   getDownloadURL(x).then((fetch)=>{
        //                     setfemalelinks((prev)=>[...prev,fetch])
              
                            
        //                   })                
              
        //           })
        //                   )
                        
        //                   listAll(ref( storage, `2023/${i}/${j}/Anonymous/${filename}/english` ))
        //                   .then( (url) => 
        //                     // console.log( "Got download url: ", url.items );
        //                     // rough.push(url.items)
        //                     url.items.forEach((x)=>{
        //                       getDownloadURL(x).then((fetch)=>{
        //                         setfemalelinks((prev)=>[...prev,fetch])
                  
                                
        //                       })
                              
                  
        //               })
        //                       )
    
        //             }
    
    
                   
    
    
        //           }
                  
                  
        //         }
    
        //       }
        // //2024
    
        //     for(let i=1;i<=12;i++){
        //         i=i.toString()
        //         if(i<10){
        //           //////
                  
    
        //         for(let j=1;j<=31;j++){
        //           j=j.toString()
        //           if(j<10){
        //             listAll(ref( storage, `2024/${`0`+i}/${`0`+j}/${filename}/${filename}/english` ))
        //             .then( (url) => 
        //               // console.log( "Got download url: ", url.items );
        //               // rough.push(url.items)
        //               url.items.forEach((x)=>{
        //                 getDownloadURL(x).then((fetch)=>{
        //                     setfemalelinks((prev)=>[...prev,fetch])
            
                          
        //                 })                
            
        //         })
        //                 )
                      
        //                 listAll(ref( storage, `2024/${`0`+i}/${`0`+j}/Anonymous/${filename}/english` ))
        //                 .then( (url) => 
        //                   // console.log( "Got download url: ", url.items );
        //                   // rough.push(url.items)
        //                   url.items.forEach((x)=>{
        //                     getDownloadURL(x).then((fetch)=>{
        //                         setfemalelinks((prev)=>[...prev,fetch])
                
                              
        //                     })
                            
                
        //             })
        //                     )
    
        //           }
        //           else{
        //             listAll(ref( storage, `2024/${`0`+i}/${j}/${filename}/${filename}/english` ))
        //             .then( (url) => 
        //               // console.log( "Got download url: ", url.items );
        //               // rough.push(url.items)
        //               url.items.forEach((x)=>{
        //                 getDownloadURL(x).then((fetch)=>{
        //                     setfemalelinks((prev)=>[...prev,fetch])
            
                          
        //                 })                
            
        //         })
        //                 )
                      
        //                 listAll(ref( storage, `2024/${`0`+i}/${j}/Anonymous/${filename}/english` ))
        //                 .then( (url) => 
        //                   // console.log( "Got download url: ", url.items );
        //                   // rough.push(url.items)
        //                   url.items.forEach((x)=>{
        //                     getDownloadURL(x).then((fetch)=>{
        //                         setfemalelinks((prev)=>[...prev,fetch])
                
                              
        //                     })
                            
                
        //             })
        //                     )
    
        //           }
    
    
                 
    
    
        //         }
    
                
        //         }
    
    
        //         else{
        //           /////////////////////////
        //           for(let j=1;j<=31;j++){
        //             j=j.toString()
        //             if(j<10){
        //               listAll(ref( storage, `2024/${i}/${`0`+j}/${filename}/${filename}/english` ))
        //               .then( (url) => 
        //                 // console.log( "Got download url: ", url.items );
        //                 // rough.push(url.items)
        //                 url.items.forEach((x)=>{
        //                   getDownloadURL(x).then((fetch)=>{
        //                     setmalelinks((prev)=>[...prev,fetch])
              
                            
        //                   })                
              
        //           })
        //                   )
                        
        //                   listAll(ref( storage, `2024/${i}/${`0`+j}/Anonymous/${filename}/english` ))
        //                   .then( (url) => 
        //                     // console.log( "Got download url: ", url.items );
        //                     // rough.push(url.items)
        //                     url.items.forEach((x)=>{
        //                       getDownloadURL(x).then((fetch)=>{
        //                         setfemalelinks((prev)=>[...prev,fetch])                  
                                
        //                       })
                              
                  
        //               })
        //                       )
    
    
        //             }
        //             else{
        //               listAll(ref( storage, `2024/${i}/${j}/${filename}/${filename}/english` ))
        //               .then( (url) => 
        //                 // console.log( "Got download url: ", url.items );
        //                 // rough.push(url.items)
        //                 url.items.forEach((x)=>{
        //                   getDownloadURL(x).then((fetch)=>{
        //                     setfemalelinks((prev)=>[...prev,fetch])
              
                            
        //                   })                
              
        //           })
        //                   ).catch((error)=>{alert("ENTER CORRECT MOTHER TOUNGE")})
                        
        //                   listAll(ref( storage, `2024/${i}/${j}/Anonymous/${filename}/english` ))
        //                   .then( (url) => 
        //                     // console.log( "Got download url: ", url.items );
        //                     // rough.push(url.items)
        //                     url.items.forEach((x)=>{
        //                       getDownloadURL(x).then((fetch)=>{
        //                         setfemalelinks((prev)=>[...prev,fetch])
                  
                                
        //                       })
                              
                  
        //               })
        //                       )
    
        //             }
    
    
                   
    
    
        //           }
                  
                  
        //         }
    
        //       }
        for(let y=2024;y>=2023;y--){
            for(let i=1;i<=12;i++){
                i=i.toString()
                y=y.toString()
                if(i<10){
                for(let j=1;j<=31;j++){
                  j=j.toString()
                  if(j<10){
                    listAll(ref( storage, `${y}/${`0`+i}/${`0`+j}/${filename}/${filename}/english` ))
                    .then( (url) => 
                      // console.log( "Got download url: ", url.items );
                      // rough.push(url.items)
                      url.items.forEach((x)=>{
                        getDownloadURL(x).then((fetch)=>{
                          setfemalelinks((prev)=>[...prev,fetch])
            
                          
                        })                
            
                })
                        )
                      
                     
                            
    
                  }
                  else{
                    listAll(ref( storage, `${y}/${`0`+i}/${j}/${filename}/${filename}/english` ))
                    .then( (url) => 
                      // console.log( "Got download url: ", url.items );
                      // rough.push(url.items)
                      url.items.forEach((x)=>{
                        getDownloadURL(x).then((fetch)=>{
                          setfemalelinks((prev)=>[...prev,fetch])
            
                          
                        })                
            
                })
                        )
                      
                        
                  }
    
    
                 
    
    
                }
    
                
                }
    
    
                else{
                  /////////////////////////
                  for(let j=1;j<=31;j++){
                    j=j.toString()
                    if(j<10){
                      listAll(ref( storage, `${y}/${i}/${`0`+j}/${filename}/${filename}/english` ))
                      .then( (url) => 
                        // console.log( "Got download url: ", url.items );
                        // rough.push(url.items)
                        url.items.forEach((x)=>{
                          getDownloadURL(x).then((fetch)=>{
                            setfemalelinks((prev)=>[...prev,fetch])
              
                            
                          })                
              
                  })
                          )
                        
                          
    
    
                    }
                    else{
                      listAll(ref( storage, `${y}/${i}/${j}/${filename}/${filename}/english` ))
                      .then( (url) => 
                        // console.log( "Got download url: ", url.items );
                        // rough.push(url.items)
                        url.items.forEach((x)=>{
                          getDownloadURL(x).then((fetch)=>{
                            setfemalelinks((prev)=>[...prev,fetch])
              
                            
                          })                
              
                  })
                          )
                        
    
                    }
    
    
                   
    
    
                  }
                  
                  
                }
    
              }
    
    
        }
          
        
    
    
        })
    
        console.log("Male-links--->",malelinks)
    
    
    }
    getfemalelinks()
    
    },[female])




    useEffect(()=>{
      const getmalelinks=()=>{
          setmalelinks([])
        
          
      
          male?.map((filename)=>{
              
          for(let y=2024;y>=2023;y--){
              for(let i=1;i<=12;i++){
                  i=i.toString()
                  y=y.toString()
                  if(i<10){
                  for(let j=1;j<=31;j++){
                    j=j.toString()
                    if(j<10){
                      listAll(ref( storage, `${y}/${`0`+i}/${`0`+j}/${filename}/${filename}/english` ))
                      .then( (url) => 
                        // console.log( "Got download url: ", url.items );
                        // rough.push(url.items)
                        url.items.forEach((x)=>{
                          getDownloadURL(x).then((fetch)=>{
                            setmalelinks((prev)=>[...prev,fetch])
              
                            
                          })                
              
                  })
                          )
                        
                       
                              
      
                    }
                    else{
                      listAll(ref( storage, `${y}/${`0`+i}/${j}/${filename}/${filename}/english` ))
                      .then( (url) => 
                        // console.log( "Got download url: ", url.items );
                        // rough.push(url.items)
                        url.items.forEach((x)=>{
                          getDownloadURL(x).then((fetch)=>{
                            setmalelinks((prev)=>[...prev,fetch])
              
                            
                          })                
              
                  })
                          )
                        
                          
                    }
      
      
                   
      
      
                  }
      
                  
                  }
      
      
                  else{
                    /////////////////////////
                    for(let j=1;j<=31;j++){
                      j=j.toString()
                      if(j<10){
                        listAll(ref( storage, `${y}/${i}/${`0`+j}/${filename}/${filename}/english` ))
                        .then( (url) => 
                          // console.log( "Got download url: ", url.items );
                          // rough.push(url.items)
                          url.items.forEach((x)=>{
                            getDownloadURL(x).then((fetch)=>{
                              setmalelinks((prev)=>[...prev,fetch])
                
                              
                            })                
                
                    })
                            )
                          
                            
      
      
                      }
                      else{
                        listAll(ref( storage, `${y}/${i}/${j}/${filename}/${filename}/english` ))
                        .then( (url) => 
                          // console.log( "Got download url: ", url.items );
                          // rough.push(url.items)
                          url.items.forEach((x)=>{
                            getDownloadURL(x).then((fetch)=>{
                              setmalelinks((prev)=>[...prev,fetch])
                
                              
                            })                
                
                    })
                            )
                          
      
                      }
      
      
                     
      
      
                    }
                    
                    
                  }
      
                }
      
      
          }
            
          
      
      
          })
      
          // console.log("Male-links--->",malelinks)
      
      
     
        }
      getmalelinks()
      
      },[male])





    console.log("table--->",statet)
  return (
    <div className='-translate-y-36' >
      


        <div className='text-center mx-auto '>

{/* {
  
malelinks?.map((student, index) => (

    
    <div className='' key={index}>{student}</div>
  
))
} */}

</div> 






    <div className='text-center font-extrabold text-4xl '>
        
       {
        statet?<div><div className=" mb-16">{statet}</div>
        {
          appliedmothertounge?
          <div className=" mt-28">
  Mother-Tounge:-{appliedmothertounge}
</div>:<div></div>
        }
        </div>:<div>Select State on Home Page </div>
       } 

    </div>
        {/* <div className='mt-56 ml-[400px] w-96'>
            <table className='  border-4  border-separate border-spacing-[40px] border-gray-900  rounded-3xl table-auto  '>
               <thead>
               <tr className=' border-4 border-gray-900  '>
                    <th className='border-4 border-gray-900  p-7 rounded-2xl bg-slate-400'>
                        Gender
                    </th>
                    <th className='border-4 border-gray-900  p-7 rounded-2xl bg-slate-400' >
                        count
                    </th>
                    <th className='border-4 border-gray-900  p-7 rounded-2xl bg-slate-400'>
                        link
                    </th>
                </tr>
                </thead> 
                <tbody>
                <tr>
                    <td className='border-4 border-gray-900  p-7 rounded-2xl bg-slate-400'>
                        Male
                    </td>
                </tr>
                <tr>
                    <td className='border-4 border-gray-900  p-7 rounded-2xl bg-slate-400'>
                        Female
                    </td>
                </tr>

                </tbody>
                
            </table>
        </div> */}



<div className=' mr-44 mt-24  ml-60'>
  {/* <div>
    <Tablemale/>
  </div> */}


<table className="shadow-lg text-4xl  font-bold border-collapse bg-slate-600">
  <tr className=" border-b-8 border-black">
    <th className="  bg-teal-100  border-black border-4 text-left px-16 py-4  font-extrabold">GENDER</th>
    <th className="   bg-teal-100  border-black border-4 text-left px-16 py-4 font-extrabold">COUNT</th>
    <th className="   bg-teal-100 border-black border-4 text-left px-16 py-4 font-extrabold">NO. OF AUDIOS</th>
    <th className="  bg-teal-100 border-black border-4 text-left px-16 py-4 font-extrabold">AUDIOS</th>
  </tr>
  <tr
    className=""
    tabIndex="0"
  >
    <td className=" border-black border-4 px-16 py-4">Male</td>
    <td className=" border-black border-4 px-16 py-4">{male.length}</td>
    <td className=" border-black border-4 px-16 py-4">{loading ?<div className='flex-col  text-base'><RingLoader color="#393E46"  size={50} className='mx-auto'/> <div>Fetching Audios
      <br/>
      <div className=" text-xs">
      This May Take A While
      </div>
       
    </div></div>:<div>{malelinks.length}</div>}</td>
    <td className=" border-black border-4 px-16 py-4"><Link to='/Male' className=" underline"> Link</Link></td>
    {/* <td className={` border-black border-4 px-16 py-4  ${maleaudio?"opacity-20 text-2xl":""}`}><button onClick={()=>navigate("/Male")} >Link</button></td> */}
  </tr>
  <tr
   className=""
    tabIndex="0"
  >
    <td className=" border-black border-4 px-8 py-4">Female</td>
    <td className=" border-black border-4 px-8 py-4">{female.length}</td>
    <td className=" border-black border-4 px-16 py-4">{loading ?<div className='flex-col  text-base'><RingLoader color="#393E46"  size={50} className='mx-auto'/> <div>Fetching Audios
      <br/>
      <div className=" text-xs">
      This May Take A While
      </div>
       
    </div></div>:<div>{femalelinks.length}</div>}</td>
    <td className=" border-black border-4 px-16 py-4"><Link to='/Female' className=" underline"> Link</Link></td>  </tr>
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
{/* 
<div>
{
  maleaudio?<div>
    <Audio2 audioinfo={malelinks} />
    </div>:<div></div>
}
</div>
<div>
{
  femaleaudio?<div>
    <Audio2 audioinfo={femalelinks} />
    </div>:<div></div>
}
</div> */}
<div>
  <Filters malelinks={malelinks} femalelinks={femalelinks} />
</div>




    </div>
  )
}
