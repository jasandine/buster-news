Buster.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('hocStory')
  this.resource('bballStory')
  this.resource('boehnerStory');
  this.resource('oilStory');
  this.resource('entertainment');
  this.resource('politics');
  this.resource('science');
  this.resource('sports');
});
