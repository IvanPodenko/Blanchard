import ymaps from 'ymaps';

ymaps
  .load('https://api-maps.yandex.ru/2.1/?apikey=fe250f75-7719-412f-a245-802cd13d0166&lang=ru_RU')
  .then(maps => {
    const map = new maps.Map('map', {
      center: [55.758468, 37.601088],
      zoom: 14,
      controls: ["geolocationControl", "zoomControl"]
    });


    // Создаем метку с помощью дополнительных параметров
    const placemark = new maps.Placemark([55.758468, 37.601088], {
        // Свойства
        // Текст балуна
        // balloonContent: 'Здесь может быть ваш текст',
        // Текст всплывающей подсказки
        // hintContent: 'И еще информация при наведении'
      }, {
        // Опции
        // Свою иконку можно задать так:
        iconLayout: 'default#image',
        iconImageHref: 'img/teg-map.svg',
        // Размеры метки
        iconImageSize: [20, 20],
        // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки)
        // iconImageOffset: [-15, -42]
    });

    map.geoObjects.add(placemark);  // добавление метки и балуна на карту

  })
  .catch(error => console.log('Failed to load Yandex Maps', error));


