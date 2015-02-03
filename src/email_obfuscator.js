;(function($, window, document, undefined) {
  "use strict";

  $(function() {
    return $('[data-email-prefix]').each(function() {
      var $email, email, expose, prefix, suffix, text;
      $email = $(this);
      prefix = $email.data('email-prefix');
      suffix = $email.data('email-suffix');
      expose = $email.data('email-expose');
      email = "" + prefix + "@" + suffix;
      text = expose ? email : $email.text();
      return $email.replaceWith("<a href='mailto:" + email + "'>" + text + "</a>");
    });
  });

})(jQuery, window, document);
