// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import axios from 'axios';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const provider = vscode.languages.registerCompletionItemProvider(["python", "plaintext"], {
		async provideCompletionItems(doc, pos) {
			return getCompletionItemsFromRemote(doc, pos);
		}
	}, ':');
	const provider1 = vscode.languages.registerCompletionItemProvider(["python", "plaintext", "cpp", "c", "java", "javascript", "go", "typescript"], {
		async provideCompletionItems(doc, pos) {
			return getCompletionItemsFromRemote(doc, pos);
		}
	}, '{');
	const provider2 = vscode.languages.registerCompletionItemProvider(["python", "plaintext", "cpp", "c", "java", "javascript", "go", "typescript"], {
		async provideCompletionItems(doc, pos) {
			return getCompletionItemsFromRemote(doc, pos);
		}
	}, '!');
	context.subscriptions.push(provider, provider1,provider2);
}

async function getCompletionItemsFromRemote(doc: vscode.TextDocument, pos: vscode.Position) {
	let currentLine = doc.lineAt(pos).text;
	if (!currentLine.endsWith(":") && !currentLine.endsWith("{") && !currentLine.endsWith("}")) {
		return undefined;
	};
	//vscode.window.showInformationMessage('Hello World from Codegeeker!');
	const json = JSON.stringify({ "context": currentLine.replace("..", ""), "maxlength": 32 });
	const res = await axios.post('https://gitclone.com/aiit/codegen', json, {
		headers: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			"Content-Type": "application/json"
		}
	});
	var allCode = res.data.result;
	let completionItems: vscode.CompletionItem[] = [];
	if (allCode) {
		var sl = allCode.split("\n");
		for (var i = 0; i < sl.length; i++) {
			if (sl[i] !== undefined && (sl[i].trim()) !== "") {
				const commandCompletion = new vscode.CompletionItem(sl[i]);
				commandCompletion.kind = vscode.CompletionItemKind.Snippet;
				commandCompletion.detail = allCode;
				commandCompletion.documentation = new vscode.MarkdownString(allCode);
				commandCompletion.insertText = new vscode.SnippetString(allCode);
				completionItems.push(commandCompletion);
				break;
			}
		}
	}
	return completionItems;
}


// This method is called when your extension is deactivated
export function deactivate() { }
