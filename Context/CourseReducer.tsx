export const GET_COURSES = "GET_COURSES";
export const GET_COURSE = "GET_COURSE";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state:any, action:any) => {
  const { payload, type } = action;

  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        users: payload,
      };
    case GET_COURSE:
      return {
        ...state,
        selectedUser: payload,
      };
    default:
      return state;
  }
};
