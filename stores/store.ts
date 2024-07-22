export const useStore = defineStore('store', {
  state: () =>
    ({}) as {
      email: string
    }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
