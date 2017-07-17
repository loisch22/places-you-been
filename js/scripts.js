function Place(destination, locale, landmark, year, notes) {
  this.destination = destination;
  this.locale = location;
  this.landmark = landmark;
  this.year = year;
  this.notes = notes;
};

// Contact.prototype.displayInfo = function() {
//   return
// };

$(document).ready(function() {
  $("#new-destination").submit(function(event) {
    event.preventDefault();

    var inputtedDestination = $("input#new-destination").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlace = new Place(inputtedDestination, inputtedLocation, inputtedLandmark, inputtedYear, inputtedNotes);

    $("ul#places").append("<li><span class='places'>" + inputtedDestination + "</span></li>" + "<li><span class='places'>" + inputtedLocation + "</span></li>" + "<li><span class='places'>" + inputtedLandmark + "</span></li>" + "<li><span class='places'>" + inputtedYear + "</span></li>" + "<li><span class='places'>" + inputtedNotes + "</span></li>")

    $("input#new-destination").val("");
    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-year").val("");
    $("input#new-notes").val("");
  });
});
