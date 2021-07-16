import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapBookingTicket extends Component {

    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index}></HangGhe>
            </div>
        })
    }

    render() {
        return (
            <div className="bookingMovie" style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url(./img/bookingTicket/bgmovie.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center">
                                <div className="display-4 text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN</div>
                                <div className="text-light mt-1 ml-5" style={{ fontSize: '25px', marginRight: 200 }}>Màn hình</div>
                                <div className="mt-1" style={{marginLeft: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div className="screen"></div>

                                    {this.renderHangGhe()}
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="mt-2 text-light" style={{ fontSize: '37px' }}>DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTinDatGhe></ThongTinDatGhe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
