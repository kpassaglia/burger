//devour
  $(".delburger").on("click", function (event) {
    var id = $(this).data("burgerid");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted id ", id);
        location.reload();
      }
    );
  });

  //Make
  $("#createburger").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#createburger [name=burger]").val()
    };

    // Send the POST request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
