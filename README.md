# email-obfuscator [![Build Status](https://travis-ci.org/pzi/email-obfuscator.svg?branch=master)](https://travis-ci.org/pzi/email-obfuscator)

> Protect email addresses on your website from harvesting spam bots.


## Install

```sh
$ bower install --save email-obfuscator
```

## Usage
1. Include jQuery
2. Include the email-obfuscator script (preferably in the footer of your website):
    ```html
    <script src="dist/email_obfuscator.min.js"></script>
    ```

3. Call the plugin:
    ```js
    $(document).obfuscateEmails()
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
* Add more tests
* Improve element selector
* Include other html attributes in the conversion

## License
MIT © [Patrik Affentranger](http://patrikaffentranger.me)
