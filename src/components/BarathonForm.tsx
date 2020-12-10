import React, {useEffect, useState} from 'react'
import Input from './Input'

const BarathonForm = (): JSX.Element  => {
    
    const [checkpoints, setCheckpoints] = useState<string[]>([])

    // componentdidmount
    useEffect(() => {
        console.log('checkpoints : ' + checkpoints);
        
    }, [])

    const handleSubmit = ():void => {
       
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <Input name="name" type="text"/>
            {checkpoints.map((checkpoint:string) => {
                return (
                    <>
                    </>
                )
            })}
            <button>Ajouter</button>
        </form>
    )
}

export default BarathonForm