<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">



<html>
<head>
<title>Legal Aid Ontario</title>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="Keywords" content="Legal Aid Ontario LAO Law help lawyers assistance attorney toronto" />

<link rel="shortcut icon" href="/images/favicon.ico" >
<link rel="stylesheet" href="/includes/responsive.css" type="text/css" media="screen" />
<link rel="stylesheet" href="/includes/buildingblocks_v4c.css" type="text/css" media="screen" />

<script language="JavaScript" src="../../includes/javascripts.js"></script>
<script language="JavaScript" src="../../includes/domUtils.js"></script>

</head>

<body>
<a name="top"></a>


<!-- Page Header -->
<div id="header">
	<script type="text/javascript" src="/includes/jquery-ui-1.10.3.custom/js/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="/includes/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.js"></script> 

<!-- Shivs: for older system (if IE less than v.9) -->
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<link href='http://fonts.googleapis.com/css?family=Merriweather:400,700,300,900' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Merriweather+Sans:400,700,800,300' rel='stylesheet' type='text/css'>

<link type="text/css" href="/includes/jquery-ui-1.10.3.custom/css/redmond/jquery-ui-1.10.3.custom.css" rel="Stylesheet" />
<!-- 	
		Everything within the following script tag is a jQuery implementation of the Google Analytics tracker. It should
		accomplish everything that the older one below does, with the benefit of allowing me to use jQuery to track
		external and document hits elsewhere in the site.
-->



<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-11568390-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

<script>

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-40149147-1', 'legalaid.on.ca');
  ga('send', 'pageview');

</script>


<script type="text/javascript">

var month=new Array();
month[0]="January";
month[1]="February";
month[2]="March";
month[3]="April";
month[4]="May";
month[5]="June";
month[6]="July";
month[7]="August";
month[8]="September";
month[9]="October";
month[10]="November";
month[11]="December";

var month_fr = new Array("janvier", "f&eacute;vrier", "mars", "avril", "mai", "juin", "juillet", "ao&ucirc;t", "septembre", "octobre", "novembre", "d&eacute;cembre");

// the ajax call for blog posts on the main page
function gimmedata (dp1) {

	return $.ajax({
		url: '/en/blogdata.php', 
		context: this,
		data: { isajax: 'yes', thelanguage: 'en' },
		dataType: 'json',
		cache: false,
		beforeSend: function () {
			//$("#content_main").append("<img id='loading' style='z-index:1000;display: block; position: absolute; bottom: 15px; right: 12px;' src='/projects/csc/images/new/loading.gif'>");
		},
	    error: function (xhr, ajaxOptions, thrownError) {
	        $("#updates").html(xhr.status + "<br><br>" + thrownError);
	    }
	});

}

function posTop() {
	return typeof window.pageYOffset != 'undefined' ? window.pageYOffset: document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop? document.body.scrollTop:0;
	}


