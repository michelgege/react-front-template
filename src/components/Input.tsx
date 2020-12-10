import React from 'react'
import styled from 'styled-components'
import {colors} from '../styles/colors'


interface IProps {
    name  : string
    type  : string
    label?: string
}

const StyledInput = styled.input`
    padding : 10px 15px;
    border: none;
    border-radius : 4px;
    background-color: ${colors.lightGrey};
`

const Input = ({ name, label, type }:IProps):JSX.Element => {
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <StyledInput name={name} id={name} type={type} />
        </>
    )

}

export default Input