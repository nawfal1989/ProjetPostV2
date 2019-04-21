import {FETCH_POSTS} from './Types';

const linkUrl = 'https://jsonplaceholder.typicode.com/posts'
export const fetchPosts = () => dispatch =>{
    fetch(linkUrl)
    .then(rest=>rest.json())
    .then(posts=>dispatch(
        {
          type:'FETCH_POSTS',
          payload:posts
        }
      )
    );

}
