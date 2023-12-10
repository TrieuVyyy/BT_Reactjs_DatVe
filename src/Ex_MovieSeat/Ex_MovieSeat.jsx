import React from 'react'
import Seat_Confirm from './Seat_Confirm'
import Start_Selection from './Start_Selection'
import "./style.css"
import bgmovie from './asset/bgmovie.jpg'

export default function Ex_MovieSeat() {
  return (
    <div className='seats_container' style={{background:`url(${bgmovie})`}}>



      <Start_Selection/>
      <Seat_Confirm/>
    </div>
  )
}
