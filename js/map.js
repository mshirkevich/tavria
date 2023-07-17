ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.870936, 27.508857],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/mark.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });


        myPlacemark2 = new ymaps.Placemark([53.908331, 27.459747], {
          
        }, {
          
            iconLayout: 'default#image',
        
            iconImageHref: '../img/mark.png',
           
           
        });


    myMap.geoObjects
        .add(myPlacemark)
        .add( myPlacemark2 );
});