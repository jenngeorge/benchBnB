import React from 'react';
import BenchIndexItem from './bench_index_item';
import {requestBenches} from '../actions/bench_actions';

class BenchIndex extends React.Component{
  constructor(props) {
    super(props);
  }
  //would add this but phase 4 said not to change?

  componentDidMount(){
    // request benches from your API here
    this.props.requestBenches();

  }
  render(){
    // ...
    const benchIndexList = [];
    for (let benchId in this.props.benches) {
      benchIndexList.push(<BenchIndexItem key={benchId} bench={this.props.benches[benchId]} />);
    }

    return(
      <ul>
        {benchIndexList}
      </ul>
    );
  }
}

export default BenchIndex;
