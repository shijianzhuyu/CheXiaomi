if(typeof jQuery!="function")
  throw new Error("myUI插件库依赖于jQuery，必须先引入jquery.js");
else{
 /*
  $.fn.dropdown=function(){
    //this->$("#my-dropdown")
    //自动侵入class
    this.addClass("dropdown")
        .children().first()
          .addClass("dropdown-btn")
          .attr("data-trigger","dropdown")
        .next()
          .addClass("dropdown-menu fade")
        .children().addClass("item");
    //为元素添加行为
    this.hover(()=>{
      this.children("[data-trigger=dropdown]+*")
          .toggleClass("in")
    });
  }
 */
  /***dropdown***/
  $("[data-trigger=dropdown]").parent().hover(
    function(){
      //this->父元素div->DOM
      var $parent=$(this);
      $parent.children("[data-trigger=dropdown]+*")
        .toggleClass("in")
    } 
  );

  /***accordion***/
  $("[data-trigger=accordion]").parent()
    .on("click","[data-trigger=accordion]",e=>
      $(e.target)
        .next().toggleClass("in")
        .siblings("[data-trigger=accordion]+*")
          .removeClass("in")
  );


  /***tabs***/
  $(".tabs:has([data-toggle=tab])")
    .on("click","[data-toggle=tab]",e=>{
      var $tar=$(e.target);
      if(!$tar.parent().is(".active")){
        $tar.parent().addClass("active")
          .siblings().removeClass("active");
        var id=$tar.attr("href");
        $(id).addClass("active")
          .siblings().removeClass("active");
      }
  })
}