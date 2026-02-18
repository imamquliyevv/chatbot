const wave = document.getElementById("wave");

function normalize(text){
    return text.toLowerCase().trim();
}

function botIntro(){
    const intro =
    `Salam! Men Yevv IT Chatbotuyam.

    Men bu problemlere komek ede bilerem:

    1 - internet islemir
    2 - komputer yavasdir
    3 - proqram acilmir
    4 - wifi qosulmur
    5 - sifreni unutmusam

    Cixmaq ucun 'exit' yaza bilersiniz.`;

    typeMessage(intro);
}
function addMessage(text,type){
    const msg=document.createElement("div");
    msg.className=`message ${type}`;
    msg.textContent=text;
    document.getElementById("chat-box").appendChild(msg);
    msg.scrollIntoView();
}

function typeMessage(text){
    const msg=document.createElement("div");
    msg.className="message bot";
    document.getElementById("chat-box").appendChild(msg);

    wave.classList.add("active"); // dalğa hərəkət etsin

    let i=0;
    const typing=setInterval(()=>{
        msg.textContent+=text[i];
        i++;
        if(i>=text.length){
            clearInterval(typing);
            wave.classList.remove("active"); // yazı bitdi → dalğa dayansın
        }
    },25); // yazma sürəti
}

function sendMessage(){
    const input=document.getElementById("user-input");
    let text=input.value;
    if(!text) return;

    addMessage(text,"user");
    input.value="";

    const msg=normalize(text);
    let response="";

    if(msg==="1" || msg.includes("internet") || msg.includes("internet islemir")){
        response="- Internet problemi:\n1) Routeri restart edin.\n2) Kabeli yoxlayin.\n3) Kompüteri sondur yandir.";
    }
    else if(msg==="2"||msg.includes("komputer")){
        response="- Komputer yavasdir:\n1) Task Manager acin.\n2) Lazimsiz proqramlari bagla.";
    }
    else if(msg==="3"||msg.includes("proqram")){
        response="- Proqram acilmir:\n1) Yeniden qurasdirin.\n2) Administrator kimi calisdirin.";
    }
    else if(msg==="4"||msg.includes("wifi")){
        response="- WiFi problemi:\n1) Driver update edin.\n2) Network reset edin.\n3) Interneti cixart tax";
    }
    else if(msg==="5"||msg.includes("sifre")){
        response="- Sifre berpa:\n1) Forgot Password secin.\n2) Email ile yenileyin.";
    }
    else if(msg==="exit"){
        response="Sag salamat.";
    }
    else{
        response="Agali neyise sehv yazibsan tezden yaz.";
    }

    setTimeout(()=>typeMessage(response),400);
}
/* Səhifə açılan kimi işləsin */
window.onload = () => {
    botIntro();
};