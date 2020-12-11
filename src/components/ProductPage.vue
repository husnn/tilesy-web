<template>
  <div id="product-page" class="mx-auto">
    <div id="product-page__main" class="pt-4 text-left grid auto-rows-auto sm:grid-cols-2 items-center">
      <div class="p-4 md:p-8">
        <PlayerMockup class="md:w-3/4 mx-auto" :coverImage="coverImage" :songName="songName" :artistName="artistName" :duration="duration" :timePlayed="timePlayed" />
      </div>
      <div id="product-page__attributes" class="p-4 md:p-8 grid auto-rows-auto gap-8">
        <h1 class="hidden sm:block py-4">Customised<br />Music Player Plaque</h1>
        <div id="attributes__fields" class="md:w-3/4 grid auto-rows-auto gap-8">
          <div class="w-64 py-3 px-8 flex space-x-4 justify-center items-center text-sm text-white bg-black cursor-pointer rounded" @click="showSpotifyModal">
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
              <input type="text" id="cover-image" class="mr-3" v-model="coverImage" autocomplete="off" />
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
            <button class="w-full btn-primary" @click="goToCheckout" :disabled="spotifyModalVisible || !buyButtonEnabled">Get yours now</button>
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

    <div id="product-page__description" class="p-4 pb-16 grid auto-rows-auto gap-12 text-left sm:pb-24 sm:text-center border-b" style="background-color: #FAFAFA;">
      <div class="mt-4">
        <h3>Hold your favourite music in your hands</h3>
        <p class="mt-4">Get yourself a plaque of your favourite tracks and express your taste to the world.</p>
      </div>

      <carousel class="overflow-auto" :items-to-show="1.25" initialSlide="0" :wrapAround="true" :breakpoints="{
        640: {
          itemsToShow: 2
        },
        1280: {
          itemsToShow: 3
        }
      }">
        <slide v-for="(url, index) in carouselImages" :key="index" class="md:max-w-1/3">
          <img :src="url" />
        </slide>
      </carousel>

      <div class="sm:max-w-3/4 sm:mx-auto">
        <h3>Gift a customised plaque to your one</h3>
        <p class="mt-4">Describe your feelings towards a special someone through words and a picture.</p>
      </div>
      <div class="sm:max-w-3/4 sm:mx-auto">
        <h3>Celebrate your friendship with someone</h3>
        <p class="mt-4">Share with them a song that you're both obsessed with.</p>
      </div>
    </div>

    <div class="py-8 flex space-x-4 justify-center text-sm">
      <a href="#" class="lowkey">Terms & Conditions</a>
      <a href="#" class="lowkey">Privacy Policy</a>
    </div>

    <div v-if="spotifyModalVisible" id="product-page__spotify-modal" class="modal">
      <img src="@/assets/images/ic-cross.svg" class="w-3 cursor-pointer opacity-70 hover:opacity-90" @click="toggleSpotifyModal" />
      <div>
        <h2 class="mt-2">Get track from Spotify</h2>
        <p class="mt-2 text-sm opacity-70">Open the app & try sharing your song. Copy the link & paste it below.</p>
      </div>
      <p v-if="spotifyError" class="py-2 px-4 text-sm text-white bg-red-500 leading-relaxed rounded">{{ spotifyError }}</p>
      <div>
        <label>Spotify link</label>
        <input type="text" id="spotify-link" class="text-input" v-model="spotifyUrl" @input="spotifyError = null;" placeholder="https://open.spotify.com/track/..." autocomplete="off" />
      </div>
      <button class="w-full btn-primary" @click="getTrackInformation">Get information</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

import PlayerMockup from './PlayerMockup.vue';
import { millisToMinutesAndSeconds } from '@/utils/timeConversion.js';

export default {
  name: 'ProductPage',
  components: {
    PlayerMockup,
    Carousel,
    Slide
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
      songName: 'Thinking out Loud',
      artistName: 'Ed Sheeran',
      duration: '4:42',
      timePlayed: '1:34',
      spotifyModalVisible: false,
      spotifyUrl: "",
      spotifyError: null,
      buyButtonEnabled: true,
      carouselImages: [
        "https://tilesy.s3.eu-west-2.amazonaws.com/uploads/showcase/0b56acfa-6c39-4809-8c3b-ca6e61e78417.jpg",
        "https://tilesy.s3.eu-west-2.amazonaws.com/uploads/showcase/2e8ea285-2529-402e-90cd-9a7d7a80f4ab.jpg",
        "https://tilesy.s3.eu-west-2.amazonaws.com/uploads/showcase/7dde45f2-c7ef-41af-bf10-257e290945db.jpg",
        "https://tilesy.s3.eu-west-2.amazonaws.com/uploads/showcase/cdadabbb-8746-47fe-9a84-13d7b6792a5a.jpg",
        "https://tilesy.s3.eu-west-2.amazonaws.com/uploads/showcase/183a8e92-8e8e-427b-b9db-d5b84af99d52.jpg",
      ]
    }
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_API_URL}/get-price`).then(response => {
      const { data } = response;
      this.currency = data.currency;
      this.priceAmount = data.amount;
    });
  },
  methods: {
    async uploadImage() {
      const file = this.$refs.localCover.files[0];

      if (!file) return;

      try {
        const signatureReq = await axios.post(`${process.env.VUE_APP_API_URL}/sign-cover-url`, { fileName: file.name, fileType: file.type });
        await axios.put(signatureReq.data.signedUrl, file);
        this.coverImage = signatureReq.data.url;
      } catch (err) {
        console.log(err);
      }
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    showSpotifyModal() {
      this.spotifyModalVisible = true;
      document.getElementById("product-page__main").style.opacity = 0.1;
    },
    closeSpotifyModal() {
      this.spotifyModalVisible = false;
      this.spotifyError = null;
      document.querySelector("#product-page__main").style.opacity = 1;
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

      axios.get(`${process.env.VUE_APP_API_URL}/get-track?trackId=${trackId}`).then(response => {
        const { data } = response;

        this.songName = data.name;
        this.artistName = data.artists.map(a => a.name).join(', ');
        this.coverImage = data.images[0].url;
        this.duration = millisToMinutesAndSeconds(data.duration);
        this.timePlayed = millisToMinutesAndSeconds(data.duration / 3);

        this.closeSpotifyModal();
        this.scrollToTop();
      }).catch(() => {
        this.spotifyError = 'That link may be wrong. Please try again later.';
      });
    },
    async goToCheckout() {
      this.buyButtonEnabled = false;

      const stripe = new Stripe(process.env.VUE_APP_STRIPE_PK); // eslint-disable-line

      axios({
        method: 'post',
        url: `${process.env.VUE_APP_API_URL}/buy`,
        data: {
          currencyCode: this.currency.code,
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
