import React from 'react';
import header1 from '../img/header1.png'
import header2 from '../img/header2.png'
import header3 from '../img/header3.png'
function Header(){
    return(
        <>
    <header class="hdr">
        <img src={header1} alt="" class="img"/>
        <img src={header2} alt="" class="img"/>
        <img src={header3} alt="" class="img"/>
        <h1 class="hdr_title">Фотограф на заказ</h1>
    </header>
        </>
    )
}
export default Header