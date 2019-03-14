import {AddData, EditData, DeleteData} from '../reducer/player'
export const FetchDataAction=()=>{
    return (dispatch)=>{
        dispatch({
            type:FetchData,
            data:data
        }
        );

    }
}
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
export const DeleteDataAction=(id)=>{
    return (dispatch)=>{
        dispatch({
            type:DeleteData,
            id:id
        }
        );

    }
}