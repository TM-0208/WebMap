// Karte initialisieren
const map = L.map('map').setView([48.137, 11.575], 13); // München als Start

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap-Mitwirkende'
}).addTo(map);

// Lade gespeicherte Marker
let savedPoints = JSON.parse(localStorage.getItem('points')) || [];
savedPoints.forEach(p => L.marker(p).addTo(map));

// Klick-Event → neuen Punkt setzen & speichern
map.on('click', function(e) {
  const coords = [e.latlng.lat, e.latlng.lng];
  L.marker(coords).addTo(map);
  savedPoints.push(coords);
  localStorage.setItem('points', JSON.stringify(savedPoints));
});
