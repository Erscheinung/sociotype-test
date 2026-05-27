import React from 'react'
import { CardDef } from '../utils/Cards'
import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SLI = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/SLI_gulenko.html">SLI Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const SEI = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/SEI_gulenko.html">SEI Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const IEI = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/IEI_gulenko.html">IEI Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const ILI = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/ILI_gulenko.html">ILI Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const LSI = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/LSI_gulenko.html">LSI Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const ESI = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/ESI_gulenko.html">ESI Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const EII = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/EII_gulenko.html">EII Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const LII = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/LII_gulenko.html">LII Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const SLE = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/SLE_gulenko.html">SLE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const SEE = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/SEE_gulenko.html">SEE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const IEE = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/IEE_gulenko.html">IEE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const ILE = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/ILE_gulenko.html">ILE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const LSE = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/LSE_gulenko.html">LSE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const ESE = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/ESE_gulenko.html">ESE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const EIE = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/EIE_gulenko.html">EIE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const LIE = ({ title, content1, content2, content3, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-center">{content1}</p>
          <p className="text-center">{content2}</p>
          <p className="text-center">{content3}</p>
          <p className="text-center"><a href="https://wikisocion.github.io/content/LIE_gulenko.html">LIE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}
