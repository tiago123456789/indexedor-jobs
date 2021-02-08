<template>
  <div class="container-fluid row">
    <search-job :action="searchJobs" />
    <job-item v-for="job in jobs" :key="job.objectID"  
        :title="job.title"
        :companyName="job.company.name"
        :location="job.location"
        :link="job.link" :extracted_at="job.extracted_at" />
   
    <load-job-button :action="loadMoreJobs" :isLoadMore="isLoadMore" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import JobItem from '../components/JobItem.vue'
import LoadJobButton from '../components/LoadJobButton.vue'
import SearchJob from '../components/SearchJob.vue';
import JobService from '../services/JobService';

const jobService = new JobService();

export default Vue.extend(
  {
    components: { JobItem, LoadJobButton, SearchJob },
  // @ts-ignore
  head() {
    return {
      title: 'Welcome FindJobs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place find jobs',
        },
      ],
    }
  },

  data() {
    return {
      searchJob: '',
      isLoadMore: false,
      jobs: [],
      totalJobs: 10
    }
  },
  async fetch() {
    try {
      // @ts-ignore
      const response = await jobService.search(this.searchJob, { hitsPerPage: 10, page: 1 });
      //  @ts-ignore
      this.jobs = response.hits.map((item) => ({ ...item }))
    } catch (err) {
        // @ts-ignore
        this.$toast.error(this.$t("message.error"))
    }
  },
  methods: {
    async searchJobs(typedValue: string) {
      try {
        // @ts-ignore
        this.searchJob = typedValue;
        // @ts-ignore
        const response = await jobService.search(this.searchJob, { });
        const isNotReturn = response.hits.length == 0
        if (isNotReturn) {
          // @ts-ignore
          this.$toast.success(this.$t("message.not_found_result_searched"));
          return;
        }
        // @ts-ignore
        this.jobs = response.hits.map((item) => ({ ...item }))
      } catch (err) {
        // @ts-ignore
        this.$toast.error(this.$t("message.error"))
      }
    },
    async getJobs(limit: Number = 10, page: Number = 1) {
      try {
        // @ts-ignore
        const response = await jobService.search(this.searchJob, { hitsPerPage: limit, page: page });
        const isNotReturn = response.hits.length == 0
        if (isNotReturn) {
          return
        }
        // @ts-ignore
        const itens = response.hits.map((item) => ({ ...item }))
        // @ts-ignore
        this.jobs = this.jobs.concat(...itens)
      } catch (err) {
        // @ts-ignore
        this.$toast.error(this.$t("message.error"))
      }
    },
    // @ts-ignore
    async loadMoreJobs() {
      // @ts-ignore
      this.isLoadMore = true
      // @ts-ignore
      const page = this.totalJobs / 10
      // @ts-ignore
      await this.getJobs(10, page);
      // @ts-ignore
      this.totalJobs += 10
      // @ts-ignore
      setTimeout(() => (this.isLoadMore = false), 1000)
    },
  },
})
</script>

<style>
</style>
