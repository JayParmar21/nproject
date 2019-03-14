import { debug } from "util";

const INITIAL_STATE={
    player:[{id:1,firstName:'virat',lastName:'sharma',score:100},
    {id:2,firstName:'rahul',lastName:'patel',score:50},
    {id:3,firstName:'vikas',lastName:'khanna',score:20},
    {id:4,firstName:'naimish',lastName:'sharma',score:80},
    {id:5,firstName:'omkar',lastName:'patel',score:40},],
    addplayer:[]
};
export const FetchData='FetchData';
export const AddData='AddData';
export const EditData='EditData';
export const DeleteData='DeleteData'

export default (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case 'FetchData':{
            debugger
            let playerdetail=[...state.player]
            playerdetail.sort()
            console.log('array',playerdetail)
            return Object.assign({},state,playerdetail)
        }
        case 'AddData':{
            const player=state.player.concat(action.data)
            return Object.assign({},state,{player:player})
        }
        case 'EditData':{
            const eid=action.data.id
            let i=0
            let index
            let playerdetail=[...state.player]
            playerdetail.map((player)=>{
                if (eid===player.id)
                {
                    index=i;
                }
                i=i+1;
            })

            playerdetail[index]={...action.data}
            return Object.assign({},state,{player:playerdetail})
        }
        case 'DeleteData':{
            let i=0
            let index
            let playerdetail=[...state.player]
            playerdetail.map((player)=>{
                if (action.id===player.id)
                {
                    index=i;
                }
                i=i+1;
            })
            playerdetail.splice(index,1)
            return Object.assign({},state,{player:playerdetail})
        }
        default:
            return state
    }
} 
