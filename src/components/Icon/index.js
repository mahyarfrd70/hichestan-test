import React from 'react'
import closeIcon from "../../assets/image/close.png"

export default function Icon({name, size=16}) {
    switch(name){
        case "card-tik":
            return (
                <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><path fill="#4db882" fill-rule="evenodd" clip-rule="evenodd" d="M6.7121 1.11486C7.37481 0.295045 8.62472 0.295045 9.28743 1.11486C9.69918 1.62423 10.3725 1.843 11.005 1.67294C12.023 1.39922 13.0342 2.1339 13.0885 3.18668C13.1222 3.84078 13.5383 4.41354 14.15 4.64774C15.1345 5.02467 15.5207 6.2134 14.9458 7.09701C14.5886 7.64602 14.5886 8.35398 14.9458 8.90298C15.5207 9.7866 15.1345 10.9753 14.15 11.3523C13.5383 11.5865 13.1222 12.1592 13.0885 12.8133C13.0342 13.8661 12.023 14.6008 11.005 14.3271C10.3725 14.157 9.69918 14.3758 9.28743 14.8851C8.62472 15.705 7.37481 15.705 6.7121 14.8851C6.30035 14.3758 5.62704 14.157 4.99452 14.3271C3.9765 14.6008 2.96531 13.8661 2.91104 12.8133C2.87733 12.1592 2.4612 11.5865 1.84952 11.3523C0.865038 10.9753 0.478795 9.7866 1.0537 8.90298C1.4109 8.35398 1.4109 7.64602 1.0537 7.09701C0.478796 6.2134 0.865038 5.02467 1.84952 4.64774C2.4612 4.41354 2.87733 3.84079 2.91104 3.18668C2.96531 2.1339 3.9765 1.39922 4.99452 1.67294C5.62704 1.843 6.30035 1.62423 6.7121 1.11486ZM11.4983 5.43945C11.8079 5.71464 11.8357 6.18869 11.5606 6.49828L7.56056 10.9983C7.42333 11.1527 7.2285 11.2436 7.02203 11.2497C6.81556 11.2558 6.61573 11.1764 6.46967 11.0303L4.46967 9.03034C4.17678 8.73744 4.17678 8.26257 4.46967 7.96968C4.76256 7.67678 5.23744 7.67678 5.53033 7.96968L6.96789 9.40724L10.4394 5.50174C10.7146 5.19215 11.1887 5.16426 11.4983 5.43945Z"></path></svg>
            )
        case "camera":
            return (
                <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 3L5.25 4.5H4.5C3.67157 4.5 3 5.17157 3 6V10.5C3 11.3284 3.67157 12 4.5 12H11.5C12.3284 12 13 11.3284 13 10.5V6C13 5.17157 12.3284 4.5 11.5 4.5H10.75L9.25 3H6.75ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5Z" fill="#FFFFFF"></path></svg>            
            )
        case "tag":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="_30HxO"><path d="M19 3H5V21.5L12 16.5L19 21.5V3Z" stroke="#9fa3a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            )
        case "rent":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 3.29289C11.0976 3.68342 11.0976 4.31658 10.7071 4.70711L6.41421 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H4C3.59554 11 3.2309 10.7564 3.07612 10.3827C2.92134 10.009 3.00689 9.57889 3.29289 9.29289L9.29289 3.29289C9.68342 2.90237 10.3166 2.90237 10.7071 3.29289Z" fill="#f66355"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 20.7071C12.9024 20.3166 12.9024 19.6834 13.2929 19.2929L17.5858 15L4 15C3.44772 15 3 14.5523 3 14C3 13.4477 3.44772 13 4 13L20 13C20.4045 13 20.7691 13.2436 20.9239 13.6173C21.0787 13.991 20.9931 14.4211 20.7071 14.7071L14.7071 20.7071C14.3166 21.0976 13.6834 21.0976 13.2929 20.7071Z" fill="#f66355"></path></svg>     
            )   
        case "meter":
            return (
                <img alt="" src="https://address.ir/desktop/static/media/area.f727fa91.svg" style={{width:size , height:size}}/>     
            )   
        case "bed":
            return (
                <img alt="" src="https://address.ir/desktop/static/media/bed.29a1be17.svg" style={{width:size , height:size}}/>     
            )
        case "filter":
            return (
                <svg enableBackground="new 0 0 140 140" height={size} viewBox="0 0 140 140" width={size} xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="70" fill="#17bd93" r="64"/><path d="m96.3154602 42.9409828c-7.0800171-1.0899658-16.2700195-1.75-26.3200073-1.75-22.3900146 0-40.539978 3.2700195-40.539978 7.2999878 0 .4400024.2099609.8699951.6199951 1.2800293v.0100098l31.1999512 41.8599892v23.5999756l18.0722656 18.072258c30.5067749-4.4658203 54.0060425-30.4502487 54.6204224-62.0494919l-23.9926758-23.9927406c-1.6099854-1.7299806-6.5799561-3.2500001-13.6599732-4.3300172z" opacity=".1"/><path d="m110.0051956 49.6788101-31.2000732 41.8600464v15.4699707l-9.5998535 4.5100098-4.1101075 1.9299927-3.8199463 1.789978v-23.5899658l-31.2000713-41.8699952z" fill="#e6e9ef"/><path d="m45.7352982 50.5888443h-5.8500977l25.1500244 41.0599976.0599365 21.7999878 4.1101075-1.9299927v-19.8699951z" fill="#fff" opacity=".25"/><path d="m110.54776 48.4948578c0 1.1225357-1.4230194 2.1920471-3.9597397 3.1465912-6.5230026 2.4571991-20.4528809 4.1542244-36.5924454 4.1542244-16.1307182 0-30.0605927-1.6970253-36.5924416-4.1542244-2.5366096-.9545441-3.9508972-2.0240555-3.9508972-3.1465912 0-4.030468 18.1548271-7.3008156 40.5433388-7.3008156 22.3973618 0 40.5521851 3.2703476 40.5521851 7.3008156z" fill="#d9dde6"/><path d="m38.5714722 52.3919067c3.6497192.93927 7.383728 1.2888184 11.1433105 1.3914185 6.0567627.1654053 12.0632935.7175903 18.1148682.9224854 12.7849121.4328003 25.8909302-.3994751 38.289978-3.7267456-2.7946167-1.9793701-17.901001-3.4918213-36.1240234-3.4918213-18.9078369 0-34.463623 1.6281128-36.3893433 3.7167358 1.7125244.1628418 3.2825317.7549438 4.96521 1.1879272z" fill="#c6cbd4"/><path d="m69.995575 41.1940422c-22.3885117 0-40.5433388 3.2703476-40.5433388 7.3008156 0 1.1225357 1.4142876 2.1920471 3.9508972 3.1465912 6.5318489 2.4571991 20.4617233 4.1542244 36.5924416 4.1542244 16.1395645 0 30.0694427-1.6970253 36.5924454-4.1542244 2.5367203-.9545441 3.9597397-2.0240555 3.9597397-3.1465912-.0000001-4.030468-18.1548234-7.3008156-40.5521851-7.3008156zm35.9737777 8.7945671c-6.5231094 2.4571953-20.6385651 4.0393143-35.9737778 4.0393143-15.3263588 0-29.4418182-1.582119-35.973774-4.0393143-1.8825493-.7070923-2.5277615-1.2727852-2.7398834-1.5113945 1.5113907-2.0505943 15.2114525-5.5154228 38.7136574-5.5154228s37.2022705 3.4648285 38.7225037 5.5154228c-.21212.2386093-.8661804.8043022-2.7487259 1.5113945z" fill="#e6e9ef"/></svg>
            )  
        case "close":
            return (
                <img alt="" src={closeIcon} style={{width:size , height:size}}/>     

            ) 

        default:
            return null
    }
}
