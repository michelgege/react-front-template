import React, { useEffect, useState } from 'react'
import BarathonForm from './BarathonForm'
import PubsList from './PubsList'

const App = ():JSX.Element => {
    

    return (
        <>
            <PubsList />
            <BarathonForm />
        </>
    )
}



export default App