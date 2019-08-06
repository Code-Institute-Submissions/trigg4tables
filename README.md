# Trigg 4 Tables

![IMAGE ALT TEXT](https://github.com/coderbeez/trigg4tables/blob/master/assets/images/header.png)

**[Trigg 4 Tables](https://coderbeez.github.io/trigg4tables/)** is a times tables practice website aimed at older children.

*Developed for Code Institute Milestone 2: Interactive Frontend Developement.*


## UX

Trigg 4 Tables is aimed at primary school children aged 9 to 12 years, who are often set times tables homework. The website allows children to select tables to practice. Trigg the cat then guides them presenting sums, confirming answers and helping out when needed. Once complete, a detailed report is generated which can be downloaded as a png file to facilitate easy sharing via WhatsApp, Snapchat, text message etc. The report acts as confirmation that homework has been completed and highlights any sum the child struggled with.

Trigg 4 Tables has been designed to address some of the limitations of similar websites and apps:

1. **Target Age** Graphics designed to appeal to an older child. 

2. **Homework Tool** Practice that reflects homework where a single set of times tables is selected. 

3. **Feedback** Detailed feedback available to share once practice is complete. 



### User Stories

User stories for potential visitors to the website include:

1. **Independent Homework** 

When I get home from school, I quickly complete my times tables homework using Trigg 4 Tables on my phone. I click the download button and WhatsApp the report to Dad to let him know I’ve started homework already. The first time I used the website I clicked the i icon to watch the YouTube video, but you only need to watch once, it’s pretty easy to use. My teacher says my tables are improving! I think I was too tired to learn before waiting until Dad finished work.


2. **Homework On The Go**

On the car journey home from school, I borrow my Mom’s phone and complete my times tables homework. I usually click the sound icon to mute as it annoys my brother. Sometimes I pretend to forget. You can turn the sound off even after you’ve started but he doesn’t know that. When I get to the end, if the report says I have sums to revise, I click the x icon to start again. My Mom insists on going over any sum the report says to revise when we get home so I try to avoid that. I don’t need to use the download button as I leave the site open for Mom.


3. **Competition**

I love maths, enjoy practising times tables and am ever so slightly competitive. I visit Trigg 4 Tables using my phone, complete the sums as quickly as I can and Snapchat the report to my friends to see if I have beat their time. The trick is not to double click check as Trigg will say you have an empty answer for the next sum and that just wastes time.


4. **Teacher**

Not every child in my class has someone that can help with homework. Having canvased parents, my students are now using Trigg 4 Tables each night to practice the assigned times tables. Students WhatsApp their reports to our Trigg group. I have noticed a marked improvement in our Friday maths test scores, especially amongst students who had been struggling. Other teachers have started to ask about Trigg.


### Design

The look and feel of Trigg 4 Tables was designed to appeal to the target audience of 9 to 12 year olds. 

1. **Mobile First** Given the target audience, the website was designed to be primarily viewed on a mobile phone.

2. **Trigg Character** The series of Trigg character images were chosen to inject some fun without appearing too childish. Trigg guides the child through the practice and his different expressions provide feedback.

3. **Colour Palette** A very limited colour palette was used with colours taken from Trigg’s images or chosen to complement them. Equal amounts of blue and pink ensure a gender-neutral site. Red and green convey meaning.

4. **Text** Text was purposely kept to a minimum on this website. Icons, images, colours, audio and video are used to provide direction and feedback.

5. **Fonts** The heading fonts were chosen to convey a sense of fun. Number and keypad fonts were chosen for legibility. Message fonts were chosen to reflect the handwriting of the target audience. 

6. **Preparation** Balsamiq was used to generate [wireframes](https://github.com/coderbeez/trigg4tables/blob/master/assets/wireframes/wireframes.pdf) for various device sizes. The [initial proposal](https://github.com/coderbeez/trigg4tables/blob/master/assets/wireframes/proposal.pdf) document and [Bootstrap plan](https://github.com/coderbeez/trigg4tables/blob/master/assets/wireframes/bootstrap.PNG) were completed using Microsoft Powerpoint and Publisher. Testing during development resulted in several changes to the original design with a move away from device keyboards and a reduction in text.


## Features

### Existing Features *Components*

![Trig FlowChart](https://github.com/coderbeez/trigg4tables/blob/master/assets/images/features.png)
*Website Components*


1. **Trigg Images** Trigg character images from [VectorStock](https://www.vectorstock.com/royalty-free-vectors/vectors-by_Westamult) set the overall look of the website. jQuery is used to change the image source, alternating Trigg’s expressions and providing feedback for the child.

![Trig FlowChart](https://github.com/coderbeez/trigg4tables/blob/master/assets/wireframes/triggflow.png)
*Question & Answer Flowchart*


2. **Information Video** Although the website was designed to be as intuitive as possible, an instruction video was created using [Snagit](https://www.techsmith.com/screen-capture.html) with voiceover by an enthusiastic 12 year old. A dedicated YouTube channel was setup to host Trigg’s video. Given the target audience, this was deemed the most appropriate medium. Text instructions were also included for improved accessibility.

3. **Keypads** Touch screen keypad functionality and positioning was a serious problem, so the initial design was amended to include website keypads. jQuery click and JavaScript concat methods are used to enter and retrieve values from HTML buttons, radio buttons and labels. CSS styles, including active, simulate key pressing and indicate selection.

4. **Timer** JavaScript setTimeout and clearTimeout methods are used to start the timer on go and stop on complete. Time taken to finish is shown on the report canvas.

5. **Sound** JavaScript play methods are used to provide audio feedback when an answer is missing, correct, incorrect or all complete. Sound can be turned on or off at any stage by clicking the sound icon.

6. **Clear** Using the JavaScript reload method, the website can be refreshed at any stage by clicking the x icon, taking the child back to the start.

7. **Tables** Times tables lists are generated, randomised, marked as completed and highlighted as needing revision, using 3 JavaScript arrays, timesArray, todoArray and reviseArray.

8. **Feedback** jQuery hide, show, add and remove class methods are used to provide instructions and feedback.

9. **Progress** jQuery is used to set the attributes for a [Bootstrap](https://getbootstrap.com/docs/4.3/components/progress/) progress bar showing the child how they are progressing.

10. **Report** [jCanvas](https://projects.calebevans.me/jcanvas/) is used to fill and format a HTML canvas element. This canvas acts as a detailed report showing the date, tables, time taken to complete and any sums that need to be revised. 

11. **Download** Clicking the download button converts the canvas report first to a blob and then to a png file which can be shared. JavaScript libraries [Canvas-toBlob](https://github.com/eligrey/canvas-toBlob.js) and [FileSaver](https://github.com/eligrey/FileSaver.js/) facilitate this.


### Existing Features *Responsiveness*

This one page website was designed using a mobile first approach. In order to limit scrolling, the order, position and visibility of elements changes depending on screen size. (1) CSS attributes and media queries, (2) Bootstrap grid system and display classes, and jQuery methods are used to facilitate this responsiveness.

![Bootstrap Plan]( https://github.com/coderbeez/trigg4tables/blob/master/assets/wireframes/bootstrap.PNG)
*Bootstrap Column & Row Plan*


1. **Viewport Width** Using the [Bootstrap](https://getbootstrap.com/docs/4.3/layout/grid/) grid system, the percentage of viewport width used to display content varies from 100% on small and medium screens to 83% (10 Bootstrap columns) on large screens.

2. **Viewport Height** CSS percentage of viewport height classes are used to ensure site fills screen, regardless of screen size and limits scrolling.

3. **Element Width & Position** The [Bootstrap](https://getbootstrap.com/docs/4.3/layout/grid/) grid system is also used to change the width and position of elements on small, medium and large screens to better display content.

4. **Display** Using [Bootstrap](https://getbootstrap.com/docs/4.3/utilities/display/) display classes together with [jQuery]( https://api.jquery.com/show/) hide and show methods allow elements, rows and columns to appear and disappear on this single page website.

5. **Video** [Bootstrap](https://getbootstrap.com/docs/4.3/utilities/embed/#about) utility of embed-responsive is used to make the embedded iframe responsive.

6. **Margins & Padding** [Bootstrap](https://getbootstrap.com/docs/4.3/utilities/spacing/) spacing utilities are used to vary margins and padding by breakpoints.

7. **Font Size** Media queries are used to change font sizes depending on screen size.

8. **REM** REM sizes are used throughout the website to improve responsiveness.


### Future Features 

1. **Practice History** Facility for a child to track practice performance.

2. **Share Buttons** Buttons to share directly with WhatsApp Snapchat etc. 

3. **Younger Audience** A sister site aimed at a younger audience with appropriate character images and the ability to practice a subset of selected times tables.


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
16. [jCanvas](https://projects.calebevans.me/jcanvas/) A JavaScript library for jQuery that wraps around the HTML5 canvas API, jCanvas was used to format the canvas report.
17. [FileSaver](https://github.com/eligrey/FileSaver.js/) A HTML5 saveAs() FileSaver implementation, FileSaver.js was used to allow the canvas report blob to be saved as a png file.
18. [Canvas-toBlob](https://github.com/eligrey/canvas-toBlob.js) A JavaScript library that implements the standard HTML5 canvas.toBlob() and canvas.toBlobHD() methods in browsers that do not natively support, Canvas-toBlob was used to overcome problems with some browsers e.g. Microsoft Edge.
19. [Jasmine](https://jasmine.github.io/index.html) An open source testing framework for JavaScript, Jasmine was used to complete automated function testing.


*Technology explanations from [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)** or technology’s own site.*


## Testing

### Validation & Automated Testing

**HTML**

[W3C Validation Service](https://validator.w3.org/) Used to test the validity of HTML – no errors found.

**CSS**

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) Used to test the validity of CSS – no errors found.

**JAVASCRIPT**

[jshint](https://jigsaw.w3.org/css-validator/) Used to test the validity of JavaScript functions – no errors found.

[Jasmine](https://jasmine.github.io/) Used to complete automated testing of some JavaScript functions – 22 specs 0 errors.


### Manual Testing

Throughout the development process, [Chrome Developer Tools]( https://developers.google.com/web/tools/chrome-devtools/) were used to test for responsiveness on various screen sizes, android and iOS mobiles to test for functionality and layout, and Chrome, Edge and Firefox browsers to identify bugs as early as possible.

Following sign off, structured testing of the site was carried out using various browsers and screens sizes as follows:

| **BROWSER** | **Android** | **iOS** | **Android** | **iOS** | **Edge** | **Chrome** | **Firefox** | **Safari** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **SCREEN SIZE** | **Small** | **Small** | **Medium** | **Medium** | **Large** | **Large** | **Large** | **Large** |
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

1. **Keyboard on Touch Screen Devices** During development it quickly became apparent that relying on inbuilt keyboards on touch screen devices provided poor UX. Keypads were built into the website to avoid using device keyboards.

2. **Tables on iOS** Initial keypad designs relied on tables to position elements. Although no problem was encountered with android, tables did not render correctly on iOS. Keypads were redesigned using br elements and margins.

3. **Radio Buttons on iOS** To limit selection to one item from a group, radio buttons were wrapped in label elements. Labels were then styled as buttons and radios hidden to provide a consistent look to keypads. Although no problem was encountered with android, radio buttons remained visible on iOS. The following CSS resolved the issue. 

```
input[type="radio"] {
  -webkit-appearance: none;
}

[type="radio"] {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
/*WHERE: https://www.sitepoint.com/replacing-radio-buttons-without-replacing-radio-buttons/*/
```

4. **Enter Key Reload Site** Pressing the enter key on a desktop would reload the page sending the user back to the start. A prevent default method resolved the issue.

```
$(document).on("keypress", function(e) {
    if (e.which == 13) {
      event.preventDefault();
    }
  });
  /*WHERE: https://stackoverflow.com/questions/8866053/stop-reloading-page-with-enter-key*/
```

5. **Video Stop Playing on Hide** If the close button, used to hide the instruction video, was pressed before the video had ended the audio continued. Adding the following code to the close button click method set the video back to the start stopping the audio.

```
$("iframe").attr("src", "https://www.youtube.com/embed/QnvT6_Fp1B4?rel=0");
/*WHERE: https://stackoverflow.com/questions/2128535/stop-a-youtube-video-with-jquery*/
```

6. **Sound Clips Not Consistently Audible** Sound clip were not always audible even though the play method was running correctly. Using the current time property in the play audio function reset the audio clip back to the start giving consistent sound on each play. 

```
function playAudio(audio) {
    if (sound === true) {
      audio.play();
      audio.currentTime = 0;
    }
  }
  /*WHERE: https://stackoverflow.com/questions/9563887/setting-html5-audio-position*/
```

7. **Keyboard Access** During initial testing with the target audience, rather than using the keypad, children were using the device keyboard to input. An input field was changed to a label to prevent this from happening. 

8. **Loading Trigg Images** During initial testing on both android and iOS mobiles, Trigg images were slow to load. Initial png files were changed to svg which improved load times on android but images were only displayed on iOS the second time they were used. Preloading image sources in JS resolved this issue.

9. **iPad Double Tap** When using the keypad for entering numbers e.g. 11, double tapping on the 1 key can cause an iPad to zoom in. Although this action can be turned off in the device settings, no fix has been found to apply to the website.

10. **mp3 Audio Clips in Firefox** During Firefox testing, although all audio clips were mp3 files, one clip would not load. Resaving the clip as a m4a file resolved the issue.

11. **Blob to Canvas in Edge** During Edge testing, the report would not download as Edge does not support the toBlob method. Using the [Canvas-toBlob](https://github.com/eligrey/canvas-toBlob.js) JS library resolved this issue.

![toBlob Compatiblity](https://github.com/coderbeez/trigg4tables/blob/master/assets/images/toblob.PNG)
*toBlob Compatibility [Mozilla]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)*

12. **Error Message re Canvas-toBlob on iOS** [StockOverflow]( https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)
 revealed an error message on iOS was due to the sourceMap flag being set to false instead of true in tsconfig.json file of [Canvas-toBlob](https://github.com/eligrey/canvas-toBlob.js). This does not affect functionality.


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

* JS audio set current time from [stackoverflow](https://stackoverflow.com/questions/9563887/setting-html5-audio-position).

* JS random array sorting from [w3schools](https://www.w3schools.com/js/js_array_sort.asp).

* JS timer based on code from [Codepad](https://codepad.co/snippet/javascript-stopwatch-using-javascript-and-css).

* JS short date format from [stackoverflow](https://stackoverflow.com/questions/8398897/how-to-get-current-date-in-jquery).

* JS canvas to blob and blob to png from [stackoverflow](https://stackoverflow.com/questions/48054723/saving-canvas-as-blob-and-then-blob-as-file).

* JS value from selected radio button from [stackoverflow](https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button).

* JS refresh page from [stackoverflow](https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery).

* JS stop YouTube video with jQuery [stackoverflow](https://stackoverflow.com/questions/2128535/stop-a-youtube-video-with-jquery).

* JS check element does not have class with jQuery [stackoverflow](https://stackoverflow.com/questions/7841048/how-to-check-if-an-element-does-not-have-a-specific-class).

* JS multiple values in data element [stackoverflow](https://stackoverflow.com/questions/34455085/can-i-have-multiple-values-in-one-html-data-element).
* JS preload images [thonky](https://www.thonky.com/javascript-and-css-guide/javascript-image-preload).

* CSS text shadow from [designshack](https://designshack.net/articles/css/12-fun-css-text-shadows-you-can-copy-and-paste/).
* CSS box shadow from [codepen](https://codepen.io/sdthornton/pen/wBZdXq).
* CSS colours from [color hex](https://www.color-hex.com/color/cfb4b2).
* CSS button press formatting [stackoverflow](https://stackoverflow.com/questions/38377062/how-to-make-html-button-look-pressed-in-using-css).
* CSS iOS styling input field fix from [daretothink](https://www.daretothink.co.uk/stop-ios-styling-your-input-fields-and-buttons).
* CSS iOS styling radio buttons fix from [sitepoint](https://www.sitepoint.com/replacing-radio-buttons-without-replacing-radio-buttons/).
* HTML disable related videos on YouTube embed from [YouTube](https://www.youtube.com/watch?v=ZUTzJG212Vo).


### Acknowledgements



