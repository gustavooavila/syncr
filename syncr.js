function syncr(){
	//events to be finished
	this.eventsTF=0;
	//finished events
	this.eventsF=0;
	//callbacks
	this.CBS=[];
	
	//use this function to add a event...
	this.addEvent=function(a){
		this.eventsTF++;
		var self=this;
		//... returns a function that needs to be called once the event is actually finished.
		//look at the example
		return function(){
			self.eventsF++;
			console.log("loaded: "+a);
			if(self.eventsF==self.eventsTF){// check if all events were completed
				console.log("everything finished :)");
				//call all callbacks.
				for(var i=0;i<self.CBS.length;i++){
					self.CBS[i]();
				}
			}
		}
	}
	
	//just as the name say, adds CallBack to the CallBacks list
	this.addCB=function(a){this.CBS.push(a);}
}