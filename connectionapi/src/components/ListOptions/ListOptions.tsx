
import { StyledList } from "./Styled/Style";
import ListItemComponent from "./Components/ListItemComponent";
import { Options } from "../../utils/Consts";


const ListOptions = () => {    

  return (
    <StyledList>
        {Options.map((opt) =>(
            <ListItemComponent key={opt.id} img={opt.img} route={opt.route} subtitle={opt.subtitle} title={opt.title}/>
        ))}   
    </StyledList>
  );
};

export default ListOptions;
