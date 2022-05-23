import { useState } from "react";

export const useCounter = (init:number) => {

const [value,setValue]=useState(init);
    

const inc=(payload=1)=>{
setValue(value+payload);
}
const dec=(payload=1)=>{
    setValue(value-payload);
}

const set=(payload:number)=>{
    setValue(payload);
}

return {value,inc,dec,set};


};
