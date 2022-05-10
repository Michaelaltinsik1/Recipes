interface InstructionType {
  instruction: string;
}
const Instruction = ({ instruction }: InstructionType) => {
  return <li>{instruction}</li>;
};

export default Instruction;
