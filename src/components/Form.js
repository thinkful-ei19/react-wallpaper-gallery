import React from 'react'
import './Form.css'

function Form(props) {

    return (
        <div>
            <h1>Wallpaper Gallery</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                let inputValue = event.target.userInput.value
                props.addUrl(inputValue)
                event.target.userInput.value = ''
            }}>
                <input
                    className="input" 
                    type="text" 
                    name="userInput" 
                    placeholder="wallpaper URL"
                />
                <button className="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
