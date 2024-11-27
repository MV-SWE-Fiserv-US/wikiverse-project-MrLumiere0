import React, { useState, useEffect } from 'react'
import { PagesList } from './PagesList'
import { SinglePage } from '../SinglePage'
import { AddPage } from '../addPage'


// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
  const [pages, setPages] = useState([])
  const [displaySinglePage, setDisplayPage]= useState(false)
  const [isAddingPage, setIsAddingPage]= useState(false)
  const [slug, setSlug] = useState()

 const Main_View = 1
 const Add_Page = 2
 const Article = 3
  // view state
  const [view,setView] = useState (Main_View)

   function setPage(value) {
        setView(Article)
        const str = value.replaceAll(' ', "_").toLowerCase()
        setSlug(str)
        console.log(displaySinglePage)
        console.log(slug)

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

  async function handleFormSubmit (event) {

    try{
        const response  = await fetch("http://localhost:3000/api/wiki", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'     
               },
               body: JSON.stringify(formData)
        })
        if(response){
            goToMain()
        }
    }
    catch(err){
        console.log("Could not create new entry")
    }
  }

  useEffect(() => {
    fetchPages()
  }, [])

  return  view == Main_View ? ( 
    <>
    <main  className='App_Main'>
    <h1>WikiVerse</h1>
    <h2>An interesting 📚</h2>
    <PagesList  displayPage = {(e) => setPage(e.target.textContent)} pages={pages} />
    <button className ="AddPage_button" onClick={() => setView(Add_Page)}>Add a page </button>
  </main>
  </>
  )
  : view == Add_Page ? (
    <AddPage postPage = {handleFormSubmit}/>
  )
  : view == Article ? (
 <SinglePage goToMain = {() => setView(Main_View)}  slug = {slug}/>
   ) : (
    <h1>Error in View Controller</h1>
   )
  
}
