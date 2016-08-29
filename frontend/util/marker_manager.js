
class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];

    this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
    this._benchesToAdd = this._benchesToAdd.bind(this);
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

  }
}

export default MarkerManager;
