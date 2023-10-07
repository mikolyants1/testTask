import {ChangeEvent,useEffect} from 'react'
import { Check,Item } from './style'
type props={
item:string[]|null
show:number,
del?:number[],
check:(e:ChangeEvent<HTMLInputElement>,item:string,i:number)=>void
}
type union=JSX.Element|null
export function All({item,show,del,check}:props):union{
if (show==1&&item){
useEffect(()=>{
const line:NodeListOf<HTMLDivElement>=document.querySelectorAll('.text')
const check:NodeListOf<HTMLInputElement>=document.querySelectorAll('#check1')
del?.forEach((i:number):void=>{
  line[i].style.textDecoration='line-through'
  line[i].style.color='grey'
  check[i].checked=true
    })
  },[])
 return <>
      {item.map((item:string,i:number):JSX.Element=>(
           <div css={Item} key={i}>
            <input type="checkbox" id='check1' css={Check}
             onChange={(e):void=>check(e,item,i)} />
             <div className='text'>
              {item}
              </div>
            </div>
           ))}
        </>
    } 
return null
}
export function Active({item,show,check}:props):union{
if (show==1&&item){
  return <>
       {item.map((item:string,i:number):JSX.Element=>(
           <div css={Item} key={i}>
            <input type="checkbox" disabled={true} css={Check}
            onChange={(e):void=>check(e,item,i)} />
             <div className='text'>
              {item}
              </div>
            </div>
           ))}
       </>
    }
    return null
}
export function Del({item,show,check}:props):union{
    enum style{
      textDecoration='line-through',
      color='grey'
    }
    if (show==1&&item){
    return <>
         {item.map((item:string,i:number):JSX.Element=>(
           <div css={Item} key={i}>
            <input type="checkbox" checked css={Check}
             onChange={(e):void=>check(e,item,i)} />
             <div style={style}>
                {item}
              </div>
            </div>
           ))}
        </>
    }
    return null
}