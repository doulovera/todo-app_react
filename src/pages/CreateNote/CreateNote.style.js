import styled from 'styled-components'

export const ButtonS = styled.button`
  display: block;
  height: 50px;
  width: 100%;
  background-color: var(--reverse);
  border: 0;
  outline: 0;
  color: var(--reverse-font);
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
`

export const NoteTitleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 6px;
`

export const NoteColorSelector = styled.button`
  position: relative;
  height: 50px;
  width: 80px;
  min-width: 74px;
  background-color: var(--secondary);
  color: var(--font);
  outline: 0;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  &::after {
    content: '<';
    position: absolute;
    top: calc(50% - 13px);
    right: 10px;
    transform: rotate(${(props) => props.isColorActive ? '-270deg' : '270deg'});
    font-size: 1.4rem;
  }
`

export const ColorsContainer = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  display: none;
  height: auto;
  width: 140px;
  background-color: var(--lighter);
  border-radius: 3px;
  box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;

  &.ColorsContainer-active {
    display: block;
  }
`

export const ColorOption = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  font-size: 1rem;
  font-weight: 400;
  text-transform: capitalize;

  &:hover {
    background-color: #000;
  }

  & span {
    display: inline-block;
    height: 18px;
    width: 18px;
    margin: 0 5px 0 0;
    background-color: var(--${props => props.bgColor});
    border: 1px solid var(--primary);
  }

`
