"use client"
import { createContext, useContext } from "react"

const LocaleContext = createContext({ locale: "en", t: (k)=>k })

export function LocaleProvider({ locale, dict, children }) {
  function t(path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : path, dict)
  }
  return <LocaleContext.Provider value={{ locale, t }}>{children}</LocaleContext.Provider>
}
export function useLocale(){ return useContext(LocaleContext) }
