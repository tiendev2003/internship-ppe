import {createContext, useState} from "react";

interface IGlobalContext {
  isOpenMenu: boolean
}

interface IGlobalProviderProps {
  children: React.ReactNode
}

export const GlobalContext = createContext<IGlobalContext>(null)
const GlobalProvider = ({children }: IGlobalProviderProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(true)

  return (<GlobalContext.Provider
    value={{setIsOpenMenu, isOpenMenu}}
  >
    {children}
  </GlobalContext.Provider>)

}
export default GlobalProvider