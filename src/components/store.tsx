import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist,devtools } from "zustand/middleware";
export interface action{
    i:string,
    item:string,
    id?:number
}
export interface action1 {
    i:string,
    index:number
}
export interface action2 {
    i:string
    item:Item[]
}
export interface Item{
    id:number,
    item:string,
    checked:boolean
}
export type func<T>=(action:T)=>void
export type func1 = ()=>void
export interface list {
    item1:Item[],
    item2:Item[],
    item3:Item[],
}
export interface store {
    item1:Item[],
    item2:Item[],
    item3:Item[],
    count:number,
    board:number
    setCount:func<number>,
    setBoard:func<number>,
    addTodo:func<string>,
    chanTodo:func<Item>,
    clearList:func1
}

const useStore=create<store>()(
persist(devtools(immer((set,get)=>({
item1:[],
item2:[],
item3:[],
count:0,
board:0,
setCount:(action)=>set((state:store):void=>{
state.count=action
}),
setBoard:(action)=>set((state:store)=>{
 state.board=action
}),
addTodo:(action)=>{
 const id:number = get().item1.length == 0 ?
  0 :get().item1[get().item1.length-1].id+1
    const todo:Item = {
      id:id,
      item:action,
      checked:false
    }
 const newItem:Item[] = [...get().item1,todo]
 const newItem2:Item[] = newItem
 .filter(({checked}:Item)=>checked)
 set({item1:newItem,item2:newItem2})
},
chanTodo:({id,item,checked})=>{ 
const idx:number=get().item1
.findIndex(({id:x}:Item):boolean=>x==id)
const left:Item[] = get().item1.slice(0,idx)
const right:Item[] = get().item1.slice(idx+1)
const newItem:Item = {
    id:id,
    item:item,
    checked:checked
    }
 const newItem1:Item[] = [
 ...left,newItem,...right
  ]
 const newItem2:Item[] = newItem1
 .filter(({checked}:Item)=>!checked)
 const newItem3:Item[] = newItem1
 .filter(({checked}:Item)=>checked)
 set({item1:newItem1,item2:newItem2,item3:newItem3})
},
clearList:()=>{
 const newItem:Item[] = get().item1
 .filter(({checked}:Item)=>checked==false)
 set({item1:newItem,item2:newItem,item3:[]})
}
}))),{version:1,name:'todos'}))

export default useStore