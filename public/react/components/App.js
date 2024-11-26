import React, { useState, useEffect } from 'react'
import { PagesList } from './PagesList'
import { SinglePage } from '../SinglePage'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
  const [pages, setPages] = useState([])
  const [displaySinglePage, setDisplayPage]= useState(false)
  const [slug, setSlug] = useState()


   function setPage(value) {

    try {
      if (displaySinglePage == false) {
        setDisplayPage(true)
        const str = value.replaceAll(' ', "_").toLowerCase()
        setSlug(str)
        console.log(displaySinglePage)
        console.log(slug)

      }
      else if  (displaySinglePage == true){
        setDisplayPage(false)
        const str = value.replaceAll(' ', "_")
        setSlug(str)
        console.log(displaySinglePage)
        console.log(slug)


      }

    }

    catch (err){
      return err
    }
    
  }

  function setMainPage() {

    try {
      if (displaySinglePage == false) {
        setDisplayPage(true)
        console.log(displaySinglePage)
      }
      else if  (displaySinglePage == true){
        setDisplayPage(false)
        console.log(displaySinglePage)
      }
    }

    catch (err){
      return err
    }
    
  }

  async function fetchPages () {
    try {
      const response = await fetch(`${apiURL}/wiki`)
      const pagesData = await response.json()
      setPages(pagesData)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }

  useEffect(() => {
    fetchPages()
  }, [])

  return (
    
    <>
    {displaySinglePage ? 
    ( <SinglePage setMainDisplay = {setMainPage} slug = {slug}/>) :
    (
    <>
		<main  className='App_Main'>
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			<PagesList  displayPage = {(e) => setPage(e.target.textContent)} pages={pages} />
		</main>
    </>
  )}

    </>
  )
}
