import React from 'react'
import Seat_Confirm from './Seat_Confirm'
import Start_Selection from './Start_Selection'
import './style.css'
import bgmovie from './asset/bgmovie.jpg'

export default function Ex_MovieSeat() {
  return (
    <div className='container'>
      <h1>MOVIE SEAT SELECTION</h1>

      <div className='seats_content'>
        <div className="inputForm">

                <h4>Fill the required details below and select your seats</h4>
                <div className="mr_agilemain">
                    <div className="agileits-left">
                        <label> Name
                            <span>*</span>
                        </label>
                        <input type="text" id="Username" required=""/>
                    </div>
                    <div className="agileits-right">
                        <label> Number of Seats
                            <span>*</span>
                        </label>
                        <input type="number" id="Numseats" required="" min="1"/>
                    </div>
                </div>
                <button>Start Selecting</button>
        </div>

        <ul className="seat_w3ls">
                <li className="smallBox greenBox">Selected Seat</li>

                <li className="smallBox redBox">Reserved Seat</li>

                <li className="smallBox emptyBox">Empty Seat</li>
        </ul>

        <div className="seatStructure txt-center">
                <p id="notification"></p>
                <table id="seatsBlock">
                    
                    <tbody><tr>
                        <td></td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td></td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>

                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>
                            <input type="checkbox" className="seats" value="A1" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="A2" disabled=""/>
                        </td>
                        <td>

                            <input type="checkbox" className="seats" value="A3" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="A4" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="A5" disabled=""/>
                        </td>
                        <td class="seatGap"></td>
                        <td>
                            <input type="checkbox" className="seats" value="A6" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="A7" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="A8" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="A9" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="A10" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="A11" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="A12" disabled=""/>
                        </td>
                    </tr>

                    <tr>
                        <td>B</td>
                        <td>
                            <input type="checkbox" className="seats" value="B1" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="B2" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="B3" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="B4" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="B5" disabled=""/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" className="seats" value="B6" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="B7" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="B8" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="B9" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="B10" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="B11" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="B12" disabled=""/>
                        </td>
                    </tr>

                    <tr>
                        <td>C</td>
                        <td>
                            <input type="checkbox" className="seats" value="C1" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="C2" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="C3" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="C4" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="C5" disabled=""/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" className="seats" value="C6" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="C7" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="C8" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="C9" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="C10" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="C11" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="C12" disabled=""/>
                        </td>
                    </tr>

                    <tr>
                        <td>D</td>
                        <td>
                            <input type="checkbox" className="seats" value="D1" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="D2" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="D3" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="D4" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="D5" disabled=""/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" className="seats" value="D6" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="D7" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="D8" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="D9" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="D10" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="D11" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="D12" disabled=""/>
                        </td>
                    </tr>

                    <tr>
                        <td>E</td>
                        <td>
                            <input type="checkbox" className="seats" value="E1" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="E2" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="E3" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="E4" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="E5" disabled=""/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" className="seats" value="E6" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="E7" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="E8" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="E9" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="E10" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="E11" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="E12" disabled=""/>
                        </td>
                    </tr>

                    <tr className="seatVGap"></tr>

                    <tr>
                        <td>F</td>
                        <td>
                            <input type="checkbox" className="seats" value="F1" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="F2" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="F3" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="F4" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="F5" disabled=""/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" className="seats" value="F6" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="F7" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="F8" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="F9" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="F10" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="F11" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="F12" disabled=""/>
                        </td>
                    </tr>

                    <tr>
                        <td>G</td>
                        <td>
                            <input type="checkbox" className="seats" value="G1" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="G2" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="G3" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="G4" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="G5" disabled=""/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" className="seats" value="G6" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="G7" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="G8" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="G9" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="G10" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="G11" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="G12" disabled=""/>
                        </td>
                    </tr>

                    <tr>
                        <td>H</td>
                        <td>
                            <input type="checkbox" className="seats" value="H1" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="H2" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="H3" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="H4" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="H5" disabled=""/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" className="seats" value="H6" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="H7" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="H8" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="H9" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="H10" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="H11" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="H12" disabled=""/>
                        </td>
                    </tr>

                    <tr>
                        <td>I</td>
                        <td>
                            <input type="checkbox" className="seats" value="I1" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="I2" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="I3" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="I4" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="I5" disabled=""/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" className="seats" value="I6" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="I7" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="I8" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="I9" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="I10" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="I11" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="I12" disabled=""/>
                        </td>
                    </tr>

                    <tr>
                        <td>J</td>
                        <td>
                            <input type="checkbox" className="seats" value="J1" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="J2" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="J3" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="J4" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="J5" disabled=""/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" className="seats" value="J6" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="J7" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="J8" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="J9" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="J10" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="J11" disabled=""/>
                        </td>
                        <td>
                            <input type="checkbox" className="seats" value="J12" disabled=""/>
                        </td>
                    </tr>
                </tbody></table>

                <div className="screen">
                    <h2 className="wthree">Screen this way</h2>
                </div>
                <button onClick={() =>{

                }} disabled="">Confirm Selection</button>
        </div>

        <div className="displayerBoxes txt-center">
                <table className="Displaytable w3ls-table" width="100%">
                    <tbody><tr>
                        <th>Name</th>
                        <th>Number of Seats</th>
                        <th>Seats</th>
                    </tr>
                    <tr>
                        <td>
                            <textarea id="nameDisplay"></textarea>
                        </td>
                        <td>
                            <textarea id="NumberDisplay"></textarea>
                        </td>
                        <td>
                            <textarea id="seatsDisplay"></textarea>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
      </div>
      

      {/* <Start_Selection/>
      <Seat_Confirm/> */}
    </div>
  )
}
