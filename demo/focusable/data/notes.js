define(function defineDemoFocusableNotes(require) {
  return {
    "BODY": 'default focus',

    "audio": '<a href="http://www.w3.org/TR/html5/dom.html#interactive-content">interactive content</a> only with <code>controls</code> attribute',
    "video": '<a href="http://www.w3.org/TR/html5/dom.html#interactive-content">interactive content</a> only with <code>controls</code> attribute',

    "table": 'IE11 makes <code>&lt;table&gt;</code> and <code>&lt;td&gt;</code> focusable.',
    "table thead tr td": 'IE11 makes <code>&lt;table&gt;</code> and <code>&lt;td&gt;</code> focusable.',
    "table tbody tr td": 'IE11 makes <code>&lt;table&gt;</code> and <code>&lt;td&gt;</code> focusable.',
    "table tbody tr{collapse} td{visible}": 'IE11 makes <code>&lt;table&gt;</code> and <code>&lt;td&gt;</code> focusable.',
    "table tbody tr{collapse} td a": 'jQuery <code>:visible</code> does not know about <code>visibility: collapse</code>',
    "table tbody tr{collapse} td a{visible}": 'jQuery <code>:visible</code> does not know about <code>visibility: collapse</code>',
    "table tr{collapse} td a{visible}": 'Firefox does not render the element, but it is tabbable. IE11 renders it, but it has `element.offsetHeight === 0`',

    "svg": 'Focusable and tabbable in IE11, accidentally made focusable/tabbable because we added a <code>focus</code> event listener (Blink, WebKit)',
    "svg a[xlink|href]": 'Firefox and IE11 are missing <code>SVGElement.prototype.focus</code>',
    "svg text": 'accidentally made focusable/tabbable because we added a <code>focus</code> event listener (Blink, WebKit)',
    "svg rect": 'accidentally made focusable/tabbable because we added a <code>focus</code> event listener (Blink, WebKit)',

    "fieldset[tabindex=0][disabled]": 'should not be focusable as per <a href="http://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled">disabled elements</a>',
    "link[itemprop][href]": 'naturally focusable according to <a href="http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute">HTML5 tabindex</a>',

    "keygen": 'Not supported in IE11',
    "iframe": 'Firefox does not dispatch <code>focus</code> event but <code>document.activeElement</code> is updated properly, see <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=131784">#131784</a>',

    "a > img[ismap]": 'see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-ismap">&lt;img ismap&gt;</a>, focus should be the link-parent',
    "area[href].upper": 'Firefox requires the image using the map to be loaded',
    "area[href].lower": 'Firefox requires the image using the map to be loaded',
    "map.invalid-image area[href].upper": 'Maps belonging to broken images',
    "map.invalid-image area[href].lower": 'Maps belonging to broken images',

    "object[src=svg]": 'Firefox does not dispatch <code>focus</code> event but <code>document.activeElement</code> is updated properly',
    "object[src=svg][height=0]": 'Firefox does not dispatch <code>focus</code> event but <code>document.activeElement</code> is updated properly',
    "object[usemap]": 'once focused in IE11, the browser cannot tab back to the document anymore, it get\'s stuck in the address bar. It was therefore removed from the test',

    "[contenteditable]:empty": 'Firefox reports <code>element.offsetHeight === 0</code>, working around that internally',

    "without-event(iframe)": 'see iframe',
    "without-event(object[src=svg])": 'see object[src=svg]',
    "without-event(object[src=svg][height=0])": 'see object[src=svg][height=0]',

    "via(img[usemap].first): area[href].upper": 'upon focusing an image with associated &lt;map&gt;, IE will focus the first &lt;area&gt; of that map.',
    "via(img[usemap].second): area[href].upper": 'upon focusing an image with associated &lt;map&gt;, IE will focus the first &lt;area&gt; of that map.',
    "via(label[for=\"label-target\"]): input[type=text]": 'upon focusing <label for> the element identified by the for attribute gets focused',

    // invalid [tabindex]
    "[tabindex=\"\"]": 'invalid according to <a href="http://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers">rules for parsing integers</a> required by <a href="http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute">HTML5 tabindex</a>',
    "[tabindex=3 ]": 'invalid according to <a href="http://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers">rules for parsing integers</a> required by <a href="http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute">HTML5 tabindex</a> but every browser permits it anyways',
    "[tabindex=hello]": 'invalid according to <a href="http://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers">rules for parsing integers</a> required by <a href="http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute">HTML5 tabindex</a>',

  };
});