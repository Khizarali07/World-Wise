import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();
  const onclick = (evt) => {
    evt.preventDefault();
    navigate(-1);
  };

  return (
    <Button type="back" onClick={onclick}>
      &larr; Back
    </Button>
  );
}

export default BackButton;
