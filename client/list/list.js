if (Meteor.isClient) {
	
	Session.setDefault('counter', 0);
	
	Template.list.helpers({
		tasks: function(){
			return Tasks.find({});
		},
		formatData: function(){
			return moment(this.data).format('DD/MM/YYYY HH:mm ')
		}
	});

	Template.list.events({
		"click button": function(e, template){
			var tasks = this;
			Meteor.call("remove", tasks._id)
		}
	})
}
