/* buttons classes click events */

/* select filter */
/*
определить кнопку которую кликнули
не дать кликнуть дизаблед
запомнить зис
поставить акт на деф
зис на акт

поменять заголовок 
*/

$("div.pif-btn-default").click(function () {
  alert("Handler for .click()");
  console.log(this);

  $("div.pif-btn-default").prev();
  /*child ex */
  $("div").children("input");
});
