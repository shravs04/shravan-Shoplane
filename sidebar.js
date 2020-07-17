// var sidebar = $("#sidebar");
// var sidebarBtn = $("#sidebar-btn");
// var crossBtn = $("#cross");
// var overlay = $("#overlay");

// sidebarBtn.onclick = function() {
//     sideBar.style.display = "inline-block";
//     overlay.style.display = "inline-block";
// }

// crossBtn.onclick = function() {
//     sideBar.style.display = "inline-block";
// }

// overlay.onclick = function() {
//     overlay.style.display = "none";
//     sideBar.style.display = "none";
// }

$("#sidebar-btn").click(function() {
    
    $("#sidebar").css({display: "inline-block"});
    $("#overlay").css({display: "inline-block"});
});

$("#cross").click(function() {

    $("#sidebar").css({display: "none"});
    $("#overlay").css({display: "none"});
});

$("#overlay").click(function() {

    $("#sidebar").css({display: "none"});
    $("#overlay").css({display: "none"});
});