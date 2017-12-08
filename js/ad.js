mscConfirm({
  title: 'Sponsored Ad',

  subtitle: 'Would you like to make extra income by taking surveys?',  // default: ''

  okText: 'Yes',    // default: OK

  cancelText: 'I Dont', // default: Cancel,

  dismissOverlay: true, // default: false, closes dialog box when clicked on overlay.

  onOk: function() {
    alert('Awesome.');
  },

  onCancel: function() {
    alert('Sad face :( .');
  }
});
