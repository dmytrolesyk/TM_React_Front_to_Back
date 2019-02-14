import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Consumer } from '../../context'

class Contact extends Component {
  state = {
    showContactInfo: false
  }
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      const action = {
      type: 'DELETE_CONTACT',
      payload: id
    }
    dispatch(action)
    } catch (error) {
        const action = {
        type: 'DELETE_CONTACT',
        payload: id
      }
      dispatch(action)
    }
  }

  render() {
    const { id, name, email, phone } = this.props.contact
    const { showContactInfo } = this.state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card card-body mb-3">
              <h4>{name}
                <span 
                  onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} 
                  className="fas fa-sort-down"
                  style={{cursor: 'pointer'}}>
                </span>
                <span
                  className="fas fa-times"
                  style={{cursor: 'pointer', float: 'right', color: 'red'}}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}>
                </span>
                <Link to={`contacts/edit/${id}`}>
                  <span 
                    style={{
                      float: 'right',
                      color: 'black',
                      cursor: 'pointer',
                      marginRight: '16px'
                    }} 
                    className="fas fa-pencil-alt"
                  />
                </Link>
              </h4>
              { showContactInfo ?  (<ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul>) : null }
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact
