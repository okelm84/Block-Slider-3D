/*
**Block Slider 3D v1.0**
**Author: Damian Tomaszewski**
**http://dtomaszewski.pl**
*/


//controls
function DT_appendControls(sliderId, sliderArr) {
  for (var i = 0; i < sliderArr.imgURLs.length; i++) {
    $("#" + sliderId + " .DT-controls").append("<span class =\"DT-bullet\"id=\"C"+i+"\" data-img=\""+i+"\">&#9671;</span>");
  }
}

//blocks
function DT_appendRows(sliderId, sliderArr, callback) {
  for (var i = 0; i < sliderArr.rows; i++) {
    $("#" + sliderId + " .DT-container").append('<div class="DT-row"></div>');
  }
  callback(sliderId, sliderArr);
}

function DT_appendColumns(sliderId, sliderArr) {
  for (var i = 0; i < sliderArr.rows; i++) {
    for (var j = 0; j < sliderArr.columns; j++) {
      $(".DT-row")
        .eq(i)
        .append(
          '<div class="DT-block-wrap"><div class="DT-block" id="DTBlockR' +
            i +
            "C" +
            j +
            '"><div class="DT-front DT-wall"></div><div class ="DT-back DT-wall"></div><div class="DT-left DT-wall"></div><div class="DT-right DT-wall"></div><div class="DT-top DT-wall"></div><div class="DT-bottom DT-wall"></div></div></div></div>'
        );
    }
  }
}

//blocks effects delay
function DT_addDelay(selector, num){
  switch(num){
    case 1:
      $(selector).addClass("DT-transition-delay1");
      break;
    case 2:
      $(selector).addClass("DT-transition-delay2");
      break;
    case 3:
      $(selector).addClass("DT-transition-delay3");
      break;
    case 4:
      $(selector).addClass("DT-transition-delay4");
      break;
    case 5:
      $(selector).addClass("DT-transition-delay5");
      break;
    default:
      break;
  }
}
function DT_removeDelay(selector){
  $(selector).removeClass("DT-transition-delay1 DT-transition-delay2 DT-transition-delay3 DT-transition-delay4 DT-transition-delay5");
}

function DT_delayCalc(delay, rows, columns){
  var blockTrans2 = 0;
  if(delay){
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        blockTrans2 = Math.floor(Math.random() * 5) + 1;
        DT_addDelay("#DTBlockR" + i + "C" + j, blockTrans2);
      }
    }
  }
  return blockTrans2;
}

//transform effects front <-> back
function DT_flipFrontToBackRotXPlus(selector, time, delay, rows, columns) {
  $(".DT-bullet").addClass("DT-controls-hide");
  var blockTrans = DT_delayCalc(delay, rows, columns);
  $(selector).addClass("DT-move-back-rotateX-plus");
  setTimeout(function() {
    $(selector)
      .removeClass("DT-move-back-rotateX-plus")
      .addClass("DT-rotateX-plus");
    $(".DT-bullet").removeClass("DT-controls-hide");
  }, time + blockTrans * 50);
}

function DT_flipBackToFrontRotXPlus(selector, time) {
  $(".DT-bullet").addClass("DT-controls-hide");
  $(selector).addClass("DT-move-back-rotateX-plus");
  $(selector).removeClass("DT-rotateX-plus");
  setTimeout(function() {
    $(selector).removeClass("DT-move-back-rotateX-plus");
    $(".DT-bullet").removeClass("DT-controls-hide");
  }, time + 250);
  setTimeout(function() {
    DT_removeDelay(".DT-block");
  }, 2*time + 500);
}

function DT_flipFrontToBackRotXMinus(selector, time, delay, rows, columns) {
  $(".DT-bullet").addClass("DT-controls-hide");
  var blockTrans = DT_delayCalc(delay, rows, columns);
  $(selector).addClass("DT-move-back-rotateX-minus");
  setTimeout(function() {
    $(selector)
      .removeClass("DT-move-back-rotateX-minus")
      .addClass("DT-rotateX-minus");
    $(".DT-bullet").removeClass("DT-controls-hide");
  }, time+blockTrans*50);
}

