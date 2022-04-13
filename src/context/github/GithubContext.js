import { createContext, useReducer } from "react";
import { createRenderer } from "react-dom/test-utils";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({children}) => {
 const initialState = {
   users: [],
   user: {},
   repos: [],
   loading: false
 }


 const [state, dispatch] = useReducer(githubReducer, initialState)







  //clearing users from state
  const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

  return <GithubContext.Provider value={{
    ...state,
    dispatch,
    clearUsers,
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext
