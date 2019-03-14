import {AddData, EditData} from '../reducer/player'
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
            type:EditData,
            data:data
        }
        );

    }
}
export const DeleteDataAction=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:EditData,
            data:data
        }
        );

    }
}