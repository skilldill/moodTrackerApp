import { Card, Flex, Text, Separator, Box } from "@radix-ui/themes"
import AngryPNG from "../../moodsAssets/angry.png";
import SadPNG from "../../moodsAssets/sad.png";
import NormalPNG from "../../moodsAssets/normal.png";
import HappyPNG from "../../moodsAssets/happy.png";
import VeryHappyPNG from "../../moodsAssets/veryHappy.png";

const MOODS_IMAGE_MAP = {
    "angry": AngryPNG,
    "sad": SadPNG,
    "normal": NormalPNG,
    "happy": HappyPNG,
    "very happy": VeryHappyPNG,
}

export const MoodCard = ({ value, comment }) => {
    return (
        <Card style={{ padding: "30px 20px" }}>
            <Flex gap="20px" style={{ paddingBottom: "20px" }}>
                <img height={24} width={24} src={MOODS_IMAGE_MAP[value]} alt={value} />
                <Text>{value}</Text>
            </Flex>
            <Separator size="4" />
            <Box style={{ paddingTop: "10px" }}>
                <Text>{comment}</Text>
            </Box>
        </Card>
    )
}