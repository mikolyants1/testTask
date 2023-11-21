import { Img, Inp, Sets, setInp } from "./style";
import img from '../assets/arr.png'
import { Evt } from "./App";
import { css } from '@emotion/react'
import {memo,NamedExoticComponent} from 'react'
interface props {
    todo:string,
    add:(item:string)=>void,
    chan:(e:Evt)=>void
}
export const Header:NamedExoticComponent<props> = memo(
({add,chan,todo}:props):JSX.Element=>{
    
    console.log(3)
    return (
        <div css={css`width: 100%`}>
          <div css={setInp}>
            <button css={Sets} onClick={()=>add(todo)}>
              <img css={Img} src={img} />
            </button>
            <input placeholder='what needs to be done?'
             css={Inp} type='text' onChange={chan}
             />
          </div>
        </div>
    )
})