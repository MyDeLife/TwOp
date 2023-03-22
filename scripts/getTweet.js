const getKey = () => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['openai-key'], (result) => {
            if (result['openai-key']) {
                const decodedKey = atob(result['openai-key']);
                resolve(decodedKey);
            } else {
                reject(new Error('Failed to retrieve openai-key'));
            }
        });
    });
};



const specificTheme = function () {
    let dropdowns = document.getElementsByClassName("theme-deselect");
    let values = [];
    for (let i = 0; i < dropdowns.length; i++) {
        let option = dropdowns[i].options[dropdowns[i].selectedIndex].value;
        if (option !== "") {
            values.push(option)
        }
    }
    return values.join("")
}



const getVoice = function () {
    if (specificTheme === "") { return '' }
    for (let key in voices) {
        if (key === specificTheme()) {
            return `8. Write it in the style of ${voices[key]} without mentioning the name in the response.`;
        }
    }
}



const generate = async (prompt) => {
    // Get your API key from storage
    const key = await getKey();
    const url = 'https://api.openai.com/v1/completions';

    // Call completions endpoint
    try {
        const completionCheck = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${key}`,
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: prompt,
                max_tokens: 105,
                temperature: 0.85,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
                stop: [". #", "! #", "\" #"],
            }),
        });

        // Select the top choice and send back
        const completion = await completionCheck.json();
        return completion;

    } catch (error) {
        console.log(error);

        document.getElementById("output_text").innerHTML = 'error1';
    }
}



const generateCompletionAction = async () => {
    // Get user input from text fields
    let topic = document.getElementById("main-topic").value;
    let keywords = document.getElementById("keywords").value;

    // Get user selection from dropdown menus
    let generalTheme = document.getElementById("general-themes-dropdown").options[document.getElementById("general-themes-dropdown").selectedIndex].value;

    let generalStyle = document.getElementById("general-style-dropdown").options[document.getElementById("general-style-dropdown").selectedIndex].value;
    let specificStyle = function () {
        let dropdowns = document.getElementsByClassName("style-deselect");
        let values = [];
        for (let i = 0; i < dropdowns.length; i++) {
            let option = dropdowns[i].options[dropdowns[i].selectedIndex].value;
            if (option !== "") {
                values.push(option)
            }
        }
        return values.join("")
    }

    try {
        document.getElementById("output_text").innerHTML = 'generating...';
        const firstPrompt = `Provide a tweet text that must meet all of the following criteria:

        1. The topic is: ${topic}.
        2. The theme is ${generalTheme} with a focus on ${specificTheme()}.
        3. It must include the following words: ${keywords}.
        4. The tone should be ${generalStyle}, specifically with the characteristics of: ${specificStyle()}.
        5. Do not use adjectives or verbs in your suggestion more than once.
        6. NEVER include emojis and NEVER include hashtags (i.e. #tweet).
        7. Consider each digit, letter, whitespace, punctuation and symbol as one character. Your response should not exceed a total of 280 characters.
        ${ getVoice() }`

        const firstCompletion = await generate(
            `${firstPrompt}`
        );

        const secondPrompt = `Clean up the following tweet by removing hashtag references and emojis. Do not change any other words. Return the cleaned up tweet. Here is the tweet: ${firstCompletion.choices[0].text}`;


        const secondCompletion = await generate(secondPrompt);
        let output = secondCompletion.choices[0].text.replace(/^\S+\s*/, "").trimStart().replace(/#\S+/g, '');
        document.getElementById("output_text").innerHTML = output;

        
    } catch (error) {

        console.log(error);

        document.getElementById("output_text").innerHTML = 'Invalid or missing API key';
    }
};



/*
const sendMessage = () => {
    let output = secondCompletion.text; // Get output response from OpenAI API 

    let textarea = document.getElementById("output_text"); // Get textarea element 

    textarea.innerHTML = output; // Set output response as innerHTML of textarea element 
}; */



//GET RESPONSE VIA CLICKING SUBMIT BUTTON
document.getElementById("button_get_tweet").addEventListener("click", generateCompletionAction);



// MAP THEME TO OBJECT
const voices = {
    School: "Bugs Bunny",
    weather: "Al Roker",
    war2: "Jeff Corwin"
};