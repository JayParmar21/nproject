import {} from '../reducer/player'
export const addDataToCartAction=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:addDataToCart,
            data:data
        }
        );

    }
}