
import React, { useContext, useState } from 'react';
import "./SideBar.css";
import { MyContext } from '../../Context/Context';


const SideBar = () => {


    let[isExtended,setIsExtended]=useState(false)
    const {onSent,prevPrompts,setRecentPrompt,newChat}=useContext(MyContext)

    let handleClick=()=>{
        setIsExtended(!isExtended)
    }

    let loadPrompt=async (prompt)=>{
        setRecentPrompt(prompt)
        onSent(prompt);
    }


  return (
    <div className='sidebar'>
        <div className='top'>
            <img  onClick={handleClick} className='menu' src='./assets/menu_icon.png' alt=''/>
            <section onClick={()=>newChat()} className='new_chat'>
                <img src='./assets/plus_icon.png' alt=''/>
                {isExtended?<p>New Chat</p>:null}               
            </section>
            {isExtended?
            <section className='recent'>
                <p className='recent_tittle'>Recent</p>
                {prevPrompts.map((item,index)=>{
                    return(
                        <section className='recent_entry' onClick={()=>loadPrompt(item)}>
                            <img src='./assets/messege_icon.png' alt='h'/>
                            <p>{item.slice(0,18)}..</p>
                        </section>
                    )
                })}
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
