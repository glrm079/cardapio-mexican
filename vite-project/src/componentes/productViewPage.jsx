
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function ProductViewPage() {
  const { productView } = useContext(UserContext);

  return (
    <h1>
      {
        productView
      }
    </h1>
  );
}
