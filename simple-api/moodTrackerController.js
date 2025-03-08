import { Mood } from "./MoodModel";

export function initMoodTrackerController(api) {
    api.get("/moods", async (_, res) => {
        try {
            const moods = await Mood.find().sort({ createdAt: -1 });
            res.json(moods);
        } catch (error) {
            res.status(500).json({ error: "Ошибка при получении настроений" });
        }
    });

    api.get("/moods/:moodType", async (req, res) => {
        try {
            const moodType = req.params.moodType.toLowerCase();
            const moods = await Mood.find({ mood: { $in: [moodType] }}).sort({ createdAt: -1 });
            res.json(moods);
        } catch (error) {
            res.status(500).json({ error: "Ошибка при получении настроений" });
        }
    });

    api.post("/moods", async (req, res) => {
        try {
            console.log(req.body);
            const mood = new Mood(req.body);
            await mood.save();
            res.status(201).json(mood);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}
