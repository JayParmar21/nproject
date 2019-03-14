const INITIAL_STATE={
    player:[{id:1,firstName:'virat',lastName:'sharma',score:100},
    {id:2,firstName:'rahul',lastName:'patel',score:150},
    {id:3,firstName:'vikas',lastName:'khanna',score:120},
    {id:4,firstName:'naimish',lastName:'sharma',score:200},
    {id:5,firstName:'omkar',lastName:'patel',score:110},],
    addplayer:[]
};
export const FetchData='FetchData';
export const AddData='AddData';
export const EditData='EditData';

export default (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case 'FetchData':{
            return Object.assign({},state,{player:state})
        }
        case 'AddData':{
            const player=state.player.concat(action.data)
            return Object.assign({},state,{player:player})
        }
        case 'EditData':{
            const eid=action.data.id
            const i=0,index
            state.player.map((player)=>{
                if (eid===player.id)
                {
                    index=i;
                }
                i=i+1;
            })

            state.player[i]={...action.data}
            return Object.assign({},state,{player:player})
        }
        default:
            return state
    }
} 
