import { combineReducers, createStore } from 'redux';
import BaiTapOanTuXiReducer from './reducers/BaiTapOanTuXiReducer'
import BaiTapDatVeReducer from './reducers/BaiTapDatVeReducer';


const rootReducer = combineReducers({
    //Liệt kê các state của ứng dụng
    stateUser: BaiTapOanTuXiReducer,
    BaiTapDatVeReducer,
})


export const store = createStore(rootReducer,
    
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());