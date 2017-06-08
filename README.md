
# Canvas image cover position
It's method which calculate and return image position for fill canvas element like background-size cover

![Preview](img/Image.png)
![Preview](img/Image_cover.png)
```javascript
canvasImageCoverPosition(imageNaturalWidth, imageNaturalHeight , canvasWidth, canvasHeight, [offsetLeft, offsetTop])
```
## Installation 
Just add file or function to your project
## How to use
```javascript
var imagePosition = canvasImageCoverPosition(image.naturalWidth, image.NaturalHeight , canvas.width, canvas.height, 0.5, 0.5)
canvas.getContext('2d').drawImage(image, imagePosition.offsetLeft, imagePosition.offsetTop, imagePosition.width, imagePosition.height);
```
<a href="" style="font-size: 20px">demo</a>
## Troubleshooting
Problems? Check the [Issues](https://github.com/agilie/canvas-image-cover-position/issues) block 
to find the solution or create an new issue that we will fix asap. Feel free to contribute.
## License
The [MIT](LICENSE.md) License (MIT) Copyright © 2017 [Agilie Team](https://www.agilie.com)