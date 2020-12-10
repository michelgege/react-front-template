import React from 'react'



interface IProps {
    name  : string
    type  : string
    label?: string
}


const Input = ({name, label, type}:IProps):JSX.Element => {

    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <input name={name} id={name} type={type}/>
        </>
    )
}

export default Input