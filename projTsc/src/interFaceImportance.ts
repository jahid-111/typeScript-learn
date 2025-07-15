
interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

interface Story {
    createStory(): void;
}



class Instagram implements TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number

    ) {

    }

}

class YouTube implements TakePhoto, Story {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number

    ) { };


    createStory(): string {
        return "Story Created";
    }


}

const insta = new Instagram("portrait", "sepia", 3);
const youtube = new YouTube("landscape", "vintage", 5);
const story = youtube.createStory();
console.log(insta.cameraMode); // Output: portrait
console.log(story)