$(document).ready(function(){
    animateDiv(); 
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    $('.a').animate({ top: newq[0], left: newq[1] }, 7000, function(){
      animateDiv();        
    });
    
};
