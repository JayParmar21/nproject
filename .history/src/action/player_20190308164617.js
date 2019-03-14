import {FetchData,AddData} from '../reducer/player'
export const addDataToCartAction=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:AddData,
            data:data
        }
        );

    }
}