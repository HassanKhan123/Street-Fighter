





var progress1 = document.querySelector("#progress1");
var progress2 = document.querySelector("#progress2");


var us1health = document.querySelector(".ushealth1");
var us2health = document.querySelector(".ushealth2");

var user1_health = 100;
var user2_health = 100;

var img1 = document.getElementById("us1img");
var img2 = document.getElementById("us2img");


// var hide=document.querySelectorAll(".hide");

var head = document.getElementById("head");
var main = document.getElementById("main");
var button = document.getElementById("button");

var div1 = document.getElementById("divUser1");
var div2 = document.getElementById("divUser2");



var over = document.querySelector("#over");



var actions = ['Punch', 'Kick', 'Dodge'];

var user1img = ['./images/Akuma dodge.png', './images/Akuma kick.png', './images/Akuma punch.png', './images/Akuma.png']
var user2img = ['./images/ryu dodge.png', './images/ryu kick.png', './images/ryu punch.png', './images/ryu.png'];




var win = document.getElementById("winner");

var again = document.getElementById("again");









// us1health.innerHTML=user1_health;
// us2health.innerHTML=user2_health;

// us1.innerHTML=name1.value;



function punch() {



    var show = actions[Math.floor(Math.random() * actions.length)];
    console.log(show);
    img1.src = user1img[2];
    img1.height = "350";





    if (show === "Dodge") {

        img2.src = user2img[0];
        img2.height = "350";


        // us1health.innerHTML=user1_health;
        // us2health.innerHTML=user2_health;


        progress1.style.width = user1_health + "%";
        progress1.innerHTML = user1_health + "%";




        progress2.style.width = user2_health + "%";
        progress2.innerHTML = user2_health + "%";

        overOut();



    }


    else if (show == "Punch") {
        img2.src = user2img[2];
        img2.height = "350";



        user1_health -= 5;
        user2_health -= 5;


        // us1health.innerHTML=user1_health;
        // us2health.innerHTML=user2_health;

        progress1.style.width = user1_health + "%";
        progress1.innerHTML = user1_health + "%";


        progress2.style.width = user2_health + "%";
        progress2.innerHTML = user2_health + "%";


        overOut();








    }

    else if (show == "Kick") {
        img2.src = user2img[1];
        img2.height = "350";




        user1_health -= 10;
        user2_health -= 5;

        // us1health.innerHTML=user1_health;
        // us2health.innerHTML=user2_health;

        progress1.style.width = user1_health + "%";
        progress1.innerHTML = user1_health + "%";


        progress2.style.width = user2_health + "%";
        progress2.innerHTML = user2_health + "%";

        overOut();







    }


    setTimeout(function () {
        img1.src = user1img[3];
        img2.src = user2img[3];
    }, 1000);

}


function kick() {


    var show = actions[Math.floor(Math.random() * actions.length)];
    console.log(show);
    img1.src = user1img[1];
    img1.height = "350";





    if (show === "Dodge") {

        img2.src = user2img[0];
        img2.height = "350";


        // us1health.innerHTML=user1_health;
        // us2health.innerHTML=user2_health;


        progress1.style.width = user1_health + "%";
        progress1.innerHTML = user1_health + "%";


        progress2.style.width = user2_health + "%";
        progress2.innerHTML = user2_health + "%";



        overOut();
    }


    else if (show == "Punch") {
        img2.src = user2img[2];
        img2.height = "350";


        user1_health -= 5;
        user2_health -= 10;
        // us1health.innerHTML=user1_health;
        // us2health.innerHTML=user2_health;

        progress1.style.width = user1_health + "%";
        progress1.innerHTML = user1_health + "%";


        progress2.style.width = user2_health + "%";
        progress2.innerHTML = user2_health + "%";

        overOut();


        console.log(show);

    }

    else if (show == "Kick") {
        img2.src = user2img[1];
        img2.height = "350";



        user1_health -= 10;
        user2_health -= 10;
        // us1health.innerHTML=user1_health;
        // us2health.innerHTML=user2_health;


        progress1.style.width = user1_health + "%";
        progress1.innerHTML = user1_health + "%";


        progress2.style.width = user2_health + "%";
        progress2.innerHTML = user2_health + "%";



        overOut();
        console.log(show);

    }


    setTimeout(function () {
        img1.src = user1img[3];
        img2.src = user2img[3];
    }, 1000);


}



