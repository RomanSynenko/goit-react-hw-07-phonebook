import React, { Component } from 'react';
import { connect } from "react-redux";

import { getLoad, getContactName } from '../../redux/selector';
import contactsOperations from '../../redux/operation';

// import actions from "../../redux/action";

import s from './Form.module.scss'



const INITIAL_STATE = {
    name: '',
    phone: '',
}
class ContactForm extends Component {
    state = {
        ...INITIAL_STATE
    }
    componentDidMount() {
        this.props.fetchContact();
    }
    handleChangeForm = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }
    uniqueContact = name => {
        const contact = !this.props.name.find(contact => contact === name);
        return contact;
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        const { name } = this.state;
        this.uniqueContact(name);
        if (this.state.name !== '') {
            if (!this.uniqueContact(name)) {
                alert(`'${name} is already in contacts'`);
                return;
            } else {
                this.props.onSubmit(this.state);
                this.resetForm();
            }
            return;
        }
        alert('Enter the name or number');
    }
    resetForm = () => this.setState(INITIAL_STATE)
    render() {
        const { name, phone } = this.state;
        return (
            <>
                <h2 className={s.title}>Contact Form</h2>
                <form className={s.contact_form} onSubmit={this.handleFormSubmit}>
                    <input
                        className={s.contact_input}
                        type="text" name='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={this.handleChangeForm} />
                    <input
                        className={s.contact_input}
                        type="tel" name='phone'
                        placeholder='Enter phone number'
                        value={phone}
                        onChange={this.handleChangeForm} />
                    <button className={s.contact_input}
                        type='submit'>Add contact</button>
                </form>
            </>
        )
    }
};


const mapStateToProps = state => ({
    loadConntact: getLoad(state),
    name: getContactName(state),
});

const mapDispatchToProps = dispatch => ({
    fetchContact: () => dispatch(contactsOperations.fetchContact()),
    onSubmit: data => dispatch(contactsOperations.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);