import { ChangeEvent,useState,useRef,useReducer,useEffect,MutableRefObject} from 'react'
import { All,Active,Del } from './Sort'
import useStore, { func3, func1,func5, store, func2, func4 } from './store'
import '../App.css'
interface state1{
  show1:number,
  show2:number,
  show3:number
}
interface action{
  type:number
}
interface ref{
  name:string,
  ref:MutableRefObject<HTMLDivElement>
}
type union=string|undefined
function App():JSX.Element {
const item1:string[]=useStore((state:store)=>state.item1)
const item2:string[]=useStore((state:store)=>state.item2)
const item3:string[]=useStore((state:store)=>state.item3)
const count:number=useStore((state:store)=>state.count)
const bord:number=useStore((state:store)=>state.board)
const del:number[]=useStore((state:store)=>state.del)
const setDel:func3=useStore((state:store)=>state.setDel)
const setRem:func5=useStore((state:store)=>state.setRem)
const setCount:func1=useStore((state:store)=>state.setCount)
const setList:func2=useStore((state:store)=>state.setList)
const setAdd:func4=useStore((state:store)=>state.setAdd)
const setBord:func1=useStore((state:store)=>state.setBoard)
const [todo,setTodo]=useState<string>('')
const [state,move]=useReducer(reducer,{show1:1,show2:0,show3:0})
const all=useRef<HTMLDivElement>(null!)
const active=useRef<HTMLDivElement>(null!)
const comp=useRef<HTMLDivElement>(null!)
const strMass:ref[]=[
{name:'all',ref:all},
{name:'active',ref:active},
{name:'completed',ref:comp}
]
useEffect(():void=>move({type:bord}),[])
useEffect(():void=>{
if (bord==0) setCount(item1.length)
else if (bord==1) setCount(item2.length)
else setCount(item3.length)
},[bord,item1,item2,item3])
useEffect(():void=>{
const refMass:MutableRefObject<HTMLDivElement>[]=[all,active,comp]
refMass.forEach((item:MutableRefObject<HTMLDivElement>):void=>{
  item.current.style.border='none'
})
refMass[bord].current.style.border='1px solid grey'
},[state])
function reducer(state:state1,{type}:action):state1{
setBord(type)
switch (type) {
  case 0:
    return {show1:1,show2:0,show3:0}
  break;
  case 1:
    return {show1:0,show2:1,show3:0}
  break;
  case 2:
    return {show1:0,show2:0,show3:1}
  break;    
  default:
    return state
  break;
}
}
const chan=(e:ChangeEvent<HTMLInputElement>):void=>{
  setTodo(e.target.value)
  }
const add=():void=>{
setAdd({i:'item1',item:todo})
setAdd({i:'item2',item:todo})
setCount(item1.length)
  }
const check=(e:ChangeEvent<HTMLInputElement>,item:string,i:number):void=>{
const line:NodeListOf<HTMLDivElement>=document.querySelectorAll('.text')
const index:number=Number(item2.find((x:string,i:number)=>{
  if (x==item) return i
}))
if (e.target.checked){
  line[i].style.textDecoration='line-through'
  line[i].style.color='grey'
  setDel([...del,i])
  setRem({i:'item2',index:index})
  setAdd({i:'item3',item:item})
}else{
  line[i].style.textDecoration='none'
  line[i].style.color='black'
  const newDel=del.filter((_:number,index:number):boolean=>index!==i)
  setDel(newDel)
  setRem({i:'item3',index:index})
  setAdd({i:'item3',item:item})
}
  }
const clear=():void=>{
const line:NodeListOf<HTMLInputElement>=document.querySelectorAll('.check1')
const text:NodeListOf<HTMLDivElement>=document.querySelectorAll('.text')
const newItem:string[]=item1.filter((item:string,i:number):union=>{
  if (!line[i].checked) return item
  })
  text.forEach(({style}:HTMLDivElement,i:number):void=>{
  style.textDecoration='none'
  style.color='black'
  line[i].checked=false
  })
setDel([])
setList({i:'item1',item:newItem})
setList({i:'item3',item:[]})
  }
return (
    <div>
        <div className='name'>
          <h1>todos</h1>
        </div>
      <div className='wrap'>
        <div className='head'>
          <div className='setInp'>
          <button className='set' onClick={add}>
              <div className='img' />
            </button>
            <input placeholder='what needs to be done?'
             className='inp' type='text' onChange={chan} />
          </div>
        </div>
        <div className='main'>
           <All
             item={item1}
             del={del}
             show={state.show1}
             check={check}
           />
           <Active
            item={item2}
            show={state.show2}
            check={check}
           />
           <Del
            item={item3}
            show={state.show3}
            check={check}
           />
        </div>
        <div className='foot'>
          <div className='count'>
            {count} items left
          </div>
          <div className='toogle'>
            {strMass.map(({name,ref}:ref,i:number):JSX.Element=>(
              <div key={i} className={name}
               ref={ref} onClick={():void=>move({type:i})}>
                  {name}
              </div>
            ))}
          </div>
          <div className='clear'
           onClick={clear}>
           Clear completed
          </div>
        </div>
      </div>
      <div className='foot1' />
      <div className='foot2' />
    </div>
  )
}

export default App
