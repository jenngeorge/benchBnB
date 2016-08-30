import {FilterConstants} from '../actions/filter_actions';
import merge from 'lodash/merge';

  const _defaultFilters = Object.freeze({
    bounds:{},
  });


const FilterReducer = (state = _defaultFilters, action) => {
  switch(action.type){
    case FilterConstants.UPDATE_BOUNDS:
      let newFilter = {bounds: action.bounds};
      console.log(newFilter);
      return merge({}, state, {bounds: action.bounds});
    default:
      return state;
  }
};

export default FilterReducer;
