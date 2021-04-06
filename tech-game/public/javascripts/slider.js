new Glide('.glide', {
    type: 'slider',
    bound:true,
    breakpoints: {
        1024: {
        perView: 3
        },
        768: {
        perView: 3
        },
        426: {
        perView: 3
        },
        425:{
        perView: 1
        }
    },
    perView:3,
    startAt: 0,
    gap:50,
    focusAt:'0',
    autoplay:2000,
    hoverpause: true,
}).mount()
