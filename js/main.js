$(document).ready(function() {
    
//Изображения как заливка для правильного центрирования
$("#img1").css('background-image', 'url("img/small/img1.jpg")');
$("#img2").css('background-image', 'url("img/small/img2.jpg")');
$("#img3").css('background-image', 'url("img/small/img3.jpg")');
$("#img4").css('background-image', 'url("img/small/img4.jpg")');
$("#img5").css('background-image', 'url("img/small/img5.jpg")');
$("#img6").css('background-image', 'url("img/small/img6.jpg")');
$("#img7").css('background-image', 'url("img/small/img7.jpg")');
$("#img8").css('background-image', 'url("img/small/img8.jpg")');
$("#img9").css('background-image', 'url("img/small/img9.jpg")');
$("#img10").css('background-image', 'url("img/small/img10.jpg")');
$("#img11").css('background-image', 'url("img/small/img11.jpg")');
$("#img12").css('background-image', 'url("img/small/img12.jpg")');
$("#img13").css('background-image', 'url("img/small/img13.jpg")');
$("#img14").css('background-image', 'url("img/small/img14.jpg")');
$("#img15").css('background-image', 'url("img/small/img15.jpg")');
$("#img16").css('background-image', 'url("img/small/img16.jpg")');
$("#img17").css('background-image', 'url("img/small/img17.jpg")');
$("#img18").css('background-image', 'url("img/small/img18.jpg")');

//анимированая надпись на домашней странице
$(function(){
        $(".write").typed({
            strings: ["singer", "alcoholic"],
            typeSpeed: 80,
    		backSpeed: 40,
    		cursorChar: '|',
    		shuffle: true,
    		smartBackspace: false,
    		loop: true
        });
    });

//открытие галереи 
$(".item").magnificPopup({
    type: 'image',
    gallery : {
        enabled : true
    },

});

//плавная анимация по якорям
$(".main-menu").on("click","a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});


});
/*пройтись по элементам и убрать имедж и заменить на сатйл бекграунд*/