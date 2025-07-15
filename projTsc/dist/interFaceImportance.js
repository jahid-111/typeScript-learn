"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    ;
    createStory() {
        return "Story Created";
    }
}
const insta = new Instagram("portrait", "sepia", 3);
const youtube = new YouTube("landscape", "vintage", 5);
const story = youtube.createStory();
console.log(insta.cameraMode); // Output: portrait
console.log(story);
