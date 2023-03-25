# TwOp - Tweet Optimizer
 <h3>Generate optimized tweets via OpenAI</h1>
<br>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#1-about-the-application">About The Application</a></li>
      <li><a href="#2-prior-work">Prior Work</a></li>
    <li><a href="#3-twop-application-docs">TwOp Application Docs</a></li>
    <ul>
        <li><a href="#openai-api">OpenAI API</a></li>
        <li><a href="#user-api-key">User API Key</a></li>
    </ul>
    <li><a href="#4-future-work">Future Work</a></li>
    <li><a href="#5-license">License</a></li>
    <li><a href="#6-contact">Contact</a></li>
  </ol>
</details>
<br>

## 1. About The Application
 TwOp is a Chrome browser extension which returns engaging tweets based on user input. The tweets are AI generated via the API request method of OpenAI with Node.js. TwOp captures four sources of user information to identify the context of the desired tweet:

- Topic - headline or brief description of tweet context (ie "announcement of Italian restaurant opening")
- Keywords - any words that must be included in the tweet response (ie "delicious")
- Theme - an overarching and specific theme describing context (ie "leisure / restaurant")
- Tone - an overarching and specific mood/style aimed to be expressed with the tweet (ie "positive / excited")

The user entered values are pulled into a prompt and sent to OpenAI to generate a tweet. A second follow-up request is made to OpenAI to fine-tune the first result. The second result is then returned in the UI which the user can use as inspiration for posting a tweet. Here is an actual result using the above example values as input:

<br>

>```
>We're thrilled to announce the grand opening of our new Italian restaurant!
>
>Come and sample our deliciously crafted dishes and enjoy an unforgettable dining experience.

<br>

The query can be called multiple times without limits and the AI produces a unique result each time. The TwOp extension is available in the chrome web store [insert link when available].

<br>


## 2. Prior Work
A key piece of the functionality of this app is derived from the starter template of the [build your own AI writing assistant w/ GPT-3](https://buildspace.so/builds/ai-writer) project by [Buildspace](https://buildspace.so/). It describes the development of a browser extension that generates a blog post in Calmly based off of selected text on a website using a multi-chain prompt with OpenAI. The open source code provided by Buildspace has inspired the creation of TwOp.

<br>

## 3. TwOp Application Docs


### OpenAI API
To install the official Node.js library, run the following command in your Node.js project directory:
>`npm install openai`

<br>

TwOp uses the Complete mode specified in the official [OpenAI API docs](https://platform.openai.com/docs/introduction/overview) described here: https://api.openai.com/v1/completions.

<br>

The main function of the code is `generateCompletionAction()` inside the `getTweet.js` file. This function takes user input from text fields and dropdown menus and calls the OpenAI completions endpoint to generate a tweet. It then cleans up the tweet by removing hashtag references and emojis, and returns the cleaned up tweet. The `generateCompletionAction()` function is called with an event listener attached to a submit button.

<br>

### User API Key
The application saves the [OpenAI API key](https://platform.openai.com/docs/api-reference/introduction) from the user in the local storage via the `saveKey()` function. The code contains a function `getKey()` that retrieves the key from storage and decodes it.

>```
>const getKey = () => {
>  return new Promise((resolve, reject) => {
>    chrome.storage.local.get(['openai-key'], (result) => {
>      if (result['openai-key']) {
>        const decodedKey = atob(result['openai-key']);
>        resolve(decodedKey);
>      } else {
>        reject(new Error('Failed to retrieve openai-key'));
>      }
>    });
>  });
>};

<br>

## 4. Future Work
**Social media platform expansion** - The app can be expanded to produce adequate results for other social media platforms like Instagram or Facebook. Hard coded references to "tweet" can be turned into variable user inputs using `objects`. One of the key differences between these platforms are the different character length limitations which can be mapped `values` inside the social media platform `object`.

**Direct insert** - The app could also be expanded by inserting the output directly into the corresponding social media platform fields similar to how Buildspace has demonstrated it for Calmly.

<br>

## 5. License
[MIT License](https://github.com/MyDeLife/TwOp/blob/main/LICENSE)

Copyright (c) 2023 ZorroZ77

<br>

## 6. Contact
Esther Woo - [@estiewoo](https://twitter.com/estiewoo)

Oliver Zerhusen - [@OliverZerhusen](https://twitter.com/OliverZerhusen)