$(document).ready(function(){

		// everything within the following $.when call loads blog posts to the main page asynchronously 
		$.when ( gimmedata() ).done ( function(data) { 

			if ( data["pages"] > 0 && $("#whereToStart").length ) {

				for (var z = 0; z < 1; z++) { 

					if ( data["posts"][z]["date"] ) {

						var thedate = data["posts"][z]["date"];

						var thedateyear = thedate.substring(0,4);
						var thedatemonth = thedate.substring(5,7);
						var thedateday = thedate.substring(8,10);

						thedatemonth = month[parseInt(thedatemonth)-1];

						if ( thedateday.substring(0,1) == "0" ) { thedateday = thedateday.substring(1,2); }

						thedate = thedate.substring(0,10);

						var blogstring = "<strong><a href='"+data["posts"][z]["url"]+"'>"+data["posts"][z]["title"]+"</a></strong><br>";

						blogstring += "<span style='font-size:9px; color: #666666'>"+thedatemonth+" "+thedateday+", "+thedateyear+"</span><br>";

						blogstring += data["posts"][z]["excerpt"]+"<br>";

						$("#updates").append( blogstring );

					}

				}

			} else {

				//$("#updates").append( "There are no blog posts." );

			}
	
		});

		// "top of page" code:
		$(window).scroll(function() {

var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//alert( top );
			// if the user scrolls below a certain point
			if( top > 70 ) {

				// fade in the top of page button
				$('#topofpage').fadeIn();	


			} else {

				// if back to the top, fade it out
				$('#topofpage').fadeOut();

			}

		});

		// if the user clicks the top of page button:
		$('#topofpage').click( function() { 

			// smoothly move the viewport to the top of the page
			$('html,body').animate({ scrollTop: 0 }, 1200, 'easeOutQuart', function() {

				// (disable page navigation while the scrolling occurs) 
				$("html, body").unbind("scroll mousedown DOMMouseScroll mousewheel keyup");

			});

		});




	 // the following is our new eligibility message, only on /info/ pages
	// if( document.URL.indexOf("/en/infozz") >= 0 ) { 

	// $("#navbar_top").after("<figure class='fe_box'><p><strong>Effective June 8, 2015</strong>,Â LAO is offering <strong>new</strong>Â certificates that cover a wider range of legal initiatives to meet client needs, expand client-focussed services, and improve access to justice.</p><p><a href='/en/info/legaleligibility.asp'>Learn more</a>.</p></figure>");

	// }


	// the following is our new eligibility message, only on /info/ pages
	

	//  if( document.URL.indexOf("/en/info") >= 0 ) { 

	//	if ( document.URL.indexOf("default") >= 0 || document.URL.indexOf("asp") < 0 ) {

		// 	 console.log ( document.URL );

		// 	$("#navbar_top").after("<div id='popupDiv'><figure class='cardsort'><img src='/images/figure_cardsort.jpg'><h1>Sort us out!</h1><h2>Weâ€™re evaluating the <a href='/en/info/'><em>Information for Lawyers</em></a> part of this website.</h2><p>Can you find everything you need? If youâ€™ve got a moment, please visit our electronic sorting exercise to put everything where you think it belongs.</p><p>Don't have time to visit the link? Then <a href='mailto:westenc@lao.on.ca?subject=Feedback on LAO website - info for lawyers section'>send us an email</a> if you've got feedback.</p><p><em>Please note this is exclusive to </em>Information for Lawyers<em> and does not include the Legal Aid Online billing portal.</em></p><form action='http://ows.io/os/04ir0p00'><input type='submit' value='Start sorting!'></form><p style='text-align:right; font-size:0.8em'><a href='JavaScript:void(0)' id='close'>close</a></p></figure></div>");

		// }
		// }

	//FEEDBACK SURVEY (LARGE)
	//the following is our client feedback message, only on /getting/ pages
	if( document.URL.indexOf("/en/getting") >= 0 ) { 

		// only open the survey if the user has never acknowledged it before (read from previously set cookie)
		var chocolatechip = document.cookie;

		if ( chocolatechip.indexOf( "hidefeedback" ) >= 0 ) {

		} else {

   		$("#navbar_top").after("<div id='popupDiv'><figure class='clientfeedbackmini'><img src='/images/figure_clientfeedbackmini.png' alt=''><h1>Share your thoughts</h1><p>If you've used any Legal Aid Ontario service in the past, we'd like your feedback! This survey will take less than five minutes to complete, is designed to help us improve our services so that we can assist you better and is completely confidential.</p><span class='clientfeedbackclosemini' role='button' id='close' onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>Close</span><a class='clientfeedbackstartmini' href='http://lao.fluidsurveys.com/surveys/lao-surveys/split-page-laocss-2015-16-for-website/?p=0&k=&h=14741b829882f8efd8dd6b5907f0b08d&s=eyJwYWdlcGF0aCI6IFswXSwgInJhbmRvbV9zZWVkIjogIjdjMDRjZmI3MDZjZmY3NGVmNGU5MGY0NjVjMmU5MzQ3MTZlMTgzYjkifQ%3D%3D&n=.&l=en'>Get started</a></figure></div>");

   		}


	 // $("#navbar_top").after("<div id='popupDiv'><figure class='clientfeedback'><img src='/images/figure_clientfeedback.png' alt=''><h1>Share your thoughts</h1><p>If you've used any Legal Aid Ontario service in the past, we'd like your feedback! This survey will take less than five minutes to complete, is designed to help us improve our services so that we can assist you better and is completely confidential.</p><span class='clientfeedbackclose' id='close' onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>close</span><a class='clientfeedbackstart' href='http://lao.fluidsurveys.com/surveys/lao-surveys/split-page-laocss-2015-16-for-website/?p=0&k=&h=14741b829882f8efd8dd6b5907f0b08d&s=eyJwYWdlcGF0aCI6IFswXSwgInJhbmRvbV9zZWVkIjogIjdjMDRjZmI3MDZjZmY3NGVmNGU5MGY0NjVjMmU5MzQ3MTZlMTgzYjkifQ%3D%3D&n=.&l=en'>Get started</a></figure></div>");


		// 	hide client feedback window under "getting" if the user has already closed it
		$(".clientfeedbackclosemini").click( function() {

			document.cookie = "hidefeedback=1; expires=Tue, 1 Nov 2016 12:00:00 UTC";

		});

	 	
	 }

//FEEDBACK SURVEY (SMALL)
  //the following is our client feedback message, only on /getting/ pages

  	//if( document.URL.indexOf("/en/getting") >= 0 ) { 

	 //	if ( document.URL.indexOf("default") <= 0 || document.URL.indexOf("asp") < 0 ) {

		// console.log ( document.URL );

		// $("#navbar_top").after("<div id='popupDiv'><figure class='clientfeedbackmini'><img src='/images/figure_clientfeedbackmini.png' alt=''><h1>Share your thoughts</h1><p>If you've used any Legal Aid Ontario service in the past, we'd like your feedback! This survey will take less than five minutes to complete, is designed to help us improve our services so that we can assist you better and is completely confidential.</p><span class='clientfeedbackclosemini' role='button' id='close' onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>Close</span><a class='clientfeedbackstartmini' href='http://lao.fluidsurveys.com/surveys/lao-surveys/split-page-laocss-2015-16-for-website/?p=0&k=&h=14741b829882f8efd8dd6b5907f0b08d&s=eyJwYWdlcGF0aCI6IFswXSwgInJhbmRvbV9zZWVkIjogIjdjMDRjZmI3MDZjZmY3NGVmNGU5MGY0NjVjMmU5MzQ3MTZlMTgzYjkifQ%3D%3D&n=.&l=en'>Get started</a></figure></div>");

	 //	}


  //	}

	// jquery tracker code implementation from carronmedia

    // var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
    // $.getScript(gaJsHost + "google-analytics.com/ga.js", function(){

    //     try {
    //         var pageTracker = _gat._getTracker("UA-11568390-1");
    //         pageTracker._trackPageview();
								
    //     } catch(err) { }

        var filetypes = /\.(zip|exe|pdf|doc*|xls*|ppt*|mp3)$/i;

		// the following each() block tracks clicks on the front-page pull-down menu.
		
		$('.pulldown > a').each(function() {
		
			var pulldownTitle = $(this).text();
		
			 //console.log("Test: "+$(this).attr('href') + ", " + pulldownTitle);
			
			$(this).click(function() {
			
				// pageTracker._trackevent('Internal', 'Pulldown click', pulldownTitle);

				_gaq.push(['_trackEvent', 'Internal', 'Pulldown click', pulldownTitle]);
		
			});
		
		});

		// the following tracks initial views of our consultation vids

		$('div.openAndClose> h4').click(function() {

			var vidtitle = $(this).text();

			var titleh1 = $("h1").text();

			// alert ( $(this).next('div').css('display') );


			// alert ( titleh1 );



			// pageTracker._trackevent('Consultation', titleh1, vidtitle);

			_gaq.push(['_trackEvent', 'Consultation', titleh1, vidtitle]);

		});
		
		// the following each() bock tracks all other trackable clicks across the site

        $('a[href]').each(function(){
		
            var href = $(this).attr('href');
			
			
			
			
			//console.log ( (href.match(/\.rss/gi)) && (href.match(/\/en\//gi)) );
			
            if ((href.match(/^https?\:/i)) && (!href.match(document.domain))){

                $(this).click(function() {
                    var extLink = href.replace(/^https?\:\/\//i, '');
                    // pageTracker._trackevent('External', 'Click - link', extLink);

                    _gaq.push(['_trackEvent', 'External', 'Click - link', extLink]);
	

                });
            }
			else if (href.match(/\.rss/gi)){
                $(this).click(function() {
                    var mailLink = href.replace(/^mailto\:/i, '');
                    // pageTracker._trackevent('RSS', 'English', mailLink);

                    _gaq.push(['_trackEvent', 'RSS', 'English', mailLink]);

                });
			}
            else if (href.match(/^mailto\:/i)){
                $(this).click(function() {
                    var mailLink = href.replace(/^mailto\:/i, '');
                    // pageTracker._trackevent('Email', 'Click - mailto', mailLink);

                    _gaq.push(['_trackEvent', 'Email', 'Click - mailto', mailLink]);

                });
            }
            else if (href.match(filetypes)){
                $(this).click(function() {
                    var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
                    var filePath = href.replace(/^https?\:\/\/(www.)legalaid\.on\.ca\//i, '');
                    // pageTracker._trackevent('Download', 'Click - ' + extension, filePath);
                    extension = extension.toString();

                    extension = extension.substring(0,3);
                    //console.log ( extension );
                    _gaq.push(['_trackEvent', 'Download', 'Click - ' + extension, filePath]);
				
                });
            }
            else if (href.match(/^javascript\:/i)){

				
                $(this).click(function() {

					// okay, this bad boy sends an Analytics event every time somebody EXPANDS a twisty
					// anywhere on the site. it harvests the contents of the first H1 tag to set a page title,
					// and it harvests the contents of the swap SPAN for an event title. clever, huh!

					var swapTitle = this.text;
					var pageTitle = $("h1").text();
					
					pageTitle = pageTitle.replace(/^\s*|\s*$/,"");
					
					swapTitle = swapTitle.replace(/^\s*|\s*$/,"");

					// the following bit of code ensures that an event is registered only if the area is being 
					// expanded, not contracted. 
					
					if (href.match(/true/i)) {

						// pageTracker._trackevent('Expand', pageTitle, swapTitle);

						_gaq.push(['_trackEvent', 'Expand', pageTitle, swapTitle]);
						

						
					}
					
				// javascript:swap(6, true)
				
                });
            }


            // append a unique timestamp to every pdf to force no caching
            if ( href.match("pdf") ) {

            	href = href + "?t=" + new Date().getTime();

            	$(this).attr('href', href);
            	//console.log ( href );

            }

        });
		

        // dynamic "top of page" test code

        // if we're on the block fees dev...
        if ( document.URL.indexOf("legalaiddev/en/info/blockfeesZZZ") >= 0 ) {

        	// ...and we have more than one section, counting by h2 tags
        	if ( $("#article h2").length > 1 ) {

        		// ...run this on each section
        		$("#article h2").each( function (i) {

        			// but only do it at the end of the *second* section
        			if ( i > 1 ) {

        				$(this).before( "<p class='totop'><a href='#top'>Top of page</a></p>" );

        			}

        		});

        	}

        }


		
});

</script>

<script>
$('#close').on('click', function(){
        $("#popupDiv").hide();
        $("#popupDiv").removeClass("active");
    });
	</script>

<!-- Google Analytics Tracker (laowebmonkeys@gmail.com account) -->
<!--<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-11568390-1");
pageTracker._trackPageview();
} catch(err) {}</script> -->

<!-- Old version - the media account 
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-4369736-1");
pageTracker._trackPageview();
} catch(err) {}</script> -->







