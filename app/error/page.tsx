import Button from "../component/Button";
import Icon from "../component/Icon";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function ErrorTest() {
  return (
    <div className="max-w-[200px]">
      <Button label="test" />
      <Icon icon={FaHandHoldingHeart} />
    </div>
  );
}
