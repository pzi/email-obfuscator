describe("obfuscateEmails", function() {

  function createContainer (data) {
    var $el = $("<span " + data + ">Example email</span>");
    var $container = $("<div/>");

    return $container.append($el);
  }

  describe("when expose is undefined", function() {

    var $container;
    function setup(){
      $container = createContainer("data-email-prefix='mail' data-email-suffix='example.com'");
      return $container;
    }

    function act () {
       return $container.obfuscateEmails();
    }

    it("changes span to be a link", function() {
      setup();
      act();
      expect($container.find('a').length).toBe(1);
    });

    it("does not change the link text", function() {
      setup();
      act();
      expect($container.find('a').text()).toBe("Example email");
    });

    it("sets the mailto to be the email address", function() {
      setup();
      act();
      expect($container.find('a').attr('href')).toBe("mailto:mail@example.com");
    });
  });

  describe("when expose is defined", function() {
    it("exposes the email address", function() {
        var $container = createContainer("data-email-prefix='mail' data-email-suffix='example.com' data-email-expose");

      $container.obfuscateEmails();
      expect($container.find('a').text()).toBe("mail@example.com");
    });
  });
  // TODO:
  //    test for expose false
  //    test for targeting a different container
});
