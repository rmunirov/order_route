import React, { useState, useEffect, useRef } from "react";
import { DataTable, LeafletMap } from "../../components";
import { Wrapper, TableContainer, MapContainer, DragContainer } from "./main.styles";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../__data__/slices/order";

const MainPage = () => {
    const [start, setStart] = useState([]);
    const [end, setEnd] = useState([]);
    const [tableContainerInitPos, setTableContainerInitPos] = useState(null);
    const [tableContainerInitSize, setTableContainerInitSize] = useState(null);

    const tableContainerRef = useRef(null);

    const init = (event) => {
        setTableContainerInitPos(event.clientX);
        setTableContainerInitSize(tableContainerRef.current.offsetWidth);
    };

    const resize = (event) => {
        tableContainerRef.current.style.width = `${parseInt(tableContainerInitSize) + parseInt(event.clientX - tableContainerInitPos)}px`;
    };

    const dispatch = useDispatch();

    const id = useSelector((state) => state.order.activeOrderId);

    const orders = useSelector((store) => store.order.orders);

    const destinations = useSelector((store) => store.order.destinations);

    const handleIdChange = (id) => {
        dispatch(actions.changeActiveOrderId(id));
    };

    useEffect(() => {
        const order = orders.find((item) => item.id === id);
        if (order) {
            const from = destinations.find((item) => item.id === order.from);
            const to = destinations.find((item) => item.id === order.to);
            setStart(from.position);
            setEnd(to.position);
        }
    }, [id, orders]);

    return (
        <Wrapper>
            <TableContainer ref={tableContainerRef} needScroll>
                <DataTable orders={orders} onChange={handleIdChange} />
            </TableContainer>
            <DragContainer draggable onDragStart={init} onDrag={resize} />
            <MapContainer>
                <LeafletMap start={start} end={end} />
            </MapContainer>
        </Wrapper>
    );
};

export default MainPage;
