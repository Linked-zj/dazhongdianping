import {httpGet,httpPost} from './httpService'

 export function getswipedata(){
     this.httpPost({
        url:'/swipe/data'
    })
}