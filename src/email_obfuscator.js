;(function($) {
  "use strict";

  $.fn.obfuscateEmails = function () {

    var shouldExpose = function (expose_value) {
      if (typeof expose_value !== "undefined" && expose_value.length < 1) {
        return true;
      } else if (expose_value === true || expose_value === 1) {
        return true;
      }
      return false;
    };

    this.find('[data-email-prefix]').replaceWith(function () {
      var $email = $(this);
      var prefix = $email.data('email-prefix');
      var suffix = $email.data('email-suffix');
      var expose_value = $email.data('email-expose');
      var email = "" + prefix + "@" + suffix;
      var text = shouldExpose(expose_value) ? email : $email.text();

      return $("<a href='mailto:" + email + "'>" + text + "</a>");
    });

    return this;

  };

}(jQuery));