<!-- New version - with dark blue bg bar -->
<!-- Skip to content -->
<div id="skip"><a href="#article" class="element-invisible element-focusable" onclick="_gaq.push(['_trackPageview', location.pathname + location.search + '#article']);">Skip to main content</a></div>

<div style="float:right; width:350px; height:20px; background: url(/images/bgtile_headermenu.gif) repeat-x top center;">
<td>
<p><a href="/en/">Home</a>  |  <a href="/en/search.asp">Search</a>  |  <a href="/en/careers/default.asp">Careers</a>  |  <a href="/en/contact/default.asp">Contact</a>  |  <a href="http://www.legalaid.on.ca/404.asp">Fran&ccedil;ais&nbsp;<img src="/images/icon-Franco-flag.gif" border=0 align="absmiddle" alt="" lang="fr-CA"></a></p>

</div>

<a href="/en/"><img id="headerLogo" src="/images/header_logo2.gif" border=0 alt="Legal Aid Ontario" align="left"></a>


<!-- ORG version 
<ul>
<li><a href="/en/default.asp">Home</a></li>
<li><a href="/en/search.asp">Search</a></li>
<li><a href="http://www.legalaid.on.ca/404.asp">FranÃ§ais</a></li>
<li class="end"><a href="/en/contact/default.asp">Contact LAO</a></li>
</ul>

