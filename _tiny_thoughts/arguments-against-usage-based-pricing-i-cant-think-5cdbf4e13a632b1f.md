---
title: "## Arguments against usage-based pricing (I can't think"
date: 2026-05-21
---

## Arguments against usage-based pricing (I can't think of good arguments for)

Let's look at existing claude code monthly plan subscribers. Currently they pay for capacity at a below api-cost rate

This is for 3 reasons I can think of:
1. Claude code session limits allow for smoothing of token demand at a user level (and also at a population level, since you can reduce the limits at more popular times)
2. Most users of claude code do not fully use up their usage-limits, thus claude code functions kind of like insurance against needing a lot of tokens
3. Claude code increases demand for tokens too at some level in addition to the "insurance" effect; that is, users overall just will spend more on AI even if they didn't have spiky token usage
4. (I am sure there are reasons I cannot think of)

Thus the argument against token based pricing is that these nice properties don't hold for token based pricing. You don't have float, you don't have demand smoothing, you don't have this nice property that users just use your product more when it is structured as a subscription. Indeed you can see this counterfactual in the growth of Claude code before (in the per-token pricing era) and after the $200/mo plan came out (though, that is also related to Claude code simply getting way better)

Ok so what's the case for usage based pricing: it makes your value proportional to what the user gets out of it. Which is useful, because, in expectation most users get a better deal out of it.

However, this isn't really an argument for why the usage-based pricing is economically good. Sure the user will be better off in expectation *if they are thinking purely rationally*. But they may not be, they may prefer to have the price be a smooth quantity they can plan around.

And even if you capped the price that users will pay, they will likely think of the maximum as the price they *will* pay.

The only argument for usage based pricing I can think of that would work on consumers would be showing them their actual usage as evidence they are getting taken by fixed pricing.

And to think I started out with the idea that usage-based pricing was good