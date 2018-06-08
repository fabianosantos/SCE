import { getCookie } from '../../commons/cookie'

export const isTelevendas = () => ['TELEVENDAS', 'TSAL'].indexOf(getCookie('channel')) >= 0

export const isQuiosque = () => 'QLAS' === getCookie('channel')
