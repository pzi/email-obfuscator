;(function($) {
  "use strict";

  $.fn.obfuscateEmails = function() {

    $('[data-email-prefix]').replaceWith(function() {
      var $email = $(this),
          prefix = $email.data('email-prefix'),
          suffix = $email.data('email-suffix'),
          expose = $email.data('email-expose'),
          email = "" + prefix + "@" + suffix,
          text = (typeof expose === "undefined") ? $email.text() : email;

      return $("<a href='mailto:" + email + "'>" + text + "</a>");
    });

    return this;

  };

}(jQuery));
