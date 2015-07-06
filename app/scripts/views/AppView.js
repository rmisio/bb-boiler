/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AppViewView = Backbone.View.extend({
        template: JST['app/scripts/templates/appView.ejs'],

        el: '#main',

        className: '',

        events: {},

        initialize: function () {
          // this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
          this.$el.html(this.template());
        }
    });

    return AppViewView;
});
