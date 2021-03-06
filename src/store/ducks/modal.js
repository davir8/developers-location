/**
 * Types
 */
export const Types = {
  OPEN: 'modal/OPEN',
  CLOSE: 'modal/CLOSE',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  cordinates: null,
  modalIsOpen: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return {
        modalIsOpen: true,
        cordinates: action.payload.cordinates,
      };
    case Types.CLOSE:
      return {
        cordinates: null,
        modalIsOpen: false,
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  openModal: cordinates => ({
    type: Types.OPEN,
    payload: { cordinates },
  }),

  closeModal: () => ({
    type: Types.CLOSE,
  }),
};
