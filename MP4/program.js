const fs = require('fs');
const ytdl = require('ytdl-core');

async function downloadVideoFromURL(url) {
    try {
        const videoID = ytdl.getURLVideoID(url);
        const videoInfo = await ytdl.getInfo(videoID);
        const videoTitle = videoInfo.videoDetails.title.replace(/[^\w.-]/g, '_');
        const n = Math.floor(Math.random() * 10000);

        console.log('Title: ' + videoInfo.videoDetails.title);
        ytdl(url).pipe(fs.createWriteStream(`video-${videoTitle}-${n}.mp4`));
        console.log(`Downloading video-${videoTitle}-${n}.mp4...`);
    } catch (error) {
        console.error('Error downloading the video:', error);
    }
}

function download() {
    fs.readFile('prove', 'utf-8', async function (err, data) {
        if (err) {
            return console.error(err);
        }

        const urls = data.split('\n').filter(url => url.trim() !== '');
        console.log('Downloading', urls.length, 'videos...');
        for (const url of urls) {
            await downloadVideoFromURL(url);
        }
    });
}

download();
