(function (w, d, c) {
  (w[c] = w[c] || []).push(function() {
    var options = {
      project: 7089123,
      trackHashes: true
    };
    try {
      w.top100Counter = new top100(options);
    } catch(e) {}
  });
  var n = d.getElementsByTagName("script")[0],
    s = d.createElement("script"),
    f = function () { n.parentNode.insertBefore(s, n); };
  s.type = "text/javascript";
  s.async = true;
  s.src =
    (d.location.protocol == "https:" ? "https:" : "http:") +
    "//st.top100.ru/top100/top100.js";

  if (w.opera == "[object Opera]") {
    d.addEventListener("DOMContentLoaded", f, false);
  } else { f(); }
})(window, document, "_top100q");
