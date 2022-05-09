$(function() {
    'use strict';


    var activeColor,
        box1Neiboars = ['2' , '3'],
        box2Neiboars = ['1' , '3' , , '5'  , '4'],
        box3Neiboars = ['1' , '2' , '5' , '6'],
        box4Neiboars = ['2' , '5'],
        box5Neiboars = ['2','3','4','6'],
        box6Neiboars = ['3' , '5'];
    
        
    


    $('.color div').on('click' , function () {
         activeColor = $(this).attr('id');
        

    });  

    $('.container div').on('click' , function() {
        var neighboars = eval('box' + $(this).attr('id') + 'Neiboars'),
        status = true;

        

        neighboars.forEach(function (item) {
            if($('#'+ item).css('background-color') == activeColor){
                status = false
            }
        })

        if(status == true){
            $(this).css('background-color' , activeColor);
            }else {
            alert('Neiboar Box Has Same Colour')
        }
        

        
      
    })


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
     $('#solve').on('click' ,   function () {
        
        var colours = ['rgb(255, 0, 0)' , 'rgb(0, 255, 0)' , 'rgb(0, 0, 255)'];
        var random = getRandomInt(0,2);

        $('#1').css('background-color' , colours[random]);

        if(random == 0){
            $('#2').css('background-color' , colours[1]);
            $('#3').css('background-color' , colours[2]);

        } else if(random == 1){

            $('#2').css('background-color' , colours[0]);
            $('#3').css('background-color' , colours[2]);
        } else if(random == 2){

            $('#2').css('background-color' , colours[1]);
            $('#3').css('background-color' , colours[0]);
        }

        $('#4').css('background-color' , $('#3').css('background-color'));
        $('#6').css('background-color' , $('#2').css('background-color'));
        $('#5').css('background-color' , $('#1').css('background-color'));




        


    });

    $('#reset').on('click' , function() {

        $('.container div').css('background-color' , 'rgb(255,255,255)');
    });




})