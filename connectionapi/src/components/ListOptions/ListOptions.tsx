
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import { StyledList } from "./Styled/Style";
import ListItemComponent from "./Components/ListItemComponent";

interface ListOption{
    id: number
    img: string
    subtitle: string
    route: string
    title:string
}

const ListOptions = () => {

    const Options: ListOption[] = [
        {id:1, img:img1, route:"/Fetch", subtitle:"Consumir a API com Javascript puro", title:"Fetch"},
        {id:2, img:img2, route:"/Axios", subtitle:"Lib para ajudar a consumir API", title:"Axios"},
        {id:3, img:img3, route:"/Thunk", subtitle:"Funcionalidade do Redux toolkit", title:"CreateAsyncThunk"},
        {id:4, img:img4, route:"/RTK", subtitle:"Funcionalidade do Redux toolkit", title:"RTK"}
    ]
    
    console.log(Options);
    

  return (
    <StyledList>
        {Options.map((opt) =>(
            <ListItemComponent key={opt.id} img={opt.img} route={opt.route} subtitle={opt.subtitle} title={opt.title}/>
        ))}   
    </StyledList>
  );
};

export default ListOptions;
