import styled from 'styled-components'

export const SectionS = styled.section`
  & h3.TodoList__alert {
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    font-size: 1rem;
    color: var(--reverse-font);
    background-color: var(--reverse);
  }

  & h3.TodoList__alert.TodoList__alert-error {
    background-color: var(--red);
    color: var(--font);
  }
`
