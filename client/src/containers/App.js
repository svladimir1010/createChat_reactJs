import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from 'store'
import ChatWrap from 'containers/ChatWrap'

window.store = store
// import { hot } from 'react-hot-loader'

export default class App extends Component {
	render() {
		return (<Provider key={module.hot ? Date.now() : store} store={store} >
			<div class="container clearfix">
				<ChatWrap />
			</div>
		</Provider>
		); 
	}
}

// export default hot(module)(Chat)
// export default App       