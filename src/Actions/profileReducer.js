const initialState = {
  profileDetails: [
    {
      name: 'lohitha',
      emailId: 'lohithayalavarthi95@gmail.com'
    }
  ]
}
const profileReducer = (state = initialState, action) => {
  console.log('action', action, state)
  switch (action.type) {
    case 'PROFILE_REDUCER':
      return {
        ...state,
        profileDetails: [...state.profileDetails, action.payload]
      }
    default:
      return state
  }
}

export default profileReducer
