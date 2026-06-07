/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jarvis: {
          blue: '#00f0ff',
          cyan: '#00dcff',
          dark: '#010a15',
          panel: 'rgba(1, 10, 21, 0.75)',
          panelBorder: 'rgba(0, 240, 255, 0.35)',
          glow: 'rgba(0, 240, 255, 0.4)',
          red: '#ff3b3b',
          amber: '#ffb300',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
        sans: ['Rajdhani', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(0, 240, 255, 0.5)',
        'glow-cyan-lg': '0 0 25px rgba(0, 240, 255, 0.8)',
        'glow-red': '0 0 15px rgba(255, 59, 59, 0.5)',
        'glow-amber': '0 0 15px rgba(255, 179, 0, 0.5)',
        'hud-glass': 'inset 0 0 20px rgba(0, 240, 255, 0.1), 0 0 15px rgba(0, 240, 255, 0.15)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)',
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 25s linear infinite',
        'glitch': 'glitch 1.5s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        'spin-reverse': {
          to: { transform: 'rotate(-360deg)' }
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        }
      }
    },
  },
  plugins: [],
}
