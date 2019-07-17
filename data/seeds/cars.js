
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { VIN: 'WBAKF9C52BE619303', make: 'Ford', model: 'Focus', mileage: 128903},
        { VIN: 'JH4DA9440NS003801', make: 'Acura', model: 'Integra', mileage: 5603},
        { VIN: 'JH4KA8160PC000949', make: 'Acura', model: 'Legend', mileage: 12676},
        { VIN: '1FUPDXYB3PP469921', make: 'Freightliner', model: 'Conventional', mileage: 98703},
        { VIN: '1C4RJEBG8CC299381', make: 'Jeep', model: 'Grand Cherokee', mileage: 834574},
        { VIN: '3B7HF13YXWG209744', make: 'Dodge', model: 'Ram Pickup', mileage: 22497},
        { VIN: '5N1AN0NW9BC524974', make: 'Nissan', model: 'Xterra', mileage: 45603},
      ]);
    });
};
