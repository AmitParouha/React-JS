import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from 'react-router-dom';

export default function NewEventPage() {
    
  return <EventForm/>
}

export async function action({request, params}){
    const data = await request.formData();  // it will return the form data
    
    const eventData = {
      title: data.get('title'), //get() method is use for getting the data from the form 
      image: data.get('image'),
      date: data.get('date'),
      description: data.get('description')
    } 
    console.log(eventData);

    const response = await fetch('http://localhost:8080/events',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(eventData)
    })   

    if(!response.ok){
      throw json({message: 'Could not save event'}, {status:500})
      // json is also provided by react-router-dom package
    }
    return redirect('/events')
}