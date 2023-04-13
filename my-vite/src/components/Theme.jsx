import React, { useState } from 'react'
import {BiAdjust} from 'react-icons/bi'

const Theme = () => {

    let clickedClass = 'clicked';
    const body = document.body;
    const lightTheme = 'light';
    const darkTheme = 'dark';
    let theme;
    const [switcherText,setSwitcherText] = useState(false)

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }
    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    }
    else{
        body.classList.add(lightTheme);
    }

    const swichTheme = (e) =>{
        if (theme === darkTheme) {
            body.classList.replace(darkTheme,lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem('theme','light')
            theme = lightTheme;
        }
        else{
            body.classList.replace(lightTheme,darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem('theme','dark');
            theme = darkTheme;
        }
    }

  return (
    <div 
        className={theme === 'dark' ? clickedClass : ''}
        onClick={(e)=> {
            swichTheme(e)
            setSwitcherText(!switcherText)
        }}
    >
        <div className="d-flex align-items-center">
            <span className='me-2 d-none d-sm-flex'>{!switcherText ? 'light' : 'dark'}</span>
            <BiAdjust/>
        </div>
    </div>
  )
}

export default Theme