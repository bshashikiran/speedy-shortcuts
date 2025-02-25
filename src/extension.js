const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Speedy Shortcuts is now active!');

	vscode.window.onDidChangeTextEditorSelection(() => {
		vscode.commands.executeCommand("setContext", "editorTextFocus", true);
	});

	let disposableShift = vscode.commands.registerCommand("speedyShortcuts.doubleTap.shift", () => {
		doubleTapHandler("shift", () => {
			vscode.commands.executeCommand("workbench.action.findInFiles");
		});
	});

	let disposableCtrl = vscode.commands.registerCommand("speedyShortcuts.doubleTap.ctrl", () => {
		doubleTapHandler("ctrl", () => {
			vscode.commands.executeCommand("workbench.action.showCommands");
		});
	});

	let disposableAlt = vscode.commands.registerCommand("speedyShortcuts.doubleTap.alt", () => {
		doubleTapHandler("alt", () => {
			vscode.commands.executeCommand("workbench.action.quickOpen");
		});
	});

	context.subscriptions.push(disposableShift, disposableCtrl, disposableAlt);
}

/**
 * Detects double key presses.
 * @param {string} key
 * @param {Function} action
 */
function doubleTapHandler(key, action) {
	action();
}

function deactivate() { }

module.exports = { activate, deactivate };
