import { Theme } from "@radix-ui/themes";
import { ModalsProvider } from "react-mobile-modals";
import { MoodSelectorScreen } from "./screen/MoodSelectorScreen/MoodSelectorScreen";
import { AllMoodsListScreen } from "./screen/AllMoodsListScreen/AllMoodsListScreen";


function App() {
  return (
    <Theme>
      <ModalsProvider>
        <div>
          <MoodSelectorScreen />
        </div>
      </ModalsProvider>
    </Theme>
  )
}

export default App
