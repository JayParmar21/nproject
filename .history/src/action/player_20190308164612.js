import {FetchData,AddData} from '../reducer/player'
export const addDataToCartAction=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:addData,
            data:data
        }
        );

    }
}