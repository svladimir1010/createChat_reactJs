import React, { Component } from 'react'
//import ws from 'util/ws'

export default (ChildComponent) => {
	return class authHOC extends Component {

		auth() {
			if(localStorage.getItem('auth')) return true  //есть ли имя

			let name = prompt('Enter your name:  ')
			
			if (!name || !name.trim().length) {
				return false
			}

			localStorage.setItem('auth', name)    // сохр имя
			return true
	  	}

		noName() {
			return <div class="noname-wrap" >
				Вы не ввели имя <br />
				<button onClick={() => location.reload()} >try again?</button>
			</div>
		}

		render() {
			return (
				this.auth() ? <ChildComponent /> : this.noName()
			)
		}
	}
}   