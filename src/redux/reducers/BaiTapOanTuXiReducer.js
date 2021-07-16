const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: true },
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: false },
    ],
    ketQua: 'You win!!!',
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/keo.png' }
}


const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'CHON_KEO_BUA_BAO': {
            //reset mảng cược
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.payload) {
                    return { ...item, datCuoc: true }
                }
                //dổi tất cả datCuoc thành false
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state };
        }

        case 'RANDOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

            state.computer = quanCuocNgauNhien;
            return { ...state }
        }

        case 'END_GAME': {
            state.soBanChoi +=1;
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'DRAW!!!'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'YOU LOSE!!!'
                    } else {
                        state.ketQua = 'YOU WON!!!'
                        state.soBanThang++;
                    };
                    break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'YOU WON!!!'
                        state.soBanThang++;
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'DRAW!!!'
                    } else {
                        state.ketQua = 'YOU LOSE!!!'
                    };
                    break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'YOU LOSE!!!'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'YOU WON!!!'
                        state.soBanThang++;
                    } else {
                        state.ketQua = 'YOU LOSE!!!'
                    };
                    break;
                default:
                    state.ketQua = 'YOU WON!!!'
                    state.soBanThang++;
            }
        }
        
        return {...state}

        default: return { ...state }
    }
}

export default BaiTapOanTuXiReducer;