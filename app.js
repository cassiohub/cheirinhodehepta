$("#countdown").countdown("2016/12/04 19:00:00", function(event) {
	$(this).text(
		event.strftime('%D dias %H:%M:%S')
	);
});