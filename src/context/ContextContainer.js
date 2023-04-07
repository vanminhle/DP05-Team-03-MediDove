import React, { createContext, useState } from "react"

export const DatasContext = createContext();


function ContextContainer({children}) {
  const [isOpen, setIsOpen] = useState(false);

  const [stickyMenu, setStickyMenu] = useState(false);
  // sticky
  React.useEffect(() => {
      const stickyMenuBar = () => {
          if (window.scrollY > 80) {
              setStickyMenu(true)
          }
          else {
              setStickyMenu(false)
          }
      }
     window.addEventListener('scroll', stickyMenuBar);
  },[])

  const values ={
    isOpen,
    setIsOpen,
    stickyMenu
  }
  return (
    <>
      <DatasContext.Provider value={values}>
          {children}
      </DatasContext.Provider>
    </>
  )
}

export default ContextContainer