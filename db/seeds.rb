# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

dolo1 = Bench.create(description: 'Dolores Park Playground', lat: 37.758949, long: -122.426736)
ferry1 = Bench.create(description: 'Ferry Building', lat: 37.758949, long: -122.426736)
dog1 = Bench.create(description: 'Duboce Park', lat: 37.769532, long:  -122.433834)
gg1 = Bench.create(description: 'Hellman Hollow', lat: 37.769499, long:  -122.484593)
gg2 = Bench.create(description: 'Lindley Meadow', lat: 37.770301, long:  -122.489521)
gg3 = Bench.create(description: 'Polo Field', lat: 37.767273, long:  -122.493024)


# success = (data) => console.log(data)
#
# $.ajax ({
#   url: '/api/benches',
#   type: "GET",
#   success
#
#   })
