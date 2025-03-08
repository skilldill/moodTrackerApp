import { useState } from "react"
import { API } from "../constants";

export const useSaveMood = () => {
    const [mood, setMood] = useState();
    const [comment, setComment] = useState('');
    const [saving, setSaving] = useState(false);

    const saveMood = async () => {
        if (!mood) return;

        setSaving(true);

        const body = {
            mood,
            comment,
        }

        try {
            await fetch(`${API}/moods`, 
                {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                }
            );

            setMood(undefined);
            setComment('');
        } catch(error) {
            console.error(error);
        } finally {
            setSaving(false);
        }
    }

    return {
        mood,
        setMood,
        comment,
        setComment,
        saving,
        saveMood,
    }
}