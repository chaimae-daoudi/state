import React from 'react';


class App extends React.Component {

constructor(props) {
    super(props)
    this.state = {
      fullName: 'chaimae daoudi',
      b: true
    }
  }
  


render() {
  if(this.state.b){
	return (
	<div >
		<p>{this.state.fullName} </p>

		<button onClick={	()=>this.setState({ b: !this.state.b})
}>
		Click me!
		</button>
	</div>
	);

  }
  else {
    return (
    	<button onClick={ ()=>	this.setState({ b: !this.state.b})
}>
		Click me!
		</button>)
  }
}
}

export default App;
