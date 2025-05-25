import "./Search.css";
import { setLocation } from "../../store/features/ApiDataSlice";
import { useDispatch } from "react-redux";

export default function Search() {
  const dispatch = useDispatch();
  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setLocation(e.target.elements.cityInput.value));
      }}
    >
      <input name="cityInput" />
      <button type="submit">submit</button>
    </form>
  );
}
