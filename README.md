# email-obfuscator [![Build Status](https://travis-ci.org/pzi/email-obfuscator.svg?branch=master)](https://travis-ci.org/pzi/email-obfuscator) ![dependencies](https://david-dm.org/pzi/email-obfuscator/dev-status.svg)

> Protect email addresses on your website from harvesting spam bots.


## Install

**Bower**
```sh
$ bower install --save email-obfuscator
```

**GitHub**
```sh
$ git clone https://github.com/pzi/email-obfuscator.git
```

or download the [latest release as a zip](https://github.com/pzi/email-obfuscator/releases).


## Usage
1. Include jQuery
    ```html
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    ```

2. Include the email-obfuscator script (preferably in the footer of your website):
    ```html
    <script src="dist/email_obfuscator.min.js"></script>
    ```

3. Call the plugin (on a container):
    ```js
    $('body').obfuscateEmails()
    ```

4. Add an e-mail address to your HTML body:
    ```html
    <span data-email-prefix="mail" data-email-suffix="example.com">Example email 1</span>
    <!-- <a href="mailto:mail@example.com">Example email 1</a> -->

    <!-- (Optional) Still show the email address -->
    <span data-email-prefix="mail" data-email-suffix="example.com" data-email-expose>Example email 2</span>
    <!-- <a href="mailto:mail@example.com">mail@example.com</a> -->
    ```


## TODO
* Add example gh-page
* Add plain js version
* Add more tests (jquery chainable)
* Improve element selector
* Include other html attributes in the conversion

## License
MIT © [Patrik Affentranger](http://patrikaffentranger.me)
