// Data film (contoh)
const movies = [ // Array berisi daftar objek film dengan atribut seperti judul, genre, tahun, rating, dan URL gambar
    { "title": "The Shawshank Redemption", "genre": "Drama", "year": 1994, "rating": 9.3, "image": "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg" },
    { "title": "The Dark Knight", "genre": "Action", "year": 2008, "rating": 9.0, "image": "https://via.placeholder.com/100x150?text=The+Dark+Knight" },
    { "title": "The Godfather Part II", "genre": "Crime", "year": 1974, "rating": 9.0, "image": "https://via.placeholder.com/100x150?text=The+Godfather+Part+II" },
    { "title": "12 Angry Men", "genre": "Drama", "year": 1957, "rating": 9.0, "image": "https://via.placeholder.com/100x150?text=12+Angry+Men" },
    { "title": "Schindler's List", "genre": "Biography", "year": 1993, "rating": 8.9, "image": "https://via.placeholder.com/100x150?text=Schindler%27s+List" },
    { "title": "The Lord of the Rings: The Return of the King", "genre": "Adventure", "year": 2003, "rating": 8.9, "image": "https://via.placeholder.com/100x150?text=The+Return+of+the+King" },
    { "title": "Pulp Fiction", "genre": "Crime", "year": 1994, "rating": 8.9, "image": "https://via.placeholder.com/100x150?text=Pulp+Fiction" },
    { "title": "The Lord of the Rings: The Fellowship of the Ring", "genre": "Adventure", "year": 2001, "rating": 8.8, "image": "https://via.placeholder.com/100x150?text=The+Fellowship+of+the+Ring" },
    { "title": "The Good, the Bad and the Ugly", "genre": "Western", "year": 1966, "rating": 8.8, "image": "https://via.placeholder.com/100x150?text=The+Good+Bad+Ugly" },
    { "title": "Forrest Gump", "genre": "Drama", "year": 1994, "rating": 8.8, "image": "https://via.placeholder.com/100x150?text=Forrest+Gump" },
    { "title": "Fight Club", "genre": "Drama", "year": 1999, "rating": 8.7, "image": "https://via.placeholder.com/100x150?text=Fight+Club" },
    { "title": "Inception", "genre": "Sci-Fi", "year": 2010, "rating": 8.7, "image": "https://via.placeholder.com/100x150?text=Inception" },
    { "title": "The Lord of the Rings: The Two Towers", "genre": "Adventure", "year": 2002, "rating": 8.7, "image": "https://via.placeholder.com/100x150?text=The+Two+Towers" },
    { "title": "Star Wars: Episode V - The Empire Strikes Back", "genre": "Action", "year": 1980, "rating": 8.7, "image": "https://via.placeholder.com/100x150?text=The+Empire+Strikes+Back" },
    { "title": "The Matrix", "genre": "Sci-Fi", "year": 1999, "rating": 8.7, "image": "https://via.placeholder.com/100x150?text=The+Matrix" },
    { "title": "Goodfellas", "genre": "Biography", "year": 1990, "rating": 8.7, "image": "https://via.placeholder.com/100x150?text=Goodfellas" },
    { "title": "One Flew Over the Cuckoo's Nest", "genre": "Drama", "year": 1975, "rating": 8.6, "image": "https://via.placeholder.com/100x150?text=One+Flew+Over+the+Cuckoo%27s+Nest" },
    { "title": "Se7en", "genre": "Crime", "year": 1995, "rating": 8.6, "image": "https://via.placeholder.com/100x150?text=Se7en" },
    { "title": "Seven Samurai", "genre": "Adventure", "year": 1954, "rating": 8.6, "image": "https://via.placeholder.com/100x150?text=Seven+Samurai" },
    { "title": "It's a Wonderful Life", "genre": "Drama", "year": 1946, "rating": 8.6, "image": "https://via.placeholder.com/100x150?text=It%27s+a+Wonderful+Life" },
    { "title": "The Silence of the Lambs", "genre": "Crime", "year": 1991, "rating": 8.6, "image": "https://via.placeholder.com/100x150?text=The+Silence+of+the+Lambs" },
    { "title": "Saving Private Ryan", "genre": "Drama", "year": 1998, "rating": 8.6, "image": "https://via.placeholder.com/100x150?text=Saving+Private+Ryan" },
    { "title": "City of God", "genre": "Crime", "year": 2002, "rating": 8.6, "image": "https://via.placeholder.com/100x150?text=City+of+God" },
    { "title": "Interstellar", "genre": "Adventure", "year": 2014, "rating": 8.6, "image": "https://via.placeholder.com/100x150?text=Interstellar" },
    { "title": "Life Is Beautiful", "genre": "Comedy", "year": 1997, "rating": 8.6, "image": "https://via.placeholder.com/100x150?text=Life+Is+Beautiful" },
    { "title": "Spirited Away", "genre": "Animation", "year": 2001, "rating": 8.6, "image": "https://via.placeholder.com/100x150?text=Spirited+Away" },
    { "title": "The Green Mile", "genre": "Drama", "year": 1999, "rating": 8.6, "image": "https://via.placeholder.com/100x150?text=The+Green+Mile" },
    { "title": "Parasite", "genre": "Thriller", "year": 2019, "rating": 8.6, "image": "https://via.placeholder.com/100x150?text=Parasite" },
    { "title": "Joker", "genre": "Crime", "year": 2019, "rating": 8.5, "image": "https://via.placeholder.com/100x150?text=Joker" },
    { "title": "Avengers: Endgame", "genre": "Action", "year": 2019, "rating": 8.4, "image": "https://via.placeholder.com/100x150?text=Avengers+Endgame" },
    { "title": "Whiplash", "genre": "Drama", "year": 2014, "rating": 8.5, "image": "https://via.placeholder.com/100x150?text=Whiplash" },
    { "title": "The Prestige", "genre": "Drama", "year": 2006, "rating": 8.5, "image": "https://via.placeholder.com/100x150?text=The+Prestige" },
    { "title": "The Lion King", "genre": "Animation", "year": 1994, "rating": 8.5, "image": "https://via.placeholder.com/100x150?text=The+Lion+King" },
    { "title": "Gladiator", "genre": "Action", "year": 2000, "rating": 8.5, "image": "https://via.placeholder.com/100x150?text=Gladiator" },
    { "title": "Memento", "genre": "Mystery", "year": 2000, "rating": 8.5, "image": "https://via.placeholder.com/100x150?text=Memento" },
    { "title": "The Departed", "genre": "Crime", "year": 2006, "rating": 8.5, "image": "https://via.placeholder.com/100x150?text=The+Departed" },
    { "title": "The Pianist", "genre": "Biography", "year": 2002, "rating": 8.5, "image": "https://via.placeholder.com/100x150?text=The+Pianist" },
    { "title": "WALL-E", "genre": "Animation", "year": 2008, "rating": 8.5, "image": "https://via.placeholder.com/100x150?text=WALL-E" },
    { "title": "Coco", "genre": "Animation", "year": 2017, "rating": 8.4, "image": "https://via.placeholder.com/100x150?text=Coco" },
    { "title": "Braveheart", "genre": "Biography", "year": 1995, "rating": 8.4, "image": "https://via.placeholder.com/100x150?text=Braveheart" },
    { "title": "Amadeus", "genre": "Biography", "year": 1984, "rating": 8.4, "image": "https://via.placeholder.com/100x150?text=Amadeus" }
];

