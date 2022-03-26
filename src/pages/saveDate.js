import React from 'react'
 import "../../src/css/saveDate.css"
import Dates from '../componets/date'
 function saveDate(){

let saveDates=(<div className='main-div'>
<div className='sub-div'>
<div className='save'><p>Save</p>

</div>

<div className='date'>

<p><span><sup>the</sup> </span>Date
</p>
<br/>

</div>

<div className='undeline'>
<div className='first-undeline'>

<p ><span style={{fontSize:"35px"}}>30</span> <sup>th</sup> of May 2022 </p>

<h2 className='name'>
<span className='Aslar'>Eldhose </span> 
<div className='love'>
<div className='love-first'></div>
<div className='love-second'></div>

</div>


 <span className='Aysha'>Alina</span>
 </h2>
</div>
<div>
   </div>

</div>
</div>
</div>
)

return (<div className='main-save-date'>
    {saveDates}


</div>)

}
export default saveDate
/*
*/