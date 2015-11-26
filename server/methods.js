Meteor.methods({
	add: function(obj){
		Tasks.insert({name: obj.name, date: new Date()});
	},
	remove: function(id){
		Tasks.remove({_id: id});
	}
});
