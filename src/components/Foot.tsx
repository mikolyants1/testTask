import { action0, ref } from "./App";
import useStore, { func1, store } from "./store";
import { foot, toogle } from "./style";

interface props {
    count:number,
    mass:ref[],
    dispatch:(value:action0)=>void
}

export default function Footer({count,mass,dispatch}:props):JSX.Element{
 const clearList:func1=useStore((state:store)=>state.clearList)
    return (
        <div css={foot}>
          <div>
            {count} items left
          </div>
          <div css={toogle}>
           {mass.map(({name,ref,style}:ref,i:number):JSX.Element=>(
             <div key={i} css={style} ref={ref}
              onClick={()=>dispatch({type:i})}>
                {name}
             </div>
            ))}
          </div>
          <div onClick={clearList}>
            Clear completed
          </div>
        </div>
    )
}