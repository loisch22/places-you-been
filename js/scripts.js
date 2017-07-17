function Place(destination, locale, landmark, year, notes) {
  this.destination = destination;
  this.locale = location;
  this.landmark = landmark;
  this.year = year;
  this.notes = notes;
};

Place.prototype.displayDestination = function() {
  return this.destination;
};

Place.prototype.placesInfo = function() {
  return this.locale + " " + this.landmark + " " + this.year + " " + this.notes;
}

$(document).ready(function() {
  $("#new-destination").submit(function(event) {
    event.preventDefault();
debugger;
    var inputtedDestination = $("input#new-destination").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlace = new Place(inputtedDestination, inputtedLocation, inputtedLandmark, inputtedYear, inputtedNotes);


    $("ul#places").append("<li><span class='places'>" + inputtedDestination + "</span></li>" + "<li><span class='places'>" + inputtedLocation + "</span></li>" + "<li><span class='places'>" + inputtedLandmark + "</span></li>" + "<li><span class='places'>" + inputtedYear + "</span></li>" + "<li><span class='places'>" + inputtedNotes + "</span></li>");

    $("#placeName").click(function(event) {
      $("#places").show();

      event.preventDefault();
    });

    $("input#new-destination").val("");
    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-year").val("");
    $("input#new-notes").val("");

  });
});
