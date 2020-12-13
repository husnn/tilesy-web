<template>
  <div id="product-page" class="mx-auto">
    <div id="header" class="container pt-8 pb-4 px-8 mx-auto flex flex-row items-center justify-between">
      <div class="flex flex-row items-center space-x-4">
        <img src="@/assets/images/logo.svg" width="40" />
        <h3>Tilesy</h3>
      </div>
      <div>
        <a href="https://instagram.com/tilesyco" target="blank"><img class="hover:opacity-70" src="@/assets/images/ic-ig-logo.svg" width="21" /></a>
      </div>
    </div>
    <div id="modal-overlay" @click="closeSpotifyModal"></div>
    <div id="product-page__main" class="text-left grid auto-rows-auto sm:grid-cols-2 items-center">
      <div class="p-4 md:p-8">
        <PlayerMockup ref="playerMockup" class="md:w-3/4 mx-auto"
          :trackId="trackId"
          :coverImage="coverImage"
          :songName="songName"
          :artistName="artistName"
          :duration="duration"
          :timePlayed="timePlayed"
          :colour="mockupColour"
        />
        <div class="mt-4 flex justify-center space-x-8">
          <div class="opacity-50">
            <img class="inline opacity-50" src="@/assets/images/ic-preview.svg" width="16" />
            <p class="ml-2 inline align-middle">Live preview</p>
          </div>
          <div @click="toggleMockupColour" class="hover:opacity-70 cursor-pointer">
            <img class="inline" src="@/assets/images/ic-bulb.svg" width="16" />
            <p class="ml-2 inline align-middle">Switch color</p>
          </div>
        </div>
      </div>
      <div id="product-page__attributes" class="p-4 md:p-8 grid auto-rows-auto gap-8">
        <h1 class="hidden sm:block py-4">Customised<br />Music Player Plaque</h1>
        <div id="attributes__fields" class="md:w-3/4 grid auto-rows-auto gap-8">
          <div class="w-full mt-2 sm:w-64 sm:mt-0 py-3 px-8 flex space-x-4 justify-center items-center text-sm text-white bg-black cursor-pointer rounded" @click="showSpotifyModal">
            <img src="@/assets/images/ic-spotify.svg" width="21" />
            <p>Import from Spotify</p>
          </div>
          <div>
            <label>Name of song</label>
            <div class="text-input-with-icon">
              <img src="@/assets/images/ic-track.svg" />
              <input type="text" id="song-name" v-model="songName" autocomplete="off" />
            </div>
          </div>
          <div>
            <label>Artist name</label>
            <div class="text-input-with-icon">
              <img src="@/assets/images/ic-artist.svg" />
              <input type="text" id="artist-name" v-model="artistName" autocomplete="off" />
            </div>
          </div>
          <div>
            <label>Cover image</label>
            <div class="text-input-with-icon">
              <img src="@/assets/images/ic-paperclip.svg" />
              <input type="text" id="cover-image" class="mr-3" v-model="coverImage" autocomplete="off" readonly />
              <span class="mr-2 flex space-x-2 items-center text-xs opacity-50 hover:opacity-70 cursor-pointer" @click="this.$refs.localCover.click()">
                <img src="@/assets/images/ic-upload.svg" width="12" />
                <span class="mt-1">Upload</span>
                <input ref="localCover" type="file" id="local-cover-image" name="cover" class="hidden" accept="image/*" @change="uploadImage" />
              </span>
            </div>
          </div>
          <div id="attributes__buy">
            <div class="mb-4 flex justify-between items-center">
              <p class="font-bold">5 x 7 inch</p>
              <p class="text-right">
                <span id="buy__price" class="font-bold">{{ currency.code }} {{ priceAmount }}</span>
                <span id="buy__shipping" class="block text-xs text-gray-400">+{{ shippingAmount }} Shipping</span>
              </p>
            </div>
            <button class="w-full btn-primary" @click="goToCheckout" :disabled="!buyButtonEnabled">Get yours now</button>
            <p class="mt-8 flex justify-center items-center text-sm opacity-70 sm:justify-start"><img src="@/assets/images/ic-secure-shield.svg" width="16" /><span class="ml-4">256-Bit SSL secure & safe checkout</span></p>
          </div>
        </div>
        <h2 class="block sm:hidden py-4">Customised<br />Music Player Plaque</h2>
      </div>
    </div>
    
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#00d95f" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path fill="#FAFAFA" transform="translate(-72, -24) scale(1.2)" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    <div id="product-page__description" class="p-4 pb-16 grid auto-rows-auto gap-12 text-left sm:pb-24 sm:text-center border-b overflow-hidden" style="background-color: #FAFAFA;">
      <div class="mt-4">
        <h3>Hold your favourite music in your hands</h3>
        <p class="mt-4">Get yourself a plaque of your favourite tracks and express your taste to the world.</p>
      </div>

      <div class="owl-carousel">
        <img v-for="(image, index) in carouselImages" :key="index" :src="image" style="height: 350px; object-fit: cover;" />
      </div>

      <div class="sm:max-w-3/4 sm:mx-auto">
        <h3>Gift a customised plaque to your significant other</h3>
        <p class="mt-4">Describe your feelings towards a special someone through words and a picture.</p>
      </div>
      <div class="sm:max-w-3/4 sm:mx-auto">
        <h3>Celebrate your friendship with someone</h3>
        <p class="mt-4">Share with them a song that you're both obsessed with.</p>
      </div>

      <ul class="faq sm:max-w-3/4 sm:mx-auto">
        <li v-for="(qa, index) in faq" :key="index">
          <div class="title"><h5>{{ qa[0] }}</h5></div>
          <div class="panel">
            <p v-for="(line, index) in qa[1]" :key="index">{{ line }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="py-8 flex space-x-4 justify-center text-sm">
      <a href="#" class="lowkey">Terms & Conditions</a>
      <a href="#" class="lowkey">Privacy Policy</a>
    </div>

    <div v-if="spotifyModalVisible" id="product-page__spotify-modal" class="modal">
      <img src="@/assets/images/ic-cross.svg" class="w-3 float-right cursor-pointer opacity-70 hover:opacity-90" @click="toggleSpotifyModal" />
      <div>
        <h2 class="mt-2">Get track from Spotify</h2>
        <p class="mt-2 text-sm opacity-70">Open the app & try sharing your song. Copy the link & paste it below.</p>
      </div>
      <p v-if="spotifyError" class="py-2 px-4 text-sm text-white bg-red-500 leading-relaxed rounded">{{ spotifyError }}</p>
      <div>
        <label>Spotify link</label>
        <input type="text" id="spotify-link" class="text-input" v-model="spotifyUrl" @input="spotifyError = null;" placeholder="https://open.spotify.com/track/..." autocomplete="off" />
      </div>
      <button class="w-full btn-primary" @click="getTrackInformation" :disabled="!spotifyButtonEnabled">Get information</button>
    </div>
  </div>
</template>

<!-- eslint-disable -->
<script>
import axios from 'axios';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

import PlayerMockup from './PlayerMockup.vue';
import { millisToMinutesAndSeconds } from '@/utils/timeConversion.js';

export default {
  name: 'ProductPage',
  components: {
    PlayerMockup
  },
  data() {
    return {
      currency: {
        code: 'GBP',
        symbol: '£'
      },
      priceAmount: '19.99',
      shippingAmount: '4.99',
      coverImage: 'https://i.scdn.co/image/ab67616d0000b273d08209944468440145f01524',
      mockupColour: 'black',
      trackId: '1Slwb6dOYkBlWal1PGtnNg',
      songName: 'Thinking out Loud',
      artistName: 'Ed Sheeran',
      duration: '4:42',
      timePlayed: '1:34',
      spotifyModalVisible: false,
      spotifyUrl: "",
      spotifyError: null,
      spotifyButtonEnabled: true,
      buyButtonEnabled: true,
      carouselImages: [
        "https://tilesy.s3.eu-west-2.amazonaws.com/showcase/121201967_2925785930976141_3185171781063249833_n.jpg",
        "https://tilesy.s3.eu-west-2.amazonaws.com/showcase/129320272_419751222517037_141585343197074418_n.jpg",
        "https://tilesy.s3.eu-west-2.amazonaws.com/showcase/5e98bb4646a32a8ebb453a2f86e3342f.jpg",
        "https://tilesy.s3.eu-west-2.amazonaws.com/showcase/c0711294ce8b779c78c735776b602e42.jpg",
        "https://tilesy.s3.eu-west-2.amazonaws.com/showcase/il_1588xN.2576333414_rkfa.jpg",
      ],
      faq: [
        ['Who is this for?', ['In short... anyone.']],
        ['Where do you deliver?', ['We ship to anywhere in the US, UK, Canada, Europe, Australia and New Zealand.']]
      ]
    }
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_API_URL}/get-price`).then(response => {
      const { data } = response;
      this.currency = data.currency;
      this.priceAmount = data.amount;
    });

    $('.faq .title').on('click', function() {
      const isOpen = !$(this).attr('open');
      $(this).attr('open', isOpen);

      const panel = $(this).siblings('.panel');
      panel.attr('closed', !isOpen);

      isOpen ? panel.slideDown() : panel.slideUp();

      $(this).parent().siblings().each(function() {
        $(this).children('.title').attr('open', false);
        $(this).children('.panel').slideUp();
      });
    });

    $('.owl-carousel').owlCarousel({
      margin: 10,
      center: true,
      loop: true,
      items: 4,
      lazyLoad: true,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1.5
          },
          600: {
              items: 3
          },
          1280: {
              items: 5
          }
      }
    });
  },
  methods: {
    toggleMockupColour() {
      this.mockupColour = this.mockupColour == 'black' ? 'white' : 'black';
    },
    async uploadImage() {
      const file = this.$refs.localCover.files[0];
      if (!file) return;
      this.buyButtonEnabled = false;

      try {
        const signatureReq = await axios.post(`${process.env.VUE_APP_API_URL}/sign-cover-url`, { fileName: file.name, fileType: file.type });
        await axios.put(signatureReq.data.signedUrl, file, { headers: { 'Content-Type': file.type, 'ACL': 'public-read' }});
        this.coverImage = signatureReq.data.url;
        this.scrollToTop();
      } catch (err) {
        console.log(err);
      }

      this.buyButtonEnabled = true;
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    showSpotifyModal() {
      this.spotifyModalVisible = true;
      document.querySelector("#modal-overlay").setAttribute('visible', true);
    },
    closeSpotifyModal() {
      if (!this.spotifyModalVisible) return;
      this.spotifyModalVisible = false;
      this.spotifyError = null;
      document.querySelector("#modal-overlay").removeAttribute('visible');
    },
    toggleSpotifyModal() {
      this.spotifyModalVisible ? this.closeSpotifyModal() : this.showSpotifyModal();
    },
    getTrackInformation() {
      if (this.spotifyUrl.length < 1) {
        this.spotifyError = 'Please enter a valid link.';
        return;
      }

      const trackId = this.spotifyUrl.split('/')[4];

      this.spotifyButtonEnabled = false;

      axios.get(`${process.env.VUE_APP_API_URL}/get-track?trackId=${trackId}`).then(response => {
        const { data } = response;

        this.trackId = trackId;
        this.songName = data.name;
        this.artistName = data.artists.map(a => a.name).join(', ');
        this.coverImage = data.images[0].url;
        this.duration = millisToMinutesAndSeconds(data.duration);
        this.timePlayed = millisToMinutesAndSeconds(data.duration / 3);

        this.closeSpotifyModal();
        this.scrollToTop();
      }).catch(() => {
        this.spotifyError = 'That link may be wrong. Please try again later.';
      }).finally(() => {
        this.spotifyButtonEnabled = true;
      });
    },
    async goToCheckout() {
      this.buyButtonEnabled = false;
      this.scrollToTop();

      const stripe = new Stripe(process.env.VUE_APP_STRIPE_PK); // eslint-disable-line

      axios({
        method: 'post',
        url: `${process.env.VUE_APP_API_URL}/buy`,
        data: {
          currencyCode: this.currency.code,
          mockup: this.$refs.playerMockup.$el.innerHTML,
          colour: this.mockupColour,
          song: {
            songName: this.songName,
            artistName: this.artistName,
            spotifyUrl: this.spotifyUrl,
            coverUrl: this.coverImage,
            duration: this.duration,
            timePlayed: this.timePlayed
          }
        }
      }).then(response => {
        stripe.redirectToCheckout({ sessionId: response.data.stripeSession });
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        this.buyButtonEnabled = true;
      });
    }
  }
}
</script>
