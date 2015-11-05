(function($) {
    $.fn.scrollMask = function(method) {

        var settings = {
            height: 400,
            autoHeight: true,
            delay: 700,
            prevText: 'Назад',
            nextText: 'Вперед'
        };

        var methods = {
            init: function(options) {

                $.extend(settings, options);

                this.css('height', settings.height + 'px');
                if (settings.autoHeight)
                    this.css('height', window.innerHeight * 0.7 + 'px');
                this.css('overflow', 'hidden');
                var self = this;

                this.each(function(_, item) {
                    $(item).after(methods.getPaginationTemplate());
                });

                $('.smBtns').on('click.scrollMask', function(el) {
                    var scrollEl = $(this).siblings(self.selector);
                    if (!el.target.dataset) return;
                    if (el.target.dataset.sm_action == 'prev')
                        methods.prevPage.call(scrollEl);
                    if (el.target.dataset.sm_action == 'next')
                        methods.nextPage.call(scrollEl);
                });

            },

            getPaginationTemplate: function() {
                return '<div class="smBtns"><a href="#" data-sm_action = "prev" class = "smPrev" > ' + settings.prevText + '</a><a href="#" data-sm_action = "next"  class = "smNext"> ' + settings.nextText + ' </a></div>';
            },
            nextPage: function() {
                var scroll = this.outerHeight() + this.scrollTop();
                if (scroll > this.scrollHeight) scroll = this.scrollHeight;
                this.animate({
                    scrollTop: scroll
                }, settings.delay);
            },

            prevPage: function() {
                var scroll = this.scrollTop() - this.outerHeight();
                if (scroll <= 0) scroll = 0;
                this.animate({
                    scrollTop: scroll
                }, settings.delay);
            }
        };

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            methods.init.apply(this, arguments);
        } else {
            $.error(' MaskScroll have not method: ' + method);
        }
        return this;
    };
})(jQuery);
