
export class Video{
    
constructor(
    private id: string,
    private title: string,
    private video_time: number,
    private upload_date: string
    
){}

public getId(){
    return this.id
}


public getTitle(){
    return this.title
}
public setTitle(newTitle:string): void {
    this.title = newTitle
}


public getVideoTime(){
    return this.video_time
}
public setVideoTime(newVideo_time:number): void {
    this.video_time = newVideo_time
}


public getUploadDate(){
    return this.upload_date
}


}



