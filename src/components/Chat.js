import React, { Component } from 'react'
import PeopleList from 'containers/PeopleList';
import MessagesList from 'containers/MessagesList';

export default class ChatComponent extends Component {
	render() {
		return (
			<div class="container clearfix">
				<PeopleList />
				<MessagesList />
			</div>

			// <script id="message-template" type="text/x-handlebars-template">
			// 	<li class="clearfix">
			// 		<div class="message-data align-right">
			// 			<span class="message-data-time" >{{ time }}, Today</span> &nbsp; &nbsp;
			//   <span class="message-data-name" >Olia</span> <i class="fa fa-circle me"></i>
			// 		</div>
			// 		<div class="message other-message float-right">
			// 			{{ messageOutput }}
			// 		</div>
			// 	</li>
			// </script>

			// <script id="message-response-template" type="text/x-handlebars-template">
			// 	<li>
			// 		<div class="message-data">
			// 			<span class="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
			// 			<span class="message-data-time">{{ time }}, Today</span>
			// 		</div>
			// 		<div class="message my-message">
			// 			{{ response }}
			// 		</div>
			// 	</li>
			// </script>
		);
	}
}