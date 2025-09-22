import React from 'react'

const Button = ({title, bgcolor, borderColor, textcolor}) => {
  return (
    <div>
        <button
        style={{
            backgroundColor: `${bgcolor}`,
            color: `${textcolor}`,
            border: `1px solid ${borderColor}`
        }}
        className='rounded-full px-[20px] py-[10px] cursor-pointer'
        >
            {title}

        </button>
    </div>
  )
}

export default Button