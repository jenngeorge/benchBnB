import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component{
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
