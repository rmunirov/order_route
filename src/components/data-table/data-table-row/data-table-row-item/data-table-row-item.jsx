import React, { useEffect, useState } from "react";
import { Option, Select, Wrapper } from "./data-table-row-item.styles";

const DataTableRowItem = ({ title, destination, withSelect, options, onChange }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (destination) {
            setValue(destination.id);
        }
    }, []);

    const handleChange = ({ target }) => {
        setValue(target.value);
        onChange(target.value);
    };

    if (!withSelect) {
        return <Wrapper>{title}</Wrapper>;
    }

    return (
        <Wrapper>
            {withSelect && options && (
                <Select value={value} onChange={handleChange}>
                    {options.map((item) => {
                        return (
                            <Option key={item.title} value={item.id}>
                                {item.title}
                            </Option>
                        );
                    })}
                </Select>
            )}
        </Wrapper>
    );
};

export default DataTableRowItem;
