/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'hvzsite-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      apiURL: "https://hvz.rit.edu",
      loginMethod: "google",
      contactEmail: 'hvz@rit.edu',

      map: {
        center: {latitude: 43.0856756, longitude: -77.6705275},
        zoom: 16,
        viewBounds: {
          min: {latitude: 43.07, longitude: -77.69},
          max: {latitude: 43.1,  longitude: -77.65}
        },
        bounds: [
          {latitude: 43.092222, longitude: -77.679047},
          {latitude: 43.091990, longitude: -77.677143},
          {latitude: 43.091026, longitude: -77.677143},
          {latitude: 43.090967, longitude: -77.675598},
          {latitude: 43.092068, longitude: -77.675512},
          {latitude: 43.092487, longitude: -77.666049},
          {latitude: 43.089067, longitude: -77.667884},
          {latitude: 43.088906, longitude: -77.667090},
          {latitude: 43.088228, longitude: -77.666049},
          {latitude: 43.086524, longitude: -77.665888},
          {latitude: 43.086638, longitude: -77.657069},
          {latitude: 43.083813, longitude: -77.658582},
          {latitude: 43.083731, longitude: -77.657080},
          {latitude: 43.083335, longitude: -77.655707},
          {latitude: 43.081921, longitude: -77.656469},
          {latitude: 43.082019, longitude: -77.659398},
          {latitude: 43.083167, longitude: -77.658711},
          {latitude: 43.083085, longitude: -77.665813},
          {latitude: 43.081608, longitude: -77.665952},
          {latitude: 43.080766, longitude: -77.666381},
          {latitude: 43.079884, longitude: -77.667465},
          {latitude: 43.079253, longitude: -77.669128},
          {latitude: 43.079092, longitude: -77.671027},
          {latitude: 43.079535, longitude: -77.672915},
          {latitude: 43.080973, longitude: -77.674857},
          {latitude: 43.081408, longitude: -77.675930},
          {latitude: 43.080848, longitude: -77.677647},
          {latitude: 43.080719, longitude: -77.677915},
          {latitude: 43.080253, longitude: -77.676971},
          {latitude: 43.079732, longitude: -77.676606},
          {latitude: 43.079462, longitude: -77.677411},
          {latitude: 43.079184, longitude: -77.680619},
          {latitude: 43.079047, longitude: -77.683527},
          {latitude: 43.079145, longitude: -77.683709},
          {latitude: 43.078956, longitude: -77.684783},
          {latitude: 43.078357, longitude: -77.686510},
          {latitude: 43.078251, longitude: -77.687561},
          {latitude: 43.084414, longitude: -77.686220},
          {latitude: 43.085515, longitude: -77.685555},
          {latitude: 43.086937, longitude: -77.684203},
          {latitude: 43.090247, longitude: -77.680646},
          {latitude: 43.091301, longitude: -77.679605}
        ]
      }
    },

    'ember-toastr': {
      toastrOptions: {
        showDuration: '2000',
        positionClass: 'toast-bottom-right'
      }
    },

    // pace loading bar
    pace: {
      theme: 'flash',
      color: 'orange',
      ajax: {
        trackMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.APP.apiURL = "http://127.0.0.1:1337";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
