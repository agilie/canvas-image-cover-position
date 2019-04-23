
// The MIT License (MIT) Copyright © 2019 Agilie Team https://www.agilie.com/

;(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else if(typeof exports === 'object')
        exports["getCoverSize"] = factory();
    else {
        root["canvasImageCoverPosition"] = root["getCoverSize"] = factory();
    }
})(window, function() {
    return (function (contentWidth, contentHeight, containerWidth, containerHeight, offsetLeft, offsetTop) {
            var contentRatio = contentWidth / contentHeight;
            var containerRatio = containerWidth / containerHeight;
            var resultHeight;
            var resultWidth;
            offsetLeft = typeof offsetLeft === 'undefined' ? 0.5 : offsetLeft;
            offsetTop = typeof offsetTop === 'undefined' ? 0.5 : offsetTop;
            if (contentRatio > containerRatio) {
                resultHeight = containerHeight;
                resultWidth = containerHeight * contentRatio;
            }
            else {
                resultWidth = containerWidth;
                resultHeight = containerWidth / contentRatio;
            }
            return {
                width: resultWidth,
                height: resultHeight,
                offsetLeft:(containerWidth - resultWidth) * offsetLeft,
                offsetTop: (containerHeight - resultHeight) * offsetTop
            };
        });
});

