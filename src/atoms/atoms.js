import { atom } from "recoil";

const myMode = atom({
    key: 'appMode',
    default : 'light'
})

const cartStore = atom({
    key: 'cartStore',
    default : []
})


const dateOfPicker = atom({
    key: 'dateOfPicker',
    default : new Date()
})



export {myMode , cartStore , dateOfPicker};