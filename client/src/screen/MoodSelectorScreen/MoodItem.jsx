import { Card, Flex, Text } from "@radix-ui/themes"

export const MoodItem = ({ value, text, imgSrc, onClick, selected }) => {
    const handleClick = () => {
        onClick(value);
    }
    
    return (
        <Card 
            onClick={handleClick}
            style={{ backgroundColor: selected && "#e2f1fe", padding: "30px 20px" }}
        >
            <Flex gap="20px">
                <img height={24} width={24} src={imgSrc} alt={value} />
                <Text>{text}</Text>
            </Flex>
        </Card>
    )
}