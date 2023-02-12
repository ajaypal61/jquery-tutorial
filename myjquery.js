


$(document).ready(function () {
    // jQuery syntax looks like this 
    // $("selector").action() 

    // $("p").click();


    // $("p").click(function () {
    //     console.log("jjjjh");
    //     $(this).hide();
    // });


    // there are three main types of selectors in jQuery ################# 

    // 1. element selector 
    // 2. id selector 
    // 3. class selector


    // 1. element selector 


    // $("p").click(function () {
    //         console.log("jjjjh");
    //         // $(this).hide();
    //     });



    // 2. id selector 

    // $("#sec").click(function(){
    //     console.log("id selector" , this);

    // })




    // 3. class selector


    // $(".three").click(function(){
    //     console.log("class selector", this);
    // });



    // other selectors 

    // click on all the elements 

    // $("*").click(function(){
    //     console.log("All selector", this);
    // });



    // events in jquery 

    // 1. Mouse Events

    // A. click 
    // B. dblclick
    // C. mouseenter
    // D. mouseleave
    // E. hover
    // F. focus



     // $("p").dblclick(function () {
    //         console.log("jjjjh");
    //         // $(this).hide();
    //     });


    // hover event 

    // $("p").hover(function(){
    //     console.log("hover on", this),
    //     alert("hover on")
    // },
    // function(){
    //     console.log("ssfff");
    //     alert("hover out ")
    // }
    // );
  

    // 2. Keyboard Events

    //  $("p").keypress(function () {
    //         console.log("jjjjh");
    //         // $(this).hide();
    //     });










    // show and hide 

    // $("#wiki").hide(function(){
    //     console.log("hidden");
    // })

    // $("#show").show(function(){
    //     console.log("show");
    // })




    // $("#hide").click(function(){
    //     $("#wiki").hide();
    // });

    // $("#show").click(function(){
    //     $("#wiki").show();
    // });




    // $("#but").click(function(){
    //     $("#wiki").fadeOut(5000);
    // });

    // fadeIn()
    // fadeOut()
    // fadeTo()
    // fadeToggle()




    // slide ######### 

    // slideUp()
    // slideDown()
    // slideToggle()


    // $("#but").click(function(){
    //     $("#wiki").slideToggle(2000);
    // })


    // $("#but").click(function(){
    //     $("#wiki").css("color", "red").slideUp(2000).slideDown(2000);
    // })



    // animate function in Jquery 

    // $("#but").click(function(){
    //     $("#wiki").animate({
    //         opacty:0.3,
    //         height:"150px",
    //         width:"350px"
    //     },"fast")
    // });



    // $("#but").click(function(){
    //     $("#wiki").animate({
    //         // opacty:0.3,
    //         height:"toggle"
    //         // width:"350px"
    //     },5000)
    // });


    // w3 school se or animate dekhe ######################### 
   




    // html in jquery 


    // $("#btn1").click(function(){
    //     $("#test1").text("Hello world!");
    //   });
    //   $("#btn2").click(function(){
    //     $("#test2").html("<b>Hello world!</b>");
    //   });
    //   $("#btn3").click(function(){
    //     $("#test3").val("Dolly Duck");
    //   });


    // add 
    // remove 

    // add ###
    // 1. append()
    // 2. prepend()
    // 3. after()
    // 4. before()                              



    // $("#btnadd").click(function(){
    //     $("#add").prepend("<b> ajay</b>");
    // });



    // remove 
    // 1. remove()
    // 2. empty()

    



















});






// $("p").click(function(){
//     console.log("ajha");
// });