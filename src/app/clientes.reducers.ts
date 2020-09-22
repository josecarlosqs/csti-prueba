import { createReducer, on } from '@ngrx/store';
import { addCliente } from './clientes.actions';
 
export const initialState = [];
 
const _clienteReducer = createReducer(
  initialState,
  on(addCliente, (state, payload) => state.push(payload))
);
 
export function counterReducer(state, action) {
  return _clienteReducer(state, action);
}