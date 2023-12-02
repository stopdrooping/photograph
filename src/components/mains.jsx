import React from 'react';
import mains1 from '../img/about__logo.png'
import mains2 from '../img/abou__logo.png'
import mains3 from '../img/about__loo (1).png'
function Mains(){
    return(
        <>
        <section class="main_s">
        <div class="main">
            <div class="main__item main_price">
                <h2 class="main__text main_price_text">Низкие цены</h2>
                <img src={mains1} alt=""/>
            </div>
            <div class="main__item main_exp">
                <h2 class="main__text main_exp_text">10 лет опыта</h2>
                <img src={mains2} alt=""/>
            </div>
            <div class="main__item main_idk">
            </div>
            <div class="main__item main_ikdx">
            </div>
            <div class="main__item main_member">
                <h2 class="main__text main_member_text">участник фотовыставок</h2>
                <img src={mains3} alt=""/>
            </div>
            <div class="main__item main_coins">
            </div>
        </div>
        </section>
        </>
    )
}
export default Mains