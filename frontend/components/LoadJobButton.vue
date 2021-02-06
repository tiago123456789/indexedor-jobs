<template>
     <div class="col-md-3 mb-1 offset-md-6">
      <button class="btn btn-primary" @click="action()">
        {{ isLoadMore ? `${$t('btn_load_more')}...` : `+ ${$t('btn_load_more')}` }} </button>
    </div>
</template>

<script>
export default {
    name: "LoadJobButton",
    props: {
        action: Function,
        isLoadMore: Boolean
    }
}
</script>