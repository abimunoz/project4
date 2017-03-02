// Component to change to random color on click.
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var COLORS = ['red', 'green', 'blue', 'purple'];
    this.el.addEventListener('click', function (evt) {
      var randomIndex = Math.floor(Math.random() * COLORS.length);
      this.setAttribute('material', 'color', COLORS[randomIndex]);
      newColor = COLORS[randomIndex];
      console.log('I was clicked at: ', evt.detail.intersection.point);
      console.log('this', this.id);
      console.log('evt', evt);
      console.log(randomIndex);
      console.log(COLORS[randomIndex]);
      updateEntity(this.id);
    });
  }
});

function updateEntity (id) {
  $.ajax({
  url: '/' + id,
  type: 'PUT',
  data: {test: 'test'},
  success: function(data) {
    console.log(data);
  }, error: function(err) {
    console.log(err);
  }
});
}
