mscConfirm({

  subtitle: 'Would you like to earn in USD by taking surveys?',  // default: ''

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
