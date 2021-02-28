import React, { Component } from 'react'

interface User {
  name: string
  age: number
}

interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name: string
  user: User | undefined
}

export default class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  }

  onClick = () => {
    const foundUser = this.props.users.find(
      (user) => user.name === this.state.name
    )
    console.log(foundUser)
    this.setState({ user: foundUser })
  }

  render() {
    const { user, name } = this.state
    return (
      <div>
        <input
          type='text'
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>find user</button>
        <div>{user && user.name}</div>
        <div>{user && user}</div>
      </div>
    )
  }
}