function dodge() {


    var show = actions[Math.floor(Math.random() * actions.length)];
    console.log(show);
    img1.src = user1img[0];
    img1.height = "350";



    if (show === "Dodge") {

        img2.src = user2img[0];
        img2.height = "350";


        // us1health.innerHTML=user1_health;
        // us2health.innerHTML=user2_health;


        progress1.style.width = user1_health + "%";
        progress1.innerHTML = user1_health + "%";


        progress2.style.width = user2_health + "%";
        progress2.innerHTML = user2_health + "%";

        overOut();



    }


    else if (show == "Punch") {
        img2.src = user2img[2];
        img2.height = "350";



        // us1health.innerHTML=user1_health;
        // us2health.innerHTML=user2_health;


        progress1.style.width = user1_health + "%";
        progress1.innerHTML = user1_health + "%";


        progress2.style.width = user2_health + "%";
        progress2.innerHTML = user2_health + "%";

        overOut();




    }

    else if (show == "Kick") {
        img2.src = user2img[1];
        img2.height = "350";




        // us1health.innerHTML=user1_health;
        // us2health.innerHTML=user2_health;

        progress1.style.width = user1_health + "%";
        progress1.innerHTML = user1_health + "%";


        progress2.style.width = user2_health + "%";
        progress2.innerHTML = user2_health + "%";


        overOut();




    }



    setTimeout(function () {
        img1.src = user1img[3];
        img2.src = user2img[3];
    }, 1000);


}



function overOut() {
    if(user1_health <=0 && user2_health <= 0){
        head.className += " hide1";
        main.className += " hide1";
        button.className += " hide1";
        div1.className += " hide1";
        div2.className += " hide1";


        over.style.display = "block";

        win.innerHTML = "Match Tie";
        console.log(win);

        again.addEventListener("click", function () {
            // head.className = "hide";
            // main.className = "hide";
            // button.className = "hide";
            // div1.className = "hide";
            // div2.className = "hide";


            // over.style.display = "block";
            window.location.reload();
        });

    }




    else if (user1_health <= 0) {
        // setTimeout(function(){
        //     console.log(hide);
        //     over.style.display="block";

        //     win.innerHTML="WIN";
        //     console.log(win);





        // },1000);

        // hide.className="hide1";

        head.className += " hide1";
        main.className += " hide1";
        button.className += " hide1";
        div1.className += " hide1";
        div2.className += " hide1";


        over.style.display = "block";

        win.innerHTML = "CPU WIN";
        console.log(win);

        again.addEventListener("click", function () {
            // head.className = "hide";
            // main.className = "hide";
            // button.className = "hide";
            // div1.className = "hide";
            // div2.className = "hide";


            // over.style.display = "block";

            window.location.reload();
        });

        // function again(){
        //     head.className = "hide";
        // main.className = "hide";
        // button.className = "hide";
        // div1.className = "hide";
        // div2.className = "hide";


        // over.style.display = "block";

        // }


    }
    else if (user2_health <= 0) {
        // setTimeout(function(){
        //     console.log(hide);

        //     over.style.display="block";

        //     win.innerHTML="LOOSE";
        //     console.log(win);





        // },1000);

        head.className += " hide1";
        main.className += " hide1";
        button.className += " hide1";
        div1.className += " hide1";
        div2.className += " hide1";
        over.style.display = "block";

        win.innerHTML = "YOU WIN";
        console.log(win);


        again.addEventListener("click", function () {
            // head.className = "hide";
            // main.className = "hide";
            // button.className = "hide";
            // div1.className = "hide";
            // div2.className = "hide";


            // over.style.display = "block";

            window.location.reload();
        });
        // function again() {
        //     head.className = "hide";
        //     main.className = "hide";
        //     button.className = "hide";
        //     div1.className = "hide";
        //     div2.className = "hide";


        //     over.style.display = "block";

        // }



    }

}

// us1.innerHTML=user1;
// us2.innerHTML=user2;














// 

