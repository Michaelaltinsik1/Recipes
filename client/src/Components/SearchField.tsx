import { useState } from "react";
import searchIcon from "../images/searchIcon.svg";

const SearchField = ({ updateSearchParams }: any) => {
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
          if (inputState) {
            handleClick();
          }
        }}
      >
        <img src={searchIcon} alt="Search icon" width={20} height={20} />
      </button>
    </form>
  );
  function updateState(data: any) {
    setInput(data);
  }
  function handleKeyPress(key: any) {
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
