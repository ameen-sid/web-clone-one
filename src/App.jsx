import React from 'react'
import style from './styles/main.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Main />
			<Footer />
		</>
	)
}

export default App