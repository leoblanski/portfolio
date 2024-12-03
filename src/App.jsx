import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './Components/Portfolio'
import Layout from './Layout/Layout'

function App() {
    return (
        <Layout>
            <Portfolio />
        </Layout>
    )
}

export default App
