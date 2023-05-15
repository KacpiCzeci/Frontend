/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'daher-blue': {
          DEFAULT: '#002A60',
          50: '#197DFF',
          100: '#0472FF',
          200: '#0060DA',
          300: '#004EB2',
          400: '#003C89',
          500: '#002A60',
          600: '#001128'
        },
        'daher-red': {
          DEFAULT: '#F5000C',
          50: '#FFAEB2',
          100: '#FF999E',
          200: '#FF7077',
          300: '#FF4851',
          400: '#FF1F2A',
          500: '#F5000C',
          600: '#BD0009',
          700: '#850007',
          800: '#4D0004',
          900: '#150001',
          950: '#000000'
        },
        'daher-steel-blue': {  
          DEFAULT: '#4785B5',  
          50: '#CADCEA',  
          100: '#BBD2E4',  
          200: '#9EBFD9',  
          300: '#80ACCD',  
          400: '#6398C2',  
          500: '#4785B5',  
          600: '#37678D',  
          700: '#274A64',  
          800: '#182C3C',  
          900: '#080F14',  
          950: '#000000'
        },
        'daher-darkgray': '#3a3a3a',
        'daher-gray': '#565656',
        'daher-lightgray': '#bdbfbf',
        'daher-stonegray': '#e7e7e7'
      },
      backgroundImage: {
        'trailer': "url('../static/bg1.jpeg')",
        'crane': "url('../static/bg2.png')",
        'trailer1': "url(../static/bg3.jpeg)",
        'traintank': "url(../static/bg4.jpeg)",
        'crane2': "url(../static/bg5.jpeg)",
        'transformerstation': "url(../static/bg6.png)",
        'train': "url(../static/bg7.jpeg)",
        'construction': "url(../static/bg8.jpeg)",
        'sign': "url(../static/bg9.jpeg)"
      },
      aspectRatio: {
        '2/1': '2 / 1',
      }
    },
    screens: {
      'sm': '584px', //Problem one tile to large, 2 tiles too small -> 2 tiles with smaller font-sixe
      'md': '830px', //Min width when 2 tiles suits best
      'lg': '1024px', //Problem with 4 tiles -> small font size
      'xl': '1380px', //Normal font
      '2xl': '1800px'
    }
  },
  plugins: [],
}

