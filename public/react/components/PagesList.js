import React from 'react'
import { Page } from './Page'
import { useState, useEffect } from 'react'


export const PagesList = ({ pages, displayPage}) => {



  return <>
		{
			pages.map((page, idx) => {
				return <Page  slugId = {page.slug} page={page} key={idx} displayPage = {displayPage} />
			})
		}
	</>
}
