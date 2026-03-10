# Custom Agent Mode in VS Code
Custom agents in VS Code are `.agent.md files` that define specialized AI personas with tailored instructions and toolsets, letting you quickly switch the chat experience between roles like planner, reviewer, or implementer without reconfiguring settings.

## Structure of custom agent
- They are Markdown files 
- They use the .agent.md 
- They are stored in `.github/agents/` folder
- They have an (optional) header and body structure:

## header fields

| Field | Description |
|-------|-------------|
| `description` | A brief description of the custom agent, shown as placeholder text in the chat input field. |
| `name` | The name of the custom agent. If not specified, the file name is used. |
| `argument-hint` | Optional hint text shown in the chat input field to guide users on how to interact with the custom agent. |
| `tools` | A list of tool or tool set names that are available for this custom agent. Can include built-in tools, tool sets, MCP tools, or tools contributed by extensions. |
| `model` | The AI model to use when running the prompt. If not specified, the currently selected model in model picker is used. |
| `target` | The target environment or context for the custom agent (vscode or github-copilot). |
| `mcp-servers` | Optional list of Model Context Protocol (MCP) server config JSON to use with custom agents in GitHub Copilot (target: github-copilot). |
| `handoffs` | Optional list of suggested next actions or prompts to transition between custom agents. Handoff buttons appear as interactive suggestions after a chat response completes. |
| `handoffs.label` | The display text shown on the handoff button. |
| `handoffs.agent` | The target agent identifier to switch to. |
| `handoffs.prompt` | The prompt text to send to the target agent. |
| `handoffs.send` | Optional boolean flag to auto-submit the prompt (default is false). |

## Create a custom agent that reviews code
- locate in `.github/agents/code-reviewer.agent.md`
open [sample_code-reviewer.agent.md](sample_code-reviewer.agent.md)

## References
1. [VS Code Custom Agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents)
1. [Awesome Custom Agents](https://github.com/github/awesome-copilot/blob/main/docs/README.agents.md)
1. [Using agents in Visual Studio Code](https://code.visualstudio.com/docs/copilot/agents/overview)