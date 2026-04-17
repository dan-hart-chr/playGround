---
name: "Explain Code Step by Step"
description: "Explain selected code with a clear step sequence, syntax notes, and output summary"
argument-hint: "What should be explained or which part needs extra depth?"
agent: "agent"
---
Explain the provided code snippet step by step.

Use this process:
1. Start with a one paragraph overview of what the snippet is trying to do.
2. Walk through the logic in execution order using numbered steps.
3. Define complex syntax, language features, and functions in plain language.
4. Call out hidden assumptions, side effects, and possible failure points.
5. Summarise the overall output or runtime behaviour.

Output format:
- Overview
- Step by Step Logic
- Syntax and Function Notes
- Overall Output
- Potential Pitfalls

Style requirements:
- Keep the explanation beginner friendly but technically accurate.
- Prefer short examples when a concept is hard to understand.
- If context is missing, state assumptions clearly before explaining.
- Preserve the original behaviour. Do not suggest rewrites unless asked.

If the user includes a focus request in the prompt arguments, prioritise that area.