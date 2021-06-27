import React, { Component } from 'react'

export default class Xe extends Component {
    render() {

        let { x } = this.props;
        let {xemChiTietXe} = this.props;
        return (
            <div className="card">
                <img src={x.img} alt="..." height={150} />
                <div className="card-body">
                    <h3>{x.name}</h3>
                    <p>{x.price}</p>
                    <button className="btn btn-success" data-toggle="modal" data-target="#chiTietXe" onClick={() => {
                        xemChiTietXe(x);
                    }}>XemChiTiet</button>
                </div>
            </div>
        )
    }
}
