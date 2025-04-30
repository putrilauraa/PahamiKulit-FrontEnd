import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'main-light-blue': '#7092CF',
        'main-blue': '#405E93',
        'main-light-pink': 'F38EB1',
        'main-pink': '#D64F7E',
        'bd-baby-blue': '#E6EEFC',
        'bd-blue': '#D5E4FF',
        'bd-baby-pink': '#FFEDF3',
        'bd-pink': '#FFD5E9',
        'btn-light-blue': '#B5CBF0',
        'btn-blue': '#7293D0',
        'bd-cream': '#FFF6ED',
        'muda': '#B9CEF2',
        'tua': '#7092CF'
      },
    },
  },
  plugins: [],
};

export default config;
