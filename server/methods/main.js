Meteor.startup(function() {
    Meteor.methods({
        getSydneyFiveDaysForecast: function () {
            this.unblock();
            return Meteor.http.call("GET", "http://api.openweathermap.org/data/2.5/forecast/city?q=Sydney&cnt=5&units=metric&appid="+Meteor.settings.private.openweatherAPIkey );
        }
    });

});
