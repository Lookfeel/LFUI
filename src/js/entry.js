/* global $ */

// 框架
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

// Http相关
Vue.http.options.crossOrigin = true;
Vue.http.options.xhr = { withCredentials: true };


// 第三方组件
import vSelect from 'vue-select';

// 样式文件
import '../scss/lfui.scss';
import '../css/main.css';

// 自定义组件
import Loading from '../components/loading';
import Button from '../components/button';
import BtnGroup from '../components/button-group';
import Dropdown from '../components/dropdown';
import Tips from '../components/tips';
import Breadcrumb from '../components/breadcrumb';
import Dialog from '../components/dialog';
import Table from '../components/table';
import Filter from '../components/filter';
import Datetimepicker from '../components/datetimepicker';
import Ueditor from '../components/ueditor';

/* eslint no-new: off */
window.vm = new Vue({
  el: 'body',
  data: {
    data: {},
  },
  components: {
    vSelect,
    Btn: Button,
    LfTable: Table,
    BtnGroup,
    Dropdown,
    Tips,
    Breadcrumb,
    Dialog,
    Filter,
    Datetimepicker,
    Loading,
    Ueditor,
  },
  methods: {
    dialog(id, options) {
      this.modal = {
        id,
        title: options.title,
        desc: options.desc,
        foot: options.foot || true,
        type: options.type || 'confirm',
        event: options.event,
      };
    },
  },
});

$(() => {
  $('body').tooltip({
    selector: '[data-toggle="tooltip"]',
    container: 'body',
  }).popover({
    selector: '[data-toggle="popover"]',
    container: 'body',
  });

  for (let item of $('[data-picker=datetimepicker]')) {
    let format = $(item).data('format');
    $(item).datetimepicker({
      locale: 'zh-cn',
      format: format,
    });
  }
});
