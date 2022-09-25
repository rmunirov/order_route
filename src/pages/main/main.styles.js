import styled from "@emotion/styled";

export const Wrapper = styled("div")`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    margin: 0 auto;
    min-width: 100%;
    min-height: 100%;
`;

export const TableContainer = styled("div")`
    display: flex;
    padding: 5px;
    overflow-x: ${(props) => (props.needScroll ? "scroll" : "hidden")};
    align-self: start;
`;

export const MapContainer = styled("div")`
    display: flex;
    padding: 5px;
    height: 100%;
`;

export const DragContainer = styled("div")`
    display: flex;
    width: 3px;
    cursor: col-resize;
    border: 1px solid grey;
    opacity: 10%;
`;
