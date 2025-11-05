module.exports = {
  content: ["./app/**/*.{js,jsx}","./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT:"#111111", light:"#F5F5F7" } },
      fontFamily: { sans:["ui-sans-serif","system-ui","-apple-system","Inter","Segoe UI","Roboto","Helvetica","Arial"] },
      boxShadow: { soft: "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)" }
    }
  },
  plugins: [],
}
