import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Search from './components/Search';
import Users from './components/Users';
import axios from 'axios';
import Left from './components/Left';


class App extends Component{
  constructor(props){
    super(props);
    this.axtar=this.axtar.bind(this);
    this.state={
      istifadeciler:[]
    }
  }

  axtar(acarsoz){
   axios
   .get(`https://api.github.com/search/users?q=${acarsoz}`)
   .then(res=>this.setState({istifadeciler: res.data.items}));
   

  }





  render(){
    return(
      <div>
        <Nav icon="fa-brands fa-github" title=" Github" url="https://github.com"/>
        <Search searchValue={this.axtar}/>
        <Users profile={this.state.istifadeciler}/>
        <Left/>
      </div>
    );
  }
}



ReactDOM.render(<App/>, document.querySelector('#root'));
