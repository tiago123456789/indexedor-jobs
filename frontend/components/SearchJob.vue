<template>
     <div class="col-md-9 offset-2">
      <div class="input-group mb-3">
        <input
          v-model="typedValue"
          type="text"
          class="form-control"
          :placeholder="$t('input.placeholder')"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" @click="action(typedValue)">{{ $t("input.btn_search") }}</button>
          <button class="btn btn-light" @click="clean()">{{ $t("input.btn_clean") }}</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "SearchJob",
    data() {
        return {
            typedValue: ""
        }
    },
    props: {
        action: Function
    },
    methods: {
        clean() {
            this.typedValue = "";
            this.action("");
        }
    }
}
</script>