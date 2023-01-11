// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

let outputChannel = vscode.window.createOutputChannel('Casbin');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('extension "vscode-casbin" is now active!');
  	outputChannel.appendLine('extension "vscode-casbin" is now active!');
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
