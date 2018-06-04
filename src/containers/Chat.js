import React, { Component } from 'react'
import PeopleList from 'containers/PeopleList';
import MessagesList from 'containers/MessagesList';
import { Provider } from 'react-redux'
import store from 'store'
// import { hot } from 'react-hot-loader'

class Chat extends Component {
	render() {
		return (<Provider store={store} >
			<div class="container clearfix">
				<PeopleList />
				<MessagesList />
			</div>
		</Provider>

		);
	}
}


// export default hot(module)(Chat)
export default (Chat)