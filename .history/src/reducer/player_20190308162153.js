INITIAL_STATE={
    player:[],
    addplayer:[]
};
export const FetchData='Fetch'
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
