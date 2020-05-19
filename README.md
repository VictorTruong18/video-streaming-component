This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Welcome

Clone this repository to get a Streaming WebComponent in React for streaming your own video on your own website.

## Getting started

First things first you will need to install our node modules. We are using hls.js, TypeScript and React. Just simply type:

### `npm install`

In the project directory, you can run:

### `npm start`

To run the project  
Full demo at : [WebComponent Streaming Demo](https://webcomponent-streaming-demo.herokuapp.com/)

## Put your own videos

## Convert your video to .m3u8

...

All the magic happens in

    src/components/video-streaming.component.jsx

We access our video by putting them on the "public" folder so it will be available by an URL

You will have to specify the path of the video you want to show on the const called streamURL on the componentDidMount:

    const streamURL = "http://localhost:3000/assets/sample1/sample.m3u8";

If you have deployed your website replace localhost by the name of your domain.
