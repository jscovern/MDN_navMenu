/*$(document).ready(function(){
  console.log("1");
  $(".button").click(function(){
    var $this=$(this);
    console.log("2");
    // $this.addClass("showUp");
    console.log("3");
    var text=$this.text();
    console.log(text);
    console.log("#"+text);
    var buttonName="#"+text;
    $(buttonName).addClass("showUp");
    $(buttonName).removeClass("defaultHidden");
    console.log($(buttonName).attr("title"));
    // console.log($this).hasClass("showUp");
  });
}); */

console.log("blah");

$(document).ready(function(){
  // console.log("1");
  $(".button").hover(function(){
    var $this=$(this);
    // console.log("2");
    // $this.addClass("showUp");
    // console.log("3");
    var text=$this.attr("title");
    console.log(text);
    console.log("#"+text);
    var buttonName="#"+text;
    // $(buttonName).addClass("showUp");
    $(buttonName).removeClass("defaultHidden");
    // $(buttonName).position().left=$this.position().left;
    var offsetAmount=$this.offset();
    $(buttonName).offset(offsetAmount); 
    // console.log($this.position().left+" left attr for buttonName");
    // console.log($(buttonName).position().left);
    // console.log($(buttonName).position().left===$this.position().left);
  },

  function(){
    var $this=$(this);
    var buttonName="#"+$this.attr("title");
    // console.log("in the get off hover");
    // console.log($(buttonName).attr("title"));
    $(buttonName).addClass("defaultHidden");

  });
    // console.log($this).hasClass("showUp");
  });
