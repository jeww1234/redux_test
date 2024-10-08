

let initialState = {
    count:0,
    id:"",
    password:""
}



function reducer(state=initialState,action){
    console.log(action)
    switch(action.type){
        case "INCREMENT":
            return {...state,count:state.count + action.payload.num};
            case "DECREMENT":
                return {...state,count:state.count - 1};    
        case "login":
            return {...state,id:action.payload.id , password:action.payload.password}
        case "RESET":
            return {...state,count:state.count = 0}    
        default:
            return {...state}
    }
}


export default reducer