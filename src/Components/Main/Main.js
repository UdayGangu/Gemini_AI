
import React, { useContext } from "react";
import "./Main.css";
import { MyContext } from "../../Context/Context";

const Main = () => {


    let{onSent,recentPrompt,showResults,loading,resultData,setInput,input}=useContext(MyContext)

    function handleInput(eve){
        setInput(eve.target.value)
    }

    function SendInput(){
        onSent();
    }

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src="./assets/user_icon.png" alt="" />
      </div>
      <div className="main_container">
        {showResults?
        <div className="result">
          <section className="result_tittle">
            <img src="./assets/user_icon.png"/>
            <p>{recentPrompt}</p>
          </section>
          <section className="result_data">
             <img src="./assets/favicon.png"/>
             {/* <p dangerouslySetInnerHTML={}></p> */}
          </section>
        </div>
        :
        <>
        <section className="greet">
          <p>
            <span>Hello, Uday</span>
          </p>
          <p>How can I help you today?</p>
        </section>
        <div className="cards">
          <section className="card">
            <p>Suggest beautifull places to see on an upcoming road trip</p>
            <img src="./assets/compass_icon.png" alt="" />
          </section>
          <section className="card">
            <p>Briefly summarize the concept of urban planning</p>
            <img src="./assets/bulb_icon.png" alt="" />
          </section>
          <section className="card">
            <p>Brainstorm team bonding activites for our work treat</p>
            <img src="./assets/messege_icon.png" alt="" />
          </section>
          <section className="card">
            <p>Improve the readability of the foloowing code</p>
            <img src="./assets/code_icon.png" alt="" />
          </section>
        </div></>}
        <div className="main_bottom">
          <section className="search_box">
            <input onChange={handleInput} value={input} type="text" placeholder="Enter prompt here" />
            <section>
              <img src="./assets/gallery_icon2.png" alt="" />
              <img src="./assets/microphone_icon.png" alt="" />
              <img onClick={SendInput} src="./assets/send_icon.png" alt="" />
            </section>
          </section>
          <p className="bottom_info">
            Gemini may display inaccurate info, including about people, so
            double check its responses. Your privacy and gemini apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
