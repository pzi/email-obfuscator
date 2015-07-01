/*! email-obfuscator - v0.1.4 | MIT License | https://github.com/pzi/email-obfuscator */
;(function() {
  "use strict";

  var EmailObfuscator = function (selector) {
    var parentEl = selector.parentNode;

    var shouldExpose = function (expose_value) {
      if (typeof expose_value !== "undefined" && expose_value.length < 1) {
        return true;
      } else if (expose_value === true || expose_value === 1) {
        return true;
      }
      return false;
    };

    var linkBuilder = function (selector) {
      var prefix = selector.getAttribute('data-email-prefix');
      var suffix = selector.getAttribute('data-email-suffix');
      var expose_value = selector.getAttribute('data-email-expose');
      var email = "" + prefix + "@" + suffix;
      var text = shouldExpose(expose_value) ? email : selector.innerHTML;

      var emailLink = document.createElement('a');
      emailLink.setAttribute('href', 'mailto:' + email);
      emailLink.innerHTML = text;

      return emailLink;
    };

    var link = linkBuilder(selector);

    parentEl.replaceChild(link, selector);

    return parentEl;
  };

  // Helpers borrowed from Lea Verou's Awesomeplete
  // Source: https://github.com/LeaVerou/awesomplete/
  var slice = Array.prototype.slice;

  function $(expr, con) {
    return typeof expr === "string"? (con || document).querySelector(expr) : expr || null;
  }

  function $$(expr, con) {
    return slice.call((con || document).querySelectorAll(expr));
  }

  $.create = function(tag, o) {
    var element = document.createElement(tag);

    for (var i in o) {
      var val = o[i];

      if (i === "inside") {
        $(val).appendChild(element);
      }
      else if (i === "around") {
        var ref = $(val);
        ref.parentNode.insertBefore(element, ref);
        element.appendChild(ref);
      }
      else if (i in element) {
        element[i] = val;
      }
      else {
        element.setAttribute(i, val);
      }
    }

    return element;
  };

  EmailObfuscator.$ = $;
  EmailObfuscator.$$ = $$;

  // Attach obfuscateEmails on self
  if (typeof self !== 'undefined') {
    self.obfuscateEmails = function(selector) {
      return new EmailObfuscator(selector);
    };
  }

  return EmailObfuscator;
}());
