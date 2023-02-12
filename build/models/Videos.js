"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
class Video {
    constructor(id, title, video_time) {
        this.id = id;
        this.title = title;
        this.video_time = video_time;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    getVideoTime() {
        return this.video_time;
    }
    setVideoTime(newVideo_time) {
        this.video_time = newVideo_time;
    }
}
exports.Video = Video;
//# sourceMappingURL=Videos.js.map