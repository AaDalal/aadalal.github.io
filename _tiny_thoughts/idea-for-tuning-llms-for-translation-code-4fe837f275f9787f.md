---
title: "Idea for tuning LLMs for translation & code"
date: 2026-02-28
---

Idea for tuning LLMs for translation & code / RLAIF

Give one instance of a LLM some rich context and produce a description of the code it would like

Pass it to a second instance and then have it generate the code

Pass the code back and have it iterate until the code fits the context.

You now have (long context, short description, code pairs) which can be used to enrich the training