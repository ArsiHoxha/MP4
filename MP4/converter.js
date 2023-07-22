const fs = require('fs');
const ytdl = require('ytdl-core');
const { execSync } = require('child_process');

const videoUrl = 'https://www.youtube.com/watch?v=ySTlFsxTO0A'; // Replace this with your YouTube video URL
const outputDirectory = 'converted'; // Change this to your desired output directory

