<template>
  <div id="player-mockup">
    <svg viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="450" rx="8" fill="black" fill-opacity="0.05"/>
      <rect id="cover-placeholder" x="40" y="40" width="220" height="220" rx="4" fill="black" fill-opacity="0.05" />
      <clipPath id="cover-clip"><use xlink:href="#cover-placeholder" /></clipPath>
      <image v-show="coverImage != null" :href="coverImage" x="40" y="40" width="220" height="220" rx="4" fill="black" clip-path="url(#cover-clip)" />
      <rect x="40" y="340" width="220" height="2" rx="1" fill="black"/>
      <circle cx="101" cy="341" r="4" fill="black"/>
      <text x="32" y="355" font-family="Circular, Arial, Helvetica, sans-serif" font-size="0.6em" fill="black">{{ timePlayed != null ? timePlayed : '1:20' }}</text>
      <text x="250" y="355" font-family="Circular, Arial, Helvetica, sans-serif" font-size="0.6em" fill="black" >{{ duration != null ? duration : '4:30' }}</text>
      <circle cx="150" cy="394" r="24" fill="#1A1A1A"/>
      <path d="M160 394L145 402.66V385.34L160 394Z" fill="white"/>
      <path d="M226 394L211 402.66V385.34L226 394Z" fill="#1A1A1A"/>
      <rect x="225" y="386" width="2" height="16" fill="#1A1A1A"/>
      <path d="M74 394L89 402.66V385.34L74 394Z" fill="#1A1A1A"/>
      <rect width="2" height="16" transform="matrix(-1 0 0 1 75 386)" fill="#1A1A1A"/>
      <foreignObject width="230" height="100%" x="40" y="285">
        <p style="font-family='Circular, Arial, Helvetica, sans-serif'; font-size: 1em; font-weight: bold;  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ songName != null ? songName : 'Name of song' }}</p>
        <p style="font-family='Circular, Arial, Helvetica, sans-serif'; font-size: 0.75em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ artistName != null ? artistName : 'Artist name' }}</p>
      </foreignObject>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'PlayerMockup',
  props: {
    coverImage: String,
    songName: String,
    artistName: String,
    timePlayed: String,
    duration: String
  }
}
</script>

<style scoped>

</style>
