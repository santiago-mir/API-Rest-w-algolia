const MAPBOX_TOKEN = "PEGAR_TU_ACCESS_TOKEN_AQUI";
const mapboxClient = new MapboxClient(MAPBOX_TOKEN);

function initMap() {
  mapboxgl.accessToken = MAPBOX_TOKEN;
  return new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
  });
}

function initSearchForm(callback) {
  const form = document.querySelector(".search-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    mapboxClient.geocodeForward(
      e.target.q.value,
      {
        country: "ar",
        autocomplete: true,
        language: "es",
      },
      function (err, data, res) {
        console.log(data);
        if (!err) callback(data.features);
      }
    );
  });
}

(function () {
  window.map = initMap();
  initSearchForm(function (results) {
    const firstResult = results[0];
    const marker = new mapboxgl.Marker()
      .setLngLat(firstResult.geometry.coordinates)
      .addTo(map);
    map.setCenter(firstResult.geometry.coordinates);
    map.setZoom(14);
  });
})();
