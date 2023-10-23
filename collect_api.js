async function ambilDataDariAPI() {
    try {
        const response = await fetch('https://us-central1-gis-tester-401506.cloudfunctions.net/let-load');
        const data = await response.text();
        hasil.innerHTML = `<p>${data}</p>`;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        hasil.innerHTML = '<p>Terjadi kesalahan saat mengambil data dari API.</p>';
    }
}
button.addEventListener('click', ambilDataDariAPI);
