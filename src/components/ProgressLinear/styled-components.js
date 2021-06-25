import styled, { keyframes } from 'vue-styled-components'

const indeterminateFirst = keyframes`
    from {
        left: -100%;
        width: 100%;
    }
    to {
        left: 100%;
        width: 10%;
    }
  `

const indeterminateSecond = keyframes`
    from {
        left: -150%;
        width: 100%;
    }
    to {
        left: 100%;
        width: 10%;
    }
  `

export const Wrapper = styled.div.attrs(() => ({
  class: 'progress-linear',
}))`
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 4px;
    background-color: #c3caec;
    top: 0;
    left: 0;
    right: 0;
`

export const Indeterminate = styled.div.attrs(() => ({
  class: 'progress-linear--indeterminate',
}))`
    position: relative;
    width: 100%;
    height: 100%;
    &:before {
      content: '';
      position: absolute;
      height: 100%;
      background-color: #99a6e3;
      animation: ${indeterminateFirst} 1.5s infinite ease-out;
    }
    &:after {
      content: '';
      position: absolute;
      height: 100%;
      background-color: #c4d2ff;
      animation: ${indeterminateSecond} 1.5s infinite ease-in;
    }
`
