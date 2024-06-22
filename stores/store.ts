enum UserType {
  Student,
  Administator
}

export const useStore = defineStore('store', {
  state: () => ({
    userType: UserType.Administator,
    email: 'a.potyomckin@innopolis.ru'
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
