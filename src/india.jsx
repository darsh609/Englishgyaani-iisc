import { VectorMap } from '@react-jvectormap/core'
import React from 'react'
// import inMill from "@react-jvectormap/india/dist/inMill.json"
import {inMill} from '@react-jvectormap/india'
import {assets, colorscale, raajya} from "./State"

 const India = () => {
  return (
    <div  className='mx-auto w-[full]'>
        <div>
            GET BY MAP
        </div>
        <div className='w-[800px] h-[900px] mx-auto mt-80 '>
        <VectorMap map={inMill}
        containerStyle={{width:"700px",
            height:"600px",
        }}
        backgroundColor='#282c34'
        series={{
            regions:[
                {
                    values:assets,
                    scale:colorscale,
                    min:0,
                    max:100
                }

            ]
        }}
        onRegionSelected={ function(){
            // if (window.localStorage) {
            //   window.localStorage.setItem(
            //     'jvectormap-selected-regions',
            //     JSON.stringify(map.getSelectedRegions())
            //   );
            // }
            
          }}
        onRegionTipShow={function reginalTip(event,label,code){
            return label.html(`
                <div style="background-color:black; border-radius:6px; min-height:60px; width:400px">
                <b>
                (${label.html()})
                </b>
                <p>
                Male-${assets[code][0]}
                
                </p>
                <p>
                female-${assets[code][1]}
                </p>
                </div>

                `)
        }}
        onViewportChange={
            function onview(event,scale){
                // return label.html(`
                //     <div>
                //     (${label.html()})
                //     </div>
                //     `)
                

            }
        }
        
        
        />
        

    </div>
    

    </div>
    

        


    
  )
}
export default India;