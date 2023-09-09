import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist,devtools } from "zustand/middleware";
interface action{
    i:string,
    item:string
}
interface action1 {
    i:string,
    index:number
}
interface action2 {
    i:string
    item:string[]
}
export type func1=(action:number)=>void
export type func2=(action:action2)=>void
export type func3=(action:number[])=>void
export type func4=(action:action)=>void
export type func5=(action:action1)=>void
export interface list {
    item1:string[],
    item2:string[],
    item3:string[],
}
export interface store {
    item1:string[],
    item2:string[],
    item3:string[],
    del:number[],
    count:number,
    board:number
    setCount:func1,
    setBoard:func1,
    setRem:func5,
    setAdd:func4,
    setList:func2
    setDel:func3
}

const useStore=create<store>()(persist(devtools(immer((set)=>({
item1:[],
item2:[],
item3:[],
del:[],
count:0,
board:0,
setCount:(action)=>set((state:store)=>{
state.count=action
}),
setBoard:(action)=>set((state:store)=>{
state.board=action
}),
setRem:({i,index})=>set((state:store)=>{
if (i=='item2') state.item2.splice(index,1)
else state.item3.splice(index,1)
}),
setAdd:({i,item})=>set((state:store)=>{
if (i=='item1') state.item1.push(item)
else if (i=='item2') state.item2.push(item)
else state.item3.push(item)
}),
setList:({i,item})=>set((state:store)=>{
if (i=='item1') state.item1=item
else if (i=='item2') state.item2=item
else state.item3=item
}),
setDel:(action)=>set((state:store)=>{
    state.del=action
})
}))),{version:1,name:'todo'}))
export default useStore