// --- DUMMY DATA ---
// Added 'trailer' ID for real YouTube links
const movies = [
    {
        id: "interstellar",
        title: "Interstellar",
        genre: "Sci-Fi | Drama",
        rating: "8.6",
        lang: "English",
        trailer: "zSWdZVtXT7E",
        imgUrl: "https://image.tmdb.org/t/p/original/gEU2QniL6E8ahDaX06DBstrJ2s8.jpg",
        desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
        id: "dark_knight",
        title: "The Dark Knight",
        genre: "Action | Crime",
        rating: "9.0",
        lang: "English",
        trailer: "EXeTwQWrcwY",
        imgUrl: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests."
    },
    {
        id: "idiots",
        title: "3 Idiots",
        genre: "Comedy | Drama",
        rating: "8.4",
        lang: "Hindi",
        trailer: "K0eDlFX9GMc",
        imgUrl: "https://image.tmdb.org/t/p/original/66A9MqXOyVFCSSoloscw7qGs5vr.jpg",
        desc: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently."
    },
    {
        id: "parasite",
        title: "Parasite",
        genre: "Thriller | Drama",
        rating: "8.5",
        lang: "Korean",
        trailer: "5xH0HfJHsaY",
        imgUrl: "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
    },
    {
        id: "rrr",
        title: "RRR",
        genre: "Action | Drama",
        rating: "8.0",
        lang: "Telugu",
        trailer: "NgBoMJy386M",
        imgUrl: "https://image.tmdb.org/t/p/original/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg",
        desc: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920's."
    },
    {
        id: "spirited_away",
        title: "Spirited Away",
        genre: "Animation | Fantasy",
        rating: "8.6",
        lang: "Japanese",
        trailer: "ByXuk9QqQkk",
        imgUrl: "https://image.tmdb.org/t/p/original/39wmItIWsg5sZMyRUKGkDAhsBnv.jpg",
        desc: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family."
    },
    {
        id: "money_heist",
        title: "Money Heist",
        genre: "Crime | Thriller",
        rating: "8.2",
        lang: "Spanish",
        trailer: "_InqQJRqGW4",
        imgUrl: "https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        desc: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain."
    },
    {
        id: "avengers_endgame",
        title: "Avengers: Endgame",
        genre: "Action | Adventure",
        rating: "8.4",
        lang: "English",
        trailer: "TcMBFSGVi1c",
        imgUrl: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        desc: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more."
    },
    {
        id: "dangal",
        title: "Dangal",
        genre: "Biography | Sport",
        rating: "8.3",
        lang: "Hindi",
        trailer: "x_7YlGv9u1g",
        imgUrl: "https://image.tmdb.org/t/p/original/ueO9MYIOHO7M1PiMUeY74uf8fB9.jpg",
        desc: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression."
    },
    {
        id: "train_to_busan",
        title: "Train to Busan",
        genre: "Horror | Thriller",
        rating: "7.6",
        lang: "Korean",
        trailer: "pyWuHv2-Abk",
        imgUrl: "https://image.tmdb.org/t/p/original/vVpDOOguv4FpBdLb3iRk7tzCU6C.jpg",
        desc: "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan."
    }
];

// --- STATE VARIABLES ---
let selectedRating = 7; 
let movieModal;
let currentTrailerLink = "";

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', function() {
    movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
});

// --- NAVIGATION LOGIC ---
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.add('d-none');
        sec.classList.remove('d-flex');
        sec.classList.remove('d-block');
    });

    const selected = document.getElementById(sectionId);
    
    if (sectionId === 'home-section') {
        selected.classList.remove('d-none');
        selected.classList.add('d-block');
        selected.scrollTop = 0;
    } 
    else if(sectionId !== 'results-section') {
        selected.classList.remove('d-none');
        selected.classList.add('d-flex');
    } 
    else {
        selected.classList.remove('d-none');
    }
}

// --- PREFERENCES LOGIC ---
function toggleGenre(btn) {
    btn.classList.toggle('active');
}

function selectRating(btn, value) {
    document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedRating = value;
}

