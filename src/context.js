import React, { Component } from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload)
    }
    case 'ADD_CONTACT':
    const id = state.contacts[state.contacts.length-1].id + 1
    const { name, email, phone } = action.payload
    const newContact = {
      id,
      name,
      email,
      phone
    }

    return {
      ...state,
      contacts: [
        ...state.contacts,
        newContact
      ]
    }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 0,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 1,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '222-222-2222'
      },
      {
        id: 2,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '444-444-4444'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
