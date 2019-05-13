var originCreateElement = document.createElement;
document.createElement = function() {
  if (arguments[0] === 'span'){
    console.log('create span');
  }
  return originCreateElement.apply(document, arguments);
}

class App extends React.Component {
  state = {
    count: 0
  }
  clickBtn = () => {
    this.setState({count: this.state.count + 1})
    // this.updater.enqueueSetState(this, {count: this.state.count + 1})
  }
  componentWillMount(){
    console.log("component will mount");
  }

  componentWillUpdate(){
    console.log("component will update");
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentDidMount(){
    console.log("componentDidMount");
  }
  render() {
    return (
      React.createElement(
        'div',
        null,
        React.createElement('h1', null, `count: ${this.state.count}`),
        React.createElement('button', {onClick: this.clickBtn}, 'clickme')
      )
    );
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
)