function DT_flipBackToFrontRotXMinus(selector, time) {
  $(".DT-bullet").addClass("DT-controls-hide");
  $(selector).addClass("DT-move-back-rotateX-minus");
  $(selector).removeClass("DT-rotateX-minus");
  setTimeout(function() {
    $(selector).removeClass("DT-move-back-rotateX-minus");
    $(".DT-bullet").removeClass("DT-controls-hide");
  }, time+250);
  setTimeout(function() {
    DT_removeDelay(".DT-block");
  }, 2*time+500);
}

function DT_flipFrontToBackRotYPlus(selector, time, delay, rows, columns) {
  $(".DT-bullet").addClass("DT-controls-hide");
  var blockTrans = DT_delayCalc(delay, rows, columns);
  $(selector +" .DT-back").addClass("DT-back2");
  $(selector).addClass("DT-move-back-rotateY-plus");
  setTimeout(function() {
    $(selector)
      .removeClass("DT-move-back-rotateY-plus")
      .addClass("DT-rotateY-plus");
    $(".DT-bullet").removeClass("DT-controls-hide");
  }, time + blockTrans * 50 );
}

function DT_flipBackToFrontRotYPlus(selector, time) {
  $(".DT-bullet").addClass("DT-controls-hide");
  $(selector).addClass("DT-move-back-rotateY-plus");
  $(selector).removeClass("DT-rotateY-plus");
  setTimeout(function() {
    $(selector).removeClass("DT-move-back-rotateY-plus");
  }, time+250);
  setTimeout(function(){
    $(selector +" .DT-back").removeClass("DT-back2");
    $(".DT-bullet").removeClass("DT-controls-hide");
    DT_removeDelay(".DT-block");
  }, 2*time + 500);
}

function DT_flipFrontToBackRotYMinus(selector, time, delay, rows, columns) {
  $(".DT-bullet").addClass("DT-controls-hide");
  var blockTrans = DT_delayCalc(delay, rows, columns);
  $(selector +" .DT-back").addClass("DT-back2");
  $(selector).addClass("DT-move-back-rotateY-minus");
  setTimeout(function() {
    $(selector)
      .removeClass("DT-move-back-rotateY-minus")
      .addClass("DT-rotateY-minus");
    $(".DT-bullet").removeClass("DT-controls-hide");
  }, time + blockTrans * 50);
}

function DT_flipBackToFrontRotYMinus(selector, time) {
  $(".DT-bullet").addClass("DT-controls-hide");
  $(selector).addClass("DT-move-back-rotateY-minus");
  $(selector).removeClass("DT-rotateY-minus");
  setTimeout(function() {
    $(selector).removeClass("DT-move-back-rotateY-minus");
  }, time+250);
  setTimeout(function(){
    $(selector +" .DT-back").removeClass("DT-back2");
    $(".DT-bullet").removeClass("DT-controls-hide");
    DT_removeDelay(".DT-block");
  }, 2 * time+500);
}

function DT_flipFrontToBackRotDiagonal1(selector, time, delay, rows, columns) {
  $(".DT-bullet").addClass("DT-controls-hide");
  var blockTrans = DT_delayCalc(delay, rows, columns);
  $(selector).addClass("DT-move-back-rotate-diagonal1");
  setTimeout(function() {
    $(selector)
      .removeClass("DT-move-back-rotate-diagonal1")
      .addClass("DT-rotateX-plus");
    $(".DT-bullet").removeClass("DT-controls-hide");
  }, time + blockTrans * 50);
}

function DT_flipBackToFrontRotDiagonal1(selector, time) {
  $(".DT-bullet").addClass("DT-controls-hide");
  $(selector).addClass("DT-move-back-rotate-diagonal1");
  $(selector).removeClass("DT-rotateX-plus");
  setTimeout(function() {
    $(selector).removeClass("DT-move-back-rotate-diagonal1");
    $(".DT-bullet").removeClass("DT-controls-hide");
  }, time+250);
  setTimeout(function() {
    DT_removeDelay(".DT-block");
  }, 2*time+500);
}

