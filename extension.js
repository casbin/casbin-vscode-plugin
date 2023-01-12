// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')

let outputChannel = vscode.window.createOutputChannel('Casbin')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('extension "vscode-casbin" is now active!')
    outputChannel.appendLine('extension "vscode-casbin" is now active!')

    let hoverRequestDefinition = vscode.languages.registerHoverProvider(
        { pattern: '**/**.conf' },
        {
            provideHover(document, position, token) {
                console.log('you just hover on "request_definition"')
                outputChannel.appendLine(
                    'you just hover on "request_definition"'
                )
                const range = document.getWordRangeAtPosition(position)
                const word = document.getText(range)

                if (word == 'request_definition') {
                    console.log('show hover for "request_definition"')
                    outputChannel.appendLine(
                        'show hover for "request_definition"'
                    )
                    return {
                        contents: [
                            '[request_definition] is the definition for the access request. It defines the arguments in e.Enforce(...) function.',
                        ],
                    }
                }

                if (word == 'policy_definition') {
                    console.log('show hover for "policy_definition"')
                    outputChannel.appendLine(
                        'show hover for "policy_definition"'
                    )
                    return {
                        contents: [
                            '[policy_definition] is the definition for the policy. It defines the meaning of the policy.',
                        ],
                    }
                }

                if (word == 'policy_effect') {
                    console.log('show hover for "policy_effect"')
                    outputChannel.appendLine('show hover for "policy_effect"')
                    return {
                        contents: [
                            '[policy_effect] is the definition for the policy effect. It defines whether the access request should be approved if multiple policy rules match the request.',
                        ],
                    }
                }

                if (word == 'matchers') {
                    console.log('show hover for "matchers"')
                    outputChannel.appendLine('show hover for "matchers"')
                    return {
                        contents: [
                            '[matchers] is the definition for policy matchers. The matchers are expressions. It defines how the policy rules are evaluated against the request.',
                        ],
                    }
                }
            },
        }
    )

    context.subscriptions.push(hoverRequestDefinition)
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate,
}
