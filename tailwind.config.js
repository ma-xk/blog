/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'blue': '#006CFA',
        'green':'#61D61A',
        'yellow': '#FFC20E',
        'white':'#FFFFFF',
        'cta':'#006CFA',
        'cta-hover':'#173DD4',
        'inactive':'#B4B4B4',
        'error':'#ED1C24',
        
      },
      fontFamily: {
        'sans': ['var(--variable-spaceMono)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      
    },

  },
  
  plugins: [require("tailwindcss-animate")],
}