<a href="/en/"><img src="/images/header_logo2.gif" border=0 height=110 width=180 alt="Legal Aid Ontario"></a>
-->	
	
	
</div>



<!-- Top Navigation Bar -->
<div id="navbar_top" align="center">
<script>
	
	$(function () {
		// VARS
		var $nav_arr = [],
				nav_num = $('#navbar_top a').length,
				newLink = '';

		var $nav_lao = $('.nav-lao'),
				$nav_burg = $('.nav-burg'),
				$nav_close = $('.nav-close');

		// MOBILE MENU - BUILD LINKS
		$('#navbar_top a').each(function (i) {
			
			$nav_arr[i] = $(this);

			// Filter out "=" and "x". jQ not() and :not() a no go.
			if ( $(this).text() !== $nav_burg.text() && $(this).text() !== $nav_close.text() ) {

				// Get link href and text
				var href = $(this).attr('href'),
						text = $(this).text();

				// Build new link
				newLink += '<li class="nav-link"><a href="'+href+'">'+text+'</a></li>';
			}

			// When interation is complete then add new links to DOM.
			if ( i == (nav_num - 1) ) {
				$('.nav-list').append(newLink);
			}
		});

		// MOBILE MENU - HIDE/SHOW
		$nav_burg.on('click',function () {
			$nav_lao.removeClass('is-closed').addClass('is-open');
		});

		$nav_close.on('click',function () {
			$nav_lao.addClass('is-closed').removeClass('is-open');
		});

		if( document.URL.indexOf( "/en/default" ) >= 0 ) { 
			$(".nav-close").css("display", "none");
			$(".nav-list").css("position", "relative");
			$(".nav-list").css("top", "0px");

			$nav_lao.removeClass('is-closed').addClass('is-open');

		}


		// VARS
		var $subMenuHead = $('.secondaryNavHead').length != 0 ? $('.secondaryNavHead') : $('#site-home'),
				subActive_str = $('.top-level .active').text();

		// Screen Size
		var winWidth = $(window).width(),
				winMobile = 768;
		
		// NOTE: Set boolean of return value for click callback.
		//			 1. Prevent default link action for Desktop (> 768px width) screens
		//			 2. Toggle open / close states for Mobile	(< 768px width) screens
		window.linkTo = false;

		// On load Window Width
		if ( winWidth < winMobile) {
			window.linkTo = false;
		} else {
			window.linkTo = true;
		}
		//console.log('linkTo: '+window.linkTo);

		// On resize window width
		$(window).on('resize', function (e) {
			
			// New width
			winWidth = $(window).width();
			
			if ( winWidth < winMobile) {
				window.linkTo = false;
			} else {
				window.linkTo = true;

				if ( $subMenuHead.hasClass('is-open') ) {
					$subMenuHead.removeClass('is-open').addClass('is-closed');
				} 
			}
			//console.log(linkTo);
		});

		// Click
		$subMenuHead.on('click', function () {
			var openClass = 'is-open',
					closedClass = 'is-closed';

			if ( $(this).hasClass(openClass) ) {
				$(this).removeClass(openClass).addClass(closedClass);
			} else {
				$(this).addClass(openClass).removeClass(closedClass);
			}	 
			
			//console.log('linkTo: '+window.linkTo);
			return window.linkTo;
			
		});

	});

