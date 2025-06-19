
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
  "./src/**/*.{ts,tsx}"],

  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        organic: {
          coral: '#FF6B6B',
          teal: '#4ECDC4',
          gold: '#FFD93D',
          lavender: '#A8E6CF',
          orange: '#FF8E53',
          blue: '#45B7D1',
          purple: '#96CEB4',
          cream: '#FFF8DC',
          charcoal: '#2C3E50'
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'organic': '24px',
        'organic-lg': '32px',
        'organic-xl': '48px'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
        'heading': ['Inter', 'ui-sans-serif', 'system-ui']
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'breathe': {
          '0%, 100%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.05)'
          }
        },
        'wave': {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)'
          },
          '25%': {
            transform: 'translateY(-10px) rotate(1deg)'
          },
          '75%': {
            transform: 'translateY(5px) rotate(-1deg)'
          }
        },
        'morph': {
          '0%, 100%': {
            'border-radius': '30% 70% 70% 30% / 30% 30% 70% 70%'
          },
          '25%': {
            'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%'
          },
          '50%': {
            'border-radius': '70% 30% 60% 40% / 50% 70% 30% 60%'
          },
          '75%': {
            'border-radius': '40% 60% 70% 30% / 40% 70% 60% 30%'
          }
        },
        'liquid': {
          '0%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
          '100%': {
            'background-position': '0% 50%'
          }
        },
        'float-organic': {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)'
          },
          '33%': {
            transform: 'translateY(-12px) rotate(1deg)'
          },
          '66%': {
            transform: 'translateY(8px) rotate(-1deg)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'breathe': 'breathe 4s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'liquid': 'liquid 6s ease infinite',
        'float-organic': 'float-organic 5s ease-in-out infinite'
      },
      backgroundImage: {
        'gradient-organic-sunset': 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)',
        'gradient-organic-ocean': 'linear-gradient(135deg, #4ECDC4 0%, #45B7D1 100%)',
        'gradient-organic-forest': 'linear-gradient(135deg, #A8E6CF 0%, #96CEB4 100%)',
        'gradient-organic-cosmic': 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 25%, #FFD93D 50%, #A8E6CF 75%, #FF8E53 100%)'
      },
      boxShadow: {
        'organic-soft': '0 8px 32px rgba(255, 107, 107, 0.15)',
        'organic-medium': '0 16px 64px rgba(78, 205, 196, 0.2)',
        'organic-strong': '0 24px 96px rgba(255, 217, 61, 0.25)',
        'organic-glow': '0 0 40px rgba(255, 107, 107, 0.3), 0 0 80px rgba(78, 205, 196, 0.2)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;