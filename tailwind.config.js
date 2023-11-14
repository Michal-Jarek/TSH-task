/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     container: {
      center: true,
      padding: '1rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
    
    extend: {
     
      colors: {
        primaryTxt: 'rgb(var(--primary-txt-col) /  <alpha-value>)',
        secondaryTxt: 'rgb(var(--secondary-txt-col) /  <alpha-value>)',
        btnNorm: 'rgb(var(--btn-norm-col) /  <alpha-value>)',
        btnHov: 'rgb(var(--btn-hover-col) /  <alpha-value>)',
        btnDisabled: 'rgb(var(--btn-disabled-col) /  <alpha-value>)',
        additional: 'rgb(var(--additional-col) /  <alpha-value>)',
        iconLight: 'rgb(var(--icon-light-col) /  <alpha-value>)',
        formBorder: 'rgb(var(--form-border-col) /  <alpha-value>)',
        bgMain: 'rgb(var(--background-col) /  <alpha-value>)',
        bgModal: 'rgb(var(--background-modal-col) /  <alpha-value>)',
        unavailable: 'rgb(var(--unavailable-col) /  <alpha-value>)',
    },
      maxWidth: {
        'mobile': '327px', // Two times extra-small
        'tablet': '288px', // Three times extra-small
      },
    },
    
  },
   
plugins: [],
}