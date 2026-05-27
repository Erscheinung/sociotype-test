import styled from 'styled-components'
import { media } from './_media-queries'
import { fonts, colors } from './_var'

export const Wrapper = styled.div.attrs({
  className: 'result-shell'
})`
  width: min(100%, 980px);
  margin: 0 auto;
  padding: 2rem 1rem;
  color: #f8f5e8;
  .title {
    font-family: ${fonts.$titleFont};
    font-size: 0.85rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    text-align: center;
  }
  .result-card {
    background: #242629;
    border: 1px solid rgba(212, 205, 150, 0.22);
    border-radius: 8px;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.32);
    padding: 2rem 1.25rem;
    text-align: center;
    ${media.tablet`padding: 3rem;`};
  }
  .resultTxt {
    font-family: ${fonts.$mainFont};
    color: ${colors.$colorGold};
    font-size: 3rem;
    font-weight: 600;
    line-height: 1;
    margin: 0.25rem 0 0;
    text-align: center;
    ${media.tablet`font-size: 4rem;`};
  }
  .lead {
    color: #d8d7ce;
    font-family: ${fonts.$mainFont};
    font-size: 1rem;
    line-height: 1.7;
    margin: 1rem auto 0;
    max-width: 38rem;
    text-align: center;
  }
  .result-actions,
  .secondary-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
    margin-top: 1.5rem;
  }
  .action-button {
    appearance: none;
    border: 1px solid rgba(212, 205, 150, 0.5);
    border-radius: 6px;
    cursor: pointer;
    font-family: ${fonts.$latoFont};
    font-size: 0.95rem;
    letter-spacing: 0.04em;
    min-height: 2.9rem;
    padding: 0.85rem 1.15rem;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  }
  .action-button:hover {
    transform: translateY(-1px);
  }
  .action-button.primary {
    background: ${colors.$colorGold};
    color: #202124;
    font-weight: 600;
  }
  .action-button.secondary {
    background: rgba(255, 255, 255, 0.04);
    color: #f8f5e8;
  }
  .type-section {
    margin-top: 2rem;
  }
  .type-section h2 {
    color: #f8f5e8;
    font-family: ${fonts.$mainFont};
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  .type-grid {
    display: grid;
    gap: 0.65rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0 auto;
    max-width: 42rem;
    ${media.tablet`grid-template-columns: repeat(4, minmax(0, 1fr));`};
  }
  .type-button {
    background: ${colors.$colorCardBg};
    background-image: repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.3), transparent 1px, rgba(0, 0, 0, 0.3) 2px);
    background-size: 3px 3px;
    border: 1px solid rgba(212, 205, 150, 0.25);
    border-radius: 6px;
    color: ${colors.$colorGold};
    cursor: pointer;
    font-family: ${fonts.$latoFont};
    min-height: 3rem;
  }
  .share-message {
    color: #d8d7ce;
    font-family: ${fonts.$latoFont};
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`
