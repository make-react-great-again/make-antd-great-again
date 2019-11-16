export const types = {
  INCREMENT: 'increment'
}

export const initialState = {
  counter: 1
}

export const reducer = function(state = initialState, action){
  switch(action.type){
    case types.INCREMENT:
      return {
        counter: state.counter + 1
      }
    default: 
    return state
  }
}

export const actions = {
  increment(){
    return {
      type: types.INCREMENT
    }
  }
}