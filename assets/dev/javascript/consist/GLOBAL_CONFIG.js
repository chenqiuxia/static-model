import url from '../util/url'
//ToDo: clear this global config
//baseUrl
export const baseUrl = $('meta[name="baseUrl"]').attr('content') || '/nippon/'

// SP width
export let isSP = document.body.clientWidth <= 782