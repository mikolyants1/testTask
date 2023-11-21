import { ChangeEvent,useState,useRef,useReducer,
useEffect,useCallback,MutableRefObject} from 'react'
import { All,Active,Del } from './Sort'
import useStore, { func,store,Item} from './store'
import '../App.css'
import {foot1,foot2,title,completed,act,alls,Main,Wrap} from './style'
import {css} from '@emotion/react'
import { SerializedStyles } from "@emotion/react/macro";
import  Footer  from './Foot'
import { Header } from './Header'

interface state1{
  show1:boolean,
  show2:boolean,
  show3:boolean
}
export interface action0{
  type:number
}
export interface ref{
  name:string,
  ref:MutableRefObject<HTMLDivElement>,
  style:SerializedStyles
}

type refType=MutableRefObject<HTMLDivElement>
export type Node<T extends HTMLElement> = NodeListOf<T>
export type Evt = ChangeEvent<HTMLInputElement>

function App():JSX.Element{
const {item1,item2,item3,count,board}:store=useStore()
const setCount:func<number>=useStore((state:store)=>state.setCount)
const chanTodo:func<Item>=useStore((state:store)=>state.chanTodo)
const addTodo:func<string>=useStore((state:store)=>state.addTodo)
const setBord:func<number>=useStore((state:store)=>state.setBoard)
const [todo,setTodo]=useState<string>('')
const [state,dispatch]=useReducer(reducer,
{show1:true,show2:false,show3:false})
const all=useRef<HTMLDivElement>(null!)
const active=useRef<HTMLDivElement>(null!)
const comp=useRef<HTMLDivElement>(null!)
const strMass:ref[]=[
{name:'all',ref:all,style:alls},
{name:'active',ref:active,style:act},
{name:'completed',ref:comp,style:completed}
]
useEffect(():void=>dispatch({type:board}),[])
useEffect(():void=>{
const mass:Item[][]=[item1,item2,item3]
setCount(mass[board].length)
},[board,item1,item2,item3])
useEffect(():void=>{
const Ref:refType[]=[all,active,comp]
Ref.forEach((item:refType,i:number):void=>{
item.current.style.border=`
${i==board?'1px solid grey':'none'}
 `})
},[state])
function reducer(state:state1,{type}:action0):state1{
setBord(type)
switch (type) {
  case 0:
    return {
      show1:true,
      show2:false,
      show3:false
    };
  case 1:
    return {
      show1:false,
      show2:true,
      show3:false
    };
  case 2:
    return {
      show1:false,
      show2:false,
      show3:true
    };    
  default:
    return state;
}
}
const chan=useCallback((e:Evt):void=>{
  setTodo(e.target.value)
  },[])
const add=useCallback((item:string):void=>{
 if (item!==''){
addTodo(item)
setCount(item1.length)
  }
},[])
const check=(id:number,item:string)=>(e:Evt):void=>{
 const checked:boolean = e.target.checked
chanTodo({id:id,item:item,checked:checked})
}
return (
    <div>
        <div css={css`width:100%;text-align:center`}>
          <h1 css={title}>
            todos
          </h1>
        </div>
      <div css={Wrap}>
       <Header 
        todo={todo}
        add={add}
        chan={chan}
       />
        <div css={Main}>
         {state.show1&&(
           <All
           item={item1}
           check={check}
           />
         )}
         {state.show2&&(
           <Active
            item={item2}
            check={check}
           />
         )}
         {state.show3&&(
           <Del
            item={item3}
            check={check}
           />
         )}
        </div>
        <Footer
         count={count}
         mass={strMass}
         dispatch={dispatch}
        />
      </div>
      <div css={foot1} />
      <div css={foot2} />
    </div>
  )
}

export default App
