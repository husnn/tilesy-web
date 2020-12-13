<template>
  <div id="player-mockup">
    <svg viewBox="0 0 500 700" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="500" height="700" rx="8" fill="black" :fill-opacity="colour == 'white' ? '0.25' : '0.05'" />
      <!-- Cover -->
      <g>
        <rect id="cover-placeholder" x="75" y="50" width="350" height="350" rx="4" fill="black" fill-opacity="0.05" />
        <clipPath id="cover-clip"><use xlink:href="#cover-placeholder" /></clipPath>
        <image v-show="coverImage != null" :href="coverImage" x="75" y="50" width="350" rx="4" fill="black" clip-path="url(#cover-clip)" />
      </g>
      <!-- Song details -->
      <svg x="75" y="420" width="350">
        <!-- <foreignObject width="400" height="100%" :style="{ color: colour }">
          <xhtml:p style="margin: 0; padding: 0; font-family='Circular, Arial, Helvetica, sans-serif'; font-size: 1.5em; font-weight: bold;  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ songName != null ? songName : 'Name of song' }}</xhtml:p>
          <xhtml:p style="display: block; margin: 0; padding: 0; font-family='Circular, Arial, Helvetica, sans-serif'; font-size: 1.2em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; opacity: 0.8;">{{ artistName != null ? artistName : 'Artist name' }}</xhtml:p>
        </foreignObject -->
        <text y="25" font-weight="bold" font-family="Circular, Arial, Helvetica, sans-serif" font-size="1.5em" :fill="colour">{{ songName != null ? songName : 'Name of song' }}</text>
        <text y="50" font-family="Circular, Arial, Helvetica, sans-serif" font-size="1.2em" :fill="colour">{{ artistName != null ? artistName : 'Artist name' }}</text>
      </svg>
      <!-- Slider -->
      <svg y="500">
          <rect x="75" y="5" width="350" height="2" rx="1" :fill="colour" fill-opacity="0.5" />
          <circle cx="185" cy="6" r="6" :fill="colour" />
          <text x="60" y="30" font-family="Circular, Arial, Helvetica, sans-serif" font-size="1em" :fill="colour">{{ timePlayed != null ? timePlayed : '1:20' }}</text>
          <text x="410" y="30" font-family="Circular, Arial, Helvetica, sans-serif" font-size="1em" :fill="colour">{{ duration != null ? duration : '4:30' }}</text>
      </svg>
      <!-- Controls -->
      <svg x="100" y="530">
        <path transform="translate(120) scale(1.25)" :fill="colour" d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0ZM19,32.66V15.34L34,24Z" />
        <!-- <circle cx="150" cy="32" r="32" :fill="colour" fill-rule='evenodd' />
        <path d="M160 394L145 402.66V385.34L160 394Z" transform="translate(0 -362)" /> -->
        <!-- Right arrow -->
        <path d="M226 394L211 402.66V385.34L226 394Z" :fill="colour" transform="translate(25 -366)" />
        <rect x="250" y="20" width="2" height="16" :fill="colour" />
        <!-- Left arrow -->
        <path d="M74 394L89 402.66V385.34L74 394Z" :fill="colour" transform="translate(-25 -366)" />
        <rect x="48" y="20" width="2" height="16" :fill="colour" />
      </svg>

      <!-- <image href="@/assets/images/spotify-code.svg" x="135" y="610" width="230" :fill="colour" /> -->
      <!-- <image :href="code" x="135" y="610" width="230" :fill="colour" /> -->

      <SpotifyCode x="135" y="610" width="230" :trackId="trackId" :colour="colour" />
    </svg>
  </div>
</template>

<script>
import SpotifyCode from './SpotifyCode.vue';

export default {
  name: 'PlayerMockup',
  components: { SpotifyCode },
  props: {
    trackId: String,
    coverImage: String,
    songName: String,
    artistName: String,
    timePlayed: String,
    duration: String,
    colour: { type: String, default: 'black' }
  }
}
</script>
