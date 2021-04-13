new Glide('.glide', {
    type: 'slider',
    bound:true,
    breakpoints: {     
        769: {
        perView: 3
        },
        426: {
        perView: 2,
        gap:10
        },
    },
    perView:4,
    startAt: 0,
    gap:50,
    focusAt:'0',
    autoplay:2000,
    hoverpause: true,
}).mount()
