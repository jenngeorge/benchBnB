class Bench < ActiveRecord::Base

  def self.in_bounds(bounds)
    # {
    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }

    maxLat = bounds["northEast"]["lat"]
    minLat = bounds["southWest"]["lat"]
    maxLong = bounds["northEast"]["lng"]
    minLong = bounds["southWest"]["lng"]

    Bench.where(
      "(lat <= ? AND lat > = ?)  AND (long <= ? AND long > = ?)",
      maxLat, minLat, maxLong, minLong)

  end

end
