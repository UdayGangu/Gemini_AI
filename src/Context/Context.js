

import React, { createContext, useState } from 'react';
import run from "../Config/Gemini.js"
export let MyContext=createContext()



const MyContextProvider = (props) => {


    let[input,setInput]=useState("")
    let[recentPrompt,setRecentPrompt]=useState("")
    let[prevPromptS,setPrevPrompts]=useState([])
    let[showResults,setShowResults]=useState(false)
    let[loading,setLoading]=useState(false)
    let[resultData,setResultData]=useState("")

    const onSent= async(prompt)=>{

      setResultData("")
      setLoading(true)
      setShowResults(true)
      setRecentPrompt(input)
      let response=await run(input)
      setResultData(response)
      setLoading(false)
      setInput("")
    }

  
    let contextValue={
        prevPromptS,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResults,
        loading,
        resultData,
        input,
        setInput,
    }

  return (


    
    <MyContext.Provider value={contextValue}>
        {props.children}
    </MyContext.Provider>


  )
}

export default MyContextProvider