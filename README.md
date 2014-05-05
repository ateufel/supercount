# Supercount

jQuery Counter Kung Fu

## Getting Started

Download the [production version](dist/jquery.supercount.js) or the [development version](dist/jquery.supercount.min.js).

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/supercount.min.js"></script>
<script>
jQuery(function($) {
	var counter = $('#yourelement').supercount({
		from: 0,
		to: 100,
		step: 1,
		stepTime: 100
	});
	counter.on('onCountFinished', function () {
		//count finished and stuff
	});
	counter.start();
});
</script> 
```
## Release History
1.0 initial release, ready to count!