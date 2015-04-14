"use strict";

describe("obfuscateEmails", function() {

  var $container;

  function createContainer (data) {
    var $el = $("<span " + data + ">Example email</span>");
    var $container = $("<div/>");

    return $container.append($el);
  }

  function sharedBehaviourWhenEmailShouldBeExposed (data) {
    var $container;

    // Arrange
    beforeEach(function () {
      $container = createContainer("data-email-prefix='mail' data-email-suffix='example.com'" + data);
      return $container;
    });

    // Act
    beforeEach(function () {
      return $container.obfuscateEmails();
    });

    // Assert
    it("exposes the email address", function() {
      expect($container.find('a').text()).toBe("mail@example.com");
    });
  }

  function sharedBehaviourWhenEmailShouldNotBeExposed (data) {
    var $container;

    // Arrange
    beforeEach(function () {
      $container = createContainer("data-email-prefix='mail' data-email-suffix='example.com'" + data);
      return $container;
    });

    // Act
    beforeEach(function () {
      return $container.obfuscateEmails();
    });

    // Assert
    it("does not expose the email address", function() {
      expect($container.find('a').text()).not.toBe("mail@example.com");
    });
  }

  describe("when expose is undefined", function() {

    // Arrange
    beforeEach(function (){
      $container = createContainer("data-email-prefix='mail' data-email-suffix='example.com'");
      return $container;
    });

    // Act
    beforeEach(function () {
      return $container.obfuscateEmails();
    });

    // Assert
    it("changes span to be a link", function() {
      expect($container.find('a').length).toBeTruthy();
    });

    it("does not change the link text", function() {
      expect($container.find('a').text()).toBe("Example email");
    });

    it("sets the mailto to be the email address", function() {
      expect($container.find('a').attr('href')).toBe("mailto:mail@example.com");
    });

  });

  describe("when expose is defined", function() {

    sharedBehaviourWhenEmailShouldBeExposed("data-email-expose");

    describe("and it is set to true", function() {
      sharedBehaviourWhenEmailShouldBeExposed("data-email-expose='true'");
    });

    describe("and it is set to 1", function() {
      sharedBehaviourWhenEmailShouldBeExposed("data-email-expose='1'");
    });

    describe("and it is set to false", function() {
      sharedBehaviourWhenEmailShouldNotBeExposed("data-email-expose='false'");
    });

    describe("and it is set to 0", function() {
      sharedBehaviourWhenEmailShouldNotBeExposed("data-email-expose='0'");
    });

    describe("and it is set to 'foo'", function() {
      sharedBehaviourWhenEmailShouldNotBeExposed("data-email-expose='foo'");
    });

  });

  // TODO:
  //    test for targeting a different container
  //    test for copying set span attributes
});
