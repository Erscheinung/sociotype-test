import React from 'react'
import styled from 'styled-components'
import { StartBtn } from '../components/utils/Buttons'
import { IntroCard } from '../components/utils/Cards'
import { fonts, colors } from '../components/utils/_var'
import { media } from '../components/utils/_media-queries'

const Wrapper = styled.div`
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  background: ${colors.$colorBg};
  h1 {
    position: relative;
    font-family: ${fonts.$titleFont};
    font-size: 1.1em;
    color: ${colors.$colorGold};
    text-align: center;
    padding-top: 2em;
    ${media.tablet`font-size: 1.5em; letter-spacing: 1.5px;`};
    ${media.laptop`font-size: 2em; letter-spacing: 2px;`};
  }
  .list-group {
    padding: 0 2em;
    .list-group-item {
      background: transparent;
      padding: 1em 1.25em;
      font-family: ${fonts.$latoFont};
      border: 0;
      margin-bottom: 0;
      color: ${colors.$colorGold};
      ${media.tablet`font-size: 1.3em`};
      text-align: center;
    }
  }
`
// function getIntroMessage() {
//   const IntroMessage = [
//     'Or try to, for God\'s sake.',
//     'But I know you don\'t have it in you.',
//     'Ha! Silly me, to expect such things from the likes of you.',
//     'Big Brother is watching you.',
//     'Because the cost of lies...is more lies.',
//     'plis.'
//   ];
//   return IntroMessage[Math.floor(Math.random() * IntroMessage.length)];
// }

function getLyingVariations() {
  const Lying = [
    'Lying',
    'Fibbing',
  ];
  return Lying[Math.floor(Math.random() * Lying.length)];
}

const Intro = ({ title, _onStartClick }) => {
  return (
    <Wrapper className="container">
      <IntroCard>
        <div className="corner" />
        <div className="corner" />
        <div className="corner" />
        <div className="corner" />
        <h1>{title}</h1>
        {/* TODO: WILL CHANGE THIS THING DOWN HERE */}
        <ul className="list-group">
          <li className="list-group-item">Consists of 25 questions</li>
          <li className="list-group-item">Answer HONESTLY, and choose the option matching how you GENERALLY are </li>
        </ul>
        <StartBtn onClick={_onStartClick} style={{cursor:'pointer'}}>
          <span>Start {getLyingVariations()}</span>
          <div className="icon">
            <i className="fa fa-arrow-right" />
          </div>
        </StartBtn>
      </IntroCard>
    </Wrapper>
  )
}

export default Intro
