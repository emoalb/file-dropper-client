import React, { useEffect, useState } from "react";

const ExpireMessage = props => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
            props.setIsValid(true)
        }, props.delay);
    }, [props.delay]);

    return visible ? <div>{props.children}</div> : <div />;
};

export default ExpireMessage;