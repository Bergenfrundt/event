function event (string, functions) {
	// Selects options from string
	var options = string.match(/\[(.*?)\]/g);
	// Looped for all options
	for (var i = 0;i < matches.length;i++) {
		// Removes brackets from options
		options[i] = options[i].slice(1, -1).toLowerCase();
	}
	// Runs function with same index
	functions[options.indexOf(prompt(string).toLowerCase())]();
}
