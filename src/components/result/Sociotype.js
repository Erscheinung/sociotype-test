import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Results from './Results'
import { Wrapper } from '../utils/ResultWrapper'
import {
  SLI,
  SEI,
  IEI,
  ILI,
  LSI,
  ESI,
  EII,
  LII,
  SLE,
  SEE,
  IEE,
  ILE,
  LSE,
  ESE,
  EIE,
  LIE
} from '../definitions/Sociotypes'

class Sociotype extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSLI: false,
      showSEI: false,
      showIEI: false,
      showILI: false,
      showLSI: false,
      showESI: false,
      showEII: false,
      showLII: false,
      showSLE: false,
      showSEE: false,
      showIEE: false,
      showILE: false,
      showLSE: false,
      showESE: false,
      showEIE: false,
      showLIE: false,
    }
    this.onSLI_click = this.onSLI_click.bind(this)
    this.onSEI_click = this.onSEI_click.bind(this)
    this.onIEI_click = this.onIEI_click.bind(this)
    this.onILI_click = this.onILI_click.bind(this)
    this.onLSI_click = this.onLSI_click.bind(this)
    this.onESI_click = this.onESI_click.bind(this)
    this.onEII_click = this.onEII_click.bind(this)
    this.onLII_click = this.onLII_click.bind(this)
    this.onSLE_click = this.onSLE_click.bind(this)
    this.onSEE_click = this.onSEE_click.bind(this)
    this.onIEE_click = this.onIEE_click.bind(this)
    this.onILE_click = this.onILE_click.bind(this)
    this.onLSE_click = this.onLSE_click.bind(this)
    this.onESE_click = this.onESE_click.bind(this)
    this.onEIE_click = this.onEIE_click.bind(this)
    this.onLIE_click = this.onLIE_click.bind(this)
  }

  renderSLI() {
    return (
      <SLI
        title={'Introvert | Sensing | Logic | Rational'}
        content={`
        STRENGTHS: Resonable,aimed at some pragmatic purpose,knows how to adept to new ideas,Organises things for Leisure,diligence,perseverance..\nWEAKNESS: Skeptic,Likes to analyze and ridicule,Very dependent on internal moods and states,Reserverd and usually doesn't like excessive familiarity\nRecommended profession include Rational management and maintenance,maintenance of precise and delicate equipment; quality design of products, interior design, management of small business.`}
        onBackClick={this.onSLI_click}
      />
    )
  }

  renderSEI() {
    return (
      <SEI
        title={'Introvert | Sensing | Ethics | Rational'}
        content={`STRENGTHS: Good taste and sense of measure and proportions,Caring and attentive to others,Diplomatic,Friendly,Attentive\nWEAKNESS: Vulnerable,Pretends that he can do much when it is not possible\nRECOMMENDATIONS: He is well capable of establishing and maintaining beneficial business contacts. Successful in spheres where he needs to look out for needs of a specific individual. SEI is a specialist in creating and maintaining the infrastructure of society. He is the best supplier, trader of small wholesale, director of a small company, the manager-diplomat. They make good quality evaluators, designers, and organizers. `}
        onBackClick={this.onSEI_click}
      />
    )
  }

  renderIEI() {
    return (
      <IEI
        title={'Introvert | Intuitive | Ethics | Rational'}
        content={`
        STRENGTHS: Considerate, tactful, gentle person.\nWEAKNESSES: Intrinsically vulnerable, contradictory. Somewhat unsure of himself. Prone to experiencing doubts and fluctuations in arriving at a decision\nRECOMMENDATIONS: Best if occupation relates to humanities. Can work well anywhere where he is required to elegantly communicate with a small group of people. Recommended professions include translator, librarian, writer, journalist, editor, may realize themselves in the field of arts as critics, writers, and poets.`}
        onBackClick={this.onIEI_click}
      />
    )
  }

  renderILI() {
    return (
      <ILI
        title={'Introvert | Intuitive | Logic | Rational'}
        content={`STRENGTHS: Oriented at making rational, gainful actions,Economical, fastidious in work, conscientious and operative,Erudite,Remembers what he has read in great detail and vividly recounts it for others,strong intuition,Punctual.\nWEAKNESS: Poorly maintains internal balance,Cautious and hesitant in new endeavors.\nRECOMMENDATIONS: Applied research in fields of physics, mathematics, macroeconomics; conceptual analysis of complex problems; assessments of levels of risk, counseling and prognosis; philosophy, history and archaeology; informatics, archives and library work.`}
        onBackClick={this.onILI_click}
      />
    )
  }

  renderLSI() {
    return (
      <LSI
        title={'Introvert | Sensing | Logic | Irrational'}
        content={`STRENGTHS: Hard worker, with a strong sense of duty,dislikes improvisations,Good at analyzing specifics\nWEAKNESS: Lacks flexibility in dealing with people,Afraid of change\nRECOMMENDED:Performs well at assigning duties and monitoring their implementation. Can be effective at hands-on administrative positions especially if the group does not exceed 8-10 persons. Great for departmental supervision. Can do quality designs, tinker with anything with his hands. Works well in technical fields. Can become an instructor, supervisor, mechanic, tax inspector, investigator.`}
        onBackClick={this.onLSI_click}
      />
    )
  }

  renderESI() {
    return (
      <ESI
        title={'Introvert | Sensing | Ethics | Irrational'}
        content={`STRENGTHS: Well versed in relations between people. Conscientious, responsible, punctual,creates order,Stable in his habits and affections\nWEAKNESS : Painfully endures injustice and unethical behavior. Vulnerable and impressionable\n RECOMMENDED: The social sphere, areas that require interaction with people. Tedious work with physical component that requires focus and concentration, such as medicine and health (especially applied fields: dentistry, massage, working nurse, acupuncture, physical therapy, X-ray, biochemical diagnostics). Service and commodities sector: accounting, bookkeeping, seller and cashier.`}
        onBackClick={this.onESI_click}
      />
    )
  }

  renderEII() {
    return (
      <EII
        title={'Introvert | Intuitive | Ethics | Irrational'}
        content={`STRENGTHS :Well versed in human relationships. Strives for self-improvement and erudition,understanding and tolerance\nWEAKNESS :Impressionable and vulnerable, Poorly tolerates loneliness,Very meticulous\nRECOMMENDED: Educational work with young people, psychotherapy, work in theoretical and humanitarian spheres, photography and digital arts.`}
        onBackClick={this.onEII_click}
      />
    )
  }

  renderLII() {
    return (
      <LII
        title={'Introvert | Intuitive | Logic | Irrational'}
        content={`STRENGTHS: Has highly developed logic and excels in analytical thinking, By nature he is kind, but puts objective factors above personal interests and relationships, good sense of time\n WEAKNESS: Insufficiently flexible in relation,Doesn't like doing many things at once,Doesn't like doing many things at once\nRECOMMENDED: Research and analytical work, analysis of complex phenomena and objects. Development of new ideas for practical application. "Analyst" work well everywhere where there is demand for system analysis, for creation and development of classification schemes and forwarding of alternative concepts. In the U.S. this type of work is called "business reorganizer".`}
        onBackClick={this.onLII_click}
      />
    )
  }

  renderSLE() {
    return (
      <SLE
        title={'Extravert | Sensing | Logic | Irrational'}
        content={`STRENGTHS:leadership character. Volitional man, mobilized and energetic. Possesses a quick response, coupled with a good endurance. Knows how to manage people, quickly reorients under changing circumstances. Can quickly take on crucial decisions\nWEAKNESS:Quite aggressive, has difficulty establishing smooth, conflict-free relationships with others. Does not like indecisive people who avoid taking bold actions. Does not like commanding tone, to be put under pressure, sharply rebuffs those who try this\n RECOMMENDED: SLE manages other people well, allocates responsibilities, clarifies roles. He is able to consider in detail the necessary organizational structure and carry out its implementation with persistence. He can carefully select the needed people, testing them in advance, and keep all of his subordinates in the exacting structure, resorting if necessary to unpopular measures and to application of deliberate pressure. Practical, possesses good understanding of the benefits of any enterprise. Works well with hands, can tinker with anything and engage in skillful craftsmanship. Optimal use SLEs find in fields of management, engineering, military, police force. They make for good leaders at different levels, up to the highest.`}
        onBackClick={this.onSLE_click}
      />
    )
  }

  renderSEE() {
    return (
      <SEE
        title={'Extravert | Sensing | Ethics | Irrational'}
        content={`STRENGTHS: Has good diplomatic and business capabilities. Quickly orients in extreme situations. Confident in him/herself. Bold and decisive, and kind at the same time,makes decisions independently\nWEAKNESS:Quite disorganized, inclined to get distracted at work by minor details. Finds it difficult to concentrate his attention on one thing for a long time. Prone to fluctuations when having to make a choice, which leads to inner reflections and doubts that he/she hides\nRECOMMENDED: Social sphere: trade (especially wholesale), supply of material resources; diplomatic representation, organization and leadership of cultural events; show business, the entertainment sphere, stage performance.`}
        onBackClick={this.onSEE_click}
      />
    )
  }

  renderIEE() {
    return (
      <IEE
        title={'Extravert | Intuitive | Ethics | Irrational'}
        content={`STRENGTHS: Communicative and emotional. Know how to approach any person in case of need. Naturally charming and good at diplomacy. Will compliment others, strive to do nice things for others. Discerning in the talents and abilities of others, perceptive of their implicit motives as well as character flaws\nWEAKNESS: Due to his desire to maintain positive relations with many people, he can overload himself with useless contacts. Too trusting by nature and can say too much in conversation. Becomes quickly disappointed in his initial positive sympathies. May become too detached and exalted, too dependent on his moods\nRECOMMENDED: The humanitarian sphere. Teaching, art, journalism, psychology, career advising, marriage counseling, advertising.`}
        onBackClick={this.onIEE_click}
      />
    )
  }

  renderILE() {
    return (
      <ILE
        title={'Extravert | Intuitive | Logic | Irrational'}
        content={`Well-developed learning-oriented thinking. Erudite, inquisitive, reads a lot and remembers it,Has developed intuition, that helps him to make the right decision,Structuralist and classifier\nWEAKNESS: Poorly tolerates strict regulation and routine work, Can't live according to a strict schedule,r disorganized,unyielding, even aggressive\nRECOMMENDED:  If possible, it is best to give the ILE a free and flexible work schedule. It is desirable that the work is interesting to him and provides him with diversified experiences. An activity in which he is independent of others, self-sufficient, would be optimal for him. The ILE enjoys working with large volumes of diverse (preferably interesting for him) information. The best application of his interest is in the research and innovation fields. He can carry out theoretical development in areas that are strategic - that entail fundamental changes. In general, this is a mobile, dynamic person who likes changes in impressions and experiences, thus he would be happy to carry out mobile work, travel, go on business trips.`}
        onBackClick={this.onILE_click}
      />
    )
  }

  renderLSE() {
    return (
      <LSE
        title={'Extravert | Sensing | Logic | Rational'}
        content={`STRENGTHS: Energetic and assertive person,A good administrator,pragmatic,Knows how to safely and efficiently handle money,punctual\nWEAKNESS:  Dislikes admitting to his mistakes,Poorly receives criticism,Sensitive to stress\nRECOMMENDED:  the management sphere, positions where there is a need to manage and direct people and coordinate their work and activities (under stable conditions and laws); economists, bank employees, loan officers, technical secretaries with managerial functions, support of the technical process (repair and maintenance of equipment); construction, farming and agriculture.`}
        onBackClick={this.onLSE_click}
      />
    )
  }

  renderESE() {
    return (
      <ESE
        title={'Extravert | Sensing | Ethics | Rational'}
        content={`STRENGTHS: Active, optimistic, and well-wishing person,pleasant and charming conversation partner\nWEAKNESS: Not very economical,has a tendency to overload himself with unnecessary tasks and activities, Overestimates his practical and business acumen\nRECOMMENDED:  improving the infrastructure of society; advertising, sociological work, medicine, healthcare, design and decoration, the service sector, trade, management and organization in social and scientific fields (organization of fairs, workshops, conferences, recreation, celebrations).`}
        onBackClick={this.onESE_click}
      />
    )
  }

  renderEIE() {
    return (
      <EIE
        title={'Extravert | Intuitive | Ethics | Rational'}
        content={`STRENGTHS: Emotional,Can inspire people with their emotions and make them follow him, Farsighted and shrewd,usually occupies positions of educator and mentor\nWEAKNESS: Has much difficulty achieving inner balance,Self-immolating, vulnerable,Does not like being interrupted and rushed,Very sensitive to failures and disappointments\nRECOMMENDED: Humanitarian sphere, where it is necessary to promote any idea, philosophy, or religion. Can be great in sales and insurance business, where it is necessary to emotionally engage the customer. Performs well in sphere of arts, where it is necessary to express emotions (theater, public speaking).`}
        onBackClick={this.onEIE_click}
      />
    )
  }

  renderLIE() {
    return (
      <LIE
        title={'Extravert | Intuitive | Logic | Rational'}
        content={`STRENGTHS: Very dynamic, agile, energetic and active person, Considers it to be unacceptable to fall behind, hard worker, with pleasure takes on projects that he considers to bring benefit,Curious, interested in innovations that can be applied into practice, Brings up unusual ways of increasing efficiency\nWEAKNESS: Often builds far-reaching but poorly thought-out plans,Impatient by nature\nRECOMMENDED: LIE best realizes himself in innovative fields that require an open mind and creative approach to business, as well as ability to adapt theoretical developments to practice. May be a good inventor and rationalizer. Given the high tempo of his work and mobility, he is recommended highly dynamic types of work that require frequent travel and trips. People of this type are usually not afraid of commercial risk, so they can be trailblazers and pioneers of new enterprises. They can engage in a variety of work, if it is interesting, challenging, and does not require special meticulousness.`}
        onBackClick={this.onLIE_click}
      />
    )
  }

  render() {
    let showSLI = this.state.showSLI
    let showSEI = this.state.showSEI
    let showIEI = this.state.showIEI
    let showILI = this.state.showILI
    let showLSI = this.state.showLSI
    let showESI = this.state.showESI
    let showEII = this.state.showEII
    let showLII = this.state.showLII
    let showSLE = this.state.showSLE
    let showSEE = this.state.showSEE
    let showIEE = this.state.showIEE
    let showILE = this.state.showILE
    let showLSE = this.state.showLSE
    let showESE = this.state.showESE
    let showEIE = this.state.showEIE
    let showLIE = this.state.showLIE
    if (showSLI) {
      return this.renderSLI()
    } else if (showSEI) {
      return this.renderSEI()
    } else if (showIEI) {
      return this.renderIEI()
    } else if (showILI) {
      return this.renderILI()
    } else if (showLSI) {
      return this.renderLSI()
    } else if (showESI) {
      return this.renderESI()
    } else if (showEII) {
      return this.renderEII()
    } else if (showLII) {
      return this.renderLII()
    } else if (showSLE) {
      return this.renderSLE()
    } else if (showSEE) {
      return this.renderSEE()
    } else if (showIEE) {
      return this.renderIEE()
    } else if (showILE) {
      return this.renderILE()
    } else if (showLSE) {
      return this.renderLSE()
    } else if (showESE) {
      return this.renderESE()
    } else if (showEIE) {
      return this.renderEIE()
    } else if (showLIE) {
      return this.renderLIE()
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">Sociotype Result</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultSociotype}</h2>
        <hr className="my-5" />
        <p className="lead">What does this result mean?</p>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onSLI_click}>
            SLI
          </li>
          <li className="list-group-item" onClick={this.onSEI_click}>
            SEI
          </li>
          <li className="list-group-item" onClick={this.onIEI_click}>
            IEI
          </li>
          <li className="list-group-item" onClick={this.onILI_click}>
            ILI
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onLSI_click}>
            LSI
          </li>
          <li className="list-group-item" onClick={this.onESI_click}>
            ESI
          </li>
          <li className="list-group-item" onClick={this.onEII_click}>
            EII
          </li>
          <li className="list-group-item" onClick={this.onLII_click}>
            LII
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onSLE_click}>
            SLE
          </li>
          <li className="list-group-item" onClick={this.onSEE_click}>
            SEE
          </li>
          <li className="list-group-item" onClick={this.onIEE_click}>
            IEE
          </li>
          <li className="list-group-item" onClick={this.onILE_click}>
            ILE
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onLSE_click}>
            LSE
          </li>
          <li className="list-group-item" onClick={this.onESE_click}>
            ESE
          </li>
          <li className="list-group-item" onClick={this.onEIE_click}>
            EIE
          </li>
          <li className="list-group-item" onClick={this.onLIE_click}>
            LIE
          </li>
        </ul>
        <p className="lead" style={{marginTop: 5 + 'em'}}>
          <a href="https://erscheinung.github.io/sociotype-test/">
          <button type="button" class="btn btn-outline-dark" style={{color: '#d4cd96'}}>Retake test</button>
          </a>
        </p>
        
      </Wrapper>
    )
  }


  onSLI_click() {
    let showSLI = this.state.showSLI
    this.setState({ showSLI: !showSLI })
  }

  onSEI_click() {
    let showSEI = this.state.showSEI
    this.setState({ showSEI: !showSEI })
  }

  onIEI_click() {
    let showIEI = this.state.showIEI
    this.setState({ showIEI: !showIEI })
  }

  onILI_click() {
    let showILI = this.state.showILI
    this.setState({ showILI: !showILI })
  }

  onLSI_click() {
    let showLSI = this.state.showLSI
    this.setState({ showLSI: !showLSI })
  }

  onESI_click() {
    let showESI = this.state.showESI
    this.setState({ showESI: !showESI })
  }

  onEII_click() {
    let showEII = this.state.showEII
    this.setState({ showEII: !showEII })
  }

  onLII_click() {
    let showLII = this.state.showLII
    this.setState({ showLII: !showLII })
  }

  onSLE_click() {
    let showSLE = this.state.showSLE
    this.setState({ showSLE: !showSLE })
  }

  onSEE_click() {
    let showSEE = this.state.showSEE
    this.setState({ showSEE: !showSEE })
  }

  onIEE_click() {
    let showIEE = this.state.showIEE
    this.setState({ showIEE: !showIEE })
  }

  onILE_click() {
    let showILE = this.state.showILE
    this.setState({ showILE: !showILE })
  }

  onLSE_click() {
    let showLSE = this.state.showLSE
    this.setState({ showLSE: !showLSE })
  }

  onESE_click() {
    let showESE = this.state.showESE
    this.setState({ showESE: !showESE })
  }

  onEIE_click() {
    let showEIE = this.state.showEIE
    this.setState({ showEIE: !showEIE })
  }

  onLIE_click() {
    let showLIE = this.state.showLIE
    this.setState({ showLIE: !showLIE })
  }
}

Sociotype.PropTypes = {
  resultSociotype: PropTypes.string.isRequired
}

export default Sociotype
