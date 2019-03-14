import {AddData} from '../reducer/player'
export const AddDataAction=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:AddData,
            data:data
        }
        );

    }
}

export const EditDataAction=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:AddData,
            data:data
        }
        );

    }
}