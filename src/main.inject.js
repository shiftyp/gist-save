import request from 'superagent';
import hotkeys from 'hotkeys-js';

let attachEventHandlers = () => {
	let pathname = window.location.pathname;

	if (!pathname.match(/edit$/)) return;

	let editPath = pathname.substring(0, pathname.lastIndexOf('/'));
	// The first form is for deleting the gist
	let saveForm = document.querySelectorAll(`form[action="${editPath}"]`)[1];

	let save = (e) => {
		e.preventDefault();
		postData(editPath, serializeForm(saveForm));
	};

	saveForm.addEventListener('submit', save)
	hotkeys('⌘+s, ctrl+s', save);
};

let serializeForm = (form) => {
	return [].reduce.call(form.querySelectorAll(
		'input:not([disabled]), textarea:not([disabled])'
	), (acc, input) => {
		let value =
		// GitHub expects plus signs, not converted spaces, in the
		// authenticity token and other fields, and superagent converts
		acc.push(`${input.name}=${input.value.replace('+', '%2B')}`);
		return acc;
	}, []).join('&');
};

let postData = (path, data) => {
	request
		.post(path)
		.send(data)
		.end((err, response) => {
			if (err) console.log(err);
		});
};

chrome.extension.sendMessage({}, (response) => {
	var readyStateCheckInterval = setInterval(() => {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			attachEventHandlers();
		}
	}, 10);
});
