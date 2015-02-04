/*! email-obfuscator - v0.1.0 | MIT License |  https://github.com/pzi/email-obfuscator */
;(function($) {
  "use strict";

  $.fn.obfuscateEmails = function() {

    this.find('[data-email-prefix]').replaceWith(function() {
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
