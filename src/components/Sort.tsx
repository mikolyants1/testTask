import {useEffect} from 'react'
import { Check,Checked,Item } from './style'
import { Evt, Node } from './App'
import { Item as value } from './store'

export type props={
item:value[],
del?:value[],
check:(id:number,item:string)=>(e:Evt)=>void
}

export function All({item,check}:props):JSX.Element{
useEffect(():void=>{
const line:Node<HTMLDivElement>=document.querySelectorAll('.text')
const check:Node<HTMLInputElement>=document.querySelectorAll('#check1')
item.forEach(({checked}:value,i:number):void=>{
  if (checked){
  line[i].style.textDecoration='line-through'
  line[i].style.color='grey'
  check[i].checked=true
   } else {
    line[i].style.textDecoration='none'
    line[i].style.color='black'
   }
  
})
  },[item])
 return <>
      {item.map(({id,item}:value):JSX.Element=>(
        <div css={Item} key={id}>
          <input type="checkbox" css={Check}
           onChange={check(id,item)} id='check1' />
            <div className='text'>
              {item}
            </div>
          </div>
        ))}
    </>  
}
export function Active({item,check}:props):JSX.Element{
  return <>
       {item.map(({id,item}:value):JSX.Element=>(
          <div css={Item} key={id}>
            <input type="checkbox" disabled={true}
             onChange={check(id,item)} css={Check} />
             <div>
              {item}
            </div>
          </div>
          ))}
       </>
}
export function Del({item,check}:props):JSX.Element{
    return <>
         {item.map(({id,item,checked}:value):JSX.Element=>(
           <div css={Item} key={id}>
              <input type="checkbox" css={Check}
               onChange={check(id,item)} checked={checked} />
              <div css={Checked}>
                {item}
              </div>
            </div>
           ))}
        </>
}