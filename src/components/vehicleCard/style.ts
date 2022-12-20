import styled  from "styled-components";

// import { GlobalStyle } from "../../styles/global";


export const Card = styled.div`

/* .card{
    background-color: aqua;
} */

.imgCard{
    /* background-color: #495057; */
    background-color:#e9ecef;
    width: 240px;
    height: 110px;
}

.imgCarro{
    background-color:#e9ecef;
    width: 220px;
    height: 110px;
    display: flex;
    justify-content:center;
    margin-left:10px;
    margin-top:10px;
}

.isActive-div{
    width: 35px;
    height: 15px;
    margin-top:5px;
    margin-left:15px;
    position:absolute;
    font-size:10px;
    background-color: #5126ea;
    color: #e9ecef;
    display:flex;
    justify-content:center;
    text-align:center ;
}

.title{
    /* background-color: #495057; */
    width: 240px;
    font-weight: bold
}

.description{
    /* background-color: #495057; */
    width: 240px;
}

.priceKmYear{
    display: flex;
    justify-content: space-between;
    /* background-color: royalblue; */
    width: 240px;
}

.priceYear{
    display: flex;
    justify-content: space-between;
    /* background-color: red; */
    width: 75px;
}

.imgProfile{
    width: 25px;
    height: 25px;
    border-radius:100%;
}

.nameAndphotoProfile{
    display: flex;
    justify-content: space-between;
    /* background-color: tan; */
    width: 65px;
    font-size:15px ;
    text-align:center ;
}

.cardInfo{
    width: 30px;
    height: 20px;
    margin-top: 5px;
    margin-left:5px ;
    background-color: #edeafd;
    color: #5126ea ;
    font-size: 12px ;
}
`