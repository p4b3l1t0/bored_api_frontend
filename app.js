const endpoint = 'http://www.boredapi.com/api/activity/';
const button = document.querySelector('.button');
const form = document.querySelector('#form');
const activityWrapper = document.querySelector('.activity');
const typewrapper = document.querySelector('.type');


const getActivity = async (event) => {
    event.preventDefault();
    const isFree = event.target.children.namedItem('free').checked;
 
    let Api = isFree ? `${endpoint}?price=0.0` : endpoint;
    const response = await fetch(Api);
    const json = await response.json();
    console.log(json)
    const {
       activity,
       type
    } = json;
    activityWrapper.innerHTML = activity;
 }

form.addEventListener('submit', getActivity);