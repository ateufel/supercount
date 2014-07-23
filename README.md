# Supercount

jQuery Counter Kung Fu

## Getting Started

<<<<<<< HEAD
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/luschn/jquery-supercount/master/dist/jquery.supercount.min.js
[max]: https://raw.github.com/luschn/jquery-supercount/master/dist/jquery.supercount.js
=======
Download the [production version](dist/jquery.supercount.js) or the [development version](dist/jquery.supercount.min.js).
>>>>>>> 9d6420a0543aef2764ef260dac3f68280fea3aac

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