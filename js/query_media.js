// Biến lấy height màn hình của người dùng 
let user_screen_height = screen.availHeight;
// Căn chỉnh height thay đổi theo các màn hình khác nhau
document.getElementById("main").style.height = ((user_screen_height/100)*77.3) + 'px';

//                  MEDIA QUERY
//  Biến cho kích thước của màn hình tablet trở xuống
var x = window.matchMedia("(max-width: 1023px)")

//              HÀM THAY ĐỔI HTML KHI THAY ĐỔI KÍCH THƯỚC MÀN HÌNH

function changeHTML(x) {

    if (x.matches) { //     NẾU LÀ MÀN HÌNH ĐIỆN THOẠI HOẶC TABLET
        
    //  Thay đổi html trong phần header
        document.getElementById("header").innerHTML = header_for_mobile_tablet;
    //  Thay đổi html trong phần main
        document.getElementById("main").innerHTML = main_for_mobile_tablet;
        document.getElementById("main").style.marginTop = '2px';

    } else { //             NẾU LÀ MÀN HÌNH MÁY TÍNH

    //  Thay đổi html trong phần header 
        document.getElementById("header").innerHTML = header_for_PC;
    //  Thay đổi html trong phần main
        document.getElementById("main").innerHTML = main_for_PC;
    }
  }

// Active it
changeHTML(x);

//Bắt sự kiện khi có sự thay đổi kích thước màn hình
x.addEventListener("change", function() {
    changeHTML(x);
  });
