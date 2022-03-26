import React from 'react'
import Eldhose from "../picture/eldhose.jpg"


 const Head=(props)=>{
const {isTyping}=props

    return(<div className='head'>
<div>
    <img className='profile' src={Eldhose} />
</div>
<div className='typing'>
    
<h3 style={{color:"white"}}>
        {isTyping?"typing...":""}
      </h3>

</div>
    </div>)
}
export default Head