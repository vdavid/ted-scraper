import { TEDVideo } from "./ted-interface.mjs";
import fs from "fs";

export async function doesVideoListFileExist(): Promise<boolean> {
    try {
        await fs.promises.access("video-list.json", fs.constants.F_OK)
        return true
    } catch {
        return false
    }
}

export async function writeVideoListToFile(videos: TEDVideo[]) {
    return fs.promises.writeFile('data/videos.json', JSON.stringify(videos, null, 2))
}

export async function readVideoListFile(): Promise<TEDVideo[]> {
    const fileContents = await fs.promises.readFile('data/videos.json', 'utf-8');
    return JSON.parse(fileContents);
}
