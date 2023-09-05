import {ChangeEvent,useEffect} from 'react'
type props={
item:string[]
show:number,
del?:number[],
check:(e:ChangeEvent<HTMLInputElement>,item:string,i:number)=>void
}
export function All({item,show,del,check}:props):JSX.Element|null{
if (show==1){
  useEffect(()=>{
    const line:NodeListOf<HTMLDivElement>=document.querySelectorAll('.text')
    const check:NodeListOf<HTMLInputElement>=document.querySelectorAll('.check1')
    console.log(del)
    del?.forEach((i:number):void=>{
      line[i].style.textDecoration='line-through'
      line[i].style.color='grey'
      check[i].checked=true
    })
    },[])
    return <div>
      {item.map((item:string,i:number)=>{
            return <div className='item' key={i}>
            <input type="checkbox" className='check1'
            onChange={(e):void=>check(e,item,i)} />
             <div className='text'>
              {item}
              </div>
            </div>
           })}
    </div>
    } 
return null
}
export function Active({item,show,check}:props):JSX.Element|null{
    if (show==1){
    return <div>
       {item.map((item:string,i:number)=>{
            return <div className='item' key={i}>
            <input type="checkbox" className='check'
            onChange={(e):void=>check(e,item,i)} />
             <div className='text'>
              {item}
              </div>
            </div>
           })}
    </div>
    }
    return null
}
export function Del({item,show,check}:props):JSX.Element|null{
    enum style{
      textDecoration='line-through',
      color='grey'
    }
    if (show==1){
    return <div>
         {item.map((item:string,i:number)=>{
            return <div className='item' key={i}>
            <input type="checkbox" checked className='check'
            onChange={(e):void=>check(e,item,i)} />
             <div style={style}>
                {item}
              </div>
            </div>
           })}
    </div>
    }
    return null
}