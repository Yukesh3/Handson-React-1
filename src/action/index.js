export const incNum=(num)=>{
    return {
        type:"INCREMENT",
        load: num
    }
}

export const decNum=()=>{
    return {
        type:"DECREMENT"
    }
}
