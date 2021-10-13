import styled from 'styled-components'

export const TodoItemS = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  margin-bottom: 3px;

  color: var(--font);
  text-decoration: none;

  background-color: ${(props) => `var(--${props.color})`};

  & a {
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
    width: 80%;
    text-decoration: none;
  }

  & a span {
    display: block;
    height: 1.2rem;
    width: 100%;
    padding-left: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: var(--font);
    font-weight: normal;
    font-size: 1rem;
  }

  & input {
    width: 20px;
    margin: 0 20px;
  }
`
