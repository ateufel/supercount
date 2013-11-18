# Supercount

jQuery Counter Kung Fu

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/luschn/jquery-supercount/master/dist/jquery.supercount.min.js
[max]: https://raw.github.com/luschn/jquery-supercount/master/dist/jquery.supercount.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/supercount.min.js"></script>
<script>
jQuery(function($) {
	var counter = $('#yourelement').supercount(from, to, step, time);
	counter.on('onCountFinished', function () {
		//count finished and stuff
	});
	counter.start();
});
</script> 
```
## Release History
0.1 initial release, works fine already