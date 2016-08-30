import React from 'react';
import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {

  componentDidMount(){
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
    const that = this;

    this.map.addListener('idle', function() {
      let mapBounds = that.map.getBounds();
      let northEast = mapBounds.getNorthEast();
      let southWest = mapBounds.getSouthWest();
      let bounds = {
        "northEast": {"lat": northEast.lat(), "lng": northEast.lng()},
        "southWest": {"lat": southWest.lat(), "lng": southWest.lng()}
      };

      that.props.updateBounds(bounds)
    })
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.benches);
  }


  render() {
    return (
      <div id='map-container' ref='map'>
        map
      </div>
    )
  }
}



export default BenchMap;
