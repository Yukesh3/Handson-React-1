const ChangeTheNumber=( state=0, action)=>{
    switch (action.type) {
        case "INCREMENT":
            return state+action.load;
            
        case "DECREMENT":
            return state-1;
           
        default:
            return state;
    }
}
export default ChangeTheNumber;

