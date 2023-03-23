/*---GENERIC---*/
const checkForKey = () => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['openai-key'], (result) => {
            resolve(result['openai-key']);
        });
    });
};



window.addEventListener('load', () => {
    checkForKey().then((response) => {
        if (response) {
            document.getElementById('yes_key').style.display = 'block';
            document.getElementById('no_key').style.display = 'none';
            document.getElementById('Get_Tweet').style.display = 'block';
            document.getElementById('Enter_API_Key').style.display = 'none';
            document.getElementById('About').style.display = 'none';

        } else {
            document.getElementById('yes_key').style.display = 'none';
            document.getElementById('no_key').style.display = 'block';
        }
    });
});


//HAMBURGER
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


const getTweet = () => {
    document.getElementById('Get_Tweet').style.display = 'block';
    document.getElementById('Enter_API_Key').style.display = 'none';
    document.getElementById('About').style.display = 'none';
}


const changeKey = () => {
    document.getElementById('Enter_API_Key').style.display = 'block';
    document.getElementById('Get_Tweet').style.display = 'none';
    document.getElementById('About').style.display = 'none';
    document.getElementById("success_msg").style.display = "none";
    document.getElementById("failed_msg").style.display = "none";
};


const about = () => {
    document.getElementById('Get_Tweet').style.display = 'none';
    document.getElementById('Enter_API_Key').style.display = 'none';
    document.getElementById('About').style.display = 'block';
}


document.getElementById('navlink_Change_API_Key').addEventListener('click', changeKey);
document.getElementById('navlink_Get_Tweet').addEventListener('click', getTweet);
document.getElementById('navlink_About').addEventListener('click', about);





/*---ENTER API KEY PAGE---*/


const encode = (input) => {
    return btoa(input);
};


const saveKey = () => {
    const input = document.getElementById('key_input').value;

    if (input !== "") {


        // Encode String
        const encodedValue = encode(input);

        // Save to google storage
        chrome.storage.local.set({ 'openai-key': encodedValue }, () => {

            document.getElementById("success_msg").style.display = "block";
            document.getElementById("failed_msg").style.display = "none";
            document.getElementById('key_input').value = "";
            document.getElementById("yes_key").style.display = "block";
            document.getElementById("remove_key").style.display = "none";
            document.getElementById('success_msg').style.animation = 'none';
            setTimeout(function () {
                document.getElementById('success_msg').style.animation = '';
            }, 5);
        })

    }
    else {
        document.getElementById('failed_msg').style.display = 'block';
        document.getElementById("success_msg").style.display = "none";
        document.getElementById("remove_key").style.display = "none";
        document.getElementById('failed_msg').style.animation = 'none';
        setTimeout(function () {
            document.getElementById('failed_msg').style.animation = '';
        }, 5);
    }
}


const deleteKey = () => {
    chrome.storage.local.remove('openai-key', function () {

        document.getElementById("no_key").style.display = "block";
        document.getElementById("yes_key").style.display = "none";
        document.getElementById("remove_key").style.display = "none";

    });
}


//UPDATE API KEY LISTENER
document.getElementById('button_save_key').addEventListener('click', saveKey);

//CONTINUE BUTTON LISTENER
document.getElementById('button_get_tweet_page').addEventListener('click', getTweet);

//REMOVE API KEY LISTENERS 
document.getElementById('yes_key').addEventListener('click', function () {
    document.getElementById("remove_key").style.display = "block";
});
document.getElementById('button_remove_cancel').addEventListener('click', function () {
    document.getElementById("remove_key").style.display = "none";
});
document.getElementById('button_remove_confirm').addEventListener('click', deleteKey);





/*---GET TWEET PAGE---*/


