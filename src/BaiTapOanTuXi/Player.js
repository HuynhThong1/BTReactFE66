import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Player extends Component {




    render() {
        console.log(this.props.mangDatCuoc)
        return (
            <div className="text-center playerGame">
                <div className="choice">
                    <img width={100} height={100} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 170 }} src="./img/player.png" alt="player" />

                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {
                        //Xét giá trị đặt cược thêm viền item được chọn

                        let border = {};
                        if (item.datCuoc) {
                            border = { border: '3px solid orange' }
                        }
                        return <div className="col-4" key={index}>
                            <button style={border} className="btnItem" onClick={() => {
                                this.props.datCuoc(item.ma)
                            }}>
                                <img width={50} height={50} src={item.hinhAnh} alt="..." />
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.stateUser.mangDatCuoc,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            const action = {
                type: 'CHON_KEO_BUA_BAO',
                payload: maCuoc
            }

            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
