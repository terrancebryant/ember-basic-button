import Controller from '@ember/controller';

export default Controller.extend({
  tester: [{ first: 'terrance', last: 'bryant'}, { first: 'joyce', last: 'bryant'}],

  actions: {
    click(event, args) {
      console.log(event, args)
      console.log('button has been clicked')
    }
  }
});