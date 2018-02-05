[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/agilie/canvas-image-cover-position)

# Canvas image cover position
This method is helpful for calculating image position for scaling it on the canvas. A behavior is the same as css property 'background-size: cover;'

![Preview](img/Image.png)
![Preview](img/Image_cover.png)
```javascript
canvasImageCoverPosition(
    imageNaturalWidth,
    imageNaturalHeight,
    canvasWidth,
    canvasHeight,
    [offsetLeft, offsetTop]
)
```
If the offsets are not specified, the image is centered
## Installation 
Just add file or function to your project

**or**

```bash
$ npm install @agilie/canvas-image-cover-position
```
## How to use
```javascript
var imagePosition = canvasImageCoverPosition(
    image.naturalWidth,
    image.naturalHeight,
    canvas.width,
    canvas.height,
    0.5,
    0.5
);
canvas.getContext('2d').drawImage(
    image,
    imagePosition.offsetLeft,
    imagePosition.offsetTop,
    imagePosition.width,
    imagePosition.height
);
```
<a href="https://agilie.github.io/canvas-image-cover-position/" style="font-size: 20px" target="_blank">demo</a>

## Troubleshooting
Problems? Check the [Issues](https://github.com/agilie/canvas-image-cover-position/issues) block 
to find the solution or create an new issue that we will fix asap. Feel free to contribute.

## Author
This method is open-sourced by [Agilie Team](https://www.agilie.com) <info@agilie.com>

## Contributors
[Agilie Team](https://github.com/agilie)

## Contact us
If you have any questions, suggestions or just need a help with web or mobile development, please email us at <web@agilie.com>. You can ask us anything from basic to complex questions. 

We will continue publishing new open-source projects. Stay with us, more updates will follow!

## License
The [MIT](LICENSE) License (MIT) Copyright © 2017 [Agilie Team](https://www.agilie.com)
