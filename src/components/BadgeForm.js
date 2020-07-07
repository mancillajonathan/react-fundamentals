import React, { Component } from 'react';

export class BadgeForm extends Component {
  //   state = {}; // Inicializando el estado del componente

  //   handleChange = (event) => {
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //     });
  //   };

  handleClick = (event) => {
    console.log('Button was clicked!');
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Form was submitted');
  //   console.log(this.props.formValues);
  // };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.props.onSubmit}>
          <div className='form-group'>
            <label>First name</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='firstName'
              value={this.props.formValues.firstName}
            />
          </div>

          <div className='form-group'>
            <label>Last name</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='lastName'
              value={this.props.formValues.lastName}
            />
          </div>

          <div className='form-group'>
            <label>E-mail</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='email'
              name='email'
              value={this.props.formValues.email}
            />
          </div>

          <div className='form-group'>
            <label>Job title</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='jobTitle'
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className='form-group'>
            <label>GitHub</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='twitter'
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className='btn btn-primary'>
            Save
          </button>
          {this.props.error && <p className="text-danger">{this.props.message}</p>}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
