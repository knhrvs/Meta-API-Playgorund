module.exports = {
    mode: 'jit',
    content: [
      './public/**/*.html',
      './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    ],

    theme: {
      extend: {
        colors: {
         
        },
        fontFamily: {
          header: ['"Exo 2"', 'sans-serif'],
          body: ['Roboto', 'sans-serif'],
          display: ['Ginto Nord', 'sans-serif']
        },
      }
    }
};