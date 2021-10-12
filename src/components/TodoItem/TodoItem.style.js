import styled from 'styled-components'

export const TodoItemS = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  margin-bottom: 3px;
  padding: 0 20px;

  color: var(--font);
  text-decoration: none;

  background-color: ${(props) => `var(--${props.color})`};
`
