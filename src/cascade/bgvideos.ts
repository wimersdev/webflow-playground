export default function bgVideos() {
  function bgVideos() {
    // Video elements
    const bgvid01 = document.getElementById('bgvid01');
    const bgvid02 = document.getElementById('bgvid02');
    // Text and gradient elements
    const portfolioText = document.getElementById('portfolio-text');
    const gradient01 = document.getElementById('gradient01');
    const singleText = document.getElementById('single-text');
    const gradient02 = document.getElementById('gradient02');
    // Video sources within the video elements
    const video01 = bgvid01.querySelector('video');
    const video02 = bgvid02.querySelector('video');

    // Event listeners for mouseover and mouseout to play/pause videos and show/hide text
    document.getElementById('video-card01').addEventListener('mouseover', function () {
      video01.play();
      portfolioText.style.opacity = '1';
      gradient01.style.opacity = '1';
    });
    document.getElementById('video-card01').addEventListener('mouseout', function () {
      video01.pause();
      portfolioText.style.opacity = '0';
      gradient01.style.opacity = '0';
    });
    document.getElementById('video-card02').addEventListener('mouseover', function () {
      video02.play();
      singleText.style.opacity = '1';
      gradient02.style.opacity = '1';
    });
    document.getElementById('video-card02').addEventListener('mouseout', function () {
      video02.pause();
      singleText.style.opacity = '0';
      gradient02.style.opacity = '0';
    });
  }
  bgVideos();
}
