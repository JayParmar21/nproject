INITIAL_STATE={
    player:[{id:1,firstName:'virat',lastname:''}],
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
