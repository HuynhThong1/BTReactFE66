import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Computer extends Component {
    render() {


        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -20PX;}
            25% { top: 30px;}
            50% { top: -20px;}
            75% { top: 30px;}
            100% { top: 0px;}
          }`


        return (
            <div className="text-center playerGame">
                <style>
                    {keyframe}
                </style>
                <div className="choice" style={{position: 'relative'}}>
                    <img style={{ position: 'absolute',left: '30%', overflow: 'hidden', animation: `randomItem${Date.now()} 0.5s`, transform: 'rotate(180deg)' }} width={100} height={100} src={this.props.computer.hinhAnh} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 170 }} src="./img/playerComputer.png" alt="player" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.stateUser.computer
    }
}

export default connect(mapStateToProps)(Computer);
