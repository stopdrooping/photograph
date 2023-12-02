import React from 'react';
function Checkbutton(){
    return(
        <>
        <input class="kencar" id="kencar" type="checkbox"/>
        <label class="dest" for="kencar">
            <i class="fa-regular fa-sun"></i>
            <i class="fa-regular fa-moon"></i>
            Сменить тему
        </label>
        </>
    )
}
export default Checkbutton