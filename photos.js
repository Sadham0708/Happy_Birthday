function toggleNav() {
    const sideNav = document.getElementById('sideNav');
    sideNav.classList.toggle('active'); // Toggle active class
}




// List of media items (images and videos)
const mediaItems = [
    { type: 'image', src: 'Madam01.jpg' },
    { type: 'image', src: 'Madam02.jpg' },
    { type: 'image', src: 'Madam03.jpg' },
    { type: 'image', src: 'Madam04.jpg' },
    { type: 'image', src: 'Madam06.jpg' },
    { type: 'image', src: 'IMG-20221023-WA0003.jpg' },
    { type: 'image', src: 'IMG-20221023-WA0004.jpg' },
    { type: 'image', src: 'IMG-20221023-WA0006.jpg' },
    { type: 'image', src: 'IMG-20221023-WA0035.jpg' },
    { type: 'image', src: 'IMG-20221023-WA0036.jpg' },
    { type: 'image', src: 'IMG-20221023-WA0037.jpg' },
    { type: 'image', src: 'IMG-20240521-WA0002.jpg' },
    { type: 'image', src: 'IMG-20240521-WA0003.jpg' },
    { type: 'image', src: 'IMG-20240805-WA0011.jpg' },
    { type: 'image', src: 'IMG-20240808-WA0001.jpg' },
    { type: 'image', src: 'IMG20230531151701.jpg' },
    { type: 'image', src: 'IMG_20220224_093215.jpg' },
    { type: 'image', src: 'IMG_20220224_111015.jpg' },
    { type: 'image', src: 'IMG_20220225_092851.jpg' },
    { type: 'image', src: 'IMG_20220227_111439.jpg' },
    { type: 'image', src: 'IMG_20220505_213307.jpg' },
    { type: 'image', src: 'IMG_20220610_204915.jpg' },
    { type: 'image', src: 'IMG_20220808_161031.jpg' },
    { type: 'image', src: 'IMG_20220808_161415.jpg' },
    { type: 'image', src: 'IMG_20221205_011156.jpg' },
    { type: 'image', src: 'IMG_20230916_140452.jpg' },
    { type: 'image', src: 'IMG_20230916_141009.jpg' },
    { type: 'image', src: 'IMG_20231004_192535.jpg' },
    { type: 'image', src: 'IMG_20240106_111505.jpg' },
    { type: 'image', src: 'IMG_20240404_010806.jpg' },
    { type: 'image', src: 'IMG_20240404_010836.jpg' },
    { type: 'image', src: 'IMG_20240618_034601.jpg' },
    { type: 'image', src: 'IMG_20240618_034628.jpg' },
    { type: 'image', src: 'Screenshot_2022-02-14-00-21-32-82_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-02-26-14-52-22-07_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-05-01-20-44-11-98_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-05-24-17-07-58-15_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-06-15-03-46-30-08_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-10-24-21-33-49-65_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-10-24-21-33-54-95_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-11-15-12-16-24-83_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-11-18-22-48-51-29_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-11-29-15-16-24-65_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-12-07-09-52-06-38_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-12-20-19-33-06-06_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-12-21-01-46-20-51_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2022-12-21-01-47-00-75_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2023-01-15-02-21-41-13_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2023-01-15-14-59-19-04_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2023-03-26-10-36-07-03_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2023-03-29-21-21-41-54_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2023-06-01-19-08-43-36_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2023-07-28-15-31-35-21_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2023-08-26-17-59-42-18_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2023-09-04-21-53-46-77_f2cb81fb7cf38af7978f186f2a61634a.jpg' },
    { type: 'image', src: 'Screenshot_2023-09-06-20-15-42-35_99c04817c0de5652397fc8b56c3b3817.jpg' },
    { type: 'image', src: 'Screenshot_2023-09-06-20-16-07-93_99c04817c0de5652397fc8b56c3b3817.jpg' },
    { type: 'image', src: 'Screenshot_2023-09-22-19-31-30-02_99c04817c0de5652397fc8b56c3b3817.jpg' },
    { type: 'image', src: 'Screenshot_2023-11-12-23-33-39-04_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'IMG-20240922-WA0005[1].jpg' },
    { type: 'image', src: 'Screenshot_2024-01-10-03-55-18-32_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2024-03-08-15-24-45-92_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
    { type: 'image', src: 'Screenshot_2024-03-10-23-23-33-03_1c337646f29875672b5a61192b9010f9.jpg' },
    { type: 'image', src: 'Screenshot_2024-05-16-14-04-56-17_1c337646f29875672b5a61192b9010f9.jpg' },
    { type: 'image', src: 'Screenshot_2024-06-24-12-01-37-06_1c337646f29875672b5a61192b9010f9.jpg' },
    { type: 'image', src: 'Screenshot_2024-06-24-12-01-48-66_1c337646f29875672b5a61192b9010f9.jpg' },
    { type: 'image', src: 'Screenshot_2024-08-05-22-04-37-83_1c337646f29875672b5a61192b9010f9.jpg' },
    { type: 'image', src: 'Screenshot_2024-08-29-00-17-21-32_1c337646f29875672b5a61192b9010f9.jpg' },
    { type: 'video', src: '08ef39cf68b94795b1e14f3697a26a7f.mp4' },
    { type: 'video', src: '06436ba12a414fd8b142ba7631d5dc30.mp4' },
    { type: 'video', src: '09181e5aedba40a0a0538f2471a64c8b.mp4' },
    { type: 'video', src: '1280d4ec9d114d9385b88839cd5faa2a.mp4' },
    { type: 'video', src: '1c31bfa920894678a9aca2dded31bb4d.mp4' },
    { type: 'video', src: '20b4bd2543694aa094f4ce118acb1670.mp4' },
    { type: 'video', src: '28d50b84a3e24344901105b99cb83bc5.mp4' },
    { type: 'video', src: '402e199436364ce7a8c54c9dcdaf23ea.mp4' },
    { type: 'video', src: '58944b8e96f547cc84e86fbb0f6d8139.mp4' },
    { type: 'video', src: '5af8faf3981d4b69bcbfb3f42c297e3c.mp4' },
    { type: 'video', src: '79d06dd696314032866e55bf56bdcaf5.mp4' },
    { type: 'video', src: 'VID-20221023-WA0001.mp4' },
    { type: 'video', src: 'VID-20221124-WA0002.mp4' },
    { type: 'video', src: 'VID-20230114-WA0005.mp4' },
    { type: 'video', src: 'VID-20230129-WA0000.mp4' },
    { type: 'video', src: 'VID-20230616-WA0002.mp4' },
    { type: 'video', src: 'VID-20231203-WA0001.mp4' },
    { type: 'video', src: 'VID-20240805-WA0004.mp4' },
    { type: 'video', src: 'a71907764d3f4543b6a31c74882c7173.mp4' },
    { type: 'video', src: 'a7da1942019a447fade7c849ff0965f9.mp4' },
    { type: 'video', src: 'bfbee7bd0959465caae8bf1750391093.mp4' },
    { type: 'video', src: 'c79c5a72bf1e4471a4108b76281dfa2e.mp4' },
    { type: 'video', src: 'c8c699ef6c344b37af3f8736213df39a.mp4' },
    { type: 'video', src: 'cd4fb72756f44ad190479e91e6d5489c.mp4' },
    { type: 'video', src: 'e688edb9270348ad90fd8046d8102fc2.mp4' },
    { type: 'video', src: 'e8e2ce5243574056bd506aca06bbefe9.mp4' },
    { type: 'video', src: '79d06dd696314032866e55bf56bdcaf5.mp4' },
    { type: 'video', src: '66f283a70c86421091ffaf23736636ad.mp4' },
    { type: 'video', src: 'video01.mp4' },
    { type: 'audio', src: ' WhatsApp Audio 2024-09-22 at 01.02.15_c99335ce.mp3' },
    { type: 'audio', src: 'WhatsApp Audio 2024-09-22 at 01.02.16_b3eb1c29.mp3' },
    { type: 'audio', src: 'WhatsApp Audio 2024-09-22 at 01.02.16_c9b2944b.mp3' },
    { type: 'audio', src: 'WhatsApp Audio 2024-09-22 at 01.02.17_aaa457c7.mp3' },
    { type: 'audio', src: 'WhatsApp Audio 2024-09-22 at 01.02.17_b63f203e.mp3' },
    { type: 'audio', src: 'WhatsApp Audio 2024-09-22 at 01.02.17_e7f690e5.mp3' },
    { type: 'audio', src: 'WhatsApp Audio 2024-09-22 at 01.02.18_aa2168b6.mp3' },
    { type: 'audio', src: 'WhatsApp Audio 2024-09-22 at 01.02.18_f7097881.mp3' },
    { type: 'audio', src: 'WhatsApp Audio 2024-09-22 at 01.02.19_4c8c1972.mp3' },
    { type: 'audio', src: 'WhatsApp Audio 2024-09-22 at 01.02.19_631e9eec.mp3' },
    { type: 'audio', src: 'WhatsApp Audio 2024-09-22 at 01.02.20_6041d2e9.mp3' },
    { type: 'audio', src: 'WhatsApp Audio 2024-09-22 at 01.02.20_84a97118.mp3' },
    { type: 'audio', src: 'WhatsApp Image 2024-09-22 at 01.02.14_9beef24a.mp3' },
    { type: 'audio', src: 'WhatsApp Image 2024-09-22 at 01.02.15_c56b4597.mp3' }


     
];

let currentIndex = 0;
let autoSlideInterval;
let isPlaying = false;
let currentVideo = null;

// Function to show the selected media in the main slider
function showMedia(index) {
    const mainMedia = document.getElementById('mainMedia');
    const mainVideo = document.getElementById('mainVideo');

    currentIndex = index;

    if (mediaItems[index].type === 'image') {
        mainMedia.src = mediaItems[index].src;
        mainMedia.style.display = 'block';
        mainVideo.style.display = 'none';
    } else if (mediaItems[index].type === 'video') {
        mainVideo.src = mediaItems[index].src;
        mainVideo.style.display = 'block';
        mainMedia.style.display = 'none';
        mainVideo.controls = true; // Enable controls for the main video
        if (currentVideo) {
            currentVideo.pause();
        }
        currentVideo = mainVideo;
    }
}

// Function to toggle play/pause for the automatic slideshow
function togglePlayPause() {
    const playPauseBtn = document.getElementById('playPauseBtn');

    if (isPlaying) {
        clearInterval(autoSlideInterval);
        playPauseBtn.innerHTML = '&#9658; Play';
        isPlaying = false;
    } else {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % mediaItems.length;
            showMedia(currentIndex);
        }, 2000);
        playPauseBtn.innerHTML = '&#10074;&#10074; Pause';
        isPlaying = true;
    }
}

let currentlyPlayingMedia = null;

// Function to show image or video in fullscreen with play/pause toggle for video
function openFullscreen(src, type) {
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.classList.add('fullscreen-container');

    let fullscreenElement;
    if (type === 'image') {
        fullscreenElement = document.createElement('img');
        fullscreenElement.src = src;
        fullscreenElement.classList.add('fullscreen-image');
    } else if (type === 'video') {
        fullscreenElement = document.createElement('video');
        fullscreenElement.src = src;
        fullscreenElement.classList.add('fullscreen-video');
        fullscreenElement.controls = true; // Enable controls for fullscreen video

        // Ensure only one media plays at a time
        fullscreenElement.onplay = () => {
            if (currentlyPlayingMedia && currentlyPlayingMedia !== fullscreenElement) {
                currentlyPlayingMedia.pause();
            }
            currentlyPlayingMedia = fullscreenElement;
        };

        // Add play/pause toggle when the user clicks/taps on the video
        fullscreenElement.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent clicking from closing fullscreen view

            // Toggle play/pause on tap
            if (!fullscreenElement.paused) {
                fullscreenElement.pause(); // Pause video on tap
            } else {
                fullscreenElement.play(); // Resume video on tap
            }
        });
    }

    fullscreenContainer.appendChild(fullscreenElement);
    document.body.appendChild(fullscreenContainer);

    // Close fullscreen only when clicking outside the video or image
    fullscreenContainer.addEventListener('click', (e) => {
        if (e.target === fullscreenContainer) {
            document.body.removeChild(fullscreenContainer); // Close fullscreen
        }
    });
}

// Dynamically generate gallery items and thumbnails
function generateMediaItems() {
    const gallery = document.getElementById('gallery');
    const thumbnails = document.getElementById('thumbnails');
    gallery.innerHTML = '';
    thumbnails.innerHTML = '';

    mediaItems.forEach((item, index) => {
        // Create gallery items (smaller version)
        let galleryItemContainer = document.createElement('div');
        galleryItemContainer.classList.add('gallery-item-container');

        let galleryItem;
        if (item.type === 'image') {
            galleryItem = document.createElement('img');
            galleryItem.src = item.src;
            galleryItem.alt = `Image ${index + 1}`;
            galleryItem.onclick = () => openFullscreen(item.src, 'image'); // Open image in fullscreen
        } else if (item.type === 'video') {
            galleryItem = document.createElement('video');
            galleryItem.src = item.src;
            galleryItem.muted = true; // Mute video in gallery view
            galleryItem.controls = false; // No controls in the gallery
            galleryItem.onclick = () => openFullscreen(item.src, 'video'); // Open video in fullscreen

            // Add a label for video to distinguish it
            let videoLabel = document.createElement('div');
            videoLabel.classList.add('video-label');
            videoLabel.innerText = 'Video';
            galleryItemContainer.appendChild(videoLabel);
        }

        galleryItem.classList.add('gallery-item');
        galleryItemContainer.appendChild(galleryItem);
        gallery.appendChild(galleryItemContainer);

        // Create thumbnails (smaller media items for scrolling)
        let thumbnailItemContainer = document.createElement('div');
        let thumbnailItem;
        if (item.type === 'image') {
            thumbnailItem = document.createElement('img');
            thumbnailItem.src = item.src;
            thumbnailItem.alt = `Thumbnail ${index + 1}`;
        } else if (item.type === 'video') {
            thumbnailItem = document.createElement('video');
            thumbnailItem.src = item.src;
            thumbnailItem.muted = true; // Mute video for thumbnail
            thumbnailItem.controls = false; // No controls for thumbnail
        }
        thumbnailItem.onclick = () => showMedia(index); // Add click functionality
        thumbnailItem.classList.add('thumbnail-item');
        thumbnailItemContainer.appendChild(thumbnailItem);
        thumbnails.appendChild(thumbnailItemContainer);
    });
}

// Auto-start with the first media
showMedia(0);
generateMediaItems();

document.addEventListener('DOMContentLoaded', () => {
    // Select all audio elements
    const audioItems = document.querySelectorAll('.audio-item audio');

    // Function to pause all audio elements except the one being played
    function pauseOtherAudios(currentAudio) {
        audioItems.forEach(audio => {
            if (audio !== currentAudio) {
                audio.pause(); // Pause the other audio
                audio.currentTime = 0; // Reset to the beginning if you want to
            }
        });
    }

    // Add event listeners to each audio element
    audioItems.forEach(audio => {
        audio.addEventListener('play', () => {
            pauseOtherAudios(audio); // Pause other audios when this one plays
        });
    });
});

