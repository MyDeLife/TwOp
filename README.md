# TwOp - Tweet Optimizer
 <h3>Generate optimized tweets via OpenAI</h1>
<br>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
      <li><a href="#latest-deployments">Credit</a></li>
    <li><a href="#twop-application-docs">TwOp Application Docs</a></li>
    <ul>
        <li><a href="#openai-api">OpenAI API</a></li>
        <li><a href="#user-api-key">User API Key</a></li>
        <li><a href="#user-api-key">AI Prompting</a></li>
        <li><a href="#...">...</a></li>
    </ul>
    <li><a href="#future-work">Future Work</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Application
 TwOp is a Chrome browser extension which returns engaging tweets based on user input . The tweets are AI generated via the API request method of OpenAI with Node.js. TwOp captures four sources of user information to identify the context of the desired tweet:

- Topic - headline or brief description of tweet context (ie "announement of Italian restaurant opening")
- Keywords - any words that must be included in the tweet response (ie "delicious")
- Theme - an overarching and specific theme describing context (ie "entertainment / dining")
- Style - an overarching and specific mood aimed to be expressed with the tweet (ie "positive / excited")

The user entered values are pulled into a prompt and sent to OpenAI to generate a tweet. A second follow-up request is made to OpenAI to fine-tune the first result. The second result is then returned in the UI which the user can use as inspiration for sending a tweet. Here is an actual result using the above example values as input:
<br>

 > 🍝😋 
>
>We're thrilled to share that a new Italian eatery is opening! Get ready for some of the most delicious dishes you've ever tasted! We can't wait to have you join us!

<br>
The query can be called multiple times without limits and the AI produces a unique result each time. The TwOp extension is available in the chrome web store [insert link when available].

<br>
<br>

## Credit
A key piece of the functionality of this app is derived from the starter template of the [build your own AI writing assistant w/ GPT-3](https://buildspace.so/builds/ai-writer) project by [Buildspace](https://buildspace.so/). It describes the development of a browser extension that generates a blog post in Calmly based off selected text on a website using a multi-chain prompt with OpenAI. The open source code provided by Buildspace has inspired the creation of TwOp.

<br>

## TwOp Application Docs
to come...

<br>

### OpenAI API
to come...

<br>

### User API Key
to come...

<br>

## Future Work
to come...

<br>

## License
[MIT License](https://github.com/MyDeLife/TwOp/blob/main/LICENSE)

Copyright (c) 2023 ZorroZ77

<br>

## Contact
Esther Woo - [@estiewoo](https://twitter.com/estiewoo)
Oliver Zerhusen - [@OliverZerhusen](https://twitter.com/OliverZerhusen)