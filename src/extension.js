const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Speedy Shortcuts is now active!');

	let disposableShift = vscode.commands.registerCommand("speedyShortcuts.doubleTap.shift", () => {
		vscode.commands.executeCommand("workbench.action.findInFiles");
	});

	let disposableCtrl = vscode.commands.registerCommand("speedyShortcuts.doubleTap.ctrl", () => {
		vscode.commands.executeCommand("workbench.action.showCommands");
	});

	let disposableAlt = vscode.commands.registerCommand("speedyShortcuts.doubleTap.alt", () => {
		const editor = vscode.window.activeTextEditor;
		const selectedText = editor ? editor.document.getText(editor.selection).trim() : '';

		if (selectedText) {
			vscode.commands.executeCommand("workbench.action.quickOpen", selectedText);
		} else {
			vscode.commands.executeCommand("workbench.action.quickOpen");
		}
	});

	context.subscriptions.push(disposableShift, disposableCtrl, disposableAlt);
}

function deactivate() { }

module.exports = { activate, deactivate };