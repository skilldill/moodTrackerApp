import { Flex, Text, Button, TextArea, Separator, Spinner } from "@radix-ui/themes";
import AngryPNG from "../../moodsAssets/angry.png";
import SadPNG from "../../moodsAssets/sad.png";
import NormalPNG from "../../moodsAssets/normal.png";
import HappyPNG from "../../moodsAssets/happy.png";
import VeryHappyPNG from "../../moodsAssets/veryHappy.png";
import { MoodItem } from "./MoodItem";
import { useSaveMood } from "../../hooks/useSaveMood";
import { useModals } from "react-mobile-modals";
import { AllMoodsListScreen } from "../AllMoodsListScreen/AllMoodsListScreen";


const MOODS = [
    { value: "angry", text: "Angry", imgSrc: AngryPNG },
    { value: "sad", text: "Sad", imgSrc: SadPNG },
    { value: "normal", text: "Normal", imgSrc: NormalPNG },
    { value: "happy", text: "Happy", imgSrc: HappyPNG },
    { value: "very happy", text: "Very happy", imgSrc: VeryHappyPNG },
];

export const MoodSelectorScreen = () => {
    const {
        mood,
        setMood,
        comment,
        setComment,
        saving,
        saveMood,
    } = useSaveMood();

    const { openModal } = useModals();

    const openAllMoods = () => {
        openModal({ component: <AllMoodsListScreen />, openDirection: "vertical" })
    }

    return (
        <Flex 
            direction="column" 
            className="screen"
            style={{ padding: "40px 20px" }}
            gap="30px"
        >
            <Flex direction="column">
                <Flex justify="between" style={{ padding: "10px 0px" }}>
                    <Text>Mood selector</Text>
                    <Button onClick={openAllMoods} variant="ghost">All moods</Button>
                </Flex>
                <Separator size="4" />
            </Flex>

            {MOODS.map(({ value, imgSrc, text }) => 
                <MoodItem 
                    key={value}
                    value={value}
                    text={text}
                    imgSrc={imgSrc}
                    selected={mood === value}
                    onClick={() => setMood(value)}
                />
            )}

            <TextArea 
                placeholder="Set comment..."
                size="3"
                value={comment}
                onChange={(event) => setComment(event.currentTarget.value)}
            />
            
            {saving ? (
                <Flex justify="center">
                    <Spinner />
                </Flex>
            ) : (
                <Button variant="soft" size="4" onClick={saveMood}>
                    Save mood
                </Button>
            )}
            
        </Flex>
    );
}