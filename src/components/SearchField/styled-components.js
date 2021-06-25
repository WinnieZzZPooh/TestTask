import styled, { keyframes } from 'vue-styled-components'

const resetIn = keyframes`
    from {
      transform: translate3d(-20%, 0, 0);
      opacity: 0;
    }
    to {
      transform: none;
      opacity: 1;
    }
`

export const SearchBox = styled('div', { width: String }).attrs(() => ({
  class: 'search-field'
}))`
    display: inline-block;
    position: relative;
    width: ${props => props.width || '200px'};
    height: 37px;
    white-space: nowrap;
    box-sizing: border-box;
    font-size: 13px;
    margin: 0 10px
`

export const Wrapper = styled.div.attrs(() => ({
  class: 'search-field__wrapper',
}))`
    width: 100%;
    height: 100%;
`

export const TextInput = styled.input.attrs(() => ({
  class: 'search-field__input',
}))`
    display: inline-block;
    transition: box-shadow .4s ease, background .4s ease;
    border: 0;
    border-radius: 12px;
    box-shadow: inset 0 0 0 1px #D9D9D9;
    background: #FFFFFF;
    padding: 0;
    padding-right: 30px;
    padding-left: 37px;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    white-space: normal;
    font-size: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button,
    ::-webkit-search-results-button,
    ::-webkit-search-results-decoration {
      display: none;
    }
    :hover {
      box-shadow: inset 0 0 0 1px silver;
    }
    :focus, :active {
      outline: 0;
      box-shadow: inset 0 0 0 1px #8b9be5;
      background: #FFFFFF;
    }
    ::placeholder {
      color: #AAAAAA;
    }
`

export const SearchIcon = styled.div.attrs(() => ({
  class: 'search-field__search-icon',
}))`
    position: absolute;
    top: 0;
    right: inherit;
    left: 0;
    margin: 0;
    border: 0;
    border-radius: 18px 0 0 18px;
    background-color: rgba(255, 255, 255, 0);
    padding: 0;
    width: 37px;
    height: 100%;
    vertical-align: middle;
    text-align: center;
    font-size: inherit;
    user-select: none;
    ::before {
      display: inline-block;
      margin-right: -4px;
      height: 100%;
      vertical-align: middle;
      content: '';
    }
    :hover, :active {
      cursor: pointer;
    }
    :focus {
      outline: 0;
    }
    svg {
      width: 17px;
      height: 17px;
      vertical-align: middle;
      fill: #666666;
    }
`
export const ResetIcon = styled.div.attrs(() => ({
  class: 'search-field__reset-icon',
}))`
    position: absolute;
    top: 8px;
    right: 8px;
    margin: 0;
    border: 0;
    background: none;
    cursor: pointer;
    padding: 0;
    font-size: inherit;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    fill: rgba(0, 0, 0, 0.5);
    &.search-field__reset-icon--hide {
      display:none;
    }
    :focus {
      outline: 0;
    }
    svg {
      display: block;
      margin: 4px;
      width: 13px;
      height: 13px;
    }
    :valid ~ .search-field__reset-icon {
      display: block;
      animation-name: ${resetIn};
      animation-duration: .15s;
    }
`
