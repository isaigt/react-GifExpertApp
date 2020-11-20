import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = ( categoria ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs( categoria ).then( imgs => {
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                });
            }, 1500);
        });
    }, [ categoria ]);

    return state;
}