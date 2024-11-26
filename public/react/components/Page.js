import React from 'react'

export const Page = (props) => {
  return <>
    <h3 onClick={props.displayPage}>{props.page.title}</h3>

  </>
}
