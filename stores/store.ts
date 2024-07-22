import type { Distribution } from '~/server/utils/schemas'

export const useStore = defineStore('store', {
  state: () =>
    ({}) as {
      email?: string
      distributions?: Promise<Distribution[] | undefined>
    }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
