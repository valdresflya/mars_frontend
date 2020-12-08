const rec_albums = [
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test1"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  },
  {
    id: 3,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test3"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  },
  { 
    id: 2,
    image:"https://i.scdn.co/image/ab67616d0000b273fb67a36bb6bcf4178cbaf643",
    band:"Test2"
  }
]


Vue.component('card-comp', {
  props: ['title','url'],
  template: '<div class="col-12 col-sm-6 col-lg-4 col-xl-3"><div class="card mb-3"><img class="card-img-top" :src="url" alt="Card image cap"><div class="card-body"><h5 class="card-title">{{title}}</h5></div></div></div>'
})

albumVue = new Vue({
  el: '#albumCards',
  data: {
    rec_albums
  }
});

