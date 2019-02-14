import React, { Component } from 'react'

class Test extends Component {

  state = {
    title: '',
    id: '',
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        id: data.id,
      }))
  }

  // componentWillMount() {
  //   console.log('Component Will Mount')
  // }

  // componentDidUpdate() {
  //   console.log('Component Did Update')
  // }

  // componentWillUpdate() {
  //   console.log('Component Will Update')
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('received new props')
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: 'something'
  //   }
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getDerivedStateFromProps')
  // }

  render() {
    const { title, id } = this.state
    return (
      <div>
        <h1>{id}: {title}</h1>
      </div>
    )
  }
}

export default Test