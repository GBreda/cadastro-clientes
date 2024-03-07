import { defineStore } from 'pinia';

export const useProductsStore = defineStore('productsStore', {
  state: () => ({
    name: 'produto x',
    active: false
  }),
  actions: {
    // async fetchNightTime() {
    //   const { objectToCamelCase } = useToCamelCase();

    //   try {
    //     const { data } = await LimitsService.fecthNightTime();
    //     const nightTime = objectToCamelCase(data);

    //     this.setSelectedNightTime(getSelected(nightTime.options));

    //     this.setTimeForChange(nightTime.timeForChange);

    //     return Promise.resolve(nightTime);
    //   } catch (error) {
    //     return Promise.reject(error);
    //   }
    // },
    // clear({ state }) {
    //   Object.assign(state, { ...defaultState });
    // },
    setName(name) {
      this.name = name;
    },
    setActive(status) {
      this.active = status;
    }
  }
});