function DT_flipFrontToBackRotDiagonal2(selector, time, delay, rows, columns) {
  $(".DT-bullet").addClass("DT-controls-hide");
  var blockTrans = DT_delayCalc(delay, rows, columns);
  $(selector).addClass("DT-move-back-rotate-diagonal2");
  setTimeout(function() {
    $(selector)
      .removeClass("DT-move-back-rotate-diagonal2")
      .addClass("DT-rotateX-minus");
    $(".DT-bullet").removeClass("DT-controls-hide");
  }, time + blockTrans * 50);
}

function DT_flipBackToFrontRotDiagonal2(selector, time) {
  $(".DT-bullet").addClass("DT-controls-hide");
  $(selector).addClass("DT-move-back-rotate-diagonal2");
  $(selector).removeClass("DT-rotateX-minus");
  setTimeout(function() {
    $(selector).removeClass("DT-move-back-rotate-diagonal2");
    $(".DT-bullet").removeClass("DT-controls-hide");
  }, time + 250);
   setTimeout(function() {
    DT_removeDelay(".DT-block");
  }, 2*time + 500);
}

function DT_flipFrontToBackRandom(selector, time, delay, rows, columns){
  $(".DT-bullet").addClass("DT-controls-hide");
  var blockTrans = DT_delayCalc(delay, rows, columns);
  var effectNumber = Math.floor(Math.random() * 6) + 1;
    switch(effectNumber){
      case 1:
        $(selector).addClass("DT-move-back-rotateX-plus");
        setTimeout(function() {
          $(selector)
            .removeClass("DT-move-back-rotateX-plus")
            .addClass("DT-rotateX-plus");
          $(".DT-bullet").removeClass("DT-controls-hide");
        }, time + blockTrans * 50);
        break;
      case 2:
        $(selector).addClass("DT-move-back-rotateX-minus");
        setTimeout(function() {
          $(selector)
            .removeClass("DT-move-back-rotateX-minus")
            .addClass("DT-rotateX-minus");
          $(".DT-bullet").removeClass("DT-controls-hide");
        }, time+blockTrans*50);
        break;
      case 3:
        $(selector +" .DT-back").addClass("DT-back2");
        $(selector).addClass("DT-move-back-rotateY-plus");
        setTimeout(function() {
          $(selector)
            .removeClass("DT-move-back-rotateY-plus")
            .addClass("DT-rotateY-plus");
          $(".DT-bullet").removeClass("DT-controls-hide");
         }, time + blockTrans * 50 );
        break;
      case 4:
         $(selector +" .DT-back").addClass("DT-back2");
         $(selector).addClass("DT-move-back-rotateY-minus");
         setTimeout(function() {
           $(selector)
            .removeClass("DT-move-back-rotateY-minus")
            .addClass("DT-rotateY-minus");
           $(".DT-bullet").removeClass("DT-controls-hide");
         }, time + blockTrans * 50);
         break;
       case 5:
         $(selector).addClass("DT-move-back-rotate-diagonal1");
         setTimeout(function() {
         $(selector)
          .removeClass("DT-move-back-rotate-diagonal1")
          .addClass("DT-rotateX-plus");
         $(".DT-bullet").removeClass("DT-controls-hide");
         }, time + blockTrans * 50);
         break;
       case 6:
         $(selector).addClass("DT-move-back-rotate-diagonal2");
         setTimeout(function() {
          $(selector)
            .removeClass("DT-move-back-rotate-diagonal2")
            .addClass("DT-rotateX-minus");
          $(".DT-bullet").removeClass("DT-controls-hide");
        }, time + blockTrans * 50);
        break;
    }
}

