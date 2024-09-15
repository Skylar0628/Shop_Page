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
          type: action.payload.type, // success, danger
          title: action.payload.title,
          text: action.payload.text,
        }
    case "CLEAR_MESSAGE":
        return {
            ...initState
        }
    default: return state
  }
}

export function handleSuccessMessage(dispatch) {
    dispatch({
      type: "POST_MESSAGE",
      payload: {
        type: "success",
        title: "成功",
        text: "成功!"
      }
    });
}

export function handleErrorMessage(dispatch) {
    dispatch({
      type: "POST_MESSAGE",
      payload: {
        type: "danger",
        title: "失敗",
        text: "失敗!"
      }
    });
  }

