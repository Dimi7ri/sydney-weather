Template.fivedaysweather.onCreated(function(){       
		//Call server method	
	Meteor.call('getSydneyFiveDaysForecast', function(error, results) {
			//Parse content to JSON format and store into a session variable.
        Session.set('SydneyFiveDaysForecast',JSON.parse(results.content));
    });    	
});

Template.fivedaysweather.helpers({
    cityName : function() {
    	if(Session.get('SydneyFiveDaysForecast'))
    		return Session.get('SydneyFiveDaysForecast').city.name;
    },
    icon: function() {
    	if(Session.get('SydneyFiveDaysForecast'))
    		return 'http://openweathermap.org/img/w/' + Session.get('SydneyFiveDaysForecast').list[0].weather[0].icon + '.png';
    },
    description: function(){
	    if(Session.get('SydneyFiveDaysForecast'))
    		return Session.get('SydneyFiveDaysForecast').list[0].weather[0].description;
    },
    temperature: function(){
 		if(Session.get('SydneyFiveDaysForecast')){  	
    		var temp = Session.get('SydneyFiveDaysForecast').list[0].main.temp;
    		return temp.toFixed(1);
    	}	
    },
    time: function(){
    	if(Session.get('SydneyFiveDaysForecast')){
    			//Convert Unix timestamp to Hours and Minutes.
			var a = new Date(Session.get('SydneyFiveDaysForecast').list[0].dt * 1000);
			var hour = a.getHours();
			var min =  "0"+a.getMinutes() ;
			var time = hour + ':' + min;
			return time;
		}  
    },
    dayName: function(){
    	if(Session.get('SydneyFiveDaysForecast')){ 
    			//Convert Unix timestamp to Date of the week and name it.   	
			var a = new Date(Session.get('SydneyFiveDaysForecast').list[0].dt*1000)
			var weekday = new Array(7);
			weekday[0]=  "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";

			var n = weekday[a.getDay()];   	
	    	return n;
		}	    	
    },
    windSpeed: function(){
    	if(Session.get('SydneyFiveDaysForecast'))
    		return Session.get('SydneyFiveDaysForecast').list[0].wind.speed;
    },
    day: function(){
    	if(Session.get('SydneyFiveDaysForecast'))
    		return Session.get('SydneyFiveDaysForecast').list[0].wind.speed;
    },
    dayName1: function(){
    	if(Session.get('SydneyFiveDaysForecast')){    	
			var a = new Date(Session.get('SydneyFiveDaysForecast').list[4].dt*1000)
			var weekday = new Array(7);
			weekday[0]=  "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";

			var n = weekday[a.getDay()];   	
	    	return n;
		}	    	
    },  
    dayName2: function(){
    	if(Session.get('SydneyFiveDaysForecast')){    	
			var a = new Date(Session.get('SydneyFiveDaysForecast').list[12].dt*1000)
			var weekday = new Array(7);
			weekday[0]=  "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";

			var n = weekday[a.getDay()];  	
	    	return n;
		}	    	
    },   
    dayName3: function(){
    	if(Session.get('SydneyFiveDaysForecast')){    	
			var a = new Date(Session.get('SydneyFiveDaysForecast').list[20].dt*1000)
			var weekday = new Array(7);
			weekday[0]=  "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";

			var n = weekday[a.getDay()];   	
	    	return n;
		}	    	
    },
    dayName4: function(){
    	if(Session.get('SydneyFiveDaysForecast')){    	
			var a = new Date(Session.get('SydneyFiveDaysForecast').list[28].dt*1000)
			var weekday = new Array(7);
			weekday[0]=  "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";

			var n = weekday[a.getDay()];   	
	    	return n;
		}	    	
    },  
    description1: function(){
	    if(Session.get('SydneyFiveDaysForecast'))
    		return Session.get('SydneyFiveDaysForecast').list[4].weather[0].description;
    },
    description2: function(){
	    if(Session.get('SydneyFiveDaysForecast'))
    		return Session.get('SydneyFiveDaysForecast').list[12].weather[0].description;
    },
    description3: function(){
	    if(Session.get('SydneyFiveDaysForecast'))
    		return Session.get('SydneyFiveDaysForecast').list[20].weather[0].description;
    },
    description4: function(){
	    if(Session.get('SydneyFiveDaysForecast'))
    		return Session.get('SydneyFiveDaysForecast').list[28].weather[0].description;
    },
    icon1: function() {
    	if(Session.get('SydneyFiveDaysForecast'))
    		return 'http://openweathermap.org/img/w/' + Session.get('SydneyFiveDaysForecast').list[4].weather[0].icon + '.png';
    },
    icon2: function() {
    	if(Session.get('SydneyFiveDaysForecast'))
    		return 'http://openweathermap.org/img/w/' + Session.get('SydneyFiveDaysForecast').list[12].weather[0].icon + '.png';
    },
    icon3: function() {
    	if(Session.get('SydneyFiveDaysForecast'))
    		return 'http://openweathermap.org/img/w/' + Session.get('SydneyFiveDaysForecast').list[20].weather[0].icon + '.png';
    },
    icon4: function() {
    	if(Session.get('SydneyFiveDaysForecast'))
    		return 'http://openweathermap.org/img/w/' + Session.get('SydneyFiveDaysForecast').list[28].weather[0].icon + '.png';
    }               

});