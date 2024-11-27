import React from 'react'


import { useState, useEffect } from 'react'


export const SinglePage = ({goToMain, slug}) => {

  const [article, setArticle] = useState({author: {}, tags: {}})

  async function fetchPage (){
    try{
      const response = await fetch(`http://localhost:3000/api/wiki/${slug}`)
      const data = await response.json()
      await setArticle(data)
     
    }

    catch (err) {
      console.log("Failure to fetch page!")
    }
    

  }

  async function handleDeletePage (event) {
    console.log(slug)

    try{
        const response  = await fetch(`http://localhost:3000/api/wiki/${slug}`, {
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json'     
               },
        })

        goToMain()
    }
    catch(err){
        console.log("Could not delete new entry")
    }
   
}

  useEffect(() => {
    fetchPage()
  }, [])


  return (
  <div className='SinglePage'>


    <div className='singlePageContent'>
    <h3>{article.title}</h3>
    <p><span className='page_descriptors'>Content: </span>{article.content}</p>
    <p><span className='page_descriptors'>Author: </span>{article.author.name}</p>

    <p><span className='page_descriptors'>Date: </span>{article.createdAt}</p>
    <button className="AddPage_button"onClick={handleDeletePage}>Delete</button>
    <button className="AddPage_button" onClick={goToMain}>Back to Wiki List </button>
  </div>
  </div>
  )
}