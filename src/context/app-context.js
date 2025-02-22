import React, { useState } from "react"

const initialState = {
  wallet: 8200000000,
  cart: {},
}
const AppContext = React.createContext(initialState)

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState)
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
