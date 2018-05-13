import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../templates/components/basic-button';

export default Component.extend({
  layout,

  tagName: 'button',

  classNames: ['basic-button'],

  attributeBindings: ['type', 'disabled','name', 'title', 'target', 'value', 'autocomplete'],

  autocomplete: null,

  name: null,

  disabled: false,

  target: null,

  type: 'button',

  value: null,

  click(event, args) {
    if(get(this, 'action')){
      get(this, 'action')(event, args)
    }
  }
});