</script>


<nav id="lao-nav" class="foobar nav nav-lao is-closed">
	<div class="nav-bar">
		<div>
			<a href="#" class="nav-burg nav-btn block">=</a>
			<a href="#" class="nav-close nav-btn block">x</a>
		</div>
	</div>
	<ul class="nav-list"></ul>
</nav>

<!-- Upper ~ Main Menu / Navigation Bar -->
<!-- <ul>
	<li><a href="/en/getting/default.asp">Getting Legal Help</a></li>
	<li><a href="/en/info/default.asp">Information for Lawyers</a></li>
	<li><a href="/en/news/default.asp">Newsroom</a></li>
	<li><a href="/en/publications/default.asp">Publications & Resources</a></li>
	<li><a href="/en/about/default.asp">About LAO</a></li>
</ul> -->
<table border=0 width=100% cellpadding=0 cellspacing=0 class="">
<tr valign="middle" align="center">
	<td class="off" onmouseover="this.className='on'" onmouseout="this.className='off'" onfocus="bar" onblur="bar"><strong><a href="/en/getting/default.asp">Getting Legal Help</a></strong></td>

<!-- Placer for LEO/Other resources material<td class="off" onmouseover="this.className='on'" onmouseout="this.className='off'" onfocus="bar" onblur="bar"><strong><a href="/en/info/default.asp">Information for Clients</a></strong></td> -->
	
	<td class="off" onmouseover="this.className='on'" onmouseout="this.className='off'" onfocus="bar" onblur="bar"><strong><a href="/en/info/default.asp">Information for Lawyers</a></strong></td>
	<td class="off" onmouseover="this.className='on'" onmouseout="this.className='off'" onfocus="bar" onblur="bar"><strong><a href="/en/news/default.asp">Newsroom</a></strong></td>
	<td class="off" onmouseover="this.className='on'" onmouseout="this.className='off'" onfocus="bar" onblur="bar"><strong><a href="/en/publications/default.asp">Publications & Resources</a></strong></td>	
	<td class="off" onmouseover="this.className='on'" onmouseout="this.className='off'" onfocus="bar" onblur="bar"><strong><a href="/en/about/default.asp">About LAO</a></strong></td>
	<td class="off" onmouseover="this.className='on'" onmouseout="this.className='off'" onfocus="bar" onblur="bar"><strong><a href="http://blog.legalaid.on.ca/">Blog</a></strong></td>

