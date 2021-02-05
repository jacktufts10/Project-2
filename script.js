$("document") .ready(function(){

    $("poem-text-column").click(function() {
        $("nav").toggle();
    });

const tl = new TimelineMax();

const rule = CSSRulePlugin.getRule(".img-container:after");

tl.to("body", { duration: 0.5, css: { visibility: "visible" } })
  .to(rule, { duration: 1, width: "100%", ease: "Power2.ease" })
  .to(rule, { duration: 0, right: 0, left: "unset" })
  .to(rule, { duration: 1, width: "0%", ease: "Power2.ease" })
  .to("img", { duration: 0.2, opacity: 1, delay: -1 })
  .from("img", {
    duration: 1,
    scale: 1.4,
    ease: "Power2.easeInOut",
    delay: -1.2
  });

});