

import React, { createContext, useState } from 'react';
import run from "../Config/Gemini.js"
export let MyContext=createContext()



const MyContextProvider = (props) => {


    let[input,setInput]=useState("")
    let[recentPrompt,setRecentPrompt]=useState("")
    let[prevPrompts,setPrevPrompts]=useState([])
    let[showResults,setShowResults]=useState(false)
    let[loading,setLoading]=useState(false)
    let[resultData,setResultData]=useState("")

    const onSent= async(prompt)=>{
      setResultData("")
      setLoading(true)
      setShowResults(true)
      let response
      if(prompt!==undefined){
        response=await run(prompt)
        setRecentPrompt(prompt)
      }
      else{
        setPrevPrompts(prev=>[...prev,input])
        setRecentPrompt(input)
        response=await run(input)
      }
      let responseArray=response.split("**");
      let newResponse="";
      for(let i=0;i<responseArray.length;i++){
        if(i===0 || i%2!==1){
          newResponse+=responseArray[i]
        }
        else{
          newResponse+="<b>"+responseArray[i]+"</b>"
        }
      }
      let newResponse2=newResponse.split("*").join("</br>")
      let newResponseArray=newResponse2.split(" ")
      for(let i=0;i<newResponseArray.length;i++){
        let nextWord=newResponseArray[i]
        delayPara(i,nextWord+" ")
      }
      setLoading(false)
      setInput("")
    }


    let delayPara=(index,nextWord)=>{
      setTimeout(function(){
        setResultData(prev=>prev+nextWord)
      },75*index)
    }

    let newChat=()=>{
      setLoading(false)
      setShowResults(false)
    }

  
    let contextValue={
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResults,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

  return (


    
    <MyContext.Provider value={contextValue}>
        {props.children}
    </MyContext.Provider>


  )
}

export default MyContextProvider