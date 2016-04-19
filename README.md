# GistSave

Inspired by [gist-async-save](https://github.com/walski/gist-async-save). This extension allows you to save gists without leaving the edit page. It works at the moment by preventing the default form action for the edit form and posting the form data to github using superagent. It also works on `⌘ + s` and `ctrl + s`; provided you don't have an editor focused. To install you can:

1. Clone the repository
2. Run `npm install`
3. Build with `npm run webpack`.
4. Either package the dist directory or install an unpackaged extension from that directory in chrome://extensions.
