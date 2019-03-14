INITIAL_STATE={
    player:[],
    addplayer:[]
};
export const Fetch
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
