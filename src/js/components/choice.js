import Choices from "choices.js";

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  // // allowHTML: false,
  // searchEnabled: false,
  // // shouldSort: false,
  // itemSelectText: '',
  searchEnabled: false,
  classNames: {
    containerOuter: 'choices header_choices',
  },
  shouldSort: false,
  itemSelectText: '',
});




