import React, { Component } from 'react';
import Xe from './Xe';
import Modal from './Modal';

export default class BTChiTietXe extends Component {

    danhSachXe = [
        { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
        { id: 3, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
    ];

    state = {
        chiTietXe: {id: 3, name: 'Steel car', img: './img/steel-car.jpg', price: 4000}
    }

    xemChiTietXe = (xeClick) => {
        this.setState({
            chiTietXe: xeClick
        });
    }

    renderXe = () => {
        return this.danhSachXe.map((xe, index) => {
            return <div className="col-3" key={index}>
                <Xe x={xe} xemChiTietXe={this.xemChiTietXe}></Xe>
            </div>
        })
    }

    render() {
        return (
            <div className="container">
                <Modal content={this.state.chiTietXe}></Modal>
                <h3>Danh Sách Xe</h3>
                <div className="row">
                    {this.renderXe()}
                </div>
            </div>
        )
    }
}
