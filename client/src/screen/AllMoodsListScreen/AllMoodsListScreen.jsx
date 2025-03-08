import { Flex, Text, Button, Separator } from "@radix-ui/themes";
import { useModals } from "react-mobile-modals";
import { useMoodsList } from "../../hooks/useMoodsList";
import { MoodCard } from "./MoodCard";


export const AllMoodsListScreen = () => {
    const { moods } = useMoodsList();
    const { closeModal } = useModals();

    return (
        <Flex 
            direction="column" 
            className="screen"
            style={{ padding: "40px 20px" }}
            gap="30px"
        >
            <Flex direction="column">
                <Flex justify="between" style={{ padding: "10px 0px" }}>
                    <Text>All moods</Text>
                    <Button onClick={closeModal} variant="ghost">Close</Button>
                </Flex>
                <Separator size="4" />
            </Flex>

            <div style={{ height: '100vh', overflow: 'auto' }}>
                <Flex gap="20px" direction="column">
                    {moods.map(({ id, mood, comment }) => 
                        <MoodCard 
                            key={id}
                            value={mood}
                            comment={comment}
                        />
                    )}
                </Flex>
            </div>
        </Flex>
    );
}