import React, { Component } from 'react';

export class Search extends Component {
constructor(props){
    super(props);
    this.deyisende=this.deyisende.bind(this);
    this.tesdiqEdende=this.tesdiqEdende.bind(this);
    this.state={
        acarsoz:""
    }
}

deyisende(hadise){
    this.setState({
        acarsoz:hadise.target.value
    })
}

tesdiqEdende(hadise){
 hadise.preventDefault();
 this.props.searchValue(this.state.acarsoz);
}

  render() {
    return <div>
        <form onSubmit={this.tesdiqEdende}>
            <div className="container my-3">
                <div className="input-group">
                    <input type="text" onChange={this.deyisende} className='form-control' />
                    <div className="input-group-append">
                        <button className='btn btn-primary'>Search</button>
                    </div>
                </div>
            </div>
        </form>
    </div>;
  }
}

export default Search;
