import styled from 'styled-components'

export const LabelS = styled.label`
  & .Note__description {
    display: block;
    min-height: 60vh;
    height: auto;
    width: 100%;
    margin: 20px 0 35px;
    padding: 15px;
    background-color: var(--secondary);
    border-radius: 4px;
    border: 0;
    outline: 0;
    line-height: 1.5;
    font-family: monospace;
    color: var(--font);
    font-size: 1rem;
    resize: none;
    cursor: auto;
  }

  // Markdown things
  & .Note__description h1 {
    margin-top: 1.2rem;
    font-size: 2.4rem;
    line-height: 1.2;
  }
  & .Note__description h2 {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 1;
  }
  & .Note__description h3 {
    margin-top: 0.8rem;
    font-size: 1.8rem;
    line-height: 1;
  }
  & .Note__description h4 {
    margin-top: 0.6rem;
    font-size: 1.6rem;
    line-height: 1;
  }
  & .Note__description h5 {
    margin-top: 0.6rem;
    font-size: 1.4rem;
    line-height: 1;
  }
  & .Note__description h6 {
    margin-top: 0.6rem;
    font-size: 1.2rem;
    line-height: 1;
  }

  & .Note__description hr {
    margin-top: 0.8rem;
  }

  & .Note__description p {
    margin-top: 0.6rem;
  }
  
  & .Note__description :is(ul, ol) {
    padding-left: 30px;
  }

  & .Note__description a {
    color: var(--anchor);
  }

  & .Note__description :is(h1, h2, h3, h4, h5, h6, p):first-child {
    margin-top: 0;
  }
`
