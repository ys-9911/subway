function showMood(mood) {
    const moods = ['fresh', 'cozy', 'happy'];
    moods.forEach(id => {
        if (id === mood) {
            document.getElementById(id).classList.add('active')
        } else {
            document.getElementById(id).classList.remove('active')
        }
    });
}

$(function () {
    // 베너 슬라이더 시작
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    // 베너 슬라이더 끝

    // 배쓰밤 슬라이더 시작
    const bathbombSwiper = new Swiper('.bathbomb-swiper', {
        slidesPerView: 1,
        spaceBetween: 1,
        speed:1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });
    // 배쓰밤 슬라이더 끝

    // 바디아이템 스와이퍼
    const itemsSwiper = new Swiper('.items-swiper', {
        slidesPerView: 1,
        loop: true,
        speed:1000,
        navigation: {
          nextEl: '.items-next',
        },
      });
      


    // 스크롤 시 헤더 배경 변경
    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();
        
        if(scrollTop <= 120){
            $('header').css('transform', 'translateY(0)');
        } else {
            $('header').css('transform', 'translateY(-100%)');
        }
    });

    // 전역변수
    const $header = $('header');
    const $subMenu = $('.sub_menu');

    // 마우스 헤더 위치에 오면 보이게
    $(document).on('mousemove', function(e) {
        const hH = $header.outerHeight();
        if (e.clientY <= hH) {
          $header.addClass('visible')   // 헤더 보이기
        } 
        // else {
        //   $header.removeClass('visible') // 헤더 숨기기
        // }
    });

    // 서브메뉴에 마우스 진입 시 헤더 보이기
    $subMenu.on('mouseenter', function() {
        $header.addClass('visible');
    });

    // 헤더 및 서브메뉴에서 마우스 이탈 시, 스크롤이 최상단이 아닐 때만 숨기기
    $header.add($subMenu).on('mouseleave', function() {
        if ($(window).scrollTop() > 0) {
        $header.removeClass('visible');
        }
    });

    const eventSwiper = new Swiper('.event-swiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // notice
    new Swiper('.notice-swiper', {
        slidesPerView: 4,              // 한 화면에 4개 고정
        slidesPerGroup: 1,             // 한 번에 4개씩 이동
        spaceBetween: 20,              // 슬라이드 간격'
        speed: 2000,
        loop: true,                    // 무한 루프 활성화
        loopFillGroupWithBlank: true,  // 그룹이 모자랄 때 빈 슬라이드로 채움
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });

    // Instagram 슬라이더
    new Swiper('.instagram-swiper', {
        spaceBetween: 30,      // 간격 10px
        loop: true,
        slidesPerView: 'auto',      // 여러 슬라이드를 연속으로 보여줄 때
        speed: 2000, 
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        // freeMode: {
        //     enabled: true,            // 강제 스냅 없이 자유롭게 움직이게
        //     momentum: false           // 관성 모멘텀 비활성화 (속도 일정 유지를 위해)
        // },
      });

      // 기존 insta swiper
    // new Swiper('.instagram-swiper', {
    //     slidesPerView: 6,      // 기본 6장
    //     slidesPerGroup: 6,     // 6장씩 이동
    //     spaceBetween: 30,      // 간격 10px
    //     loop: true,
    //     autoplay: {
    //       delay: 3000,
    //       disableOnInteraction: false,
    //     },
    //     navigation: {
    //       nextEl: '.instagram-next',
    //       prevEl: '.instagram-prev',
    //     },
    //     breakpoints: {
    //       480:  { slidesPerView: 2, slidesPerGroup: 2 },
    //       768:  { slidesPerView: 3, slidesPerGroup: 3 },
    //       1024: { slidesPerView: 4, slidesPerGroup: 4 },
    //       1800: { slidesPerView: 6, slidesPerGroup: 6 },
    //       // 데스크탑(1024 이상)은 여기서 4장으로 줄어들고,
    //       // 그 위(별도 지정 없으면) 기본 slidesPerView:6 이 적용됩니다.
    //     }
    //   });
      
  




});

