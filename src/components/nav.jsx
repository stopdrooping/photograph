import React from 'react';
function Nav(){
    return(
        <>
    <nav class="c">
        <input id="a" class="a" type="checkbox"/>
        <label class="n" for="a">
            <i class="fa-regular fa-clone fa-sm"></i>
            Меню
        </label>
        <div class="burger">
            <a href="#">Главная</a>
            <a href="#">Секция 1</a>
            <a href="#">Секция 2</a>
        </div>
    </nav>
        </>
    )
}
export default Nav