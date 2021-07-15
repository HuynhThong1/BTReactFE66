import React, { Component } from 'react'
import {connect} from 'react-redux'

export class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="display-4 mb-3 text-warning">
                    {this.props.ketQua}
                </div>
                <div className="display-4 mb-3 text-success">
                    Score: <span className="text-warning">{this.props.soBanThang}</span>
                </div>
                <div className="display-4 mb-3 text-success">
                    Game count: <span className="text-warning">{this.props.soBanChoi}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.stateUser.ketQua, 
        soBanThang: state.stateUser.soBanThang,
        soBanChoi: state.stateUser.soBanChoi,
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi);
