import locale from 'heyui/locale';

export default {
  methods: {
    t(...args) {
      return locale.t.apply(this, args);
    }
  }
};
