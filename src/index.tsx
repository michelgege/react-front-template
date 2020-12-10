import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

class EntryPoint extends React.Component {
    render (): JSX.Element {
        return (
            <>
                <App />
            </>
        )
    }
}

ReactDOM.render(<EntryPoint />, document.getElementById('app'))
