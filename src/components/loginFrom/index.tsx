import { LoginStyle } from "./style";

import React from "react";

import { useHistory } from "react-router-dom";

// import {useHistory} from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Header from "../header/index";

import jwt_decode from "jwt-decode";

import api from "../../services/api/api";

function LoginFrom(): JSX.Element {
  const history = useHistory();

  localStorage.clear();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    senha: yup.string().required("senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data: any) => {
    const dados = {
      email: data.name,
      password: data.senha,
    };

    // {
    //     "email": "loolacerda@gmail.com",
    //     "password": "1234"
    // }
    async function salvarToken(response:any){
      console.log(response)
        localStorage.setItem("TokenMotorsShop",response.data.token)
      const resposta:any = await jwt_decode(response.data.token)
      const id = resposta.sub
        history.push(`/home/${id}`)
    }
    
    await api
      .post("http://localhost:3005/login", dados)
      .then((response) => salvarToken(response))

      .catch((err) => {
        console.log(dados)
        // alert("ocoreu um erro");
        console.error("ops!" + err);
      });
  };

  return (
    <LoginStyle>
      <Header></Header>
      <div className="container">
        <form className="box" onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="textAjusting2">
            <span className="ajustingText1">Login</span>
          </div>
          <div className="textAjusting1">Usuario</div>
          <div className="conteiner2">
            <input
              {...register("name")}
              placeholder="name"
              className="input1"
              type="text"
            />
          </div>
          <div className="textAjusting1">Senha</div>
          <div className="conteiner2">
            <input
              {...register("senha")}
              placeholder="senha"
              className="input1"
              type="text"
            />
          </div>
          <div className="conteiner3">
            <span className="textajusting3">Esqueci minha senha</span>
          </div>
          <div className="conteiner2">
            <button className="button1">Entrar</button>
          </div>
          <div className="conteiner4">
            <span>Ainda não possui uma conta?</span>
          </div>
          <div className="conteiner2">
            <button
              onClick={() => {
                history.push("/cadastro");

              }}
              className="button2"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </LoginStyle>
  );
}

export default LoginFrom;
