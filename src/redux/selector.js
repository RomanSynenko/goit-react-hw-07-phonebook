import { createSelector } from '@reduxjs/toolkit';

export const getLoad = state => state.contacts.loading;
export const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;
export const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normolizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normolizedFilter),
        );
    },
);
export const getContactName = createSelector([getAllContacts], contacts => {
    return contacts.map(({ name }) => name);
});
