import {createContext, ReactNode, useState} from "react"

export const AppConfigContext = createContext<{toggleModal: () => void;  modalOpen: boolean }>({modalOpen: false, toggleModal: () => null});


export const AppConfigContextProvider = ({ children }: {children:ReactNode}) => {
    const [modalOpen, setModalOpen ] = useState<boolean>(false);
   
    const toggleModal = () => {
      setModalOpen(!modalOpen)
    };
  
    const value = {
        toggleModal,
        modalOpen
    };
  
    return (
      <AppConfigContext.Provider value={value}>{children}</AppConfigContext.Provider>
    );
  };