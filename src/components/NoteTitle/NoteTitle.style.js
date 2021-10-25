import styled from 'styled-components'

export const LabelS = styled.label`
  & .Note__title {
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
  }
`
