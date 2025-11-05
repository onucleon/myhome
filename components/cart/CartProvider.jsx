"use client"
import { createContext, useContext, useMemo, useReducer, useState } from "react"
const CartContext = createContext(null)
function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find(i => i.id === action.item.id)
      if (existing) return { ...state, items: state.items.map(i => i.id === existing.id ? { ...i, qty: i.qty + 1 } : i) }
      return { ...state, items: [...state.items, { ...action.item, qty: 1 }] }
    }
    case "REMOVE": return { ...state, items: state.items.filter(i => i.id != action.id) }
    case "INC": return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, qty: i.qty + 1 } : i) }
    case "DEC": return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i) }
    case "CLEAR": return { items: [] }
    default: return state
  }
}
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [] })
  const [isOpen, setOpen] = useState(false)
  const api = useMemo(() => ({
    items: state.items,
    count: state.items.reduce((n, i) => n + i.qty, 0),
    total: state.items.reduce((n, i) => n + i.qty * i.price, 0),
    add: (item) => dispatch({ type: "ADD", item }),
    remove: (id) => dispatch({ type: "REMOVE", id }),
    inc: (id) => dispatch({ type: "INC", id }),
    dec: (id) => dispatch({ type: "DEC", id }),
    clear: () => dispatch({ type: "CLEAR" }),
    open: () => setOpen(true),
    close: () => setOpen(false),
    isOpen
  }), [state, isOpen])
  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}
export function useCart(){ const ctx = useContext(CartContext); if(!ctx) throw new Error("useCart must be used within <CartProvider>"); return ctx }
