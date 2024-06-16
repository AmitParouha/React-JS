import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem'

export default function EventDetailPage() {
  const data = useRouteLoaderData('event-data');
  return (
    <>
      <EventItem event = {data.event}/>
    </>
  );
}

export async function  eventLoaderById({request ,params}){
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/'+id);

    if(!response.ok){
      throw json({message:'Could not fetch the details for the selected event'}, {status:500})
    }
    else{
      return response;
    }
}

export async function  eventDeleteAction({request, params}){
  const id = params.id;
  const response = await fetch('http://localhost:8080/events/'+id,{
    method: request.method,
    
  });

  if(!response.ok){
    throw json({message:'Could not delete the event for the selected id'}, {status:500})
  }
  return redirect('/events');
}

