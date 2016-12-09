/* Homepage or default URL */
FlowRouter.route( '/', {
  action: ()=> {
    BlazeLayout.render( 'layout', { main: 'fivedaysweather' });
  },
  name: 'Next five days forecast'
});

/* URL that don't exists on the server go here.*/
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('layout', {main: 'notFound'});
  }};
