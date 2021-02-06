var mymap = L.map('mapid').setView([38.65, -90.25], 12);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(mymap);

var marker1 = L.marker([38.59453, -90.23505]).addTo(mymap);

marker1.bindPopup("<b>Jerk Soul</b><br>3108 Cherokee St, St. Louis, MO, 63118").openPopup();

var marker2 = L.marker([38.65863, -90.29701]).addTo(mymap);

marker2.bindPopup("<b>Nudo House</b><br>6105-A Delmar Blvd, St. Louis, MO, 63112").openPopup();

var marker3 = L.marker([38.62028, -90.25592]).addTo(mymap);

marker3.bindPopup("<b>Nixta</b><br>1621 Tower Grove Ave, St. Louis, MO, 63110").openPopup();

var marker4 = L.marker([38.61953, -90.25554]).addTo(mymap);

marker4.bindPopup("<b>Olio</b><br>1634 Tower Grove Ave, St. Louis, MO, 63110").openPopup();

var marker5 = L.marker([38.69947, -90.27122]).addTo(mymap);

marker5.bindPopup("<b>C&K Barbecue Restaurant</b><br>4390 Jennings Station Rd, St. Louis, MO, 63121").openPopup();
