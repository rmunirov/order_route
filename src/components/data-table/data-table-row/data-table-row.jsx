import React from "react";
import DataTableRowItem from "./data-table-row-item/data-table-row-item";
import { Row } from "./data-table-row.styles";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../__data__/slices/order";

const DataTableRow = ({ order, onClick, isActive }) => {
    const dispatch = useDispatch();

    const destinations = useSelector((state) => state.order.destinations);

    const from = destinations?.find((item) => item.id === order?.from);

    const to = destinations?.find((item) => item.id === order?.to);

    const handleClick = () => {
        onClick(order.id);
    };

    const handleDestinationFromChange = (newID) => {
        dispatch(actions.updateOrderFrom({ order: order.id, destination: Number(newID) }));
    };

    const handleDestinationToChange = (newID) => {
        dispatch(actions.updateOrderTo({ order: order.id, destination: Number(newID) }));
    };

    if (!order) {
        return <></>;
    }

    return (
        <Row onClick={handleClick} isActive={isActive}>
            <DataTableRowItem title={order.title} />
            <DataTableRowItem
                title={order.from.title}
                destination={from}
                withSelect
                options={destinations}
                onChange={handleDestinationFromChange}
            />
            <DataTableRowItem
                title={order.to.title}
                destination={to}
                withSelect
                options={destinations}
                onChange={handleDestinationToChange}
            />
        </Row>
    );
};

export default DataTableRow;
