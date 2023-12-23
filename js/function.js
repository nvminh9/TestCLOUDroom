// Hàm đóng side bar ( của PC )
function SidebarButtonHide(){
    document.getElementById("sidebar").style.transition = '.3s';
    // document.getElementById("sidebar").style.transform = 'translateY(-502px)';
    document.getElementById("sidebar").style.opacity = '0%';
    document.getElementById("sidebar").style.display = 'none';
    document.getElementById("sidebarbuttoncontainer").innerHTML = '<button class="side-bar-button" onclick="SidebarButtonOpen()"><span class="material-symbols-outlined">arrow_drop_down</span></button>';
}

// Hàm mở side bar ( của PC )
function SidebarButtonOpen(){
    document.getElementById("sidebar").style.transition = '.3s';
    // document.getElementById("sidebar").style.transform = 'translateY(0px)';
    document.getElementById("sidebar").style.opacity = '100%';
    document.getElementById("sidebar").style.display = 'block';
    document.getElementById("sidebarbuttoncontainer").innerHTML = '<button class="side-bar-button" onclick="SidebarButtonHide()"><span class="material-symbols-outlined">arrow_drop_up</span></button>';
}

// Hàm đóng side bar ( của mobile hay tablet )
function SidebarButtonHideformobile(){
    document.getElementById("sidebarcontainermobile").style.transition = '.3s';
    document.getElementById("sidebarcontainermobile").style.opacity = '0%';
    document.getElementById("sidebarcontainermobile").style.display = 'none';
    document.getElementById("sidebarbuttoncontainermoile").innerHTML = '<button class="side-bar-button" onclick="SidebarButtonOpenformobile()" style="width: 100%; margin: 5px 0px 1px 0px;">'
    +        '<span class="material-symbols-outlined">'
    +            'arrow_drop_down'
    +        '</span>'
    +    '</button>';
}

// Hàm mở side bar ( của mobile hay tablet )
function SidebarButtonOpenformobile(){
    document.getElementById("sidebarcontainermobile").style.transition = '.3s';
    document.getElementById("sidebarcontainermobile").style.opacity = '100%';
    document.getElementById("sidebarcontainermobile").style.display = 'block';
    document.getElementById("sidebarbuttoncontainermoile").innerHTML = '<button class="side-bar-button" onclick="SidebarButtonHideformobile()" style="width: 100%; margin: 5px 0px 1px 0px;">'
    +        '<span class="material-symbols-outlined">'
    +            'arrow_drop_up'
    +        '</span>'
    +    '</button>';
}