<!DOCTYPE html>
<HTML>

<HEAD> 
	<!-- SEO -->
	<meta HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=utf-8">
	<meta name="Keywords" content="Fullstack Development, Fullstack, Development">
	<link rel = "shortcut icon" type = "image/x-icon" href = "images/favicon.png"> 
	<title> Quest-1, maket-2 </title>

	<!-- CSS's -->  
	<link rel="stylesheet/less" href="css/styles.css">        	  	

	<!-- LIB's -->
	<script src="lib/less.min.js"></script>	
	<script src="lib/jquery-3.3.1.slim.min.js"></script>

	<!-- func -->
	<?php /*require_once 'src/functions.php';*/ ?>
</HEAD>

<BODY>
<header>
	<div class="header__standard">
		<div class="header__standard--title">
			<p class="title__font">standard buttons</p>
		</div>

		<div class="header__standard--buttons">
			<div class="header__standard--row small">				
				<div class="header__standard--block small__buttons">
					<button class="small-button animate green">Button</button>
				</div>

				<div class="header__standard--block small__buttons">
					<button class="small-button animate green">Button</button>
				</div>

				<div class="header__standard--block small__buttons">
					<button class="small-button animate green">Button</button>
				</div>
			</div>

			<div class="header__standard--row normal">
				<div class="header__standard--block">
					<button class="standard-button animate green">Button</button>
				</div>

				<div class="header__standard--block">
					<button class="standard-button animate green">Button</button>
				</div>

				<div class="header__standard--block">
					<button class="standard-button animate green">Button</button>
				</div>
			</div>

			<div class="header__standard--row normal second">
				<div class="header__standard--block">
					<button class="standard-button animate red rightFontColor">Button</button>
				</div>

				<div class="header__standard--block">
					<button class="standard-button animate red rightFontColor">Button</button>
				</div>

				<div class="header__standard--block">
					<button class="standard-button animate red rightFontColor">Button</button>
				</div>
			</div>

			<div class="header__standard--row small">
				<div class="header__standard--block small__buttons">
					<button class="small-button animate red rightFontColor">Button</button>
				</div>

				<div class="header__standard--block small__buttons">
					<button class="small-button animate red rightFontColor">Button</button>
				</div>

				<div class="header__standard--block small__buttons">
					<button class="small-button animate red rightFontColor">Button</button>
				</div>
			</div>
		</div>
	</div>

	<div class="header__arrows">
		<div class="header__arrows--title">
			<p class="title__font">arrow buttons</p>
		</div>

		<div class="header__arrows--buttons">
			<div class="arrows__mini--block">
				<button class="arrow__btn arrow__btn--left"></button>
				<button class="arrow__btn arrow__btn--right"></button>
			</div>

			<div class="arrows__mini--block">
				<button class="arrow__btn arrow__btn--left"></button>
				<button class="arrow__btn arrow__btn--right"></button>
			</div>

			<div class="arrows__mini--block">
				<button class="arrow__btn arrow__btn--left"></button>
				<button class="arrow__btn arrow__btn--right"></button>
			</div>
		</div>
	</div>
</header>

<!-- .... -->

<main>
	<div class="main__charts">		
		<div class="main__charts--title">
			<p class="title__font">percentages / pie chart</p>
		</div>

		<div class="main__charts-block">
			<div class="charts__mini--block">
				<div class="chart__block">
					<div class="chart__text"><p>1</p></div>
					<div class="circle__chart--single">1%</div>
				</div>
											
				<div class="chart__block">
					<div class="chart__text"><p>38</p></div>
					<div class="circle__chart--single">38%</div>
				</div>
			</div>

			<div class="charts__mini--block">
				<div class="chart__block">
					<div class="chart__text"><p>62</p></div>
					<div class="circle__chart--single">62%</div>
				</div>

				<div class="chart__block">
					<div class="chart__text"><p>89.1</p></div>
					<div class="circle__chart--single">89%</div>
				</div>
			</div>

			<div class="charts__mini--block">
				<div class="chart__pie--container">
                    <div id="gray" class="pie"></div>
                    <div id="red" class="pie"></div>
                    <div id="green" class="pie"></div>
                    <div id="empty" class="pie"></div>
                </div>
			</div>
		</div>
	</div>

<!-- -->

	<div class="main__sliders">
		<div class="main__sliders--title">
			<p class="title__font">sliders</p>
		</div>

		<div class="main__sliders--block">
			<div class="sliders__mini--block">
				<div class="slider__container">
					<div class="range__block" id="pointerTrackBar1">
						<p class="sliders__block--font" id="pointerValTrackBar1">0</p>
					</div>

		        	<input type="range" min="0" max="100" value="0" 
		        		   class="slider__range" id="trackBar1">
				</div>
			</div>

			<div class="sliders__mini--block">
				<div class="slider__container">
					<div class="slider__range--pos">						
						<div class="slider__range--fill" id="sliderRangeFill"></div>

				        <input type="range" min="0" max="100" value="75" step="25" 
				        	   class="slider__range" id="trackBar2">
			       	</div>
			    </div> 
			    
				
			 	<div class="slider__bar--value">
			  		<div class="bar__value--step"><p class="sliders__step--font">0</p></div>
			  		<div class="bar__value--step"><p class="sliders__step--font">25</p></div>
			  		<div class="bar__value--step"><p class="sliders__step--font">50</p></div>
			  		<div class="bar__value--step"><p class="sliders__step--font">75</p></div>
			  		<div class="bar__value--step"><p class="sliders__step--font">100</p></div>
			  	</div> 				
			</div>
		</div>
	</div>

<!-- -->

	<div class="main__stages">
		<div class="main__stages--title">
			<p class="title__font">stages</p>
		</div>

		<div class="main__stages--block">
			<div class="main__stages--pos">						
				<div class="stage__range--template" id="stageRangeTemplate">
					<!-- creating in stages.js -->
					<div class="stage__point stage__point--font" id="stagePoint5">5</div> 
					<div class="stage__point stage__point--font" id="stagePoint4">4</div> 
					<div class="stage__point stage__point--font" id="stagePoint3">3</div> 
					<div class="stage__point stage__point--font" id="stagePoint2">2</div> 
					<div class="stage__point stage__point--font" id="stagePoint1">1</div> 

					<div class="stage__range--fill" id="stageRangeFill"></div>
				</div>

		        <input type="range" min="0" max="100" value="75" step="25" 
		        	   class="stage__range" id="stage">
	       	</div>
		</div>
	</div>

<!-- -->

	<div class="main__elements">
		<p>MAIN: main__elements</p>
	</div>

<!-- -->

	<div class="main__blogs">
		<p>MAIN: main__blogs</p>
	</div>

<!-- -->

	<div class="main__news">
		<p>MAIN: main__news</p>
	</div>
</main>		

<!-- .... -->

<footer>
	<div class="footer__location">
		<p>MAIN: footer__location</p>
	</div>

	<div class="footer__blog">
		<p>MAIN: footer__blog</p>
	</div>

	<div class="footer__video">
		<p>MAIN: footer__video</p>
	</div>
</footer>

</BODY>
</HTML>

<script src="src/ripple.js" defer></script>
<script src="src/charts.js" defer></script>
<script src="src/slider.js" defer></script>
<script src="src/stages.js" defer></script>