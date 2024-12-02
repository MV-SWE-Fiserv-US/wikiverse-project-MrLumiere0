import React from 'react'


import { useState, useEffect } from 'react'


export const SinglePage = ({goToMain, slug, handleDeletePage}) => {


  const [article, setArticle] = useState(null)

  async function fetchPage (){
    try{
      const request = await fetch(`http://localhost:3000/api/wiki/${slug}`)
      const response = await request.json();
      setArticle(response);    
      setArticle(data)
      console.log("Data;", data)

    }

    catch (err) {
      console.log("Failure to fetch page!")
    }
    

  }

 

  useEffect(() => {
    fetchPage()
  }, [])

  return ( 
    <div className='SinglePage'>
      {article ? (
        <div>
        <p>{article.title}</p>
        <p>{article.author.name}</p>
        <p>{article.content}</p>
        <p>{article.createdAt}</p>
        </div>
      ): (
        <div>Sorry</div>
      )}

      </div>
  )
}