</tr>
</table>





</div>
<div id="page">


<!-- MAIN PAGE CONTENT -->
<div id="content_main">

<br>


<!-- <img src="/images/comic_page404.jpg" border=0 height=315 width=400 alt="Page not found" align="left"> -->

<h1 class="blue-dark">Page Not Found</h1>
<bR>

<p>The page you are looking for does not exist, has moved, or is no longer available. If you did not click on a link, you may wish to check the spelling to ensure that the address does not contain spelling mistakes.</p>
<p>Return to the <a href="/en/default.asp">homepage</a>.</p>


<hr style="height:1px; margin:15px 0px">

<h1 class="blue-dark">La page n'a pas été trouvée</h1>
<br>

<p>La page que vous cherchez n'existe pas, a été transférée ou n'existe plus. Si vous n'avez pas cliqué sur un lien, vous pouvez vérifier l'orthographe de l'adresse pour vous assurer qu'elle ne contient pas d'erreur.</p>
<p>Retour à la <a href="/fr/default.asp">page d'accueil</a>.</p>
<br>


<br clear="both">
 <!-- End of Content_main div -->

</div><!-- END of main page content -->


<!-- replaced lower nav bar into footer -->

<!-- Footer -->
<div id="footer">
<div id="topofpage"><a href="#top">&#94;</a></div>

