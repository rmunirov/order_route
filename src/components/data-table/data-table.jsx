import React, { useState } from "react";
import DataTableRow from "./data-table-row/data-table-row";
import { TableHeader, Row, Table, Wrapper, HeaderCell, TableBody } from "./data-table.styles";

const DataTable = ({ orders, onChange }) => {
    const [activeId, setActiveId] = useState(0);

    const handleRowClick = (id) => {
        setActiveId(id);
        onChange(id);
    };

    if (!orders) {
        return <></>;
    }

    return (
        <Wrapper>
            <Table>
                <TableHeader>
                    <Row>
                        <HeaderCell>Наименование</HeaderCell>
                        <HeaderCell>Погрузка</HeaderCell>
                        <HeaderCell>Разгрузка</HeaderCell>
                    </Row>
                </TableHeader>
                <TableBody>
                    {orders.map((item) => {
                        return <DataTableRow key={item.title} order={item} isActive={activeId === item.id} onClick={handleRowClick} />;
                    })}
                </TableBody>
            </Table>
        </Wrapper>
    );
};

export default DataTable;
