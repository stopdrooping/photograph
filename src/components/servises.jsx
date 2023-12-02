import React from 'react';
import servises1 from '../img/services-landscape.png'
import servises2 from '../img/services_macro.png'
import servises3 from '../img/services_mono.png'
import servises4 from '../img/services_portrait.png'
function Servises(){
    return(
        <>
        <section class="servises">
            <ul class="servises-cards">
                <li class="servises-card">
                    <img class="servises-card-front" src={servises1} alt=""/>
                    <h2 class="servises-card-back">Лeндспейп фото</h2>
                </li>
                <li class="servises-card">
                    <img class="servises-card-front" src={servises2} alt=""/>
                    <h2 class="servises-card-back">Макро фото</h2>
                </li>
                <li class="servises-card">
                    <img class="servises-card-front" src={servises3} alt=""/>
                    <h2 class="servises-card-back">Моно фото</h2>
                </li>
                <li class="servises-card">
                    <img class="servises-card-front" src={servises4} alt=""/>
                    <h2 class="servises-card-back">Портреты</h2>
                </li>
            </ul>
        </section>
        </>
    )
}
export default Servises