import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto donde "toca" el suelo
  popupAnchor: [1, -34], // Ajuste de la posición del popup
});

const Mapa = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      let map = (mapRef.current = L.map("map").setView(
        [-34.7203, -58.2546],
        13
      ));

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/'>CARTO</a>",
          subdomains: "abcd",
        }
      ).addTo(map);

      L.marker([-34.7203, -58.2546], { icon })
        .addTo(mapRef.current)
        .bindPopup("Estoy aquí")
        .openPopup();
    }
  }, []);

  return <div id="map" style={{ height: "245px", width: "100%" }}></div>;
};

export default Mapa;
