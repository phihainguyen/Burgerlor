// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-ate").on("click", function(event) {
    var id = $(this).data("id");
    var newAte = $(this).data("newate");
    console.log("this is the newAte " + newAte);

    console.log("this is the id " + id);

    var newEatenState = {
      ate: newAte
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(function() {
      console.log("changed ate to", newAte);
      // Reload the page to get the updated list
      console.log(newEatenState);
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca")
        .val()
        .trim(),
      ate: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