//DROPDOWN SELECTIONS - GENERAL THEME TO SPECIFIC THEME 
document.getElementById("general-themes-dropdown").addEventListener("change", function () {
    if (this.value === "Business & Finance") {
        document.getElementById("business-finance-dropdown").style.display = "block";
        document.getElementById("ecosystem-dropdown").style.display = "none";
        document.getElementById("entertainment-dropdown").style.display = "none";
        document.getElementById("leisure-dropdown").style.display = "none";
        document.getElementById("life-dropdown").style.display = "none";
        document.getElementById("science-tech-dropdown").style.display = "none";
        document.getElementById("sports-dropdown").style.display = "none";
        document.getElementById("specific-theme-dropdown").style.display = "none";
    }

    else if (this.value === "Ecosystem") {
        document.getElementById("business-finance-dropdown").style.display = "none";
        document.getElementById("ecosystem-dropdown").style.display = "block";
        document.getElementById("entertainment-dropdown").style.display = "none";
        document.getElementById("leisure-dropdown").style.display = "none";
        document.getElementById("life-dropdown").style.display = "none";
        document.getElementById("science-tech-dropdown").style.display = "none";
        document.getElementById("sports-dropdown").style.display = "none";
        document.getElementById("specific-theme-dropdown").style.display = "none";
    }
        
    else if (this.value === "Entertainment") {
        document.getElementById("business-finance-dropdown").style.display = "none";
        document.getElementById("ecosystem-dropdown").style.display = "none";
        document.getElementById("entertainment-dropdown").style.display = "block";
        document.getElementById("leisure-dropdown").style.display = "none";
        document.getElementById("life-dropdown").style.display = "none";
        document.getElementById("science-tech-dropdown").style.display = "none";
        document.getElementById("sports-dropdown").style.display = "none";
        document.getElementById("specific-theme-dropdown").style.display = "none";
    }
        
    else if (this.value === "Leisure") {
        document.getElementById("business-finance-dropdown").style.display = "none";
        document.getElementById("ecosystem-dropdown").style.display = "none";
        document.getElementById("entertainment-dropdown").style.display = "none";
        document.getElementById("leisure-dropdown").style.display = "block";
        document.getElementById("life-dropdown").style.display = "none";
        document.getElementById("science-tech-dropdown").style.display = "none";
        document.getElementById("sports-dropdown").style.display = "none";
        document.getElementById("specific-theme-dropdown").style.display = "none";
    }
        
    else if (this.value === "Life") {
        document.getElementById("business-finance-dropdown").style.display = "none";
        document.getElementById("ecosystem-dropdown").style.display = "none";
        document.getElementById("entertainment-dropdown").style.display = "none";
        document.getElementById("leisure-dropdown").style.display = "none";
        document.getElementById("life-dropdown").style.display = "block";
        document.getElementById("science-tech-dropdown").style.display = "none";
        document.getElementById("sports-dropdown").style.display = "none";
        document.getElementById("specific-theme-dropdown").style.display = "none";
    }
        
    else if (this.value === "Science & Tech") {
        document.getElementById("business-finance-dropdown").style.display = "none";
        document.getElementById("ecosystem-dropdown").style.display = "none";
        document.getElementById("entertainment-dropdown").style.display = "none";
        document.getElementById("leisure-dropdown").style.display = "none";
        document.getElementById("life-dropdown").style.display = "none";
        document.getElementById("science-tech-dropdown").style.display = "block";
        document.getElementById("sports-dropdown").style.display = "none";
        document.getElementById("specific-theme-dropdown").style.display = "none";
    }
    else if (this.value === "Sports") {
        document.getElementById("business-finance-dropdown").style.display = "none";
        document.getElementById("ecosystem-dropdown").style.display = "none";
        document.getElementById("entertainment-dropdown").style.display = "none";
        document.getElementById("leisure-dropdown").style.display = "none";
        document.getElementById("life-dropdown").style.display = "none";
        document.getElementById("science-tech-dropdown").style.display = "none";
        document.getElementById("sports-dropdown").style.display = "block";
        document.getElementById("specific-theme-dropdown").style.display = "none";
    }
        
    else if (this.value === "") {
        document.getElementById("business-finance-dropdown").style.display = "none";
        document.getElementById("ecosystem-dropdown").style.display = "none";
        document.getElementById("entertainment-dropdown").style.display = "none";
        document.getElementById("leisure-dropdown").style.display = "none";
        document.getElementById("life-dropdown").style.display = "none";
        document.getElementById("science-tech-dropdown").style.display = "none";
        document.getElementById("sports-dropdown").style.display = "none";
        document.getElementById("specific-theme-dropdown").style.display = "block";
    }

    for (let i = 0; i < document.getElementsByClassName('theme-deselect').length; i++) {
        document.getElementsByClassName('theme-deselect')[i].value = "";
    }
});


//DROPDOWN SELECTIONS - GENERAL STYLE TO SPECIFIC STYLE
document.getElementById("general-style-dropdown").addEventListener("change", function () {
    if (this.value === "Positive") {
        document.getElementById("positive-dropdown").style.display = "block";
        document.getElementById("specific-style-dropdown").style.display = "none";
        document.getElementById("neutral-dropdown").style.display = "none";
        document.getElementById("negative-dropdown").style.display = "none";
    }
    else if (this.value === "Neutral") {
        document.getElementById("positive-dropdown").style.display = "none";
        document.getElementById("specific-style-dropdown").style.display = "none";
        document.getElementById("neutral-dropdown").style.display = "block";
        document.getElementById("negative-dropdown").style.display = "none";
    }
    else if (this.value === "Negative") {
        document.getElementById("positive-dropdown").style.display = "none";
        document.getElementById("specific-style-dropdown").style.display = "none";
        document.getElementById("neutral-dropdown").style.display = "none";
        document.getElementById("negative-dropdown").style.display = "block";
    }
    else if (this.value === "") {
        document.getElementById("positive-dropdown").style.display = "none";
        document.getElementById("specific-style-dropdown").style.display = "block";
        document.getElementById("neutral-dropdown").style.display = "none";
        document.getElementById("negative-dropdown").style.display = "none";
    }

    for (let i = 0; i < document.getElementsByClassName('theme-deselect').length; i++) {
        document.getElementsByClassName('style-deselect')[i].value = "";
    }
});


//RESET ALL
function resetAll() {
    document.getElementById("main-topic").value = "";
    document.getElementById("keywords").value = "";
    document.getElementById("output_text").innerHTML = "";
    for (let i = 0; i < document.getElementsByClassName('dropdown-element').length; i++) {
        document.getElementsByClassName('dropdown-element')[i].value = "";
    };
    document.getElementById("business-finance-dropdown").style.display = "none";
    document.getElementById("ecosystem-dropdown").style.display = "none";
    document.getElementById("entertainment-dropdown").style.display = "none";
    document.getElementById("leisure-dropdown").style.display = "none";
    document.getElementById("life-dropdown").style.display = "none";
    document.getElementById("science-tech-dropdown").style.display = "none";
    document.getElementById("sports-dropdown").style.display = "none";
    document.getElementById("specific-theme-dropdown").style.display = "block";
    document.getElementById("positive-dropdown").style.display = "none";
    document.getElementById("specific-style-dropdown").style.display = "block";
    document.getElementById("neutral-dropdown").style.display = "none";
    document.getElementById("negative-dropdown").style.display = "none";
}

document.getElementById("button_reset").addEventListener("click", resetAll);
document.getElementById("button_reset").addEventListener("click", resetAll);


//COPY TWEET TEXT
document.getElementById("button_copy_text").addEventListener("click", () => {
    let copyText = document.getElementById("output_text");
    copyText.select();
    document.execCommand("copy");
});
