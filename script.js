
    var i = 0;
    var x = 0;
    $(function(){
        $('#button').click(function(){
            location.href = 'u1.html'
        });
    })

 const clickFirst = "rgb(153, 201, 56)"
 const clickSecound = "rgba(0, 0, 0, 0)"
 const blind = "rgb(177, 249, 177)"
var pattern = 0

function randomPol(){
    
    //Pole z wikampa
    $(function(){
        $('#w40').css("background", blind);
        $('#w01').css("background", blind);
        $('#w02').css("background", blind);
        $('#w04').css("background", blind);
        $('#w22').css("background", blind);
        $('#w24').css("background", blind);
        $('#w34').css("background", blind);     
        $("#licznik").text(0);  
        pattern = 18;
    })
}
    

    $(function(){
        randomPol();
        $('td').click(function(){
            var thisColor = $(this).css('background-color')
            
            $.fn.changeFunction(this,thisColor,blind,clickSecound,clickFirst);
            
                if(x == pattern){
                    $('#ukladanka').text("Ukladanka: Wygrana!!!");
                }
            
        });
    })

    $.fn.changeFunction = function change(ele,thisColor,blind,clickSecound,clickFirst){
        if(thisColor != blind){
            $("#licznik").text(++i);
            if(!($(ele).css('background-color') == blind)){
                if($(ele).css('background-color') == clickSecound){
                    $(ele).css("background", clickFirst);
                    x++
                }else {
                    if($(ele).css('background-color') == clickFirst){
                        $(ele).css("background", clickSecound);
                        x--;
                    }
                }
            }

            if(!($(ele).next().css('background-color') == blind)){
                if($(ele).next().css('background-color') == clickSecound){
                    $(ele).next().css("background", clickFirst);
                    x++
                }else {
                    if($(ele).next().css('background-color') == clickFirst){
                        $(ele).next().css("background", clickSecound);
                        x--;
                    }
                }
            }

            if(!($(ele).prev().css('background-color') == blind)){
                if($(ele).prev().css('background-color')== clickSecound){
                    $(ele).prev().css("background", clickFirst);
                    x++;
                }else {
                    if($(ele).prev().css('background-color')== clickFirst){
                         $(ele).prev().css("background", clickSecound);
                         x--;
                    }
                }
            }
            
            if(!( $(ele).parent().prev().find('td').eq($(ele).index()).css('background-color') == blind)){
                if($(ele).parent().prev().find('td').eq($(ele).index()).css('background-color') == clickSecound){
                    $(ele).parent().prev().find('td').eq($(ele).index()).css("background", clickFirst);
                    x++
                }else {
                    if($(ele).parent().prev().find('td').eq($(ele).index()).css('background-color') == clickFirst){
                        $(ele).parent().prev().find('td').eq($(ele).index()).css("background", clickSecound);
                        x--;
                    }
                } 
            }
            
            if(!( $(ele).parent().next().find('td').eq($(ele).index()).css('background-color') == blind)){
                if($(ele).parent().next().find('td').eq($(ele).index()).css('background-color') == clickSecound){
                    $(ele).parent().next().find('td').eq($(ele).index()).css("background", clickFirst);
                    x++;
                }else {
                    if($(ele).parent().next().find('td').eq($(ele).index()).css('background-color') == clickFirst){
                        $(ele).parent().next().find('td').eq($(ele).index()).css("background", clickSecound);
                        x--;
                    }
                }
            }
    }
}