function DT_flipBackToFrontRandom(selector, time) {
  $(".DT-bullet").addClass("DT-controls-hide");
  var effectNumber = Math.floor(Math.random() * 6) + 1;
       switch(effectNumber){
        case 1:
          $(selector).addClass("DT-move-back-rotateX-plus");
          break;
        case 2:
         $(selector).addClass("DT-move-back-rotateX-minus");
          break;
        case 3:
          $(selector).addClass("DT-move-back-rotateY-plus");
           break;
        case 4:
          $(selector).addClass("DT-move-back-rotateY-minus");
          break;
        case 5:
          $(selector).addClass("DT-move-back-rotate-diagonal1");
        case 6:
           $(selector).addClass("DT-move-back-rotate-diagonal2");
          break;
      }
  $(selector).removeClass("DT-rotateX-plus DT-rotateX-minus DT-rotateY-plus DT-rotateY-minus");
  setTimeout(function() {
    $(selector).removeClass("DT-move-back-rotateX-plus DT-move-back-rotateX-minus DT-move-back-rotateY-plus DT-move-back-rotateY-minus DT-move-back-rotate-diagonal1 DT-move-back-rotate-diagonal2");
  }, time+250);
  setTimeout(function(){
    $(selector +" .DT-back").removeClass("DT-back2");
    $(".DT-bullet").removeClass("DT-controls-hide");
    DT_removeDelay(".DT-block");
  }, 2 * time+500);
}

//main function
function DT_CreateSlider(sliderId, sliderArr) {
  $("#" + sliderId).addClass("DT-slider");
  $("#" + sliderId).append("<div class=\"DT-container\"></div>");
  DT_appendRows(sliderId, sliderArr, DT_appendColumns);
  if(sliderArr.controls){
    $("#" + sliderId).append("<div class=\"DT-controls\"></div>");
    DT_appendControls(sliderId, sliderArr);
  }
  $("#" + sliderId + " .DT-container").css({ width: sliderArr.width, height: sliderArr.height });
  $(".DT-row").css("height", 100 / sliderArr.rows + "%");
  $(".DT-block-wrap").css("width", 100 / sliderArr.columns + "%");
  var blockWidth = $(".DT-front").width();
  var blockHeight = $(".DT-front").height();
  $(".DT-left").css({
    "border-left": blockWidth / 2 + "px solid transparent",
    "border-right": blockWidth / 2 - 40 + "px solid transparent"
  });
  $(".DT-right").css({
    "border-left": blockWidth / 2 - 40 + "px solid transparent",
    "border-right": blockWidth / 2 + "px solid transparent"
  });
  $(".DT-top").css({
    "border-top": blockHeight / 2 - 40 + "px solid transparent",
    "border-bottom": blockHeight / 2 + "px solid transparent"
  });
  $(".DT-bottom").css({
    "border-top": blockHeight / 2 + "px solid transparent",
    "border-bottom": blockHeight / 2 - 40 + "px solid transparent"
  });
  var DTTransitionTime = 1000;
  $(".DT-wall").css("background-size", sliderArr.width);
  for (var i = 0; i < sliderArr.rows; i++) {
    for (var j = 0; j < sliderArr.columns; j++) {
      var offsetX = -j * blockWidth;
      var offsetY = -i * blockHeight;
      $(
        "#DTBlockR" +
          i +
          "C" +
          j +
          " .DT-front, #DTBlockR" +
          i +
          "C" +
          j +
          " .DT-back"
      ).css("background-position", offsetX + "px " + offsetY + "px");
    }
  }
  var num = 0;
  var visibleWall = "front";
  DT_activeBullet(num);
  $(".DT-front").css("background-image","url(" + sliderArr.imgURLs[num] + ")" );
  var DT_sliderInterval = setInterval(function(){
    num++;
    if (num >= sliderArr.imgURLs.length) {num = 0;}
    DT_slideShow(sliderId, sliderArr, DTTransitionTime, num, visibleWall);
    DT_activeBullet(num);
    if(visibleWall === "front"){visibleWall="back";}else{visibleWall="front";}
  },sliderArr.displayTime+DTTransitionTime);


 $(".DT-bullet").click(function(){
    clearInterval(DT_sliderInterval);
    num = $(this).attr("data-img");
    DT_activeBullet(num);
    DT_slideShow(sliderId, sliderArr, DTTransitionTime, num, visibleWall);
    if(visibleWall === "front"){visibleWall="back";}else{visibleWall="front";}
    DT_sliderInterval = setInterval(function(){
      num++;
      if (num >= sliderArr.imgURLs.length) {num = 0;}
      DT_slideShow(sliderId, sliderArr, DTTransitionTime, num, visibleWall);
      DT_activeBullet(num);
      if(visibleWall === "front"){visibleWall="back";}else{visibleWall="front";}
    },sliderArr.displayTime+DTTransitionTime);
  });
  //RWD
  $(window).resize(function(){
     var DTsliderW = Number(sliderArr.width.slice(0,sliderArr.width.indexOf("px")));
     var DTsliderH =Number(sliderArr.height.slice(0,sliderArr.height.indexOf("px")));
     $(".DT-container").css("height",Math.floor($(".DT-container").width()*DTsliderH/DTsliderW)+"px");
     blockWidth = $(".DT-front").width();
     blockHeight = $(".DT-front").height();
     $(".DT-front, .DT-back").css("background-size",$(".DT-container").width() + "px");
     $(".DT-left").css({
       "border-left": blockWidth / 2 + "px solid transparent",
       "border-right": blockWidth / 2 - 40 + "px solid transparent"
     });
     $(".DT-right").css({
       "border-left": blockWidth / 2 - 40 + "px solid transparent",
       "border-right": blockWidth / 2 + "px solid transparent"
     });
     $(".DT-top").css({
       "border-top": blockHeight / 2 - 40 + "px solid transparent",
       "border-bottom": blockHeight / 2 + "px solid transparent"
     });
     $(".DT-bottom").css({
       "border-top": blockHeight / 2 + "px solid transparent",
       "border-bottom": blockHeight / 2 - 40 + "px solid transparent"
     });
     for (var i = 0; i < sliderArr.rows; i++) {
       for (var j = 0; j < sliderArr.columns; j++) {
         var offsetX = -j * blockWidth;
         var offsetY = -i * blockHeight;
         $("#DTBlockR" + i + "C" + j + " .DT-front, #DTBlockR" + i + "C" + j + " .DT-back").css("background-position", offsetX + "px " + offsetY + "px");
       }
     }
  });
}

