import { IMenu } from "@/domain/common.model";

export const menuList: IMenu[] = [
    { id: 0, menu: 'testPage' ,href:'/'},
    { id: 1, menu: 'myPage', href:'/user'},
    { id: 2, menu: 'petPage', href:'/pet'},
    { id: 3, menu: 'mode change',href:'/'},
    { id: 4, menu: 'logout',href:'/'},
]

export const myPageMenu: IMenu[] = [
    { id: 0, menu: '대표 펫 변경' ,href:'/user'},
    { id: 1, menu: '알림 설정', href:'/user'},
    { id: 2, menu: '앱 정보', href:'/user'},
    { id: 4, menu: 'logout',href:'/'},
]