import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Player from './Player'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import {connect} from 'react-redux'


export class BaiTapOanTuXI extends Component {
    render() {

        return (
            <div className="gameOanTuXi">
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player/>
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi/>
                        <button className="btn btn-default p-2" onClick={() => {
                            this.props.playGame()
                        }}>Play Game</button>
                    </div>
                    <div className="col-4">
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        playGame: () =>{

            let count = 0;
            //Khai báo hàm lặp đi lặp lại

            let randomComputerItem = setInterval(() => {
                const action = {
                    type: 'RANDOM',
                }
                dispatch(action)
                count++;
                if(count > 10){
                    clearInterval(randomComputerItem);

                    dispatch({
                        type: 'END_GAME',
                        
                    })
                }
            }, 100)
            
        }
    }
}

export default connect(null, mapDispatchToProp) (BaiTapOanTuXI)