// --- MODAL LOGIC (View Details) ---
function openModal(index) {
    const movie = movies[index];
    const fallbackPath = `./images/${movie.id}.jpg`;
    
    document.getElementById('modalTitle').innerText = movie.title;
    document.getElementById('modalDesc').innerText = movie.desc;
    document.getElementById('modalGenre').innerText = movie.genre;
    document.getElementById('modalRating').innerText = `★ ${movie.rating}`;
    document.getElementById('modalLang').innerText = movie.lang;
    
    // Set YouTube Trailer Link
    currentTrailerLink = movie.trailer ? `https://www.youtube.com/watch?v=${movie.trailer}` : `https://www.youtube.com/results?search_query=${movie.title}+trailer`;
    
    const imgEl = document.getElementById('modalImg');
    imgEl.src = movie.imgUrl;
    imgEl.onerror = function() {
        this.onerror = null; 
        this.src = fallbackPath;
    };

    movieModal.show();
}

function watchTrailer() {
    window.open(currentTrailerLink, '_blank');
}

function addToList() {
    const toastEl = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}

// --- RECOMMENDATION GENERATION (Fake AI Loader) ---
function generateRecommendations() {
    // 1. Get Elements
    const loader = document.getElementById('ai-loader');
    const loaderText = document.getElementById('loader-text');
    const loaderBar = document.getElementById('loader-bar');
    
    // 2. Start Loading Sequence
    loader.classList.remove('d-none');
    loader.classList.add('d-flex');
    loaderBar.style.width = "10%";
    
    setTimeout(() => {
        loaderText.innerText = "Analyzing User Preferences...";
        loaderBar.style.width = "40%";
    }, 800);

    setTimeout(() => {
        loaderText.innerText = "Scanning 10,000+ Movies...";
        loaderBar.style.width = "70%";
    }, 1600);
    
    setTimeout(() => {
        loaderText.innerText = "Applying Hybrid Filtering...";
        loaderBar.style.width = "90%";
    }, 2400);

    // 3. Finish & Show Results
    setTimeout(() => {
        loader.classList.remove('d-flex');
        loader.classList.add('d-none');
        
        showSection('results-section');
        const grid = document.getElementById('movie-grid');
        grid.innerHTML = ''; 

        const selectedLang = document.getElementById('languageSelect').value;

        // FILTER LOGIC
        const filteredMovies = movies.filter(m => {
            const ratingMatch = parseFloat(m.rating) >= selectedRating;
            const langMatch = selectedLang === 'All' || m.lang === selectedLang;
            return ratingMatch && langMatch;
        });

        const displayMovies = filteredMovies.length > 0 ? filteredMovies : [];

        if(displayMovies.length === 0) {
            grid.innerHTML = `<div class="text-center text-white mt-5"><h4>No movies found!</h4><button class="btn btn-outline-light mt-3" onclick="showSection('preferences-section')">Try different filters</button></div>`;
            return;
        }

        displayMovies.forEach((movie) => {
            const originalIndex = movies.indexOf(movie); 
            const fallbackPath = `./images/${movie.id}.jpg`;
            
            const cardHTML = `
                <div class="col-md-4 col-lg-3 fade-in">
                    <div class="movie-card" onclick="openModal(${originalIndex})">
                        <div class="poster-container">
                            <img src="${movie.imgUrl}" 
                                 alt="${movie.title}" 
                                 class="card-poster"
                                 onerror="this.onerror=null; this.src='${fallbackPath}';">
                            <div class="poster-overlay">
                                <button class="btn btn-light btn-sm rounded-pill fw-bold">View Details</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title text-white mb-0 text-truncate" style="max-width: 70%;">${movie.title}</h5>
                                <span class="badge bg-warning text-dark fw-bold">★ ${movie.rating}</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                 <small class="text-secondary text-truncate" style="max-width: 70%;">${movie.genre}</small>
                                 <small class="text-muted border border-secondary px-1 rounded" style="font-size: 0.7rem;">${movie.lang}</small>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            grid.innerHTML += cardHTML;
        });
        
    }, 3000); // 3 second delay
}