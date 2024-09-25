/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        backgroundImage: {
            'card-placeholder':
                'conic-gradient(from 180deg at 50% 50%, #F3F4FE -30.26deg, #BCD3FF 46.8deg, #F3F4FE 142.2deg, #BCD3FF 223.2deg, #F3F4FE 329.74deg, #BCD3FF 406.8deg)',
            'step-number': 'linear-gradient(148.59deg, #E2EEFF 23.44%, #BBD6FF 40.15%, #D8E8FF 65.46%, #8CBAFF 88.25%, #E2EEFF 101.92%)',
        },

        extend: {
            colors: {
                brand: {
                    100: 'var(--brand-100)',
                    500: 'var(--brand-500)',
                },
                neutral: {
                    50: 'var(--neutral-50)',
                    100: 'var(--neutral-100)',
                    200: 'var(--neutral-200)',
                    300: 'var(--neutral-300)',
                },
                'card-foreground': 'var(--card-foreground)',
            },
            borderRadius: {
                button: '100px',
            },
            boxShadow: {
                card: '0px 1px 16px -1px var(--neutral-200)',
            },
        },
    },
    plugins: [],
}
