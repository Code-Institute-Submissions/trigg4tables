# Trigg 4 Tables

![IMAGE ALT TEXT](https://github.com/coderbeez/trigg4tables/blob/master/assets/images/header.png)

**[Trigg 4 Tables](https://coderbeez.github.io/trigg4tables/)** a times tables practice website aimed at older children. *Milestone 2: Interactive Frontend Development - Code Institute*


## UX

Trigg 4 Tables is aimed at primary school children aged 9 to 12 years, who are often set times tables homework to learn each night. It is designed to address some of the limitations of similar websites and apps:

1. **Target Age** Graphics that appeal to preteens verses younger children. 

2. **Tables Set** Ability to practice a full set of times tables. 

3. **Feedback** Detailed feedback to share once practice is complete.



### User Stories

User stories for potential visitors to the website include:

1. **Independent Homework** 

When I get home from school, I quickly complete my times tables homework using Trigg 4 Tables on my phone. I click the download button and WhatsApp the report to Dad to let him know I’ve started homework already. The first time I used the website I clicked the i icon to watch the YouTube video, but you only need to watch once, it’s pretty easy to use. My teacher says my tables are improving! I think I was too tired to learn before waiting until Dad finished work.


2. **Homework On The Go**

On the car journey home from school, I borrow my Mom’s phone and complete my times tables homework. I usually click the sound icon to mute as it annoys my brother. Sometimes I pretend to forget. You can turn the sound off even after you’ve started but he doesn’t know that. When I get to the end, if the report says I have sums to revise, I click the x icon and try again. My Mom insists on going over any sum the report says to revise when we get home so I try to avoid that. I don’t need to use the download button as I leave the site open for Mom.


3. **Competition**

I love maths, enjoy practising times tables and am ever so slightly competitive. I visit Trigg 4 Tables using my phone, complete the sums as quickly as I can and Snapchat the report to my friends to see if I have beat their time. The trick is not to double click check as Trigg will say you have an empty answer for the next sum and that just wastes time.


### Design

The look and feel of Trigg 4 Tables is designed to appeal to the target audience of 9 to 12 year olds. 

1. **Mobile First** This single page website was designed primarily to be viewed on a mobile phone without the need to scroll.

2. **Trigg Character** The series of Trigg character images were chosen to inject some fun without appearing too childish. Trigg’s different expressions also provide feedback.

3. **Colour Palette** A very limited colour palette is used with colours taken from Trigg’s images or chosen to complement them. Equal amounts of blue and pink are used to ensure a gender-neutral site. Red and green are used to convey meaning.

5. **Text** Given the target audience, text was purposely kept to a minimum on this website. Icons, images, colours, audio and video are used to provide direction and feedback whenever possible.

4. **Fonts** The heading fonts were chosen to convey a sense of fun. Number and keypad fonts were chosen for legibility. Message fonts were chosen to reflect the handwriting of the target audience. 

6. **Preparation** Balsamiq was used to generate [wireframes](https://github.com/coderbeez/trigg4tables/blob/master/assets/wireframes/wireframes.pdf) for various device sizes. The [initial proposal](https://github.com/coderbeez/trigg4tables/blob/master/assets/wireframes/proposal.pdf) document was compiled using Microsoft Powerpoint and Microsoft Publisher was used for the Trigg images used in this README. Testing during development resulted in several changes to the original design with a move away from the device keyboard, a reduction in text, and a focus on maintaining a scroll free site even on smaller mobiles.


## Features

### Existing Features *Components*

![Trig FlowChart](https://github.com/coderbeez/trigg4tables/blob/master/assets/images/features.png)
*Components of this single page no-scroll website*


1. **Trigg Images** Trigg character images from [VectorStock](https://www.vectorstock.com/royalty-free-vectors/vectors-by_Westamult) set the overall look of the website. jQuery is used to add and remove classes alternating Trigg’s expressions and providing feedback for the child.

![Trig FlowChart](https://github.com/coderbeez/trigg4tables/blob/master/assets/wireframes/triggflow.png)

2. **Information Video** Although the website was designed to be as intuitive as possible, an instruction video was created using [Snagit](https://www.techsmith.com/screen-capture.html) with voiceover by an enthusiastic 12 year old. A dedicated YouTube channel was created to host Trigg’s video. Given the target audience, this was deemed to be the most appropriate medium.

[![IMAGE ALT TEXT](http://img.youtube.com/vi/ EcVam72tyyw/0/0.jpg)](http://www.youtube.com/watch?v= EcVam72tyyw/0 "Video Title")

3. **Keypads** Touch screen keypad functionality and positioning was a serious problem so the initial design was amended to include dedicated static keypads to. jQuery on click functions and JavaScript concat method are used to retrieve values from HTML buttons, radio buttons and input fields. CSS styles including active simulates key pressing and indicates selection.

4. **Timer** JavaScript setTimeout and clearTimeout methods are used to start the timer on go and stop on complete. The time taken to complete is shown on the report canvas. 

5. **Sound** JavaScript play methods are used to provide audio feedback when an answer is missing, correct, incorrect or all complete. Sound can be turned on or off at any stage by clicking the sound icon. 

6. **Clear** Using the JavaScript reload method, the website can be refreshed at any stage by clicking the x icon, taking the child back to the start.

7. **Tables** Times tables lists are generated, randomised, marked as completed and highlighted as needing revision, using 3 JavaScript arrays, timesArray, todoArray and reviseArray.

8. **Feedback** jQuery hide, show, add and remove class methods are used to provide text and visual instructions and feedback to the child.

9. **Progress** jQuery is used to set the attributes for a [Bootstrap](https://getbootstrap.com/docs/4.3/components/progress/) progress bar showing the child how they are progressing.

10. **Report** [jCanvas](https://projects.calebevans.me/jcanvas/) is used to fill and format a HTML canvas element. This canvas acts as a detailed report showing the date, tables, time taken to complete and any tables that need to be revised. 

11. **Download** Clicking the download button converts the canvas report first to a blob and then to a png file which can be shared. JavaScript libraries [Canvas-toBlob](https://github.com/eligrey/canvas-toBlob.js) and [FileSaver](https://github.com/eligrey/FileSaver.js/) facilitate this.


### Existing Features *Responsiveness*

The website was designed using a mobile first approach. In order to maintain a non-scrolling site, the order, position and visibility of elements changes depending on screen size. CSS attributes and media queries, Bootstrap grid system and display classes, and jQuery methods are used to facilitate this responsiveness.

1. **Viewport Width** Using the [Bootstrap](https://getbootstrap.com/docs/4.3/layout/grid/) grid system, the percentage of viewport width used to display content varies from 100% on small and medium screens to 83% (10 Bootstrap columns) on large screens.

2. **Viewport Height** CSS percentage of viewport height classes are used to ensure site fills screen, regardless of screen size. 

3. **Element Width & Position** The [Bootstrap](https://getbootstrap.com/docs/4.3/layout/grid/) grid system is also used to change the width and position of elements on small, medium and large screens to better display content. CSS backgrounds…

4. **Display** Using [Bootstrap](https://getbootstrap.com/docs/4.3/utilities/display/) display classes together with [jQuery]( https://api.jquery.com/show/) hide and show methods:

5. **Video** [Bootstrap](https://getbootstrap.com/docs/4.3/utilities/embed/#about) utility of embed-responsive is used to make the embedded iframe responsive.

6. **Margins & Padding** [Bootstrap](https://getbootstrap.com/docs/4.3/utilities/spacing/) spacing utilities are used throughout this website to vary margins and padding by breakpoints.

7. **Font Size** Media queries are used to change font sizes depending on screen size.

8. **REM** REM sizes are used throughout the website to improve responsiveness.


### Future Features 

1. **Score** Creating a separate projects page to document upcoming d.i.y. projects, e.g. building a child’s playhouse in the garden, would encourage repeat visits.

2. **Share Buttons** Creating more product reviews but using a single modal and varying content by button clicked requires jquery (referenced on Bootstrap).


## Technologies Used

1. [Balsamiq](https://balsamiq.com/) A web based gui mock-up and website wireframe building application, Balsamiq was used to develop wireframes for the website.
2. [Microsoft Powerpoint](https://office.live.com/start/PowerPoint.aspx) A presentation programme, Microsoft PowerPoint was used to develop the initial proposal.
3. [Microsoft Publisher](https://www.microsoft.com/en-ie/p/publisher/cfq7ttc0k7c3?=&OCID=AID737190_SEM_et3dNWB5&MarinID=set3dNWB5|340720498529|microsoft+publisher|e|c||62634787164|aud-312771920869:kwd-11150981&lnkd=Google_O365SMB_Mixed&gclid=EAIaIQobChMIrN6k04Kh4gIVxrDtCh0N7QGzEAAYASAAEgJqDfD_BwE&activetab=pivot%3Aoverviewtab) A desktop publishing application, Microsoft Publisher was used to create the README header image and flow diagram.
4. [Affinity Designer](https://affinity.serif.com/en-gb/) A vector graphics editor, Affinity Designer was used to edit images and identify hex colours for icons and backgrounds.
5. [Snagit](https://www.techsmith.com/screen-capture.html) A screenshot program that captures video display and audio output, Snagit was used to create the instruction video.
6. [Google Fonts](https://fonts.google.com/) A library of free licensed fonts, Google Fonts was used for all fonts.
7. [Font Awesome](https://fontawesome.com/) A font and icon toolkit, Font Awesome was used to source all icons.
8. [Visual Studio Code](https://code.visualstudio.com/) A source-code editor, Visual Studio Code was the IDE used.
9. [Git](https://git-scm.com/) A distributed version-control system for tracking changes in code during development, Git was used to track changes in Visual Studio Code.
10. [GitHub](https://github.com/) A web-based hosting service for version control using Git, GitHub was used to host the version control system and website content.
11. [HTML5](https://www.w3.org/) A document mark-up language, HTML was the language used.
12. [CSS3](https://www.w3.org/) A style sheet language, CSS was the style sheet used.
13. [JavaScript](http://www.ecma-international.org/) A high-level, interpreted programming language that conforms to the ECMAScript specification, Javascript was used to provide interactivity.
14. [Bootstrap4](https://getbootstrap.com/) A CSS framework directed at responsive, mobile-first front-end web development, Bootstrap was used primarily for layout and styling.
15. [jQuery](https://jquery.com/) A JavaScript library designed to manipulate HTML documents, JQuery was used here by Bootstrap, jCanvas and to manipulate the DOM.
16. [jPopper](https://popper.js.org/) A JavaScript library designed to display content from HTML documents, JPopper was used by Bootstrap on this site.???
17. [jCanvas](https://projects.calebevans.me/jcanvas/) A JavaScript library for jQuery that wraps around the HTML5 canvas API, jCanvas was used to format the canvas report.
18. [FileSaver](https://github.com/eligrey/FileSaver.js/) A HTML5 saveAs() FileSaver implementation, FileSaver.js was used to allow the canvas report blob to be saved as a png file.
19. [Canvas-toBlob](https://github.com/eligrey/canvas-toBlob.js) A JavaScript library that implements the standard HTML5 canvas.toBlob() and canvas.toBlobHD() methods in browsers that do not natively support, Canvas-toBlob was used to overcome problems with some browsers e.g. Microsoft Edge.

*Technology explanations from [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)** or technology’s own site.*


## Testing

### Validation

**HTML** 
[W3C Validation Service](https://validator.w3.org/) Used to test the validity of HTML – no errors found.

**CSS**
[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) Used to test the validity of CSS – no errors found.

**JAVASCRIPT**
[jshint](https://jigsaw.w3.org/css-validator/) Used to test the validity of JavaScript – no errors found.

[jasmine](https://jasmine.github.io/) Used to test the ?


### Manual Site Testing

Throughout the development process, [Chrome Developer Tools]( https://developers.google.com/web/tools/chrome-devtools/) were used to test for responsiveness on various screen sizes, android and iOS mobiles to test for functionality and layout, and Chrome, Edge and Firefox browsers to identify bugs as early as possible.

Following sign off, structured testing of the site was carried out using various browsers and screens sizes as follows:

| **BROWSER** | **Android** | **iOS** | **iOS** | **Explorer** | **Edge** | **Chrome** | **Firefox** | **Safari** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **SCREEN SIZE** | **Small** | **Small** | **Medium** | **Large** | **Large** | **Large** | **Large** | **Large** |
| **INFORMATION** | --- | --- | --- | --- | --- | --- | --- | --- |
| Infor Icon Click | P | P | P | P | P | P | P | P |
| YouTube Video Play | P | P | P | P | P | P | P | P |
| Start Button Click | P | P | P | P | P | P | P | P |
| **SELECTION** | --- | --- | --- | --- | --- | --- | --- | --- |
| Missing Number & Operator | P | P | P | P | P | P | P | P |
| Missing Number | P | P | P | P | P | P | P | P |
| Missing Operator | P | P | P | P | P | P | P | P |
| Pick Number Button Click | P | P | P | P | P | P | P | P |
| Pick Operator Button Click | P | P | P | P | P | P | P | P |
| Pick Go Button Click | P | P | P | P | P | P | P | P |
| **GO** | --- | --- | --- | --- | --- | --- | --- | --- |
| Timer Start | P | P | P | P | P | P | P | P |
| 1234567890 Buttons Click | P | P | P | P | P | P | P | P |
| Clear Button Click | P | P | P | P | P | P | P | P |
| Sum Ask | P | P | P | P | P | P | P | P |
| Sum Answer Input | P | P | P | P | P | P | P | P |
| Check Button Show | P | P | P | P | P | P | P | P |
| Enter Key Press | P | P | P | P | P | P | P | P |
| *Todo Array* | P | P | P | P | P | P | P | P |
| **CANCEL ICON** | --- | --- | --- | --- | --- | --- | --- | --- |
| Cancel Icon Click | P | P | P | P | P | P | P | P |
| *Todo Array* | P | P | P | P | P | P | P | P |
| *Revise Array* | P | P | P | P | P | P | P | P |
| **ANSWER MISSING** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | P | P | P | P | P | P | P | P |
| Trigg Image | P | P | P | P | P | P | P | P |
| Message | P | P | P | P | P | P | P | P |
| Audio On/Off Toggle | P | P | P | P | P | P | P | P |
| **CHECK - CORRECT** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | P | P | P | P | P | P | P | P |
| Trigg Image | P | P | P | P | P | P | P | P |
| Message | P | P | P | P | P | P | P | P |
| Sum Answer | P | P | P | P | P | P | P | P |
| Next Button Show | P | P | P | P | P | P | P | P |
| **NEXT** | --- | --- | --- | --- | --- | --- | --- | --- |
| Trigg Image | P | P | P | P | P | P | P | P |
| Message | P | P | P | P | P | P | P | P |
| Sum Ask | P | P | P | P | P | P | P | P |
| Sum Answer Input | P | P | P | P | P | P | P | P |
| Check Button Show | P | P | P | P | P | P | P | P |
| Progress Bar | P | P | P | P | P | P | P | P |
| *Tables Array* | P | P | P | P | P | P | P | P |
| *Revise Array* | P | P | P | P | P | P | P | P |
| **CHECK - INCORRECT 1** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | P | P | P | P | P | P | P | P |
| Trigg Image | P | P | P | P | P | P | P | P |
| Message | P | P | P | P | P | P | P | P |
| Sum Answer Input | P | P | P | P | P | P | P | P |
| *Count* | P | P | P | P | P | P | P | P |
| **CHECK - INCORRECT 2** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | P | P | P | P | P | P | P | P |
| Trigg Image | P | P | P | P | P | P | P | P |
| Message | P | P | P | P | P | P | P | P |
| Sum Answer | P | P | P | P | P | P | P | P |
| Next Button Show | P | P | P | P | P | P | P | P |
| *Count* | P | P | P | P | P | P | P | P |
| *Todo Array* | P | P | P | P | P | P | P | P |
| **CHECK - INCORRECT 3** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | P | P | P | P | P | P | P | P |
| Trigg Image | P | P | P | P | P | P | P | P |
| Message | P | P | P | P | P | P | P | P |
| Sum Answer Input | P | P | P | P | P | P | P | P |
| *Count* | P | P | P | P | P | P | P | P |
| **CHECK - INCORRECT 4** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | P | P | P | P | P | P | P | P |
| Trigg Image | P | P | P | P | P | P | P | P |
| Message | P | P | P | P | P | P | P | P |
| Sum Answer Input | P | P | P | P | P | P | P | P |
| *Count* | P | P | P | P | P | P | P | P |
| **NEXT - DONE** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | P | P | P | P | P | P | P | P |
| Trigg Image | P | P | P | P | P | P | P | P |
| Message | P | P | P | P | P | P | P | P |
| Timer Stop | P | P | P | P | P | P | P | P |
| Report Date | P | P | P | P | P | P | P | P |
| Report Time | P | P | P | P | P | P | P | P |
| Report Tables| P | P | P | P | P | P | P | P |
| Report Revise | P | P | P | P | P | P | P | P |
| Report Message | P | P | P | P | P | P | P | P |
| Download Button Click | P | P | P | P | P | P | P | P |
| *Todo Array* | P | P | P | P | P | P | P | P |
| *Revise Array* | P | P | P | P | P | P | P | P |

*Italics* - Console Log 

P - Passed

N/A - Not Applicable

1 2 3 4 5 - Please see **Bugs**


### Bug Log

1. **Enter Key Reload Site** When tested

2. **Radio Buttons on iOS** When tested 

3. **Keyboard on Mobile Devices** During testing 

4. **Tables on iOS** During testing 

5. **Blob to Canvas on Edge** When test


### Deployment

The website was developed in Visual Studio Code, stored in Git and pushed to the hosting platform GitHub.
To following steps were taken to deploy to GitHub:
1. Opened the trigg4tables *repository*.
2. Ensured the *master branch* was present.
3. Ensured the *html page* was named *index.html*.
4. Ensured the *readme.md* had some text.
5. Clicked the *settings* tab.
3. Under *github pages* selected *master branch* as *source*.
5. *”Your site is published at (https://coderbeez.github.io/trigg4tables/)”* became visible in the *github pages* header after approximately 5 minutes.

### Cloning 

The following instructions were taken from [GitHib Help]( https://help.github.com/en/articles/cloning-a-repository).
1. Open the [trigg4tables](https://github.com/coderbeez/trigg4tables) repository.
2. Click the *clone or download* button.
3. In the *clone with HTTPs* pop-up, click the copy icon.
4. Open *git bash*.
5. Change the current working directory to where you want the cloned directory to be made.
6. Type *git clone* and paste the URL copied earlier.
7. Press *enter*. 


## Credits

### Content

* Site concept and design by website developer.


### Media

* Trigg images by Westamult, purchased from [VectorStock]( https://www.vectorstock.com/royalty-free-vectors/vectors-by_Westamult).

* Paw print background by Tentacula, purchased from [VectorStock](https://www.vectorstock.com/royalty-free-vectors/vectors-by_tentacula).

* Favicon image from [Pixabay](https://pixabay.com/users/Elionas-2345468/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1314467).

* Audio correct clip from ???.

* Audio incorrect clip from [bigsoundbank](https://bigsoundbank.com/detail-0494-little-meow-of-a-cat.html).

* Audio done clip from [freesound](https://freesound.org/people/Wagna/sounds/242207/).
 
* Embedded YouTube video voiceover by Jack.


### Code
* JS stop reloading page with enter key from [stackoverflow](https://stackoverflow.com/questions/8866053/stop-reloading-page-with-enter-key).

* JS random array sorting from [w3schools](https://www.w3schools.com/js/js_array_sort.asp).

* JS timer based on code from [Codepad](https://codepad.co/snippet/javascript-stopwatch-using-javascript-and-css).

* JS short date format from [stackoverflow](https://stackoverflow.com/questions/8398897/how-to-get-current-date-in-jquery).

* JS canvas to blob and blob to png from [stackoverflow](https://stackoverflow.com/questions/48054723/saving-canvas-as-blob-and-then-blob-as-file).

* JS value from selected radio button from [stackoverflow](https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button).

* JS refresh page from [stackoverflow](https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery).
* CSS text shadow from [designshack](https://designshack.net/articles/css/12-fun-css-text-shadows-you-can-copy-and-paste/).
* CSS box shadow from [codepen](https://codepen.io/sdthornton/pen/wBZdXq).
* CSS colours from [color hex](https://www.color-hex.com/color/cfb4b2).
* CSS button press formatting [stackoverflow](https://stackoverflow.com/questions/38377062/how-to-make-html-button-look-pressed-in-using-css).
* CSS iOS styling input field fix from [daretothink](https://www.daretothink.co.uk/stop-ios-styling-your-input-fields-and-buttons).
* CSS iOS styling radio buttons fix from [sitepoint](https://www.sitepoint.com/replacing-radio-buttons-without-replacing-radio-buttons/).
*README embed YouTube video from [stackoverflow](https://stackoverflow.com/questions/11804820/embed-a-youtube-video).


### Acknowledgements
  * This project has been brought to you by Slack. Thanks to all my fellow Slack students.  
  * A special thanks to Jack for all his advice, enthusiasm and of course his voiceover. 
