# Block-Slider-3D

Requirements: jQuery

Manual:

Include in .html file:

Stylesheet
```HTML
<link rel="stylesheet" href="DTslider.css">
```
Scripts:
```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="DTslider.js"></script>
```
Slider container:
```HTML
<div id="DTSliderId"></div>
```
Add script:

```JavaScript
var sliderDT = "DTSliderId";      //slider Id
var optionsSliderDT = {
  width: "1200px",                //slider width
  height: "600px",                //slider height
  columns: 3,                     //number of blocks
  rows: 2,
  displayTime: 5000,              //single image display time [ms]
  imgURLs: ["http://foo1.bar", "http://foo1.bar"],   //array of images URLs                    
  effect: "randomTogether",                          //slider effect, one of: "rotX1", "rotX2", "rotY1", "rotY2", "rot3d1", "rot3d2", "randomTogether", "random"
  blockTransition: "random",                         //slider transition: "coherent" or "random"
  controls: true                                     //slider bullets: true or false
};
DT_CreateSlider(sliderDT, optionsSliderDT);          //create slider
```
Demo:

http://dtomaszewski.pl/block-slider-3d-v1/
