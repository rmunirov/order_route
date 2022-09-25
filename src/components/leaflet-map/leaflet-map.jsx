import React from "react";
import { TileLayer } from "react-leaflet";
import { MapContainer } from "./leaflet-map.styles";
import "leaflet/dist/leaflet.css";

import RoutineMachine from "./leaflet-map-routine-machine/leaflet-map-routine-machine";

const LeafletMap = ({ start, end }) => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RoutineMachine start={start} end={end} />
        </MapContainer>
    );
};

export default LeafletMap;

