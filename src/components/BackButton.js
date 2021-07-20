import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const BackButton = () => (
  <div className="back">
    <Link to="/blog"><KeyboardBackspaceIcon className="mx-1"/>Back</Link>
  </div>
);

export default BackButton;
