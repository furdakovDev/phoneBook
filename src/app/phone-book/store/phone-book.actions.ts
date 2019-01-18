import { Action } from '@ngrx/store';
import { Contact } from 'src/app/shared/interfaces/contact.interface';

export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const GET_CONTACTS = 'GET_CONTACTS';
export const SET_CONTACTS = 'SET_CONTACTS';
export const START_EDITING = 'START_EDITING';
export const STORE_CONTACT = 'STORE_CONTACT';
export const STOP_ADDING_EDITING = 'STOP_ADDING_EDITING';
export const DELETE_FROM_SERVER = 'DELETE_FROM_SERVER';

export class AddContact implements Action {
  readonly type = ADD_CONTACT;

  constructor(public payload: Contact) {}
}

export class DeleteContact implements Action {
  readonly type = DELETE_CONTACT;

  constructor(public payload: number) {}
}

export class EditContact implements Action {
  readonly type = EDIT_CONTACT;

  constructor(public payload: {id: number, contact: Contact}) {}
}

export class GetContacts implements Action {
  readonly type = GET_CONTACTS;
}

export class SetContacts implements Action {
  readonly type = SET_CONTACTS;

  constructor(public payload: Contact[]) {}
}

export class StoreContact implements Action {
  readonly type = STORE_CONTACT;
}

export class StartEditing implements Action {
  readonly type = START_EDITING;

  constructor(public payload: number) {}
}

export class StopAddingEditing implements Action {
  readonly type = STOP_ADDING_EDITING;
}

export class DeleteFromServer implements Action {
  readonly type = DELETE_FROM_SERVER;
}

export type PhoneBookActions =
  AddContact |
  DeleteContact |
  EditContact |
  StartEditing |
  GetContacts |
  SetContacts |
  StoreContact |
  DeleteFromServer |
  StopAddingEditing;
