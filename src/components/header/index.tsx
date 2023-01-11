import { StyleHeader } from "./style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import {useHistory} from "react-router-dom";

// import jwt_decode from "jwt-decode";

import api from "../../services/api/api";

function Header(): any {

  const [checkLogado, setCheckLogado] = useState(false);
  const [listaUsers, setlistaUsers] = useState<any>([]);

  const history =  useHistory()
  const params:any = useParams()


  // async function consumirApiUser(){
  //   await api
  //     .get(`http://localhost:3005/users/${params.id}`)
  //     .then((response) => setlistaUsers(response.data))
  //     .catch((err) => {
  //       // alert("ocoreu um erro");
  //       console.error("ops!" + err);
  //     });
  // }

  useEffect(() => {

    const token = localStorage.getItem("TokenMotorsShop");

    if (token) {
      setCheckLogado(true);

      api
      .get(`http://localhost:3005/users/${params.id}`)
      .then((response) => setlistaUsers(response.data))
      .catch((err) => {
        // alert("ocoreu um erro");
        console.error("ops!" + err);

      });
  }
    
  },[params]);
  
  if (checkLogado === false) {
    return (
      <StyleHeader>
        <header>
          <div className="logo">
            <div>Motors</div>
            <div className="logoShop">shop</div>
          </div>
          <div className="headersCategorysAndUsername">
            <div className="categorys">
              <p>Carros</p>
              <p>Motos</p>
              <p>Leilão</p>
            </div>
            <div className="usersnameInternal2Semlogin">
                <div onClick={()=>{history.push("/")}} className="textAjusting01Semlogin">Fazer Login</div>
                <button onClick={()=>{history.push("/cadastro")}} className="buttonSemlogin01">Cadastrar</button>
            </div>
          </div>
          {/* mobile */}
          <div className="mobileMenu">
            <span>☰</span>
          </div>
        </header>
      </StyleHeader>
    )}
    else{

      if(listaUsers){

        // console.log(listaUsers.name)

        return (
          <StyleHeader>
            <header>
              <div className="logo">
                <div>Motors</div>
                <div className="logoShop">shop</div>
              </div>
      
              <div className="headersCategorysAndUsername">
                <div className="categorys">
                  <p>Carros</p>
                  <p>Motos</p>
                  <p>Leilão</p>
                </div>
                <div className="usersname">
                    <img
                      className="imgProfile"
                      alt={"produto.name"}
                      src={
                        "https://s2.glbimg.com/s5qbLhszZPNbfGmtPpqVEs65E6g=/0x0:1980x1121/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/N/p/VM7L3XRr2LKluhDgfJqg/fiatpulse-frontal.jpeg"
                      }
                    ></img>
                    <p>{listaUsers.name}</p>
                </div>
              </div>
              {/* mobile */}
              <div className="mobileMenu">
                <span>☰</span>
              </div>
            </header>
            {/* <div>
                  fdfsd
              </div> */}
          </StyleHeader>
        );
        
      }


     

    }

 
}

export default Header;
