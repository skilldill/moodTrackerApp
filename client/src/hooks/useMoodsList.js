import { useEffect, useState } from "react"
import { API } from "../constants";

export const useMoodsList = () => {
    const [moods, setMoods] = useState([]);

    const fetchMoods = async () => {
        try {
            const res = await fetch(`${API}/moods`, { method: "GET" });
            const data = await res.json();
            setMoods(data);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchMoods();
    }, [])

    return {
        moods,
        fetchMoods,
    }
}
