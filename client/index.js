if (Meteor.isClient) {
	Meteor.startup(function(){
		Meteor.subscribe("tasks");
	});
}
