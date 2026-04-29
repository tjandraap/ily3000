// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add floating animation to hero elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-image');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
// Music Player
const songs = [
    'assets/music/Apa Mungkin.mp3',
    'assets/music/Jangan Paksa Rindu.mp3',
    'assets/music/Sorai.mp3'
];

let currentSongIndex = 0;
let isPlaying = false;
let audio = new Audio();
let currentTimeInterval;

audio.src = songs[currentSongIndex];

// Initialize music player
function initMusic() {
    audio.addEventListener('loadedmetadata', () => {
        document.getElementById('duration').textContent = formatTime(audio.duration);
    });
    
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextSong);
}

// Play/Pause
function togglePlay() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    
    if (isPlaying) {
        audio.pause();
        playIcon.className = 'fas fa-play';
        clearInterval(currentTimeInterval);
    } else {
        audio.play();
        playIcon.className = 'fas fa-pause';
        currentTimeInterval = setInterval(updateProgress, 1000);
    }
    isPlaying = !isPlaying;
}

// Update progress bar
function updateProgress() {
    const progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentTime').textContent = formatTime(audio.currentTime);
}

// Format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Next/Previous song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    if (isPlaying) {
        audio.play();
    }
    updateMusicInfo();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex];
    if (isPlaying) {
        audio.play();
    }
    updateMusicInfo();
}

function updateMusicInfo() {
    const titles = ['Apa Mungkin', 'Jangan Paksa Rindu', 'Sorai'];
    const artists = ['Bernadya', 'Riefian Fajarsyah', 'Nadin Amizah'];
    
    document.querySelector('.music-title').textContent = titles[currentSongIndex];
    document.querySelector('.music-artist').textContent = artists[currentSongIndex];
}

// Progress bar click
document.getElementById('progressBar').parentElement.addEventListener('click', (e) => {
    const progressContainer = e.currentTarget;
    const clickX = e.offsetX;
    const width = progressContainer.offsetWidth;
    const duration = audio.duration;
    
    audio.currentTime = (clickX / width) * duration;
});

// Existing functions + init music
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    initMusic();
    updateMusicInfo();
});