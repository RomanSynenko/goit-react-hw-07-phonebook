import React from 'react';
import s from './List.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import ContactListItem from './ContactListItem'
import { getVisibleContacts } from '../../redux/selector';

import contactsOperation from "../../redux/operation"


const ContactList = ({ contacts, deleteContact }) => {
    if (contacts.length === 0) return null
    return (
        <ul className={s.contact_list}>
            {
                contacts
                    .map(
                        (contact) => <ContactListItem
                            key={contact.id}
                            {...contact}
                            onRemove={deleteContact} />
                    )
            }
        </ul>
    )
};


// const visibleContacts = (allContacts, filter) => {
//     const normolizedFilter = filter.toLowerCase();
//     return allContacts.filter(contact =>
//         contact.name.toLowerCase().includes(normolizedFilter),
//     );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//     contacts: visibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//     deleteContact: id => dispatch(action.deleteContact(id)),
// });

const mapStateToProps = state => ({
    contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
    deleteContact: id => dispatch(contactsOperation.deleteContact(id)),
});

ContactListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);