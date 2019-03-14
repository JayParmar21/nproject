const INITIAL_STATE={
    player:[{id:1,firstName:'virat',lastname:'sharma',score:100},
    {id:2,firstName:'rahul',lastname:'patel',score:150},
    {id:3,firstName:'vikas',lastname:'khanna',score:120},
    {id:4,firstName:'naimish',lastname:'sharma',score:200},
    {id:5,firstName:'omkar',lastname:'patel',score:110},],
    addplayer:[]
};
export const FetchData='FetchData';
export const AddData='AddData';

export default (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case 'FetchData':{
            Object.assign({},state,{player:state})
        }
        default:
            return state
    }
} 
