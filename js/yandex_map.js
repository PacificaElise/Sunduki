ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [57.537296, 60.284640],
        zoom: 15,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark = new ymaps.Placemark([57.535236, 60.288885], {
        hintContent: '<div class="contact__hint">ул. Ленина, д. 2, к. 1</div>',
    },
    {
        iconLayout: 'default#image',
        iconImageHref: './assets/img/key.png',
        iconImageSize: [80, 100],
        iconImageOffset: [-40, -95]
    });

    map.geoObjects.add(placemark);
}