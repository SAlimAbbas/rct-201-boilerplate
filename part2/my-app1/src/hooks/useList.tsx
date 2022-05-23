import { listenerCount } from "process"
import { useState } from "react"

export const useList = (arr:any) => {
    const [list,setList]=useState(arr);


    const push=(payload:number)=>{
        setList([...list,payload]);
    }
    const pop=()=>{
        let tp=[...list]
        tp.pop()
        setList(tp);
    }
    const reset=()=>{
        setList(arr);
    }
    const clear=()=>{
        setList([]);
    }
    const map=(el:any)=>{
        let b=[...list];
        b=b.map((el)=>{return el*2});
        setList([...b]);
    }

    return [list,{push,pop,clear,reset,map}]
}
