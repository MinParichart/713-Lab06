<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import eventService from '@/services/EventService';
import type { Event } from '@/types';
import { ref } from 'vue';
const events = ref<Event[]>([])
interface EventResponse {
  data: Event[]
}

eventService.getEvents().then((response:EventResponse) => {
  events.value = response.data
})

</script>

<template>
  <H1>Events For Good</H1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

