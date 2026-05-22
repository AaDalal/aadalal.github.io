---
title: "Idea for tuning LLMs for translation & code"
date: 2026-05-21
context_for_this:
  - link_text: "LLMs are contextual meaning they can behave significantly"
    href: "/t/llms-are-contextual-meaning-they-can-behave-significantly-24cd8188fdcd803e.md"
---

Idea for tuning LLMs for translation & code / RLAIF

Give one instance of a LLM some rich context and produce a description of the code it would like.

Pass it to a second instance and then have it generate the code

Pass the code back and have it iterate until the code fits the context.

You now have (long context, short description, code pairs) which can be used to enrich the training