# scrollmask
Scroll mask
Jquery плагин добавляет скролл к любому элементу на странице, чтобы тот занимал строго заданную высоту.
Плагин просто делает для обертки overflow: hidden и устанавливает заданную(или рассчитаную автоматически) высоту.

Есть проблемы с display: table-cell, display:table и position: absolute

Можно задать требуемую высоту

`$('.Wrapper').scrollMask({height: 100500});`

Или плагин автоматически рассчитает высоту элемента, по формуле height = window.innerHeight * 0.7 

опция включения/отключения автовысоты autoHeight: true/false по умолчанию true

Все остальное будет прокручиваться кнопками Назад / Вперед.
Текст кнопок "Вперед" и "Назад", можно менять через nextText, prevText

    $('.Wrapper').scrollMask({
     height: 100,
     autoHeight: false,
     nextText: 'Vpered',
     prevText: 'Nazad'
    });
