import React, { useState, useRef, useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

const RoutineMachine = ({ start, end }) => {
    const map = useMap();
    const [routingMachine, setRoutingMachine] = useState(null);

    const routingMachineRef = useRef(null);

    useEffect(() => {
        routingMachineRef.current = L.Routing.control({
            lineOptions: {
                styles: [{ color: "#757de8", weight: 4 }],
            },
            plan: new L.Routing.Plan([start, end], {
                createMarker: (waypointIndex, waypoint, numberOfWaypoints) => {
                    const marker = L.marker(waypoint.latLng, {
                        icon: L.icon({
                            iconUrl: markerIcon,
                            shadowUrl: markerShadow,
                            iconAnchor:[10, 40],
                        }),
                    });
                    return marker;
                },
            }),
            show: false,
            addWaypoints: false,
            routeWhileDragging: true,
            fitSelectedRoutes: true,
            showAlternatives: false,
        });
        setRoutingMachine(routingMachineRef.current);
    }, [map]);

    useEffect(() => {
        if (routingMachine) {
            routingMachine.addTo(map);
            routingMachine.setWaypoints([start, end]);
        }
    }, [routingMachine, start, end]);

    return <></>;
};

export default RoutineMachine;

// const createRoutineMachineLayer = () => {
//     const instance = L.Routing.control({
//         lineOptions: {
//             styles: [{ color: "blue", weight: 4 }],
//         },
//         plan: new L.Routing.Plan([L.latLng(51.505, -0.09), L.latLng(51.505, -0.08)], {
//             createMarker: (waypointIndex, waypoint, numberOfWaypoints) => {
//                 const marker = L.marker(waypoint.latLng, {
//                     icon: L.icon({
//                         iconUrl: markerIcon,
//                         shadowUrl: markerShadow,
//                     }),
//                 });
//                 return marker;
//             },
//         }),
//         show: false,
//         addWaypoints: false,
//         routeWhileDragging: true,
//         fitSelectedRoutes: true,
//         showAlternatives: false,
//     });

//     return instance;
// };

// const RoutineMachine = createControlComponent(createRoutineMachineLayer);

// export default RoutineMachine;
