// Biến lấy height màn hình của người dùng 
let user_screen_height = screen.availHeight;

document.getElementById("main").style.height = ((user_screen_height/100)*77.3) + 'px';
// Hàm đóng / mở side bar 
function SidebarButtonHide(){
    document.getElementById("sidebar").style.transition = '.3s';
    // document.getElementById("sidebar").style.transform = 'translateY(-502px)';
    document.getElementById("sidebar").style.opacity = '0%';
    document.getElementById("sidebar").style.display = 'none';
    document.getElementById("sidebarcontainer").innerHTML = '<button class="side-bar-button" onclick="SidebarButtonOpen()"><span class="material-symbols-outlined">arrow_drop_down</span></button>';
}
function SidebarButtonOpen(){
    document.getElementById("sidebar").style.transition = '.3s';
    // document.getElementById("sidebar").style.transform = 'translateY(0px)';
    document.getElementById("sidebar").style.opacity = '100%';
    document.getElementById("sidebar").style.display = 'block';
    document.getElementById("sidebarcontainer").innerHTML = '<button class="side-bar-button" onclick="SidebarButtonHide()"><span class="material-symbols-outlined">arrow_drop_up</span></button>';
}
