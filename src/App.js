import React, { Component } from 'react'
import './styles.css'
import dataStoreHP from './data'
import Selector from './components/Selector'
import Prism from 'prismjs'

class App extends Component {
  state = {
    data: dataStoreHP,
    formatedData: ''
  }

  componentDidMount() {
    const formatedData = JSON.stringify(this.state.data, null, 2)
    this.setState({ formatedData })
    Prism.highlightAll()
  }

  showPageData = (event) => {
    let value = event.target.value
    let code = value !== '' ? this.state.data[value] : this.state.data
    const formatedData = JSON.stringify(code, null, 2)
    this.setState({ formatedData })
  }

  render() {
    const { data, formatedData } = this.state

    return (
      <div className="App">
        <h1>Nouvelle Architecture</h1>
        <Selector showPageData={this.showPageData} data={data} />
        <pre>
          <code className="language-js">{formatedData}</code>
        </pre>
      </div>
    )
  }
}

export default App
