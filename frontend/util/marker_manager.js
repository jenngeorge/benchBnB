
class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];

    this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
    this._benchesToAdd = this._benchesToAdd.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  _markersToRemove(){
    return this.markers.filter( marker => {
      return !this.benches.hasOwnProperty(marker.benchId);
    });
  }

  _removeMarker(marker){
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }

  _benchesToAdd(benches){
    let newBenches = [];
    let currentBenches = [];

    for (let j = 0; j < this.markers.length; j++) {
      currentBenches.push(this.markers[j].benchId);
    }

    for (let i = 0; i < benches.length; i++) {
      if (!currentBenches.includes(benches[i].id)){
        newBenches.push(benches[i]);
      }
    }
    return newBenches;
  }

  _createMarkerFromBench(bench){

    let myLatlng = new google.maps.LatLng(bench.lat, bench.long);

    let marker = new google.maps.Marker({
      position: myLatlng,
      title: bench.description,
      benchId: bench.id,
      map: this.map
    });

    // debugger
    this.markers.push(marker);
  }

  updateMarkers(benches) {
    console.log('time to update');

    let newBenches = this._benchesToAdd(benches);

    for (let i = 0; i < newBenches.length; i++) {
      this._createMarkerFromBench(newBenches[i]);
    }

    const removeTheseMarkers = this._markersToRemove();
    for (let j = 0; j < removeTheseMarkers.length; j++) {
      this._removeMarker(removeTheseMarkers[j]);
    }

  }
}

export default MarkerManager;
