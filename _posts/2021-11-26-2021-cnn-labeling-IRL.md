---
layout: post
author: Aagam
---
## Problem
Labeling objects from videos is really time-consuming!

## Inspiration: Avatar
![image](https://user-images.githubusercontent.com/57609353/143659639-f3ce445f-f1fb-4564-89dc-abd7da52c83f.png)


## Solution
Combine heuristic object identification approaches and masking to create test data that can be automatically identified.

Take the following example:
> Imagine you want to identify the location of your finger in the frame of a video. On one hand you could go frame by frame
> and label the center of mass of the image. But that's difficult and timeconsuming. On the other hand, you could put a little
> dot on your finger that signifies the center of mass. Using heuristic techniques, it's easy enough to identify the location
> of the dot. But by doing that, and then masking over the dot when training, you can provide your CNN efficient training data!

I'm going to give this a shot and let you know how it goes!
