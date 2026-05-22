---
title: "## LLM debuggers & sympathy Many problems in"
date: 2026-05-21
---

## LLM debuggers & sympathy

Many problems in LLM can feel incredibly inscrutable because, unlike code, we cannot trace the internal mechanics of an LLM. Thus, it is not possible to mechanically trace back to the source of an error.

However, it is simultaneously true that, at the current high levels of LLM capability, many errors in the LLMs capability are caused by poor context engineering (e.g., overloading the context window, not providing the LLM the right context for what to do in case of an error, not being careful enough about what makes it into the token stream)

Thus, while we cannot mechanically trace back errors we can intuitively understand them by creating an llm debugger that shows the context of the LLM.

I think this has a strong analogy to the idea of sympathy. We can either choose to be frustrated by poor and illegible outcomes from an LLM or aim to develop *sympathy* by using an LLM debugger to see what the LLM sees

### implementation

A simple implementation is to wrap the anthropic or openai sdk and intercept the inputs and outputs, then display them in a nice way, including things like token usage at each step.

A better implementation allows us to to attach context to the tokens - e.g., to reveal if we are incorrectly presenting the underlying data to the LLM or if we are supplying too much of it 