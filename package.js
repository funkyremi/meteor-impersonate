Package.describe({
	name: "funkyremi:impersonate",
	summary: "Impersonate users in Meteor",
	version: "0.2.3",
	git: "https://github.com/funkyremi/meteor-impersonate.git",
});

Package.onUse(function (api, where) {
	
	api.use([
		"tracker@1.2.0",
		"accounts-base@1.4.2",
		"reactive-var@1.0.11",
		"templating@1.1.5",
		"gwendall:body-events@0.1.6"
	], "client");
	
	api.use([
		"random@1.0.5",
		"alanning:roles@1.2.14",
	]);
	
	api.addFiles([
		"server/lib.js"
	], "server");
	
	api.addFiles([
		"client/lib.js"
	], "client");
	
	api.export("Impersonate");
});
