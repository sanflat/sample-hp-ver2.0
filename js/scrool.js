$(document).ready(function() {
	$('#pagepiling').pagepiling({
        menu: '#nav',
        anchors: ['page1', 'page2', 'page3','page4', 'page5', 'page6','page7'],
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'],
        // anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});
