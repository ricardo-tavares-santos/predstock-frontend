import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    symbol: '',
    name: '',
    exchange: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        symbol: this.state.symbol,
        name: this.state.name,
        exchange: this.state.exchange
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        symbol: this.state.symbol,
        name: this.state.name,
        exchange: this.state.exchange
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, symbol, name, exchange } = this.props.item
      this.setState({ id, symbol, name, exchange })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="symbol">Symbol</Label>
          <Input type="text" name="symbol" id="symbol" onChange={this.onChange} value={this.state.symbol === null ? '' : this.state.symbol} />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" onChange={this.onChange} value={this.state.name === null ? '' : this.state.name}  />
        </FormGroup>
        <FormGroup>
          <Label for="exchange">Exchange</Label>
          <Input type="text" name="exchange" id="exchange" onChange={this.onChange} value={this.state.exchange === null ? '' : this.state.exchange}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm