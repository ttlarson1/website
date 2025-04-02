document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    toggleButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");  // Toggle visibility
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".container3 .box");

    boxes.forEach(box => {
        box.addEventListener("click", function () {
            const isActive = this.classList.contains("active");

            // Reset all boxes first
            boxes.forEach(b => {
                b.classList.remove("active");
                b.querySelector("p").style.display = "none";
                b.style.opacity = "1"; // Reset transparency
            });

            if (!isActive) {
                // Set clicked box as active
                this.classList.add("active");
                this.querySelector("p").style.display = "block";

                // Make other boxes slightly transparent
                boxes.forEach(b => {
                    if (b !== this) b.style.opacity = "0.5";
                });
            }
        });
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const video = document.querySelector(".video-bg");
//     const source = document.querySelector("#videoSource");

//     // List of video files to play in order
//     const videoList = ["videos/3.mp4",  "videos/7.mp4", "videos/5.mp4", "videos/6.mp4", "videos/2.mp4"]; 
//     let currentVideoIndex = 0;

//     // Fade-out and fade-in functions
//     function fadeOut(element, duration) {
//         element.style.transition = `opacity ${duration}s`;
//         element.style.opacity = 0;
//     }

//     function fadeIn(element, duration) {
//         element.style.transition = `opacity ${duration}s`;
//         element.style.opacity = 1;
//     }

//     // Preload the next video
//     function preloadNextVideo() {
//         const nextVideoIndex = (currentVideoIndex + 1) % videoList.length;
//         const nextVideo = document.createElement("video");
//         nextVideo.src = videoList[nextVideoIndex];
//         nextVideo.preload = "auto"; // Preload the video in the background
//         nextVideo.load(); // Start preloading the video
//     }

//     // Check if the video is close to the end
//     function checkVideoEnd() {
//         const videoDuration = video.duration;
//         const currentTime = video.currentTime;

//         if (videoDuration - currentTime < 2 && !video.classList.contains("transitioning")) {
//             video.classList.add("transitioning");
            
//             // Fade out the current video before it finishes
//             fadeOut(video, 1);  // Fade-out over 1 second
            
//             // Move to the next video after fading out
//             setTimeout(function () {
//                 // Move to the next video
//                 currentVideoIndex = (currentVideoIndex + 1) % videoList.length;
                
//                 // Preload the next video
//                 preloadNextVideo();

//                 // Change video source, fade back in and play the new video
//                 source.src = videoList[currentVideoIndex];
//                 video.load();
//                 fadeIn(video, 1);  // Fade-in over 1 second
//                 video.play();
                
//                 // Reset the flag to allow transitions
//                 video.classList.remove("transitioning");
//             }, 1000); // Wait 1 second after fade-out before switching video
//         }
//     }

//     // Listen for when the video is playing and check for transition
//     video.addEventListener("timeupdate", checkVideoEnd);

//     // Initial preload for the next video
//     preloadNextVideo();
// });

