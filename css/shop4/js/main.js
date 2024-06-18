// alert("test");
$(() => {
    $('.navbar_toggleBtn').click(() => {
        $('.navbar_menu').toggle("active");
    })

    $(window).resize(() => {
        // nav의 너비 값이 문자이기에 숫자로 형변
        if(parseInt($('nav').css('width'))>768){
            // 보이기 > display: flex, 숨기기 > display: none
            $('.navbar_menu').css('display','flex');
        }
    })
});