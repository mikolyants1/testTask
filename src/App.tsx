import { ChangeEvent,useState,useRef,useReducer,useEffect,MutableRefObject} from 'react'
import { All,Active,Del } from './components/Sort'
import './App.css'
interface state{
  item1:string[],
  item2:string[],
  item3:string[]
}
interface state1{
  show1:number,
  show2:number,
  show3:number
}
interface action{
  type:number
}
type union=string|undefined
function App():JSX.Element {
const [todo,setTodo]=useState<string>('')
const [bord,setBord]=useState<number>(0)
const [del,setDel]=useState<number[]>([])
const [list,setList]=useState<state>({item1:[],item2:[],item3:[]})
const [state,move]=useReducer(reducer,{show1:1,show2:0,show3:0})
const all=useRef<HTMLDivElement>(null!)
const active=useRef<HTMLDivElement>(null!)
const comp=useRef<HTMLDivElement>(null!)
useEffect(()=>{
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
const {item1,item2,item3}:state=list
item1.push(todo)
item2.push(todo)
setList({item1:item1,item2:item2,item3:item3})
  }
const check=(e:ChangeEvent<HTMLInputElement>,item:string,i:number):void=>{
const {item1,item2,item3}:state=list
const line:NodeListOf<HTMLDivElement>=document.querySelectorAll('.text')
if (e.target.checked){
  line[i].style.textDecoration='line-through'
  line[i].style.color='grey'
  setDel([...del,i])
  item2.splice(i,1)
  item3.push(item)
}else{
  line[i].style.textDecoration='none'
  line[i].style.color='black'
  const newDel=del.filter((_:number,index:number):boolean=>index!==i)
  setDel(newDel)
  item3.splice(i,1)
  item2.push(item)
}
setList({item1:item1,item2:item2,item3:item3})
  }
const clear=()=>{
const line:NodeListOf<HTMLInputElement>=document.querySelectorAll('.check1')
const text:NodeListOf<HTMLDivElement>=document.querySelectorAll('.text')
const {item1,item2,item3}:state=list
item3.length=0
const newItem:string[]=item1.filter((item:string,i:number):union=>{
  if (!line[i].checked) return item
  })
  text.forEach(({style}:HTMLDivElement,i:number):void=>{
  style.textDecoration='none'
  style.color='black'
  line[i].checked=false
  })
setDel([])
setList({item1:newItem,item2:item2,item3:item3})
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
              <div className='img'></div>
            </button>
            <input type="text" className='inp' onChange={chan}
            placeholder='what needs to be done?' />
          </div>
        </div>
        <div className='main'>
           <All
             item={list.item1}
             del={del}
             show={state.show1}
             check={check}
           />
           <Active
            item={list.item2}
            show={state.show2}
            check={check}
           />
           <Del
            item={list.item3}
            show={state.show3}
            check={check}
           />
        </div>
        <div className='foot'>
          <div className='count'>
            {list.item1.length} items left
          </div>
          <div className='toogle'>
             <div className='all' ref={all}
              onClick={():void=>move({type:0})}>
              All
             </div>
             <div className='act' ref={active}
              onClick={():void=>move({type:1})}>
              Active
             </div>
             <div className='comp' ref={comp}
              onClick={():void=>move({type:2})}>
               Completed
             </div>
          </div>
          <div className='clear'
           onClick={clear}>
           Clear completed
          </div>
        </div>
      </div>
      <div className='foot1'></div>
      <div className='foot2'></div>
    </div>
  )
}

export default App
