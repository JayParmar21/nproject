INITIAL_STATE={
    player:[],
    addplayer:[]
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case 'FetchData':{
            Object.assign({})
        }
        default:
            return state
    }
}
