travi.test.testCase('HomeLightboxTests', (function () {
    'use strict';

    return {
        home: travi.org.home,

        tearDown: function () {
            travi.test.common.restore([
                $.ajax
            ]);
        },

        'test lightbox shown on click': function () {
            sinon.stub($, 'ajax');
            var original = 'original.jpg';
            $('body').append($.render.thumbs({thumbs: [
                {
                    original: original
                }
            ]}));
            this.home.init();

            $('#thumbs').find('img').eq(0).click();

            assertTrue($('#jquery-lightbox').is(':visible'));
            //i think would need to trigger the load event on the preloaded image for this to work
            //assertEquals(original, $('#lightbox-image').attr('src'));
        }
    };
}()));