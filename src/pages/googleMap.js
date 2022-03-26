import React from 'react'
import "../css/google.css"
import MAP from '../picture/MAP.png'
function GoogleMap(){

let googleMaps=(<div className="googleMap">


<iframe  title="myFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15665.117830082085!2d76.126683!3d11.017647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa06c470ad135702d!2sHeavens%20Convention%20center!5e0!3m2!1sen!2sin!4v1577719067341!5m2!1sen!2sin" 
style={{width :"500px",height:"250px", frameborder:0,border:0,allowfullscreen:""}}  ></iframe>
</div>)


let googleMapss=(<div className="googleMapss">


<iframe  title="myFrames" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15665.117830082085!2d76.126683!3d11.017647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa06c470ad135702d!2sHeavens%20Convention%20center!5e0!3m2!1sen!2sin!4v1577719067341!5m2!1sen!2sin"
style={{width :"250px",height:"250x", frameborder:0,border:0,allowfullscreen:""}}  ></iframe>

</div>)


let Narkkilakkad=
(<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.79809809599!2d75.31401744950838!3d12.329372291236682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba460c0ea5cc909%3A0xd585d024e4bb61f4!2sMalankara%20Church!5e0!3m2!1sen!2sin!4v1648304851324!5m2!1sen!2sin"
style={{width:"100",height:"100",border:0}}
 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>)
return (
<div>
{Narkkilakkad}
</div>)

}

export default GoogleMap