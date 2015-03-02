Buster.PostsController = Ember.Controller.extend({
  imageOneShowing: true,
  imageTwoShowing: false,
  imageThreeShowing: false,
  imageFourShowing: false,
  actions: {
    showImageTwo: function() {
      this.set('imageOneShowing', false);
      this.set('imageTwoShowing', true);
      this.set('imageThreeShowing', false);
      this.set('imageFourShowing', false);
    },
    showImageThree: function() {
      this.set('imageOneShowing', false);
      this.set('imageTwoShowing', false);
      this.set('imageThreeShowing', true);
      this.set('imageFourShowing', false);
    },
    showImageFour: function() {
      this.set('imageOneShowing', false);
      this.set('imageTwoShowing', false);
      this.set('imageThreeShowing', false);
      this.set('imageFourShowing', true);
    },
    showImageOne: function() {
      this.set('imageOneShowing', true);
      this.set('imageTwoShowing', false);
      this.set('imageThreeShowing', false);
      this.set('imageFourShowing', false);
    }
  }
});
