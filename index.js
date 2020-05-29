$(document).ready(function(e){
    $win=$(window);
    $navbar=$('#header');
    $toggle=$('.toggle-button');
    var width=$navbar.width();
    toggle_onclick($win,$navbar,width);


    //resizing of window
    $win.resize(function(){
        toggle_onclick($win,$navbar,width);

    });

    //toggle navbar with toggle button
    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })
});

function toggle_onclick($win,$navbar,width){
    if($win.width()<=768){
        $navbar.css({left:`-${width}px`}); 
    }else{
        $navbar.css({left: '0px'});
    }
}

var typed=new Typed('#typed' , {
    strings:[
        ' Web Development',
        ' Deep Learning',
        ' Data Science'
        
    ],
    typeSpeed:50,
    backSpeed:50,
    loop:true
});

var typed_2=new Typed('#typed_2' , {
    strings:[
        ' Web Development',
        ' Deep Learning',
        ' Data Science',
    ],
    typeSpeed:50,
    backSpeed:50,
    loop:true
});

var typed_3=new Typed('#typed_3' , {
    strings:[
        ' Summer Session 2020',
        ' Summer Session 2020'
    ],
    typeSpeed:50,
    backSpeed:50,
    loop:true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

