const components = (state = {}, action) => {
  switch (action.type) {
    case 'COMPONENT_START': {
      return {
        ...state,
        [action.payload.id]: {
          name: action.payload.name,
          startTime: action.payload.startTime
        }
      };
    }

    case 'COMPONENT_END': {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          customProperties: action.payload.customProperties,
          endTime: action.payload.endTime
        }
      };
    }

    case 'COMPONENT_REMOVE': {
      const { [action.payload.id]: _, ...newState } = state;
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default components;
