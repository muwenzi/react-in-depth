'use strict'

const Test = props => {
  props.tt = '123'
  console.log('props', props)
  console.log('Object.isFrozen(props)', Object.isFrozen(props))
  return React.createElement('h1', null, props.tt)
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.test = React.createRef()
    this.state = {
      title: 'abcd'
    }
  }

  componentDidMount() {
    console.log('test', this.test.current)

  }


  render() {
    const el = React.createElement(Test, {title: 'ghjk'});
    // el.myName = 'njnj'
    return el
  }
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('app')
)
