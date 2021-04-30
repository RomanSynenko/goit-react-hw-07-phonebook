
import React from 'react';
import PropTypes from 'prop-types';

import s from './List.module.scss';


const ContactListItem = ({ id, name, phone, onRemove }) => {
    return (
        <li className={s.contact_item}>
            <p className={s.contact_name}>{name} </p> :
            <p>{phone}</p>
            <button className={s.delete_button}
                onClick={() => onRemove(id)}>Delete</button>
        </li>
    )
};
ContactListItem.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
};
export default ContactListItem;