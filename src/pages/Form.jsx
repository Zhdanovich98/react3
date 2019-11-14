import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            firstName: '',
            lastName: '',
            email: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { firstName, lastName, email } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='form-flex'>
                    <div className='submit-block'>
                        <button type="submit">
                            Submit
                </button>
                    </div>
                    <div className="input-div" >
                        <label>FirstName</label>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-div">
                        <label>LastName</label>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-div">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;