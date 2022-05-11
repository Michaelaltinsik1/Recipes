import { useState } from "react";
import searchIcon from "../images/searchIcon.svg";

interface SearchFieldType {
  updateSearchParams: Function;
}

const SearchField = ({ updateSearchParams }: SearchFieldType) => {
  const [inputState, setInput] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();
  return (
    <form>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => updateState(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e.key)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <img src={searchIcon} alt="Search icon" width={20} height={20} />
      </button>
    </form>
  );
  function updateState(data: string) {
    setInput(data);
  }
  function handleKeyPress(key: string) {
    if (key === "Enter") {
      if (inputState) {
        //setSearchParams({ search: inputState });
        updateSearchParams(inputState);
      }
    }
  }
  function handleClick() {
    updateSearchParams(inputState);
  }
};

export default SearchField;
