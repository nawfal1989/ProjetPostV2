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

export const tri  = (a,b) =>
{
  if (a.title < b.title) return -1;
  else if (a.title == b.title) return 0;
  else return 1;
}
