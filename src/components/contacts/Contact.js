import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context'

class Contact extends Component {
  state = {
    showContactInfo: false
  }
  onDeleteClick = (id, dispatch) => {
    const action = {
      type: 'DELETE_CONTACT',
      payload: id
    }
    dispatch(action)
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

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// }

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact
