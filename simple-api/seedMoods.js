import { Mood } from "./MoodModel.js";

const MOCK_MOODS = [
    { mood: "happy", comment: "Отличный день!", createdAt: "2024-02-29" },
    { mood: "normal", comment: "Ничего особенного", createdAt: "2024-02-29" },
    { mood: "normal", comment: "Обычный день.", createdAt: "2024-02-29" },
    { mood: "very happy", comment: "Все супер!", createdAt: "2024-02-28" },
    { mood: "normal", comment: "", createdAt: "2024-02-28" },
    { mood: "angry", comment: "Задержали заказ", createdAt: "2024-02-27" },
    { mood: "normal", comment: "Просто день", createdAt: "2024-02-27" },
    { mood: "happy", comment: "Хорошая погода", createdAt: "2024-02-26" },
    { mood: "very happy", comment: "Долгожданная встреча!", createdAt: "2024-02-26" },
    { mood: "sad", comment: "Не хватило времени на отдых", createdAt: "2024-02-25" },
    { mood: "angry", comment: "Задержка рейса", createdAt: "2024-02-25" },
    { mood: "happy", comment: "Погулял с друзьями", createdAt: "2024-02-24" },
    { mood: "normal", comment: "", createdAt: "2024-02-24" },
    { mood: "very happy", comment: "Выходной!", createdAt: "2024-02-23" },
    { mood: "happy", comment: "", createdAt: "2024-02-23" }
];

export const seedMoods = async () => {
    await Mood.deleteMany();
    console.log("Коллекция очищена");

    try {
        await Mood.insertMany(MOCK_MOODS);
    } catch (error) {
        console.error(error);
    }
}
