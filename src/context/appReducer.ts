export default (state, { payload, type }) => {
  switch (type) {
    case 'SET_FILM':
      return { ...state, film: payload };
    case 'SET_FILMS':
      return { ...state, films: payload };
    case 'SET_VEHICLES':
      return { ...state, vehicles: payload };
    default:
      return state;
  }
};
