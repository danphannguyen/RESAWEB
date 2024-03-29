document.addEventListener("DOMContentLoaded", function () {
    
    // définition des coordonnées de la map ainsi que de son zoom
    var map = L.map('map').setView([47, 2], 4);

    // définition de la postion d'un marqueur
    var markerParis = L.marker([48.86, 2.3], { alt: 'Paris' }).addTo(map);
    // définition de son popup avec sa position ainsi que sa forme HTML
    var popupParis = L.popup([48.86, 2.3], { content: '<img src="IMG/popupStore1.webp" alt=""><h3>Horizon Paris</h3><p>12 rue Halévy 75009 Paris</p><div class="selectButton"><input class="radio" type="radio" name="location" id="radio1" value="Paris" onclick="selectMap()" required><label for="radio1">select</label><div class="border full-rounded"></div></div>', className: 'popupText' });
    // Lien entre le marqueur et le popup
    markerParis.bindPopup(popupParis);

    var markerLondon = L.marker([51.50, -0.12], { alt: 'London' }).addTo(map);
    var popupLondon = L.popup([51.50, -0.12], { content: '<img src="IMG/popupStore2.webp" alt=""><h3>Horizon London</h3><p>235 Regent Street, London W1B 2EL</p><div class="selectButton"><input class="radio" type="radio" name="location" id="radio2" value="London" onclick="selectMap()" required><label for="radio2">select</label><div class="border full-rounded"></div></div>', className: 'popupText' });
    markerLondon.bindPopup(popupLondon);

    var markerBerlin = L.marker([52.51, 13.38], { alt: 'Berlin' }).addTo(map);
    var popupBerlin = L.popup([52.51, 13.38], { content: '<img src="IMG/popupStore3.webp" alt=""><h3>Horizon Berlin</h3><p>Kurfürstendamm 26, 10719 Berlin</p><div class="selectButton"><input class="radio" type="radio" name="location" id="radio3" value="Berlin" onclick="selectMap()" required><label for="radio3">select</label><div class="border full-rounded"></div></div>', className: 'popupText' });
    markerBerlin.bindPopup(popupBerlin);

    var markerMadrid = L.marker([40.41, -3.70], { alt: 'Madrid' }).addTo(map);
    var popupMadrid = L.popup([40.41, -3.70], { content: '<img src="IMG/popupStore4.webp" alt=""><h3>Horizon Madrid</h3><p>Prta del Sol, 1, 28013 Madrid</p><div class="selectButton"><input class="radio" type="radio" name="location" id="radio4" value="Madrid" onclick="selectMap()" required><label for="radio4">select</label><div class="border full-rounded"></div></div>', className: 'popupText' });
    markerMadrid.bindPopup(popupMadrid);

    var markerBruxelles = L.marker([50.84, 4.35], { alt: 'Bruxelles' }).addTo(map);
    var popupBruxelles = L.popup([50.84, 4.35], { content: '<img src="IMG/popupStore5.webp" alt=""><h3>Horizon Bruxelles</h3><p>Av. de la Toison Or 2628, 1050 Bruxelles</p><div class="selectButton"><input class="radio" type="radio" name="location" id="radio5" value="Bruxelles" onclick="selectMap()" required><label for="radio5">select</label><div class="border full-rounded"></div></div>', className: 'popupText' });
    markerBruxelles.bindPopup(popupBruxelles);

    var markerBerne = L.marker([46.94, 7.45], { alt: 'Berne' }).addTo(map);
    var popupBerne = L.popup([46.94, 7.45], { content: '<img src="IMG/popupStore6.webp" alt=""><h3>Horizon Berne</h3><p>Marktgasse 60, 3011 Bern</p><div class="selectButton"><input class="radio" type="radio" name="location" id="radio6" value="Berne" onclick="selectMap()" required><label for="radio6">select</label><div class="border full-rounded"></div></div>', className: 'popupText' });
    markerBerne.bindPopup(popupBerne);

    var markerRome = L.marker([41.89, 12.48], { alt: 'Rome' }).addTo(map);
    var popupRome = L.popup([41.89, 12.48], { content: '<img src="IMG/popupStore7.webp" alt=""><h3>Horizon Rome</h3><p>Via del Corso, 181-188, 00186 Roma RM</p><div class="selectButton"><input class="radio" type="radio" name="location" id="radio7" value="Rome" onclick="selectMap()" required><label for="radio7">select</label><div class="border full-rounded"></div></div>', className: 'popupText' });
    markerRome.bindPopup(popupRome);

    // Style de la map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    // ajout de la fonction de recherche
    var geocoder = L.Control.geocoder({
        defaultMarkGeocode: false
    })
        .on('markgeocode', function (e) {
            var bbox = e.geocode.bbox;
            var poly = L.polygon([
                bbox.getSouthEast(),
                bbox.getNorthEast(),
                bbox.getNorthWest(),
                bbox.getSouthWest()
            ]).addTo(map);
            map.fitBounds(poly.getBounds());
        })
        .addTo(map);

})

