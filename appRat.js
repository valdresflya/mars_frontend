const rec_albums = [
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b273745d59b647c30c5378510fe0",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b273a159f2b5ccc1faefea4aceac",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b273bdd53a2c8cb9730e9ef52cf3",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b2737ed87984e7f39ba42ee1b50a    ",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b273a4987d73b0fea544ed75c571",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b273ac79283ccb6d08af31fd33d8",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b2734ea56ef453ce4f457f6ebd42",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b2734ea56ef453ce4f457f6ebd42",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b2734ea56ef453ce4f457f6ebd42",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b2734ea56ef453ce4f457f6ebd42",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b2734ea56ef453ce4f457f6ebd42",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b2734ea56ef453ce4f457f6ebd42",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b2734ea56ef453ce4f457f6ebd42",
    artist:"A band",
    album:"An album"
  },
  {
    id: 1,
    image:"https://i.scdn.co/image/ab67616d0000b2734ea56ef453ce4f457f6ebd42",
    artist:"A band",
    album:"An album"
  }
]


Vue.component('card-comp', {
  props: ['album','artist','url'],
  template: `<div class="col-12 col-sm-6 col-lg-4 col-xl-3"><div class="card mb-3 fade-in album-card"><img class="card-img-top" :src="url" alt="Card image cap">
<div class="spotify-icons"><a href="#"><i class="fa fa-spotify fa-2x"></i></a></div>
  <div class="album-text">
<div class="album-name">{{album}}</div>
<div class="artist-name">{{artist}}</div>`
})

albumVue = new Vue({
  el: '#albumCards',
  data: {
    rec_albums
  }
});

