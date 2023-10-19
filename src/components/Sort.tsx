import {ChangeEvent,useEffect} from 'react'
import { Check,Checked,Item } from './style'
type props={
item:string[]|null
show:number,
del?:number[],
check:(item:string,i:number)=>
(e:ChangeEvent<HTMLInputElement>)=>void
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
          <input type="checkbox" css={Check}
           onChange={check(item,i)} id='check1' />
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
            <input type="checkbox" disabled={true}
             onChange={check(item,i)} css={Check} />
             <div>
              {item}
            </div>
          </div>
          ))}
       </>
    }
    return null
}
export function Del({item,show,check}:props):union{
  if (show==1&&item){
    return <>
         {item.map((item:string,i:number):JSX.Element=>(
           <div css={Item} key={i}>
              <input type="checkbox" css={Check}
               onChange={check(item,i)} checked />
              <div css={Checked}>
                {item}
              </div>
            </div>
           ))}
        </>
    }
    return null
}