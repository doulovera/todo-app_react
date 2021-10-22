import styled from 'styled-components'

export const TitleS = styled.p`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 15px;
  background-color: ${(props) => `var(--${props.bgColor})`};
  border-radius: 5px;
  border: 0;
  outline: 0;
  color: var(--font);
  font-size: 1rem;
  font-weight: bold;
`

export const DescriptionS = styled.div`
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

  // Markdown things
  & h1 {
    margin-top: 1.2rem;
    font-size: 2.4rem;
    line-height: 1.2;
  }
  & h2 {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 1;
  }
  & h3 {
    margin-top: 0.8rem;
    font-size: 1.8rem;
    line-height: 1;
  }
  & h4 {
    margin-top: 0.6rem;
    font-size: 1.6rem;
    line-height: 1;
  }
  & h5 {
    margin-top: 0.6rem;
    font-size: 1.4rem;
    line-height: 1;
  }
  & h6 {
    margin-top: 0.6rem;
    font-size: 1.2rem;
    line-height: 1;
  }

  & hr {
    margin-top: 0.8rem;
  }

  & p {
    margin-top: 0.6rem;
  }
  
  & ul {
    padding-left: 30px;
  }

  & a {
    color: var(--anchor);
  }

  & :is(h1, h2, h3, h4, h5, h6, p):first-child {
    margin-top: 0;
  }

`
