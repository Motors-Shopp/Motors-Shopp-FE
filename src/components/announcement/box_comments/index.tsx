// import { comments } from "../comments";
import Comment from "./comment";
import { ContentComments } from "./style";

import { useEffect,useState } from "react";

import api from "../../../services/api/api";

// import jwt_decode from "jwt-decode";

function Comments(): JSX.Element {

  const [ListaDeComentarios, setListaDeComentarios] = useState<any>([]);

  useEffect(() => {

    // const token:any = localStorage.getItem("TokenMotorsShop");

    // const decode:any = jwt_decode(token)

    api
    .get(`http://localhost:3005/comments/`)
    .then((response) => setListaDeComentarios(response.data))
    .catch((err) => {
      // alert("ocoreu um erro");
      console.error("ops!" + err);
    });

    // const filtro:any = ListaDeComentarios.filter(iten => iten.id === decode.sub);

    // api
    // .get(`http://localhost:3005/users/${decode.sub}`)
    // .then((response) => setuser(response.data))
    // .catch((err) => {
    //   // alert("ocoreu um erro");
    //   console.error("ops!" + err);
    // });
    
  },[]);

  // console.log(ListaDeComentarios)


  return (
    <ContentComments>
      <h4>Comentários</h4>
      {ListaDeComentarios.map((cmt:any) => (
        <Comment
          key={cmt.id}
          name={cmt.user.name}
          img={"sem foto de usuario"}
          date={cmt.date}
          text={cmt.comment}
        />
      ))}
    </ContentComments>
  );
}

export default Comments;