<!-- Footer -->
<footer role="footer">
       <h2 id="footerNav">Site information</h2>
       <div id="footer">
              <!--[if lt IE 7]>
<script language="JavaScript">
function correctPNG() // correctly handle PNG transparency in Win IE 5.5 & 6.
{
   var arVersion = navigator.appVersion.split("MSIE")
   var version = parseFloat(arVersion[1])
   if ((version >= 5.5) && (document.body.filters)) 
   {
      for(var i=0; i<document.images.length; i++)
      {
         var img = document.images[i]
         var imgName = img.src.toUpperCase()
         if (imgName.substring(imgName.length-3, imgName.length) == "PNG" && imgName.substring(imgName.length-3, imgName.length) == "GOO")
         {
            var imgID = (img.id) ? "id='" + img.id + "' " : ""
            var imgClass = (img.className) ? "class='" + img.className + "' " : ""
            var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
            var imgStyle = "display:inline-block;" + img.style.cssText 
            if (img.align == "left") imgStyle = "float:left;" + imgStyle
            if (img.align == "right") imgStyle = "float:right;" + imgStyle
            if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
            var strNewHTML = "<span " + imgID + imgClass + imgTitle
            + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
            + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
            + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>" 
            img.outerHTML = strNewHTML
            i = i-1
         }
      }
   }    
}
window.attachEvent("onload", correctPNG);
</script>
<![endif]-->




<!-- TOP ROW - Container -->
<div style="border-top:6px solid #2e2e2e; margin-top:30px;">

<!-- Column 1 -->
<section>
<div style="float:left; width:25%;">
<div style="background:#fafafa; height:35px; position:relative; border-bottom: 2px solid #2e2e2e; margin-right: 14px">
<h3 style="border-top:none;font-weight:normal;color:#2e2e2e; font-size:1.3em; margin:0 5px 0 5px; position:absolute; bottom:8;">Getting legal help</h3>
</div>
<div style="margin: 10px 5px;">
<ul style="list-style:none; padding-left:0px;">
<li><a href="/en/getting/eligibility.asp">Are you eligible for legal aid?</a></li>
<li><a href="/en/getting/typesofhelp.asp">Types of help</a></li>
<li><a href="/en/getting/helpinthecourtroom.asp">Getting help in the courtroom</a></li>
<li><a href="/en/getting/type_civil-clinics.asp">Community and specialty clinics</a></li>
</ul>
</div>
</div>
</section> 
<!-- End of colmn 1 -->


<!-- Column 2 -->
<section>
<div style="float:left; width:25%;">
<div style="background:#fafafa; height:35px; position:relative; border-bottom: 2px solid #2e2e2e; margin-right: 14px">
<h3 style="border-top:none;font-weight:normal;color:#2e2e2e; font-size:1.3em; margin:0 5px 0 5px; position:absolute; bottom:8;">For lawyers</h3>
</div>
<div style="margin: 10px 5px;">
<ul style="list-style:none; padding-left:0px;">
<li><a href="/en/news/in-brief.asp">News and notices</a></li>
<li><a href="/en/info/legalaidonline.asp"><em>Legal Aid Online</em></a></li>
<li><a href="/en/info/lawyerservicecentre.asp">Billing inquiries</a></li>
<li><a href="/en/info/forms.asp">Forms library</a></li>
<li><a href="/en/info/lawyerworkforcestrategy.asp">Lawyer Workforce Strategy</a></li>
</ul>
</div>
</div> 
</section><!-- End of colmn 2 -->


