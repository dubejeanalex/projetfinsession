

// script trouver sur le lient suivant :https://codepen.io/ccrch/pen/yyaraz ---------------------------------------------------------------------------------------- //


$('.tile')
// tile mouse actions
    .on('mouseover', function(){
        $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
        $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
        $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
        $(this)
        // add a photo container
            .append('<div class="photo"></div>')
            // some text just to show zoom level on current item in this example
            //.append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
            // set up a background image for each tile based on data-image attribute
            .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })

//----------------------------------------------------------------------------------------------------------------//

$('#paragraphevert').css("color","green")
$('#paragraphebleu').css("color","blue")

$("#coupdroit").click(function(){
    $("#descriptioncoupdroit").html("                Le coup droit est un des coups les plus puissant au tennis.\n" +
        "                IL s'agit de frapper la balle droit devant nous. C'est un coup qui demande beaucoup d'énergie et permet souvent de déjouer l'adversaire.");


});

$("#couprevert").click(function(){
    $("#descriptioncouprevert").html("                Le coup du revert est souvent un option qu'on ne choisi pas,\n" +
        "                car c'est déstabilisant et beaucoup plus difficile le bien placé la balle.\n" +
        "                Un adversaire qui maîtrise bien le revert peut être très difficile à battre puisque que c'est souvent en envoyant une balle très rapide au revert de l'adversaire qu'il fait une erreur.");


});

$("#service").click(function(){
    $("#descriptionservice").html("                       Le service est un des coups qui fait une grande différence dans une partie. C'est le coup initial et il est très important de le maîtriser.\n" +
        "                Le joueur à la possibilité de faire 2 services. IL doit donc essayer de faire un service très puissant le premier coup. Dans le cas ou il fait une faute il fait un deuxième service souvent moins rapide pour éviter de faire 2 fautes et perdre le point        ");


});

$("#tommyalex").click(function(){
    $("#tommyalex").attr("width","200" );
});




