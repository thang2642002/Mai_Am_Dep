$(document).ready(function(){
    // --------------------------------------slider----------------------------
    $('.s-slider .slick-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1
                // 
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // --------------------------------nut btn---------------------------------------
    $('.b_conten_1 .btn').click(function () {
        $(this).parent().find('.nav-conten').slideToggle(400);
        $(this).parent().siblings().find('.nav-conten').slideUp(400);
        $(this).parent().toggleClass("intro");
    })

    // ----------------------------------mobile bar-------------------------------------
    $('.s-bars').click(function(){
        $('.s-header .s-navation').toggleClass("realy");
    })

    $('.s-header .s-navation ul > li.even > a').click(function (e) {
        e.preventDefault();
    })

    $('.conten-1 .card-3 .to-send').click(function(){
        $name=$('.name').val();
        $phone=$('.phone').val();
        $email=$('.email').val();
        $coment=$('.coment').val();

        if( $name == "")
        $('.error').text('Chưa nhập đủ tên');

        if( $phone == "")
        $('.error').text('Chưa nhập đủ số điẹn thoại');

        if( $email == "")
        $('.error').text('Chưa nhập đủ Email');

        if( $coment == "")
         $('.error').text('Chưa nhập đủ nội dung');

       if($name == "" && $phone == "" && $email == "" && $coment == "")
       $('.error').text('Chưa đủ thông tin');
   })

});

