const menuList = document.getElementById('list')
 menuList.style.maxHeight = "0px"

function clickMe() {
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "120px"
    } else {
        menuList.style.maxHeight = "0px"
    }
}