import { css } from "@emotion/react";
import { SerializedStyles } from "@emotion/react/macro";
export const title:SerializedStyles=css({
fontSize: 70,
letterSpacing: 2,
color: 'rgb(122, 98, 98)',
fontWeight: 100
})
export const foot:SerializedStyles=css({
  color: 'grey',
  fontSize: 13,
  height: 35,
  width: '100%',
  display:'flex' ,
  justifyContent: 'space-around',
  alignItems: 'center',
})
export const Checked:SerializedStyles=css({
    textDecoration:'line-through',
    color:'grey'
})
export const foot1:SerializedStyles=css({
    width: 395,
    margin: 'auto',
    height: 3,
    borderLeft:'1px solid rgb(144, 144, 144)',
    borderBottom:'1px solid rgb(148, 147, 147)',
    borderRight:'1px solid rgb(153, 152, 152)',
    backgroundColor: 'white',
})
export const foot2:SerializedStyles=css({
    margin: 'auto',
    height: 3,
    width: 390,
    borderLeft: '1px solid rgb(169, 167, 167)',
    borderBottom: '1px solid rgb(149, 149, 149)',
    borderRight: '1px solid rgb(157, 157, 157)',
    boxShadow: '0 1px 1px 0px rgb(154, 153, 153)',
    backgroundColor: 'white',
})
export const alls:SerializedStyles=css({
    width: 20,
    height: 20,
    border: '1px solid grey'
  })
export const act:SerializedStyles=css({
    width: 40,
    height: 20,
  })
 export const completed:SerializedStyles=css({
    width: 70,
    height:20 ,
  })
export const toogle:SerializedStyles=css({
    justifyContent: 'space-between',
    display: 'flex',
    width: 160,
  })
 export const Item:SerializedStyles=css({
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderBottom: '1px solid grey',
    display: 'flex',
    fontSize: 20,
  })
  
 export const Check:SerializedStyles=css({
    borderRadius: 50,
    height: 20,
    width: 20,
  })
 export const Img:SerializedStyles=css({
    width: '100%',
    height: 30,
    marginTop:5,
    rotate: '90deg',
  })
  
 export const Main:SerializedStyles=css({
    minHeight: 40,
    borderBottom: '1px solid grey',
  })
 export const Wrap:SerializedStyles=css({
    width: 400,
    border: '1px solid grey',
    backgroundColor: 'white',
    margin:'auto' ,
    boxShadow: '0 4px 4px 1px rgb(154, 153, 153)',
  })
 export const setInp:SerializedStyles=css({
    width: '100%',
    display: 'flex',
    height: 40,
    borderBottom:'1px solid grey',
  })
 export const Inp:SerializedStyles=css`
    width:80% ;
    border: none;
    height: 90%;
    color: grey;
    font-size:20px ;
    outline: none;
    &::placeholder{
     font-size: 20px;
     color: rgb(169, 168, 168);
      }
  `
 export const Sets:SerializedStyles=css({
    height: '90%',
    width: '10%',
    border: 'none',
    backgroundColor: 'white',
    borderRadius: '50%',
  })