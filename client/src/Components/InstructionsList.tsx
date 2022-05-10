import Instruction from "./Instruction";

interface InstructionsType {
  instructions?: [{ instruction: string; prio: number }];
}
interface InstructionType {
  instruction: string;
  prio: number;
}
const InstructionsList = ({ instructions }: InstructionsType) => {
  if (instructions) {
    let sortedInstructions = instructions.sort(sortByPrioAscending);

    return (
      <ol>
        {sortedInstructions.map((instruction: InstructionType) => (
          // <Ingredient ingredient={ingredient.ingredient} />
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
