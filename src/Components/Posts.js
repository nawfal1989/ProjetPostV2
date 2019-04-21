import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../Actions/postActions'
import './Posts.css';

class Posts extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts : []
    }
  }

  componentWillMount(){
    console.log('mount');
    this.props.fetchPosts();
  }


  render(){
    const postItems = this.props.posts.map(
      (post)=>(
        <div key = {post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>

        </div>
      )
    );

    const postsItems2 = (
      <div>
        <table>
        <colgroup>
         <col class="col1" />
         <col class="col1" />
         <col class="col3" />
         <col class="col4" />
       </colgroup>
        <tr class="ligne-impaire">
            <th>ID</th>
            <th>USER ID</th>
            <th>TITLE</th>
            <th>BODY</th>
        </tr>
        {

          this.props.posts.map(
            (post)=>(
              <tr key = {post.id} class="ligne-paire">
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
              </tr>
            )
          )
        }
        </table>
      </div>
    )
    return(
      <div>
        <h1>Liste des posts</h1>
        {postsItems2}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps,{fetchPosts})(Posts);
