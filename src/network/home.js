import { request } from './request'

// 1.获取menu
export function getMenu(){
    return request({
        url: '/menu'
    })
}
// 2.获取count列表
export function getCount(){
    return request({
        url: '/count'
    })
}
// 3.获取course列表
export function getCourse(){
    return request({
        url: '/course'
    })
}
// 4.获取formword列表
export function getFormword(){
    return request({
        url: '/formword'
    })
}
// 5.
export function getWait(){
    return request({
        url: '/wait'
    })
}
