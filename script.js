let profiles = [

    {
        'user-image': 'img/user1.png',
        'user': 'Lan Phuong',
    },

    {
        'user-image': 'img/user2.png',
        'user': 'Alfred',
    },
    {
        'user-image': 'img/user3.png',
        'user': 'Derek',
    },

    {
        'user-image': 'img/user4.png',
        'user': 'Quynh Vi',
    },
    {
        'user-image': 'img/user5.png',
        'user': 'Mimi',
    },

    {
        'user-image': 'img/user6.png',
        'user': 'Geralt',
    },
    {
        'user-image': 'img/user7.png',
        'user': 'Gerhard',
    },

    {
        'user-image': 'img/user8.png',
        'user': 'Benjamin',
    },
    {
        'user-image': 'img/user9.png',
        'user': 'Naomi',
    },

    {
        'user-image': 'img/user10.png',
        'user': 'Andrés',
    },
    {
        'user-image': 'img/user11.png',
        'user': 'Hayden',
    },

    {
        'user-image': 'img/user12.png',
        'user': 'Viswanathan',
    },
];

let posts = [

    {
        'user-image': 'img/Hong-Hanh.png',
        'user': 'Hong Hanh',
        'location': 'Heidelberg',
        'post-image': 'img/work-station.JPG',
    },

    {
        'user-image': 'img/user12.png',
        'user': 'Viswanathan',
        'location': 'Mayuram',
        'post-image': 'img/india.jpg',

    },

    {
        'user-image': 'img/user9.png',
        'user': 'Naomi',
        'location': 'Juba',
        'post-image': 'img/queen.jpg',

    },

    {
        'user-image': 'img/user5.png',
        'user': 'Mimi',
        'location': 'Musashi-Murayama ',
        'post-image': 'img/yoshinoya.jpg',
    },
    {
        'user-image': 'img/user6.png',
        'user': 'Geralt',
        'location': 'Hamburg',
        'post-image': 'img/fisherman.jpg',

    },

    {
        'user-image': 'img/user11.png',
        'user': 'Hayden',
        'location': 'Kailua-Kona',
        'post-image': 'img/running.jpg',
    },
    {
        'user-image': 'img/user4.png',
        'user': 'Quynh Vi',
        'location': 'Ludwigshafen',
        'post-image': 'img/family-meal.JPG',

    },

    {
        'user-image': 'img/user1.png',
        'user': 'Lan Phuong',
        'location': 'Da Lat',
        'post-image': 'img/morning.jpg',
    },
    {
        'user-image': 'img/user8.png',
        'user': 'Benjamin',
        'location': 'Boston',
        'post-image': 'img/repair.jpg',

    },

    {
        'user-image': 'img/user7.png',
        'user': 'Gerhard',
        'location': 'Frankfurt',
        'post-image': 'img/suit.png',
    },
    {
        'user-image': 'img/user3.png',
        'user': 'Derek',
        'location': 'Baltimore',
        'post-image': 'img/street.jpg',

    },

    {
        'user-image': 'img/user2.png',
        'user': 'Alfred',
        'location': 'Berlin',
        'post-image': 'img/resting.jpg',
    },

    {
        'user-image': 'img/user10.png',
        'user': 'Andrés',
        'location': 'Barcelona',
        'post-image': 'img/bridge-house.jpg',
    },

];

let suggestions = [

    {
        'user-image': 'img/user13.png',
        'user': 'Klaus',
        'profile-name': '_TailorMade',
    },
    
    {
        'user-image': 'img/user14.png',
        'user': 'Beatrice',
        'profile-name': '_PhotoStudio7235',
        
    },

    {
        'user-image': 'img/user15.png',
        'user': 'Madeleine',
        'profile-name': '_CoiffeurCanté',
    },

    {
        'user-image': 'img/user16.png',
        'user': 'Christina',
        'profile-name': '_PRofileCommunikation',
    },

    {
        'user-image': 'img/user17.png',
        'user': 'Julien',
        'profile-name': '_HenckelAG',
    },

    {
        'user-image': 'img/user18.png',
        'user': 'Karina',
        'profile-name': '_BeautyWarenLubinic',
    },
];

function render() {

    for (let i = 0; i < profiles.length; i++) {

        const profile = profiles[i];

        document.getElementById('users').innerHTML += generateUserSlideBar(profile);
    }

    for (let i = 0; i < posts.length; i++) {

        const post = posts[i];

        document.getElementById('post').innerHTML += generatePosts(post);
    }

    for (let i = 0; i < suggestions.length; i++) {

        const suggestion = suggestions[i];

        document.getElementById('suggestions').innerHTML += generateSuggestions(suggestion);
    }
}

function generateUserSlideBar(profile) {

    return `
    <div class="user-profile">

                    <img class="user-image" src="${profile['user-image']}">

                    <p class="user-name"> ${profile['user']} </p>
                    
                    </div>
                    
                    `;
}

function generatePosts(post) {

    return `
                    <div class="post"> 
                    
                    
                    <div class="post-author">
                    
                    <div class="author-information">
                    <img class="author-image" src="${post['user-image']}">
                    
                    <p> <b> ${post['user']} </b> 
                    
                    <br>
                    
                    ${post['location']}
                    </p>
                    </div>
                    
                    <img class="ellipsis-icon" src="img/ellipsis.jpg">
                    
                    </div>
                    
                    <div class="post-image">
                    
                    <img src="${post['post-image']}">
                    
                    </div>
                    
                    <div class="post-icons">
                    
                    <div>
                    <img class="icons" src="img/heart.png">
                    <img class="icons" src="img/comment.png">
                    <img class="icons" src="img/plane.png">
                    </div>
                    
                    <img class="icons" src="img/bookmark.png">
                    
                    </div>
                    
                    <div class="post-likes">
                    
                    <p> Gefällt <b> _HongHanh</b> und <b> 8 weitere Personen </b> </p>
                    
                    <a class="all-comments" href="#"> Alle Kommentare ansehen </a>
                    
                    </div>
                    
                    <div class="post-comments">
                    
                    <p class="align-center"> <img class="icons" src="img/add-comment.png"> Kommentieren ... </p>
                    
                    <p class="text-blue align-center"> Posten </p>
                    
                    </div>
                    
                    </div>
                    
                    
                    </div>
                    `;
}

function generateSuggestions(suggestion) {

    return `

    <div class="profile"> 
    
    
    <div class="profile-information">
    
    <img class="user-image" src="${suggestion['user-image']}">
    
    <p> <b> ${suggestion['user']} </b>
    
    <br>
    
    ${suggestion['profile-name']}
    
    </p>
    
    </div>
    
    <p class="text-blue align-center"> Folgen </p>
    
    </div>

    </div>
    
    `;
}