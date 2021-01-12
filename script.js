var T = $("#clock").html(moment().format("MMMM Do YYYY, h:mm:ss a"));

$(document).ready(function () {
  var saveButton = $(".save");
  var clearBtn = $("#clear-btn");

  $("#input6").val(localStorage.getItem("message1"));
  saveButton.on("click", function () {
    var msg = $("#input6").val();
    localStorage.setItem("message1", msg);
    console.log(msg);
  });
  $("#input7").val(localStorage.getItem("message2"));
  saveButton.on("click", function () {
    var msg = $("#input7").val();
    localStorage.setItem("message2", msg);
    console.log(msg);
  });
  $("#input8").val(localStorage.getItem("message3"));
  saveButton.on("click", function () {
    var msg = $("#input8").val();
    localStorage.setItem("message3", msg);
    console.log(msg);
  });
  $("#input9").val(localStorage.getItem("message4"));
  saveButton.on("click", function () {
    var msg = $("#input9").val();
    localStorage.setItem("message4", msg);
    console.log(msg);
  });

  clearBtn.on("click", function () {
    localStorage.clear();
    location.reload(true);
  });
});
