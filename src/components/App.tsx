import React, { useEffect, useState } from 'react'
import { IPub } from '../types/api'
import BarathonForm from './BarathonForm'

const App = ():JSX.Element => {
    const [pubs, setPubs] = useState<IPub[]>([])

    // componentdidmount
    useEffect(() => {

        const fetchPubs = async (): Promise<void> => {
            const response = await fetch('http://localhost:3000/pubs')
            const pubs     = await response.json()
            console.log(pubs);
            setPubs(pubs)
        }
        fetchPubs()
    }, [])

    return (
        <>
            {pubs.map((pub: IPub) => {
                return <p key={pub._id}>{pub.name}</p>
            })}
            <BarathonForm />
        </>
    )
}



export default App