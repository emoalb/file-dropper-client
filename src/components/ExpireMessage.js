import React, { useEffect, useState } from "react";

const ExpireMessage = props => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
           if(props.callback){
               props.callback()
           }

        }, props.delay);
    }, [props]);

    return visible ? <div>{props.children}</div> : <div />;
};

export default ExpireMessage;