'use client'
import Render from "@/components/Render";
import {useEffect, useState} from "react";

export default function Preview() {

    const [json, setJson] = useState({})

    useEffect(() => {

        window.addEventListener('message', (event) => {
            if (event?.data?.json) {
                setJson(event.data.json);
            }
        });

    }, []);

    return (
        <Render json={json}/>
    );
}
