window.addEventListener('load', function() {
        new Glider(document.querySelector('.glider'), {
            setting - name: setting - value
        })
    })
    // example event hook implementing basic lazy loading images
    // appropriate image CSS (opacity/transform) must be set to work
document.querySelector('.glider').addEventListener('glider-slide-visible', function(event) {
    var imgs_to_anticipate = 3;
    var glider = Glider(this);
    for (var i = 0; i <= imgs_to_anticipate; ++i) {
        var index = Math.min(event.detail.slide + i, glider.slides.length - 1),
            glider = glider;
        loadImages.call(glider.slides[index], function() {
            glider.refresh(true);
        })
    }
});

function loadImages(callback) {
    [].forEach.call(this.querySelectorAll('img'), function(img) {
        var _img = new Image,
            _src = img.getAttribute('data-src');
        _img.onload = function() {
            img.src = _src;
            img.classList.add('loaded');
            callback && callback(img);
        }
        if (img.src !== _src) _img.src = _src;
    });
}