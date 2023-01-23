

import { Link } from "react-router-dom";
import Item from "../components/Item";
function Wanted(props) {
    const wantedList = props.wanted.map((wanted) => (
      <Item item={wanted}/>
    
    ));

    return (wantedList)
  };


export default Wanted;

