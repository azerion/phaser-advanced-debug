# Phaser Debug

Not so simple debug module for the [Phaser][0] game framework.

Forked from the [phaser-debug][2] plugin made by englercj

![Screenshot][1]

[0]: https://github.com/photonstorm/phaser
[1]: https://dl.dropboxusercontent.com/u/1810371/pics/phaser-debug.png
[2]: https://github.com/englercj/phaser-debug
## Usage

Simply download the `phaser-debug.js` script from the [latest release][10] and include it on your page
after including Phaser:

```html
<script src="phaser.js"></script>
<script src="phaser-debug.js"></script>
```

After adding the script to the page you can activate it by enabling the plugin:

```js
game.add.plugin(Phaser.Plugin.Debug);
```

[10]: https://github.com/orange-games/phaser-advanced-debug/releases

## Browser Support

Currently this module supports the following browsers:

 - Desktop
  * Chrome 27+
