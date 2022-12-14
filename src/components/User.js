import React, { Component } from 'react';

export class User extends Component {
  render() {
      const {login,avatar_url,html_url,id}=this.props.istifadeci;
    return (
         <div className="card col-3 gy-3" >
        <img src={avatar_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <p className="card-text">{id}</p>
          <a href={html_url} className="btn btn-primary">Go Profile</a>
        </div>
      
    </div>);
  }
}

export default User;
