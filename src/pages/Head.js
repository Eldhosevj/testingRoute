import React from 'react'
import Eldhose from "../picture/eldhosevj.jpg"
import totalDay from "../componets/totalDayLeft"

 const Head=(props)=>{
const {isTyping,canShowRemainingDay}=props

const totalDayLeftForMarriage=totalDay()
const marriageDaySentence=totalDayLeftForMarriage==0?"Today is our marriage":totalDayLeftForMarriage==1?"There is only one day left for our marriage":`There are ${totalDay()} days left for our marriage`

const classNameForType=canShowRemainingDay? "typingCompleted":"typing"
    return(<div className='head'>
<div>
    <img className='profile' src={Eldhose} />
</div>
<div className={classNameForType}>
    
<h3 style={{color:"white"}}>
        {isTyping?"Typing...":canShowRemainingDay?marriageDaySentence: ""}
      </h3>

</div>
    </div>)
}
export default Head