//active img
function DT_activeBullet(num){
  $(".DT-bullet").html("&#9671;");
  $(".DT-bullet").eq(num).html("&#9670;");
}

//slide change
function DT_slideShow(sliderId, sliderArr, transtime, num, visWall) {
  if (sliderArr.effect === "rotX1") {
     DTrotX1(".DT-block", sliderArr, transtime, num, visWall);
   }
  if (sliderArr.effect === "rotX2") {
     DTrotX2(".DT-block", sliderArr, transtime, num, visWall);
   }
  if (sliderArr.effect === "rotY1") {
      DTrotY1(".DT-block", sliderArr, transtime, num, visWall);
   }
  if (sliderArr.effect === "rotY2") {
      DTrotY2(".DT-block", sliderArr, transtime, num, visWall);
   }
  if (sliderArr.effect === "rot3d1") {
      DTrot3d1(".DT-block", sliderArr, transtime, num, visWall);
   }
  if (sliderArr.effect === "rot3d2") {
      DTrot3d2(".DT-block", sliderArr, transtime, num, visWall);
   }

  if (sliderArr.effect === "randomTogether") {
    DTrotRandom(".DT-block", sliderArr, transtime, num, visWall);
  }

  if (sliderArr.effect === "random") {
    for (var i = 0; i < sliderArr.rows; i++) {
       for (var j = 0; j < sliderArr.columns; j++) {
         DTrotRandom("#DTBlockR" + i + "C" + j, sliderArr, transtime, num, visWall);
       }
    }
  }
}

//slide change effects