<!-- Column 3 -->
<section>
<div style="float:left; width:25%;">
<div style="background:#fafafa; height:35px; position:relative; border-bottom: 2px solid #2e2e2e; margin-right: 14px">
<h3 style="border-top:none;font-weight:normal;color:#2e2e2e; font-size:1.3em; margin:0 5px 0 5px; position:absolute; bottom:8;">Resources</h3>
</div>
<div style="margin: 10px 5px;">
<ul style="list-style:none; padding-left:0px;">
<li><a href="/en/accessibility.asp">Accessibility</a></li>
<li><a href="/en/careers/default.asp">Careers at LAO</a></li>
<li><a href="/en/getting/legalaidapp.asp">Legal Aid Ontario mobile app</a></li>
<li><a href="/en/news/default.asp">News archives</a></li>
<li><a href="/en/links/default.asp">Other resources</a></li>
</ul>
</div>
</div> 
</section><!-- End of colmn 3 -->




<!-- Column 4 -->
<section>
<div style="float:left; width:24%;">
<div style="background:#fafafa; height:35px; position:relative; border-bottom: 2px solid #2e2e2e; margin-right: 0px">
<h3 style="border-top:none;font-weight:normal;color:#2e2e2e; font-size:1.3em; margin:0 5px 0 5px; position:absolute; bottom:8;">Contacts</h3>
</div>
<div style="margin: 10px 5px;">
<ul style="list-style:none; padding-left:0px;">
<li><a href="/en/getting/callus.asp">Call us toll-free for help</a></li>
<li><a href="/en/info/contactinfo.asp">Legal professionals</a></li> 
<li><a href="/en/news/default.asp">Media</a></li>
<li><a href="/en/contact/default.asp">Legal Aid Ontario information and services</a></li>
<li><a href="/en/getting/unhappywithourservice.asp">Making an appeal or complaint</a></li>
<li><a href="/en/getting/compliance.asp">Ethics hotline</a></li>
</ul>
</div>
</div> 
</section><!-- End of colmn 4 -->

<br clear="all" />


</div></div>





</div><!-- END OF top row - container -->







<!-- MIDDLE ROW 
<div style="background:#e3eaf0; margin-top:1em; padding-top:1em; padding-bottom:1em; border-top:1px solid #000; border-bottom:1px solid #000; color:#000;">
<center>
LAO network: <a href="http://www.legalaid.on.ca">Legal Aid Ontario</a> | <a href="http://blog.legalaid.on.ca/">LAO Blog</a>&nbsp; | &nbsp;<a href="http://www.lawfacts.ca">LawFacts.ca</a>&nbsp; | &nbsp;<a href="https://www.research.legalaid.on.ca/">LAO LAW</a>&nbsp; | &nbsp;<a href="http://www.legalaidonline.on.ca"><em>Legal Aid Online</em></a>
</center>
</div> -->


<!-- BOTTOM ROW -->
<div style="background:#FDFEFF; border-top:2px dotted #2e2e2e; padding-top:1em; padding-bottom:1em; padding-left:1em; padding-right:1em; font-size:0.95em;">
<!-- <p>Legal Aid Ontario (LAO), an independent but publicly funded and publicly accountable non-profit corporation. This site contains general legal information for Ontario, Canada. It is not intended to be used as legal advice for a specific legal problem. None of this material may be commercially reproduced, but copying for other purposes, with credit, is encouraged.</p> -->
<p>Legal Aid Ontario (LAO), an independent but publicly funded and publicly accountable non-profit corporation. None of this material may be commercially reproduced, but copying for other purposes, with credit, is encouraged.</p>

<div style="float:left; width:48%;">
<p>&copy; 1998-2016 Legal Aid Ontario, all rights reserved</p>
</div>

<div style="float:right; width:48%;">
<p align="right"><a href="/en/privacy/default.asp">Privacy Policy</a>&nbsp; | &nbsp;<a href="/en/accountability.asp">Accountability</a>&nbsp; | &nbsp;<a href="/en/disclaimer.asp">Disclaimer</a></p>
</div>
<br clear="both" />

</div>

</footer>








 
</div>


</div><!-- End of Page Div -->

</body>

</html>