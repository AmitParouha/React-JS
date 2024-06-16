import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

function RootLayout() {
  const navigation = useNavigation();
  return <>
    <MainNavigation/>
    <main>
      {navigation.state === 'loading' && <p>data is loading...</p>}
      <Outlet/>
    </main>
  </>
}

export default RootLayout