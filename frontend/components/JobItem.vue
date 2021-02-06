<template>
    <div class="col-md-9 offset-2">
      <div class="card mb-3" >
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">
            <p>{{ $t('company') }}: {{companyName}} | {{ $t('location') }}: {{location}}</p>
            <a :href="link" target="_blank" class="btn btn-primary">{{ $t('btn_apply_job') }}</a>
          </p> 
          <small class="">{{ $t('extractedAt') }}: {{ extracted_at | date }} </small>
        </div>
      </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    name: "JobItem",
    props: {
        extracted_at: Date | null,
        title: String,
        companyName: String,
        location: String,
        link: String
    },
    filters: {
      date: function (value) {
        if (value == null || value == '') return;
        return moment(value).format("DD/MM/YYYY")
      }
    }
}
</script>