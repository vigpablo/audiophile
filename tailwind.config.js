/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
          ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1362px',
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      H1: ['56px', '58px'],
      H2: ['40px', '44px'],
      H3: ['34px', '36px'],
      H4: ['28px', '38px'],
      H5: ['24px', '33px'],
      H6: ['18px', '24px'],
      overline: ['14px', '19px'],
      subtitle: ['13px', '25px'],
      body: ['15px', '25px'],
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0.05em',
      wide: '.1em',
      wider: '.2em',
      widest: '.65em',
    },
    extend: {
      colors: {
        marron: 'hsl(22, 65%, 57%)',
        beige: 'hsl(21, 94%, 75%)',
        semiblack:'hsl(0, 0%, 10%)',
        line: 'hsl(0, 0%, 20%)',
        plomo: 'hsl(0, 0%, 6%)',
        platadark: 'hsl(0, 0%, 50%)',
        platamedium: 'hsl(0, 0%, 70%)',
        plata: 'hsl(0, 0%, 95%)',
        platalight: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'image-header-mobile': "url('./assets/home/mobile/image-header.jpg')",
        'image-hader-tablet': "url('./assets/home/tablet/image-header.jpg')",
        'image-hader-desktop': "url('./assets/home/desktop/image-hero.jpg')",
      })

    },
  },
  plugins: [],
}
