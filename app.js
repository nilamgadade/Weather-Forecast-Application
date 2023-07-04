angular.module('weatherApp', [])
  .controller('WeatherController', ['$http', function($http) {
    var vm = this;

    vm.location = '';
    vm.weatherData = null;
    vm.forecastData = null;

    vm.searchWeather = function() {
      var apiKey = '2d1054c3cf91bb70486fed7669bcc29d';
      var apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
      var forecastApiUrl = 'http://api.openweathermap.org/data/2.5/forecast';

      // Fetch current weather data
      $http.get(apiUrl, {
        params: {
          q: vm.location,
          units: 'metric',
          appid: apiKey
        }
      }).then(function(response) {
        vm.weatherData = response.data;
      });

      // Fetch 5-day forecast data
      $http.get(forecastApiUrl, {
        params: {
          q: vm.location,
          units: 'metric',
          appid: apiKey
        }
      }).then(function(response) {
        vm.forecastData = response.data;
      });
    };
  }]);