const ymaps = window.ymaps;

ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map('map', {
    // Координаты центра при запуске карты
    center: [59.938631, 30.323037],
    // Увеличение карты при запуске
    zoom: 15.5,
  }, {
    searchControlProvider: 'yandex#search',
  });

  // Создаём макет содержимого.
  let MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  );

  // Задаём координаты нашей основной точки
  let myPlacemarkWithContent = new ymaps.Placemark([59.938631, 30.323037], {
    // Подсказка при наведении
    hintContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
    // ToolTip
    balloonContent: 'Наши контакты:<br>8-800-200-00-00<br>г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
    // Надпись поверх иконки
    iconContent: '',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#imageWithContent',
    // Своё изображение иконки метки.
    iconImageHref: '../img/icons/marker-icon.svg',
    // Размеры метки.
    iconImageSize: [18, 22],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-9, -22],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    // iconContentOffset: [15, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout,
  });

  myMap.geoObjects
      .add(myPlacemarkWithContent);
}
