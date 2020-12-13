<template>
  <image id="codeImage" :href="codeUrl" />
</template>

<script>
import axios from 'axios';

export default {
  name: 'SpotifyCode',
  props: {
    trackId: { type: String, required: true },
    colour: { type: String, default: 'black' }
  },
  data() {
    return {
      codeUrl: null,
      code: null
    };
  },
  watch: { 
    $props: {
      handler() { this.updateImage() },
      deep: true,
      immediate: true
    }
  },
  methods: {
    async updateImage() {
      const bgColour = this.colour == 'black' ? 'FFFFFF' : '000000';
      this.codeUrl = `https://scannables.scdn.co/uri/plain/svg/${bgColour}/${this.colour}/640/spotify:track:${this.trackId}`;
      
      try {
        const response = await axios.get(this.codeUrl);
        this.code = response.data;
      } catch (err) {
        console.log(err);
      } 
    }
  }
}
</script>