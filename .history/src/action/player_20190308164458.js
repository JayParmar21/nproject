import {}
export const addDataToCartAction=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:addDataToCart,
            data:data
        }
        );

    }
}