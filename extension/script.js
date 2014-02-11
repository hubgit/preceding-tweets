function run() {
	var nodes = document.querySelectorAll('.tweet:not(.has-previously)');

	for (var i = 0; i < nodes.length; i++) {
		var node = nodes[i];

		var timenode = node.querySelector('.tweet-timestamp [data-time]');

		if (!timenode) {
			continue;
		}

		var screen_name = node.getAttribute('data-screen-name');
		var time = timenode.getAttribute('data-time');
		var query = 'from:' + screen_name + ' until:' + (Number(time) + 1);

		var a = document.createElement('a');
		a.href = 'https://twitter.com/search?f=realtime&q=' + encodeURIComponent(query);
		a.style.color = '#999';
		a.innerHTML = '<b>Previously</b>';

		node.querySelector('.stream-item-footer').appendChild(a);
		node.className = node.className + ' has-previously';
	}

	window.setTimeout(run, 2000);
}

run();