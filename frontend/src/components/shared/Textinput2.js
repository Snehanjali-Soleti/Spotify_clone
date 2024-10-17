import React  from 'react'

const Textinput2 = (props) => {
    const {label, desc, value, setvalue} = props;
  return (
    <>
        <div className='input1 flex flex-col w-full pb-5'>
            <label for="123" className='text-left text-[0.875 rem] font-semibold pb-1'>{label} </label>
            <p className='text-sm text-gray-500 text-left pb-2'>{desc}</p>
            <input type='text' 
            className=' p-3 border border-white bg-black border-solid rounded'
            id='123'
            value= {value}
            onChange={(e)=>{
                setvalue(e.target.value)
            }}/>
        </div>
    </>
    )
}

export default Textinput2