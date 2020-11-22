import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePosts, newPosts } from './actions/postAction'


class Post extends Component {
	state={
		username: '',
		password: '',
	}

	onhandleChange = input => (e) => {
		this.setState({
			[input]: e.target.value
		})
	}

	onFormSubmit = (e) => {
		e.preventDefault()
		const { username, password} = this.state

		const User = {
			username, 
			password
		}

		this.props.newPosts(User)

		this.setState({
			username: '',
			password: ''
		})

	}

	showPosts = () => {
		this.props.deletePosts()

		console.log(this.props.posts)
	}


	render() {
		const { username, password } = this.state
		return (
			<div>
			<form onSubmit={this.onFormSubmit} style={{margin: 10}}>
			<label>Username</label>
			<input value={username} onChange={this.onhandleChange('username')} 
			type='text' placeholder="Enter your username"/>
			<br/>
			<label>Password</label>
			<input value={password} onChange={this.onhandleChange('password')}
			type="password" placeholder="Enter your password"/>
			<br/>
			<input type="submit" value="Submit" />
			</form>
			<button onClick={this.showPosts}>DELETE ALL POSTS</button>
			</div>
			)
		}
	}

const mapStateToProps = (state) => ({
	posts: state.posts
}) 


export default connect(mapStateToProps, { newPosts, deletePosts })(Post);