
import React, { useState } from 'react';
import "./SideBar.css";


const SideBar = () => {


    let[isExtended,setIsExtended]=useState(false)

    let handleClick=()=>{
        setIsExtended(!isExtended)
    }


  return (
    <div className='sidebar'>
        <div className='top'>
            <img  onClick={handleClick} className='menu' src='./assets/menu_icon.png' alt=''/>
            <section className='new_chat'>
                <img src='./assets/plus_icon.png' alt=''/>
                {isExtended?<p>New Chat</p>:null}               
            </section>
            {isExtended?<section className='recent'>
                <p className='recent_tittle'>Recent</p>
                <section className='recent_entry'>
                    <img src='./assets/messege_icon.png' alt='h'/>
                    <p>what is react...</p>
                </section>
            </section>:null}           
        </div>
        <div className='bottom'>
            <section className='bottom_items recent_entry'>
                <img src='./assets/question_icon.png' alt=''/>
                {isExtended?<p>Help</p>:null}
            </section>
            <section className='bottom_items recent_entry'>
                <img src='./assets/history_icon.png' alt=''/>
                {isExtended?<p>Activity</p>:null}
            </section>
            <section className='bottom_items recent_entry'>
                <img src='./assets/settings_icon.png' alt=''/>
                {isExtended?<p>Settings</p>:null}
            </section>
        </div>
    </div>
  )
}

export default SideBar
