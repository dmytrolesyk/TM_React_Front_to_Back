import React, { Component } from 'react'
import { Consumer } from '../../context'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value})

  onSubmit = (dispatch, e) => {
    e.preventDefault()
    const action = {
      type: 'ADD_CONTACT',
      payload: {
        ...this.state
      }
    }
    dispatch(action)
  }

  render() {
    const { name, email, phone } = this.state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text"
                      name="name" 
                      className="form-control"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onChange}
                      />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email"
                      name="email" 
                      className="form-control"
                      placeholder="Enter Email"
                      value={email}
                      onChange={this.onChange}
                      />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                      type="text"
                      name="phone" 
                      className="form-control"
                      placeholder="Enter Phone Number"
                      value={phone}
                      onChange={this.onChange}
                      />
                  </div>
                  <input 
                    type="submit" 
                    value="Add Contact" 
                    className="btn btn-block btn-danger"
                    />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default  AddContact
