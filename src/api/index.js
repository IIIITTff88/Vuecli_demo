import Http from '../http/index'

import axios from 'axios'

export function getTab1 () {
  return Http.ajax({
    url: '/tab1/List',
    type: 'post'
  })
}

export function getTab2 () {
  return Http.ajax({
    url: '/tab2/List',
    type: 'post'
  })
}

export function getTab3 () {
  return Http.ajax({
    url: '/tab3/List',
    type: 'post'
  })
}

export function histroyList () {
  return axios.get('https://api.asilu.com/today/')
}
