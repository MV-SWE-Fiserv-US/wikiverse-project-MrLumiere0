import React from 'react'
import { useState, useEffect } from 'react'
import apiURL from './api'


export const SinglePage = ({setMainDisplay, slug}) => {

  const [article, setArticle] = useState({author: {}, tags: {}})

  async function fetchPage (){
    try{
      const response = await fetch(`http://localhost:3000/api/wiki/${slug}`)
      const data = await response.json()
      await setArticle(data)
      console.log(data)
      console.log(article)
    }

    catch (err) {
      console.log("Failure to fetch page!")
    }
    

  }

  useEffect(() => {
    fetchPage()
  }, [])

  console.log("article")
  // console.log(article.author.name)

  return (
  <div className='SinglePage'>
    <div className='singlePageContent'>
    <h3>{article.title}</h3>
    <p><span className='page_descriptors'>Content: </span>{article.content}</p>
    <p><span className='page_descriptors'>Author: </span>{article.author.name}</p>

    <p><span className='page_descriptors'>Date: </span>{article.createdAt}</p>
    <button onClick={setMainDisplay}>Back to Wiki List </button>
  </div>
  </div>
  )
}