export const initialValue = {
    typeoff:'sell',
    parking:false,
    offer:false,

}


export const listingReducer = (state,action) => {
    console.log(action)
    switch (action.type) {
        case 'choose':
            return {...initialValue,typeoff:action.name}
            
            break;
        
        case 'bolean':
           console.log(action)
    
        default:
            break;
    }
    
}