function DTrotX1(selector, sliderArr, transtime, num, visWall){
  var DT_num = num;
  if(visWall==="front"){
    $(selector + " .DT-back").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     var blockTrans = 1;
     if(sliderArr.blockTransition !== "random"){
       blockTrans = 0;
     }
     DT_flipFrontToBackRotXPlus(selector, transtime, blockTrans, sliderArr.rows, sliderArr.columns);
  }
  if(visWall==="back"){
     $(selector + " .DT-front").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     DT_flipBackToFrontRotXPlus(selector, transtime);
  }
}

function DTrotX2(selector, sliderArr,transtime, num, visWall){
  var DT_num = num;
  if(visWall==="front"){
    $(selector + " .DT-back").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     var blockTrans = 1;
     if(sliderArr.blockTransition !== "random"){
       blockTrans = 0;
     }
     DT_flipFrontToBackRotXMinus(selector, transtime, blockTrans, sliderArr.rows, sliderArr.columns);
   }
  if(visWall==="back"){
     $(selector + " .DT-front").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     DT_flipBackToFrontRotXMinus(selector, transtime);
  }
}
function DTrotY1(selector, sliderArr,transtime, num, visWall){
   var DT_num = num;
   if(visWall==="front"){
    $(selector + " .DT-back").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     var blockTrans = 1;
     if(sliderArr.blockTransition !== "random"){
       blockTrans = 0;
     }
     DT_flipFrontToBackRotYPlus(selector, transtime, blockTrans, sliderArr.rows, sliderArr.columns);
   }
   if(visWall==="back"){
     $(selector + " .DT-front").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     DT_flipBackToFrontRotYPlus(selector, transtime);
   }
}

function DTrotY2(selector, sliderArr,transtime, num, visWall){
   var DT_num = num;
   if(visWall==="front"){
   $(selector + " .DT-back").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     var blockTrans = 1;
     if(sliderArr.blockTransition !== "random"){
       blockTrans = 0;
     }
     DT_flipFrontToBackRotYMinus(selector, transtime, blockTrans, sliderArr.rows, sliderArr.columns);
   }
   if(visWall==="back"){
     $(selector + " .DT-front").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     DT_flipBackToFrontRotYMinus(selector, transtime);
   }
}

function DTrot3d1(selector, sliderArr, transtime, num, visWall){
   var DT_num = num;
   if(visWall==="front"){
   $(selector + " .DT-back").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     var blockTrans = 1;
     if(sliderArr.blockTransition !== "random"){
       blockTrans = 0;
     }
     DT_flipFrontToBackRotDiagonal1(selector, transtime, blockTrans, sliderArr.rows, sliderArr.columns);
   }
  if(visWall==="back"){
     $(selector + " .DT-front").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     DT_flipBackToFrontRotDiagonal1(selector, transtime);
  }
}

function DTrot3d2(selector, sliderArr,transtime, num, visWall){
   var DT_num = num;
  if(visWall==="front"){
   $(selector + " .DT-back").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     var blockTrans = 1;
     if(sliderArr.blockTransition !== "random"){
       blockTrans = 0;
     }
     DT_flipFrontToBackRotDiagonal2(selector, transtime, blockTrans, sliderArr.rows, sliderArr.columns);
  }
  if(visWall==="back"){
     $(selector + " .DT-front").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     DT_flipBackToFrontRotDiagonal2(selector, transtime);
  }
}

function DTrotRandom(selector, sliderArr, transtime, num, visWall){
   var DT_num = num;
   if(visWall==="front"){
    $(selector + " .DT-back").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     var blockTrans = 1;
     if(sliderArr.blockTransition !== "random"){
       blockTrans = 0;
     }
     DT_flipFrontToBackRandom(selector, transtime, blockTrans, sliderArr.rows, sliderArr.columns);
   }
   if(visWall==="back"){
     $(selector + " .DT-front").css("background-image","url(" + sliderArr.imgURLs[DT_num] + ")");
     DT_flipBackToFrontRandom(selector, transtime);
   }
}
