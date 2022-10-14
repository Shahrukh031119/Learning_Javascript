//      HTML basics

// hyper text markup language to structure the content of any webpage.
// use of html elements consisting of opening tags, attributes, text content, and closing tags.
// eg very basic structure
// <!DOCKTYPE html> ---------- >> docktype is just a customry preamble for any .html file. acts as header.
// <html lang="en-US"> ---------- >> root element that encloses the whole html code
//      <head> ---------- >> head element contains all the non-displayable contents of the webpage
//          <meta charset="utf-8">
//          <meta name="viewport" content="width=device-width"> ---------- >> viewport ensures that the page contents renders at the device width 
//          <title>example page</title> ---------- >> title element contains the webpage title/name 
//      </head>
//      <body> ---------- >> body element contains the contents which are to displayed on the webpage 
//          <img src="../demo.png" alt="alternate text" />
//      </body>
// </html>
// elements for marking up the text content
//  • headings: used for accessibility and SEO. don't use it for making text bold. try to maintain the proper sequence of headings i.e
//    <h1><h2><h3><h4><h5><h6></h6></h5></h4></h3></h2></h1>
//  • paragraphs: to wrap the general text content i.e <p></p>
//  • lists: unordered/ordered. contains atleast 2 list items. i.e <ul><li></li></ul> / <ol><li></li></ol>
//  • links: to make links i.e <a href="link address"></a>
// html comment: <!-- -->

//      CSS basics

// cascading style sheets, a style sheet language to style the html contents.
// consists of selector and ruleset. each ruleset consists of multiple declarations with each declaration handling property with property value.
// there are different types of selectors
//  • element selector(aka tag selector) eg. p , html, body, etc
//  • ID selector eg. id="id_example" using #id_example
//  • class selector eg. class="class_example" using .class_example
//  • attribute selector eg. href="image location" using img[href]
//  • pseudo-class selector eg. using a:hover
// add css to your html by adding the link element inside the head element eg. <link href="location of styles folder" rel="stylesheets" />
// css comment: /* */

//      JavaScript basics

// JavaScript ia a programming language that helps to interact with a website.
// various tools are built on top of it to achieve this i.e browser APIs, third-party APIs, and third-party frameworks.
// API to manipulate documents - DOM API eg. features - querySelector(), textContent(), etc
// to use javascript console can refer browser developer tools.
// jacascript language basics:
//      • variables: to store different values. different in terms of data types - String, Object, Number, Array, Boolean, etc
//      • operators: +,_,*,/,===,!==
//      • comments: //, /* */
//      • conditionals: if(){} else{}, for(){}, while(){}, do{}while()
//      • functions: function _name_(){}, anonymous function function(){}, arrow function ()=>{}
//      • events: addEventListener()
// semicolon rules - no semicolon after{}. semicolon acts a statement terminator. JSLint can be used to for syntax proofing. 
// add javascript to your html using script element inside the body tag just before the closing body tag eg.
//      <script src="location of script folder" ></script>