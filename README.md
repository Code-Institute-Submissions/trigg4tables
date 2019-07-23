https://coderbeez.github.io/trigg4tables/

# Trigg 4 Tables
*Milestone 2: Interactive Frontend Development - Code Institute*

**[Trigg 4 Tables](https://coderbeez.github.io/trigg4tables/)** is a times tables practice site aimed at older children. Having completed the selected times tables, the child can generate a summary report to share.

[![IMAGE ALT TEXT](http://img.youtube.com/vi/EcVam72tyyw/0.jpg)](http://www.youtube.com/watch?v=EcVam72tyyw "Video Title")

![Trig FlowChart](https://github.com/coderbeez/trigg4tables/blob/master/assets/wireframes/triggflow.png)

## UX

### Manual Site Testing

Throughout the development process, [Chrome Developer Tools]( https://developers.google.com/web/tools/chrome-devtools/) were used to test for responsiveness on various screen sizes. The site was distributed to friends and family for testing on a range of devices. The site has also been reviewed on the Slack Peer Review channel. 

Structured testing of the site was carried out using various browsers and screens sizes as follows:

| **BROWSER** | **Android** | **iOS** | **iOS** | **Explorer** | **Edge** | **Chrome** | **Firefox** | **Safari** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **SCREEN SIZE** | **Small** | **Small** | **Medium** | **Large** | **Large** | **Large** | **Large** | **Large** |
| **INFO** | --- | --- | --- | --- | --- | --- | --- | --- |
| Info Icon Click | Y | Y | Y | Y | Y | Y | Y | Y |
| YouTube Video Play | Y | Y | Y | Y | Y | Y | Y | Y |
| Start Button Click | Y | Y | Y | Y | Y | Y | Y | Y |
| **SELECTION** | --- | --- | --- | --- | --- | --- | --- | --- |
| Pick Number Button Click | Y | Y | Y | Y | Y | Y | Y | Y |
| Pick Operator Button Click | Y | Y | Y | Y | Y | Y | Y | Y |
| Pick Go Button Click | Y | Y | Y | Y | Y | Y | Y | Y |
| Missing Number & Operator | Y | Y | Y | Y | Y | Y | Y | Y |
| Missing Number | Y | Y | Y | Y | Y | Y | Y | Y |
| Missing Operator | Y | Y | Y | Y | Y | Y | Y | Y |
| **TIMER** | --- | --- | --- | --- | --- | --- | --- | --- |
| Timer Start On Go | Y | Y | Y | Y | Y | Y | Y | Y |
| Timer Stop On Done | Y | Y | Y | Y | Y | Y | Y | Y |
| Timer Correct | Y | Y | Y | Y | Y | Y | Y | Y |
| Time on Report | Y | Y | Y | Y | Y | Y | Y | Y |
| **SOUND** | --- | --- | --- | --- | --- | --- | --- | --- |
| Correct Audio | Y | Y | Y | Y | Y | Y | Y | Y |
| Incorrect Audio | Y | Y | Y | Y | Y | Y | Y | Y |
| Done Audio | Y | Y | Y | Y | Y | Y | Y | Y |
| Audio On Off Toggle | Y | Y | Y | Y | Y | Y | Y | Y |
| **PROGRESS BAR** | --- | --- | --- | --- | --- | --- | --- | --- |
| Progress Incorrect Answer | Y | Y | Y | Y | Y | Y | Y | Y |
| Progress Complete Less 1 | Y | Y | Y | Y | Y | Y | Y | Y |
| **NUMBER KEYPAD** | --- | --- | --- | --- | --- | --- | --- | --- |
| 1234567890 Buttons | Y | Y | Y | Y | Y | Y | Y | Y |
| Clear Button | Y | Y | Y | Y | Y | Y | Y | Y |
| Sum Display | Y | Y | Y | Y | Y | Y | Y | Y |
| Sum Answer Input | Y | Y | Y | Y | Y | Y | Y | Y |
| Check Button Click | Y | Y | Y | Y | Y | Y | Y | Y |
| **TABLES ARRAY** | --- | --- | --- | --- | --- | --- | --- | --- |
| Number | Y | Y | Y | Y | Y | Y | Y | Y |
| Operator | Y | Y | Y | Y | Y | Y | Y | Y |
| *Array* | Y | Y | Y | Y | Y | Y | Y | Y |
| **CANCEL ICON** | --- | --- | --- | --- | --- | --- | --- | --- |
| Cancel Icon Click | Y | Y | Y | Y | Y | Y | Y | Y |
| *Tables Array* | Y | Y | Y | Y | Y | Y | Y | Y |


| **BROWSER** | **Android** | **iOS** | **iOS** | **Explorer** | **Edge** | **Chrome** | **Firefox** | **Safari** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **SCREEN SIZE** | **Small** | **Small** | **Medium** | **Large** | **Large** | **Large** | **Large** | **Large** |
| **ANSWER MISSING** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | Y | Y | Y | Y | Y | Y | Y | Y |
| Trig Image | Y | Y | Y | Y | Y | Y | Y | Y |
| Message | Y | Y | Y | Y | Y | Y | Y | Y |
| Sum Answer Input | Y | Y | Y | Y | Y | Y | Y | Y |
| Check Button | Y | Y | Y | Y | Y | Y | Y | Y |
| **CHECK - ANSWER CORRECT** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | Y | Y | Y | Y | Y | Y | Y | Y |
| Trig Image | Y | Y | Y | Y | Y | Y | Y | Y |
| Sum Answer | Y | Y | Y | Y | Y | Y | Y | Y |
| Message | Y | Y | Y | Y | Y | Y | Y | Y |
| Next Button | Y | Y | Y | Y | Y | Y | Y | Y |
| **NEXT – ANSWER CORRECT** | --- | --- | --- | --- | --- | --- | --- | --- |
| Progress Bar | Y | Y | Y | Y | Y | Y | Y | Y |
| Trig Image | Y | Y | Y | Y | Y | Y | Y | Y |
| Message | Y | Y | Y | Y | Y | Y | Y | Y |
| Sum Ask | Y | Y | Y | Y | Y | Y | Y | Y |
| Sum Answer Input | Y | Y | Y | Y | Y | Y | Y | Y |
| Check Button | Y | Y | Y | Y | Y | Y | Y | Y |
| *Tables Array* | Y | Y | Y | Y | Y | Y | Y | Y |
| *Revise Array* | Y | Y | Y | Y | Y | Y | Y | Y |
| **CHECK - ANSWER INCORRECT 1** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | Y | Y | Y | Y | Y | Y | Y | Y |
| Trig Image | Y | Y | Y | Y | Y | Y | Y | Y |
| Sum Answer Input | Y | Y | Y | Y | Y | Y | Y | Y |
| Message | Y | Y | Y | Y | Y | Y | Y | Y |
| Check Button | Y | Y | Y | Y | Y | Y | Y | Y |
| *Count* | Y | Y | Y | Y | Y | Y | Y | Y |
| **CHECK - ANSWER INCORRECT 2** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | Y | Y | Y | Y | Y | Y | Y | Y |
| Trig Image | Y | Y | Y | Y | Y | Y | Y | Y |
| Sum Answer | Y | Y | Y | Y | Y | Y | Y | Y |
| Message | Y | Y | Y | Y | Y | Y | Y | Y |
| Next Button | Y | Y | Y | Y | Y | Y | Y | Y |
| *Count* | Y | Y | Y | Y | Y | Y | Y | Y |
| **NEXT – ANSWER INCORRECT 2** | --- | --- | --- | --- | --- | --- | --- | --- |
| Progress Bar | Y | Y | Y | Y | Y | Y | Y | Y |
| Trig Image | Y | Y | Y | Y | Y | Y | Y | Y |
| Message | Y | Y | Y | Y | Y | Y | Y | Y |
| Sum Ask | Y | Y | Y | Y | Y | Y | Y | Y |
| Sum Answer Input | Y | Y | Y | Y | Y | Y | Y | Y |
| Check Button | Y | Y | Y | Y | Y | Y | Y | Y |
| *Tables Array* | Y | Y | Y | Y | Y | Y | Y | Y |
| *Revise Array* | Y | Y | Y | Y | Y | Y | Y | Y |
| **ANSWER INCORRECT 3** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | Y | Y | Y | Y | Y | Y | Y | Y |
| Trig Image | Y | Y | Y | Y | Y | Y | Y | Y |
| Sum Answer | Y | Y | Y | Y | Y | Y | Y | Y |
| Message | Y | Y | Y | Y | Y | Y | Y | Y |
| Check Button | Y | Y | Y | Y | Y | Y | Y | Y |
| *Count* | Y | Y | Y | Y | Y | Y | Y | Y |
| **ANSWER INCORRECT 4** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | Y | Y | Y | Y | Y | Y | Y | Y |
| Trig Image | Y | Y | Y | Y | Y | Y | Y | Y |
| Sum Answer | Y | Y | Y | Y | Y | Y | Y | Y |
| Message | Y | Y | Y | Y | Y | Y | Y | Y |
| Check Button | Y | Y | Y | Y | Y | Y | Y | Y |
| *Count* | Y | Y | Y | Y | Y | Y | Y | Y |
| **NEXT DONE** | --- | --- | --- | --- | --- | --- | --- | --- |
| Audio | Y | Y | Y | Y | Y | Y | Y | Y |
| Trig Image | Y | Y | Y | Y | Y | Y | Y | Y |
| Report Date | Y | Y | Y | Y | Y | Y | Y | Y |
| Report Time | Y | Y | Y | Y | Y | Y | Y | Y |
| Report Tables| Y | Y | Y | Y | Y | Y | Y | Y |
| Report Revise | Y | Y | Y | Y | Y | Y | Y | Y |
| Report Message | Y | Y | Y | Y | Y | Y | Y | Y |
| Download Button Click | Y | Y | Y | Y | Y | Y | Y | Y |


