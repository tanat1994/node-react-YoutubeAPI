import React, { Component } from 'react';

class TestFetch extends Component {

  constructor () {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount () {
    fetch('/api/list')
      .then(res => res.json())
      .then(data => this.setState({ data }, () => console.log('List ', data)));
  }

  render () {
    return (
      <div>
        <h1>Hello Fetch</h1>
      </div>
    );
  }
};

export default TestFetch;
