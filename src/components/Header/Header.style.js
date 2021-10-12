import styled from 'styled-components'

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;

  & h1 {
    flex: 1;
    font-size: 2rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  height: 50px;
  border-bottom: 2px solid var(--secondary);
`

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  &.active {
    box-shadow: var(--active) 0px 2px 0px;
  }

  & span {
    width: 18px;
    height: 18px;
    padding-top: 3px;
    background-color: var(--reverse);
    border-radius: 9999px;
    font-size: 0.7rem;
    color: var(--reverse-font);
  }
`
