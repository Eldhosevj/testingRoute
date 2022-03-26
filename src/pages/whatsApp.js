import React,{useEffect,useState} from 'react'
import "../../src/css/WhatsApp.css"
import SaveDate from '../pages/saveDate'
import GoogleMap from '../pages/googleMap'
import Head from './Head'
import alinaImg from "../picture/alina.JPG"
import AlinaAndEldhose from "../picture/AlinaAndEldhose.jpg"

import Eldhose from "../picture/eldhose.jpg"

const WhatsApp=(props)=>{
const alina=(  <div className='set-background-image'>

<div className='msg-background-alina' id="alina">
<img src={alinaImg}  style={{width:"240px" ,height:"170px"
}}  />
<p className='whats-app-pargraph' style={{color:"white"}}>Hi I am Alina</p>
</div>

</div>
)

const eldhose=(
  
<div className='set-background-image'>
<div className='msg-background-eldhose' id="eldhose">
<img src={Eldhose}  style={{width:"180px" ,height:"260px"
}}  />
<p className='whats-app-pargraph' style={{color:"white"}}>Hi I am Eldhose</p>
</div>
</div>
)
const we=(
  <div className='set-background-image'>
<div className='msg-background-we' id="we">
<img src={AlinaAndEldhose}  style={{width:"200px" ,height:"125px"
}}  />
<p className='whats-app-pargraph' style={{color:"white"}}>
We cherish the roles you play in our lives
And would be honored if you would join us
As we enter into the journey of marriage
Eldhose VJ
and
Alina Mathew
Will exchange wedding vows
Monday, 30<sup>th</sup> may 2022
at 10 o’clock in the morning
Malakara Cathalic Church, Narkkilakkad
 
</p>
</div>
</div>

)
const saveDate=(
  <div className='msg-background-save-date' id="save-date">

<SaveDate />
</div>

)

const map=(
  
 <div className='msg-background-save-location' id="map">
 <GoogleMap/>
 <p className='whats-app-pargraph' style={{color:"white"}}>Location</p>
 
  </div>
    
)
const array=[
 map,saveDate, we, eldhose,alina
]  

const [displayChat,setDisplayChat]=useState([])
const [isTyping,setIsTyping]=useState(true)  

const [arrayLenght,setArrayLenght]=useState(0)  

// React.useEffect(()=>{

// //  setIsTyping(false)
// },[displayChat])


React.useEffect(()=>{

setTimeout(()=>{
let array=[alina]
setDisplayChat(array)
setIsTyping(false)
},2000)


setTimeout(()=>{

  setIsTyping(true)
  },4000)
  
setTimeout(()=>{
  let array=[alina,eldhose]
  setDisplayChat(array)
setIsTyping(false)
document.getElementById("eldhose").scrollIntoView({behavior:"smooth"})      
  
  },6000)
  
  setTimeout(()=>{

    setIsTyping(true)
    },8000)
  
    setTimeout(()=>{
      let array=[alina,eldhose,we]
      setDisplayChat(array)
    setIsTyping(false)
document.getElementById("we").scrollIntoView({behavior:"smooth"})      
      },10000)
       

      setTimeout(()=>{

        setIsTyping(true)
        },12000)


        setTimeout(()=>{
          let array=[alina,eldhose,we,saveDate]
          setDisplayChat(array)
        setIsTyping(false)
    document.getElementById("save-date").scrollIntoView({behavior:"smooth"})      
          },14000)
           

          
      setTimeout(()=>{

        setIsTyping(true)
        },16000)

        setTimeout(()=>{
          let array=[alina,eldhose,we,saveDate,map]
          setDisplayChat(array)
        setIsTyping(false)
    document.getElementById("map").scrollIntoView({behavior:"smooth"})      
          },20000)
           


      },[])

    return(

    <div className='containier'>
<Head
isTyping={isTyping}
/>
{
  displayChat.map(item=>item)
}


    </div>

    )
}

export default WhatsApp