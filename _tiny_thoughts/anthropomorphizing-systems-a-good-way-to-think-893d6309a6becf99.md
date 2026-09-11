---
title: "### anthropomorphizing systems A good way to think"
date: 2026-09-11
---

### anthropomorphizing systems

A good way to think about separation of concerns is to treat the different parts of your system as people, and ask what they would do: "how does teh cache know when to empty?"

This phrasing helps decompose the system into logic (teh cache empties by dropping the last item) and communication (the cache empties when the scheduler tells it to invalidate)