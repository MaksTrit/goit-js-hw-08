import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = "videoplayer-current-time";
let parsedCurrentTime = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) ?? 0;

player.on('timeupdate', throttle((data) => {
    if (data.percent < 1) {
        localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(data.seconds));       
    }        
    else {
        player.off('timeupdate');
        localStorage.clear();
    }
}, 1000));
       
player.setCurrentTime(parsedCurrentTime);
