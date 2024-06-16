import React from 'react'
import PageContent from './PageContent.js'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error =  useRouteError();
  
  let title = 'An error occurred';
  let content = 'Something went wrong';
  
  if(error.status === 500){
    content = error.message;
  }
  return <PageContent title={title}>
    <p>{content}</p>
  </PageContent>
}