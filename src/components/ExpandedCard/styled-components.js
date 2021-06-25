import styled from 'vue-styled-components'

export const Card = styled.div.attrs(() => ({
  class: 'expanded-card'
}))`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    transition: .2s;
    width: 300px;
    min-height: 200px;
    margin: 0 10px 20px;
    :hover {
      transform: translateY(-0.5%);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
    .expanding-enter-active,
    .expanding-leave-active {
      transition: 0.3s ease
    }

    .expanding-enter, .expanding-leave-to {
      height: 0;
      min-height: 0;
      opacity: 0;
    }
`

export const CardContent = styled.div.attrs(() => ({
  class: 'expanded-card__content',
}))`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
    width: 240px;
    min-height: 170px
    > .pa {
      padding: 10px 15px;
      width: 200px;
      > div {
        padding 7px 0
      }
    }
`

export const TaskName = styled.div.attrs(() => ({
  class: 'expanded-card__title',
}))`
    color: #555ea2;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 600;
`

export const Info = styled.div.attrs(() => ({
  class: 'expanded-card__info',
}))`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 160px
`

export const TextBlock = styled('div', { small: Boolean }).attrs(() => ({
  class: 'expanded-card__text-block'
}))`
    font-size: ${props => props.small ? '12px' : '16px'};
    color: ${props => props.small ? '#919191' : '#000'};
    font-weight: 500;
`

export const ExpandedBlock = styled.div.attrs(() => ({
  class: 'expanded-card__additionally',
}))`
    min-height: 80px
    max-height: 100%
`

export const ChipsContainer = styled.div.attrs(() => ({
  class: 'expanded-card__additionally',
}))`
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px;
    width: 250px
`

export const ClientName = styled.div.attrs(() => ({
  class: 'expanded-card__client',
}))`
    width: 300px;
    display: flex;
    padding: 15px;
    margin: 10px 0;
    justify-content: center;
    box-sizing: border-box;
    background: #e3e6f7;
`
