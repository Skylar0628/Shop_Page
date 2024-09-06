import { createContext } from "react";

export const messageContext = createContext({});

export const initState = {
    type: '',
    title: '',
    text: '',
}

export const messageReducer = (state, action)=>{
  switch (action.type) {
    case "POST_MESSAGE":
        return {
          type: 'danger', // success, danger
          title: '成功',
          text: '這是一段成功的訊息',
        }
    case "CLEAR_MESSAGE":
        return {
            ...initState
        }
    default: return state
  }
}