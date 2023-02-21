import React from "react";
import { CToast, CToastBody, CToastHeader } from '@coreui/react'


const ToastAlert = (
    <CToast>
        <CToastHeader closeButton>
            <svg
                className="rounded me-2"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
            >
                <rect width="100%" height="100%" fill="#007aff"></rect>
            </svg>
            <div className="fw-bold me-auto">Sukses!</div>
            <small>1 sec ago</small>
        </CToastHeader>
        <CToastBody>Berhasil Masuk</CToastBody>
    </CToast>
)

export default ToastAlert