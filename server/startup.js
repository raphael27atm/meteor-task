if (Meteor.isServer) {
	Meteor.startup(function(){
		Meteor.publish("tasks", function(){
			return Tasks.find({});
		});
	});
}
