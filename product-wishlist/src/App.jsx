import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ProductExplorePage from './components/ProductExplorerPage'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <>
      <Navbar/>
      <ProductExplorePage/>
      <ProductDetails/>
    </>
  )
}

export default App