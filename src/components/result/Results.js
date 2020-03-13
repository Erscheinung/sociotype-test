import React, { Component } from 'react'
import Sociotype from './Sociotype'
import SocionicsAnswer from  '../Question'
//var CanvasJSReact = require('./canvasjs.react');
import { Canvas } from 'react-canvas-js'
import { Wrapper } from '../utils/ResultWrapper';
var CanvasJS = Canvas.CanvasJS;
var CanvasJSChart = Canvas.CanvasJSChart;


class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSociotypeResult: true
    }
    this._onNextClick = this._onNextClick.bind(this)
  }

  renderSociotypeResult() {
    return <Sociotype resultSociotype={this.props.resultSociotype} />
  }

  // renderPieChart() {
  //   return <CanvasJSChart options = {options} />
  // }

  render() {
    let showSociotypeResult = this.state.showSociotypeResult
    // const options = {
		// 	theme: "dark2",
		// 	animationEnabled: true,
		// 	title:{
		// 		text: "Dichotomies"
		// 	},
		// 	data: [{
		// 		type: "pie",
		// 		showInLegend: true,
		// 		legendText: "{label}",
		// 		toolTipContent: "{label}: <strong>{y}%</strong>",
		// 		indexLabel: "{y}%",
		// 		indexLabelPlacement: "inside",
		// 		dataPoints: [
    //       { y: SocionicsAnswer.I*2, label: "Introversion" },
    //       { y: SocionicsAnswer.E*2, label: "Extraversion" },
    //       { y: SocionicsAnswer.S*2, label: "Sensing" },
    //       { y: SocionicsAnswer.N*2, label: "Intuition" },
    //       { y: SocionicsAnswer.T*2, label: "Thinking" },
    //       { y: SocionicsAnswer.F*2, label: "Feeling" },
    //       { y: SocionicsAnswer.J*2, label: "Rational" },
    //       { y: SocionicsAnswer.P*2, label: "Irrational" },
    //       { y: SocionicsAnswer.Initial*2, label: "Initial" },
    //       { y: SocionicsAnswer.Terminal*2, label: "Terminal" }
    //     ]
    //   } 
    // ]
		// }
    if (showSociotypeResult) {
      return [
        this.renderSociotypeResult(),
        // this.renderPieChart()
      ]
    } 
  }

  _onNextClick() {
    let showSociotypeResult = this.state.showSociotypeResult
    setTimeout(() => {
      this.setState({
        showSociotypeResult: showSociotypeResult
      })
    },800)
  }
}

export default Results
