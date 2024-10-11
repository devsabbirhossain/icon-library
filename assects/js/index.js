var icons = document.querySelectorAll(".mil-icon-picker");

icons.forEach(function (icon) {
  var ids = [];
  var elements = icon.querySelectorAll("*[id]");

  elements.forEach(function (element) {
    ids.push("#" + element.id);
  });

  MagnetPicker({
    selector: ids[2],
    onClick: ids[4],
    inputField: ids[1],
    iconPlaceholder: ids[0],
    removeIcon: ids[3],
  });

  ids = [];
});

var icons = document.querySelectorAll(".mil-icon-picker-multiple");

icons.forEach(function (icon) {
  var ids = [];
  var elements = icon.querySelectorAll("*[id]");

  elements.forEach(function (element) {
    ids.push("#" + element.id);
  });

  MagnetPicker({
    selector: ids[2],
    onClick: ids[4],
    inputField: ids[1],
    iconPlaceholder: ids[0],
    removeIcon: ids[3],
  });

  ids = [];
});

// jQuery(document).ready(function ($) {
//   var ids = [];
//   $(".wcptm-icon-picker").each(function () {
//     $(this)
//       .find("*[id]")
//       .each(function () {
//         ids.push("#" + $(this).attr("id"));
//       });
//     MagnetPicker({
//       selector: ids[2],
//       onClick: ids[4],
//       inputField: ids[1],
//       iconPlaceholder: ids[0],
//       removeIcon: ids[3],
//     });
//     ids = [];
//   });
// });
