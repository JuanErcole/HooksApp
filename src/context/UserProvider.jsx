import { UserContext } from "./UserContex"


export const UserProvider = ({ children }) => {

    const user = {
        name: 'Juan',
        edad: 27,
    }

  return (
    <UserContext.Provider value={{hola: 'Munfo', user}}>
        {children}
    </UserContext.Provider>
  )
}
