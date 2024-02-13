import { useState } from "react"

const DarkMode = ({darkMode, setdarkMode}) => {

    const background =  darkMode ? '#282828' : 'white'
    const color = darkMode ? 'white' : 'black'
    // const buttonText = darkMode ? 'Change to white' : 'Change to black'
    const bcolor = darkMode ? '1px solid white' : '1px solid black'
    const htmlRoot = document.querySelector('html')
    const htmlRoot2 = document.querySelector('*')

    htmlRoot.style.backgroundColor = background
    htmlRoot2.style.color = color
    
    const darkModeToggle = () => {
      setdarkMode(!darkMode)
    }
    return ( 
        <>
            <div>
                <button className="changeColor" onClick={darkModeToggle}></button>
            </div>
        </>
    );
}
 
export default DarkMode;