import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textHeading};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }
`;

export const lightTheme = {
  colors: {
    primary: '#4A90E2',
    secondary: '#FF6B6B',
    background: '#FFFFFF',
    textPrimary: '#333333',
    textSecondary: '#666666',
    textHeading: '#000000',
    border: '#DDDDDD',
    accent: '#F5A623',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSizeBase: '16px',
    headingWeight: 600,
    bodyWeight: 400,
  },
};

export const darkTheme = {
  colors: {
    primary: '#4A90E2',
    secondary: '#FF6B6B',
    background: '#1E1E1E',
    textPrimary: '#FFFFFF',
    textSecondary: '#AAAAAA',
    textHeading: '#FFFFFF',
    border: '#444444',
    accent: '#F5A623',
  },
  spacing: lightTheme.spacing, // Reuse spacing
  typography: lightTheme.typography, // Reuse typography
};

export default GlobalStyles;
