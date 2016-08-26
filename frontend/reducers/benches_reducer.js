import {BenchConstants} from '../actions/bench_actions';


const defaultState = {
  benches: {}
};

const BenchesReducer = (state = defaultState, action) => {
  switch(action.type){
    //...
    case BenchConstants.REQUEST_BENCHES:
      console.log('in request benches reducer');
      return state;
    default:
      return state;
  }
};

export default BenchesReducer;
