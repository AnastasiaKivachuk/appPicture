import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Base64} from '../../models/base64.model';

export const ADD_STRING = 'Base64 Add';
export const REMOVE_STRING = 'Base64 Remove';

export class AddString implements Action {
  readonly type = ADD_STRING;

  constructor(public payload: string) {
  }
}

export class RemoveString implements Action {
  readonly type = REMOVE_STRING;

  constructor(public payload: number) {
  }
}

export type Actions = AddString | RemoveString
