// Modal.js

import React from "react";
import {IPopap} from "../../structs/IPopap";

const Modal = (props:IPopap) => {
    if (!props.isOpen) return null;

    return (
        <div
            onClick={props.onClose}
    style={{
        position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
    }}
>
    <div
        style={{
        background: "white",
            height: 150,
            width: 240,
            margin: "auto",
            padding: "2%",
            border: "2px solid #000",
            borderRadius: "10px",
            boxShadow: "2px solid black",
    }}
>
    {props.children}
    </div>
    </div>
);
};

export default Modal;
