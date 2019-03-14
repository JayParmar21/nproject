import {FetchData,AddData} from '../reducer/player'
export const addDataAction=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:AddData,
            data:data
        }
        );

    }
}