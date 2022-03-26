
import React, { Component } from 'react'
import findTottalDayToMarriage from './totalDayLeft'

var show = []

class date extends Component {
    state = {
        date: null, time: null, tottalDayleftToMarriage: null, showTHis: [], textAlignCenterProperty: false,
        tottalDayleftToMarriages: ""

    }


    howManyDayLeft = () => {

        let tottalDayleftToMarriage = findTottalDayToMarriage()


        if (tottalDayleftToMarriage === 0) {

            let string = " hope all of your cordination to make today as a most beautiful day in my life "
            this.setState({ ...this.state, tottalDayleftToMarriage: string })

        }

        else if (tottalDayleftToMarriage < 0) {
            let string = " thank you for all of you ,as you graced my marriage occasion with your presence "
            this.setState({ ...this.state, tottalDayleftToMarriage: string })

        }




        else {


            let string = `only ana ${tottalDayleftToMarriage} days left for my Marriage day. Hope you all can postpone your busy shedule on that day `

            this.setState({ ...this.state, tottalDayleftToMarriage: string })

        }


    }


    animateText = (a) => {

        let { tottalDayleftToMarriage } = { ...this.state }
console.log(tottalDayleftToMarriage," sd i am elhdose")
        if (a < tottalDayleftToMarriage.length) {

            show.push(tottalDayleftToMarriage[a])
            this.setState({ ...this.state, showTHis: show })

        }


        if (a === tottalDayleftToMarriage.length) {

            this.setState({ ...this.state, textAlignCenterProperty: true })
        }

    }


    componentDidMount() {
        var a = 0

        this.howManyDayLeft()



        setInterval(() => {

            this.animateText(a)
            a = a + 1

        }, 100)




    }


    render() {
        let show = this.state.showTHis

        let lastLetterColor = show.map((text, i, arrays) => {


            if (arrays.length - 1 === i) {

                return (<span key={i} style={{ color: "red" }}>{text}</span>)

            }




            else {
                return text
            }

        })



        return (
            <div>
                <div className='dateCalculator'>

                    <h1 style={this.state.textAlignCenterProperty ? { fontSize: "15px", textAlign: "center" } : { fontSize: "15px" }}>


                        {lastLetterColor}
                    </h1>

                </div>

            </div>
        )
    }
}
export default date