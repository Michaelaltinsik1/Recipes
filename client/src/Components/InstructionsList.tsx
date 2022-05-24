import Instruction from "./Instruction";
import { useAppSelector } from "../App/hooks";
import { RecipeType } from "../types/RecipeType";

interface InstructionType {
  instruction: string;
  prio: number;
}
const InstructionsList = () => {
  const recipe = useAppSelector<RecipeType | null>(
    (state) => state.recipes.singleRecipe
  );
  if (recipe) {
    let temp = [...recipe.instructions];
    let sortedInstructions = temp.sort(sortByPrioAscending);
    return (
      <ol>
        {sortedInstructions.map((instruction: InstructionType) => (
          <Instruction
            key={instruction.prio}
            instruction={instruction.instruction}
          />
        ))}
      </ol>
    );
  } else {
    return <h2>No instructions found</h2>;
  }
  function sortByPrioAscending(a: any, b: any) {
    if (a.prio < b.prio) {
      return -1;
    }
    if (a.prio > b.prio) {
      return 1;
    }
    return 0;
  }
};

export default InstructionsList;
