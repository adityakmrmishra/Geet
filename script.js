var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening';

document.getElementById('lblGreetings').innerHTML =
    '<b>' + greet + '</b> !';

// js for toggle b/w dark and light mode
 const toggle = document.getElementById('toggle');

 const body= document.querySelector('body');
 toggle.onclick = () =>{
    toggle.classList.toggle('active');
    document.body.classList.toggle('dark-mode');


    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('dark-mode', 'enabled');
    }
    else{
        localStorage.setItem('dark-mode', 'disabled');
    }
 };
 if(localStorage.getItem('dark-mode') == 'enabled'){
    document.body.classList.toggle('dark-mode');
    toggle.classList.toggle('active');
 }

 

 


const music = new Audio('vande.mp3');
// music.play();
// song  Array 

const songs = [
    {
        id:'1',
        songName:` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",
    },
    {
        id:"16",
        songName:` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id:"17",
        songName:` Alan Walker-Fade <br> <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id:"18",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"19",
        songName: `Aaja Ve <br><div class="subtitle">Vishal Mishra</div>`,
        poster: "img/22.jpg",
    },
    {
        id:"20",
        songName: `Akdi Pakdi <br><div class="subtitle">Pawni Pandey,</div>`,
        poster: "img/19.jpg",
    },
    {
        id:"21",
        songName: `Baarish Aayi Hai <br><div class="subtitle">Javed-Mohsin</div>`,
        poster: "img/20.jpg",
    },
    {
        id:"22",
        songName: `Chaiyaan Mein Saiyaan Ki<br><div class="subtitle">Jubin Nautiyal,</div>`,
        poster: "img/22.jpg",
    },
    {
        id:"23",
        songName: `Dil <br><div class="subtitle">Raghav Chaitanya</div>`,
        poster: "img/21.jpg",
    },
    {
        id:"24",
        songName: `Fitoor <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/24.jpg",
    },
    {
        id:"25",
        songName: `Hogya Hai pyaar<br><div class="subtitle">Yasser Desai</div>`,
        poster: "img/25.jpg",
    },
    {
        id:"26",
        songName: `Junoon Hai <br><div class="subtitle">Saaj Bhatt </div>`,
        poster: "img/26.jpg",
    },
    {
        id:"27",
        songName: `Rubaru <br><div class="subtitle">Vishal Mishra</div>`,
        poster: "img/27.jpg",
    },
    {
        id:"28",
        songName:` Har Har Shambhu <br>
        <div class="subtitle">Jeetu Sharma </div>`,
        poster: "img/28.jpg"
    },
    {
        id:"29",
        songName: `Phir Na Aisi Raat Aayegi  <br><div class="subtitle"> Arijit Singh</div>`,
        poster: "img/29.jpg",
    },
    {
        id:"30",
        songName: `Kitni Haseen Hogi <br><div class="subtitle"> Arijit Singh</div>`,
        poster: "img/30.jpg",
    },
    {
        id:"31",
        songName: `Kangan Ruby  <br> <div class="subtitle">Himesh Reshammiya</div>`,
        poster: "img/31.jpg",
    },
    {
        id:"32",
        songName: `Tum Jo Gaye<br><div class="subtitle">Jugjugg Jeeyo</div>`,
        poster: "img/32.jpg",
        
    },
    {
        id:"33",
        songName: `Ami Je Toma <br><div class="subtitle">Kartik X Vidya</div>`,
        poster: "img/33.jpg",
    },
    {
        id:"34",
        songName: `Seher <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/34.jpg",
    },
    {
        id:"35",
        songName: `Ek Sher Ho Tum<br><div class="subtitle">Vikram</div>`,
        poster: "img/35.jpg",
    },
    {
        id:"36",
        songName: `Falak Tu Garaj Tu <br><div class="subtitle">KGF-2</div>`,
        poster: "img/36.jpg",
    },
    {
        id:"37",
        songName: `Toofan<br><div class="subtitle">
        KGF2</div>`,
        poster: "img/37.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});





// search data starts

let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id , songName , poster} = element;
    // console.log(id);

    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id ;

    card.innerHTML = `
    <img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>`;

    search_results.appendChild(card);
});




let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = 'flex';
        } else {
            items[index].style.display = 'none';
        }

        if (input.value == 0) {
            search_results.style.display = 'none';
        } else {
            search_results.style.display = "";
        }
        
    }
})

// search data end





let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');

masterplay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active2')
        masterplay.classList.remove('bi-play-fill')
        masterplay.classList.add('bi-pause-fill')
    }
    else{
        music.pause();
        wave.classList.remove('active2')
        masterplay.classList.add('bi-play-fill')
        masterplay.classList.remove('bi-pause-fill')
    }
});


const makeAllBackground =()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = "rgb(105, 105, 170, 0)";
    })
};

const makeAllPlay =()=>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
};


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let tite = document.getElementById('title');
let download_music = document.getElementById('download_music');
let isPlaying=false;
let pausedTime = 0; // Initialize to 0

Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        //If paused then play and if playing then pause through icon
        
        if (isPlaying ){
            
            music.pause();
            pausedTime=music.currentTime;
            wave.classList.remove('active2');
            masterplay.classList.add('bi-play-fill');
            masterplay.classList.remove('bi-pause-fill');
            makeAllPlay();
        }
        else{
            index = el.target.id;
            // console.log(pauseTime);
            music.src = `audio/${index}.mp3`;
            poster_master_play.src=`img/${index}.jpg`;
            // download
            download_music.href =`audio/${index}.mp3`;
            let songTitles = songs.filter((ele)=>{
                return ele.id == index;
            });
            
            songTitles.forEach(elem =>{
                let {songName} = elem;
                title.innerHTML= songName;
                download_music.setAttribute('download',songName);
            });
    
            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 170, .1)";
            
            music.currentTime=pausedTime; //Initialize time with paused time.
            
            music.play();
            wave.classList.add('active2')
            masterplay.classList.remove('bi-play-fill')
            masterplay.classList.add('bi-pause-fill')            
            
            makeAllPlay();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
        }
        isPlaying=!isPlaying;
    })
})


let currentstart =document.getElementById('currentstart');
let currentend =document.getElementById('currentend');
let seek =document.getElementById('seek');
let bar2 =document.getElementById('bar2');
let dot =document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', () =>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;


    // for end duration in music
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentend.innerHTML = `${min1}:${sec1}`;

    // for start duration in music
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentstart.innerHTML = `${min2}:${sec2}`;

    // seek bar 

    let progressBar = parseInt((music_curr / music_dur)*100);
    seek.value = progressBar;

    if(music_curr){
        let seekbar = seek.value;
        bar2.style.width =`${seekbar}%`;
        dot.style.left = `${seekbar}%`;
    }
});

// seek bar forward and backward
seek.addEventListener('change' , ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

// vol 

let vol_icon =document.getElementById('vol_icon');
let vol =document.getElementById('vol');
let vol_bar =document.getElementsByClassName('vol_bar')[0];
let vol_dot =document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left= `${vol_a}%`;
    music.volume = vol_a / 100;
});


// back and next button

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;

    if(index <= 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
    wave.classList.add('active2')
    masterplay.classList.remove('bi-play-fill')
    masterplay.classList.add('bi-pause-fill')

    let songTitles = songs.filter((ele)=>{
          return ele.id == index;
    });
     
    songTitles.forEach(elem =>{
        let {songName} = elem;
        title.innerHTML= songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background=' rgb(226, 197, 31,1)';

    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
})


next.addEventListener('click',()=>{
    index ++;

    if(index > Array.from(document.getElementsByClassName('songItem')).length){
            index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
    wave.classList.add('active2')
    masterplay.classList.remove('bi-play-fill')
    masterplay.classList.add('bi-pause-fill')

    let songTitles = songs.filter((ele)=>{
        return ele.id == index;
    });
    
    songTitles.forEach(elem =>{
        let {songName} = elem;
        title.innerHTML= songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background=' rgb(226, 197, 31,1)';

    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
})


// next musics starts after end of current

music.addEventListener('ended',()=>{
    index++;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
    wave.classList.add('active2')
    masterplay.classList.remove('bi-play-fill')
    masterplay.classList.add('bi-pause-fill')
    // download
    download_music.href =`audio/${index}.mp3`;

    let songTitles = songs.filter((ele)=>{
          return ele.id == index;
    });
     
    songTitles.forEach(elem =>{
        let {songName} = elem;
        title.innerHTML= songName;
        download_music.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background=' rgb(226, 197, 31,1)';

    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
})





// js for scrollers 

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 150;
});
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 150;
});


let left_scrol = document.getElementById('left_scrolls');
let right_scrol = document.getElementById('right_scrolls');
let lat_song = document.getElementsByClassName('lat_song')[0];

left_scrol.addEventListener('click', ()=>{
    lat_song.scrollLeft -= 150;
});
right_scrol.addEventListener('click', ()=>{
    lat_song.scrollLeft += 150;
});





let left_scrolls = document.getElementById('left_scrols');
let right_scrolls = document.getElementById('right_scrols');
let item = document.getElementsByClassName('items')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 150;
});
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 150;
});
