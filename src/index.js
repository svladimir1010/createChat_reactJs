import React from 'react'
import { render } from 'react-dom'
import ChatComponent from './components/Chat'
import './assets/styles/style.scss'
// import App from './app'  
render(
	// <App />
	<ChatComponent />,
	document.querySelector('#mount_app')
)