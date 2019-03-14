INITIAL_STATE={
    player:[{id:1,firstName:'virat',lastname:'sharma',score:100},],
    addplayer:[]
};
export const FetchData='FetchData'

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
