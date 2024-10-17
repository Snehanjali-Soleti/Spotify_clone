import React from 'react'

const Textinput = (props) => {
    const {label, placeholder, value, setvalue} = props;
  return (
    <>
        <div className='input1 flex flex-col w-full pb-5 text-white'>
            <label for="123" className='text-left text-[0.875 rem] font-semibold pb-1'>{label} </label>
            <input type='text' 
            placeholder={placeholder}
            className=' p-3 border border-white bg-black border-solid rounded '
            id='123'
            value= {value}
            onChange={(e)=>{
                setvalue(e.target.value)
            }}/>
        </div>
    </>
    )
}

export default Textinput