// Fungsi untuk menampilkan hasil
function displayMovies(movieList) { // Fungsi untuk menampilkan daftar film yang diterima sebagai parameter
    const resultDiv = document.getElementById("result"); // Ambil elemen div dengan ID 'result'
    resultDiv.innerHTML = ""; // Bersihkan konten sebelumnya di dalam div 'result'

    movieList.forEach(movie => { // Iterasi setiap objek film di dalam daftar
        const movieDiv = document.createElement("div"); // Buat elemen div baru untuk setiap film
        movieDiv.classList.add("movie"); // Tambahkan kelas CSS 'movie' ke div

        movieDiv.innerHTML = ` 
            <img src="${movie.image}" alt="${movie.title}" /> <!-- Tambahkan gambar film -->
            <div class="details"> <!-- Div untuk detail film -->
                <h2>${movie.title}</h2> <!-- Judul film -->
                <p>Genre: ${movie.genre}</p> <!-- Genre film -->
                <p>Tahun: ${movie.year}</p> <!-- Tahun rilis film -->
                <p>Rating: ${movie.rating}</p> <!-- Rating film -->
            </div>
        `;

        resultDiv.appendChild(movieDiv); // Tambahkan elemen div film ke dalam div 'result'
    });
}

// Inisialisasi tampilan awal
displayMovies(movies); // Panggil fungsi untuk menampilkan semua film saat halaman dimuat

// Fungsi pencarian (algoritma searching)
document.getElementById("searchForm").addEventListener("submit", function (e) { // Tambahkan event listener untuk form pencarian
    e.preventDefault(); // Cegah form mengirimkan data dan me-refresh halaman
    const query = document.getElementById("search").value.toLowerCase(); // Ambil nilai input pencarian dan ubah ke huruf kecil
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query)); // Filter film berdasarkan kecocokan dengan input pencarian
    displayMovies(filteredMovies); // Tampilkan film yang cocok dengan pencarian
});

// Fungsi pengurutan (algoritma sorting)
document.getElementById("sortForm").addEventListener("submit", function (e) { // Tambahkan event listener untuk form pengurutan
    e.preventDefault(); // Cegah form mengirimkan data dan me-refresh halaman
    const sortBy = document.getElementById("sort").value; // Ambil nilai dropdown untuk kriteria pengurutan

    let sortedMovies; // Variabel untuk menyimpan hasil pengurutan
    if (sortBy === "rating") { // Jika kriteria adalah rating
        sortedMovies = [...movies].sort((a, b) => b.rating - a.rating); // Urutkan film berdasarkan rating secara menurun
    } else if (sortBy === "genre") { // Jika kriteria adalah genre
        sortedMovies = [...movies].sort((a, b) => a.genre.localeCompare(b.genre)); // Urutkan film berdasarkan genre secara alfabetis
    } else if (sortBy === "year") { // Jika kriteria adalah tahun
        sortedMovies = [...movies].sort((a, b) => b.year - a.year); // Urutkan film berdasarkan tahun secara menurun
    }

    displayMovies(sortedMovies); // Tampilkan hasil pengurutan
});

