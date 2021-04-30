import axios from 'axios';
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './action';

axios.defaults.baseURL = 'http://localhost:6060';

const fetchContact = () => dispatch => {
    dispatch(fetchContactRequest());
    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error)));
};

const addContact = contact => dispatch => {
    dispatch(addContactRequest());
    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess({ ...data })))
        .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());
    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error)));
};

export default { fetchContact, addContact, deleteContact };
