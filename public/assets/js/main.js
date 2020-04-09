$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: 0
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    $(window).scroll(function() {
        if ($(document).scrollTop() > 300) {
            $(".buttontop").addClass("show");
        } else {
            $(".buttontop").removeClass("show");
        }
    });
    // new Glider(document.querySelector('.glider'), {
    //     slidesToScroll: 1,
    //     slidesToShow: 5.5,
    //     draggable: true,
    //     dots: '.dots',
    //     arrows: {
    //         prev: '.glider-prev',
    //         next: '.glider-next'
    //     }
    // });
    // document.querySelector('.glider').addEventListener('glider-slide-visible', function(event) {
    //     var imgs_to_anticipate = 3;
    //     var glider = Glider(this);
    //     for (var i = 0; i <= imgs_to_anticipate; ++i) {
    //         var index = Math.min(event.detail.slide + i, glider.slides.length - 1),
    //             glider = glider;
    //         loadImages.call(glider.slides[index], function() {
    //             glider.refresh(true);
    //         })
    //     }
    // });

    // function loadImages(callback) {
    //     [].forEach.call(this.querySelectorAll('img'), function(img) {
    //         var _img = new Image,
    //             _src = img.getAttribute('data-src');
    //         _img.onload = function() {
    //             img.src = _src;
    //             img.classList.add('loaded');
    //             callback && callback(img);
    //         }
    //         if (img.src !== _src) _img.src = _src;
    //     });
    // }
    $('#blogCarousel').carousel({
        interval: 5000;
        autoplay = true
    });
});