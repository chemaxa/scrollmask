# scrollmask
Scroll mask 
    // В общем оборачиваем контент в любой див и подключаем мой плагин, он сделает все остальное)
    // Есть проблемы с display: table-cell, display:table и position: absolute
    // Плагин принимает требуемую высоту 
    // $('.Wrapper').scrollMask({height: 100500});
    // Или работает в автоматическом режиме рассчитывая высоту элемента height = window.innerHeight * 0.7 
    // опция автовысоты autoHeight: true/false по умолчанию true
    // В общем делаем обертку для контента, и включаем плагин, он сделает для обертки overflow: hidden и заданную высоту
    // Все остальное будет прокручиваться кнопками Назад / Вперед, текст по умолчанию. Можно менять через nextText, prevText
    /*$('.Wrapper').scrollMask({
        height: 100,
        autoHeight: false,
        nextText: 'Vpered',
        prevText: 'Nazad'
    });
