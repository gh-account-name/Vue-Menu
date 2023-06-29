import { defineStore } from 'pinia'

export const useScreenStore = defineStore({
  id: 'screen',
  state: () => ({
    screenWidth: window.innerWidth,
    isMobile: false
  }),
  getters: {
    mobile: (state) => state.isMobile
  },
  actions: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth
      this.isMobile = this.screenWidth < 768
    },
    startScreenTracking() {
      window.addEventListener('resize', this.updateScreenWidth)
      this.updateScreenWidth() // Обновляем значение ширины экрана при старте отслеживания
    },
    stopScreenTracking() {
      window.removeEventListener('resize', this.updateScreenWidth)
    }
  }
})
