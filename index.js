module.exports = {
    addTimeToDate: function (date, type, units, cb) {
        if((date instanceof Date) && (type) && (units)){
			Date.prototype.addHours= function(h){
				this.setUTCHours(this.getUTCHours()+h);
				return this;
			}
			Date.prototype.addMinutes= function(m){
				this.setUTCMinutes(this.getUTCMinutes()+m);
				return this;
			}
			Date.prototype.addSeconds= function(s){
				this.setUTCSeconds(this.getUTCSeconds()+s);
				return this;
			}
			Date.prototype.addMilliSeconds= function(ms){
				this.setUTCMilliseconds(this.getUTCMilliseconds()+ ms);
				return this;
			}
			var modifiedDate, error;
			if(type === 'h'){
				modifiedDate = date.addHours(units);
                cb (null,modifiedDate);
			} else if (type === 'm'){
				modifiedDate = date.addMinutes(units);
                cb (null,modifiedDate);
			} else if (type === 's'){
				modifiedDate = date.addSeconds(units);
                cb (null,modifiedDate);
			} else  if (type === 'ms'){
				modifiedDate = date.addMilliSeconds(units)
                cb (null,modifiedDate);
			} else  {
				error = "Bad type param passed";
				cb(error)
			}

		} else {
        	error = "Invalid param passed";
			return cb(error);
		}
    },
	subTimeToDate : function (date, type, units, cb) {
        if((date instanceof Date) && (type) && (units)){
			Date.prototype.subHours= function(h){
				this.setUTCHours(this.getUTCHours()-h);
				return this;
			}
			Date.prototype.subMinutes= function(m){
				this.setUTCMinutes(this.getUTCMinutes()-m);
				return this;
			}
			Date.prototype.subSeconds= function(s){
				this.setUTCSeconds(this.getUTCSeconds()-s);
				return this;
			}
			Date.prototype.subMilliSeconds= function(ms){
				this.setUTCMilliseconds(this.getUTCMilliseconds()-ms);
				return this;
			}
			var modifiedDate, error;
			if(type === 'h'){
				modifiedDate = date.subHours(units);
                cb (null,modifiedDate);
			} else if (type === 'm'){
				modifiedDate = date.subMinutes(units);
                cb (null,modifiedDate);
			} else if (type === 's'){
				modifiedDate = date.subSeconds(units);
                cb (null,modifiedDate);
			} else  if (type === 'ms'){
				modifiedDate = date.subMilliSeconds(units)
                cb (null,modifiedDate);
			} else  {
				error = "Bad type param passed";
				cb(error)
			}

		} else {
			error = "Invalid param passed";
			return cb(error);
		}
    },
	diffBtwDate : function (date1, date2) {
    	console.log("diffbtwDate")
		console.log("date 2 : "+date2.toUTCString())
		console.log("date 1 : "+date1.toUTCString())
		var totalSeconds = Math.floor((date2 - date1) / (1000));
    	totalSeconds += 1;

		var totalHour = Math.floor((totalSeconds) / (60*60));
		totalSeconds -= totalHour * 3600;
		var totalMinutes = Math.floor((totalSeconds)/60);
		totalSeconds -= totalMinutes *60;



		console.log("hr : "+totalHour);
		console.log("mn : "+totalMinutes);
		console.log("s : "+totalSeconds);
    }
}
