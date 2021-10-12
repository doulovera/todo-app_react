import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: ${({ theme }) => theme.primary};
    --secondary: ${({ theme }) => theme.secondary};
    --font: ${({ theme }) => theme.font};
    --active: ${({ theme }) => theme.active};
    --reverse: ${({ theme }) => theme.reverse};
    --reverse-font: ${({ theme }) => theme.reverseFont};

    --default: ${({ theme }) => theme.default};
    --gray: ${({ theme }) => theme.gray};
    --brown: ${({ theme }) => theme.brown};
    --orange: ${({ theme }) => theme.orange};
    --yellow: ${({ theme }) => theme.yellow};
    --green: ${({ theme }) => theme.green};
    --blue: ${({ theme }) => theme.blue};
    --purple: ${({ theme }) => theme.purple};
    --pink: ${({ theme }) => theme.pink};
    --red: ${({ theme }) => theme.red};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--primary);
    color: var(--font);
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
