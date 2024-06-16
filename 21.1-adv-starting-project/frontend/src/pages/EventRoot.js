import React from 'react'
import EventsNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom'

function EventRoot() {
  return <>
    <EventsNavigation/>
    <main>
        <Outlet/>
    </main>
  </>
}

export default EventRoot