$('a[href*="#"]:not([href="#"])').click(function () {
    if (
        location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top 
                },
                1000,
                
            );
            return false;
        }
    }
});

window.sr = ScrollReveal();

sr.reveal('.align', {
    duration: 3000,
    origin:'right',
    distance:'300px'
});
sr.reveal('.sk', {
    duration: 3000,
    origin:'left',
    distance:'300px'
});
sr.reveal('.first', {
    duration: 3000,
    origin:'left',
    distance:'300px'
});
sr.reveal('.second', {
    duration: 3000,
    origin:'bottom',
    distance:'300px'
});
sr.reveal('.third', {
    duration: 3000,
    origin:'right',
    distance:'300px'
});
sr.reveal('.mx-auto', {

    duration: 3000,

    duration: 3000,

    origin:'left',
    distance:'300px'
});
