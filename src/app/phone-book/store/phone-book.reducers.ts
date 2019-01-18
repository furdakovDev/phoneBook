import { Contact } from '../../shared/interfaces/contact.interface';

import * as PhoneBookActions from './phone-book.actions';

export interface FeatureState {
  contacts: State;
}

export interface State {
  contacts: Contact[];
  newContact: Contact;
  editingContact: Contact;
}

const initialState: State = {
  contacts: [],
  newContact: null,
  editingContact: null
};

export function phoneBookReducers(state = initialState, action: PhoneBookActions.PhoneBookActions) {
  switch (action.type) {
    case PhoneBookActions.ADD_CONTACT:
      const newContact: Contact = {...action.payload};
      newContact.id = state.contacts.length.toString();
      return {
        ...state,
        contacts: [...state.contacts, newContact],
        newContact: newContact
      };
    case PhoneBookActions.SET_CONTACTS:
      return {
        ...state,
        contacts: [...action.payload]
      };
    case PhoneBookActions.STOP_ADDING_EDITING:
      return {
        ...state,
        newContact: null,
        editingContact: null
      };
    case PhoneBookActions.START_EDITING:
      const contact = state.contacts[action.payload];
      const editingContact = {...contact};
      return {
        ...state,
        editingContact: editingContact
      };
    case PhoneBookActions.EDIT_CONTACT:
      const editContact = state.contacts[action.payload.id];
      const updatedContact = {
        ...editContact,
        ...action.payload.contact
      };
      const contacts = [...state.contacts];
      contacts[action.payload.id] = updatedContact;
      return {
        ...state,
        contacts: contacts,
        newContact: updatedContact
      };
    case PhoneBookActions.DELETE_CONTACT:
      const newContacts = [...state.contacts];
      newContacts.splice(action.payload, 1);
      newContacts.forEach((item, i) => {
        item.id = i.toString();
      });
      return {
        ...state,
        contacts: newContacts
      };
    default: return state;
  }
}
