function togglemenu(){
    document.querySelector('.drop_down_menu_passive').classList.toggle('drop_down_menu_active')
}

    document.querySelector('.burger_menu').addEventListener('click',togglemenu)


    function togglemenu_off(){
        document.querySelector('.drop_down_menu_active').classList.toggle('drop_down_menu_passive')
    }
        
        document.querySelector('#close_button').addEventListener('click',togglemenu)
    