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
            const i=0
            state.player.map((player)=>{
                i=i+1;
                if (eid===player.id)
                {
                    break
                    player.firstName=action.data.firstName
                    player.lastName=action.data.lastName
                    player.score=action.data.score
                }
            })
            const player=state.player.concat(action.data)
            return Object.assign({},state,{player:player})
        }
        default:
            return state
    }
} 
