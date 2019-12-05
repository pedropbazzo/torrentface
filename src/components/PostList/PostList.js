import React, { Component } from "react";

import "./PostList.css";

import SinglePost from '../SinglePost/SinglePost';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Bruna Marquezine',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se o Neymar está jogando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Ragnar',
              avatar: ''
            },
            date: '04 Jun 2019',
            content:
              ''
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Gabigol',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdZZCsT2iRhbUOizKXpeZsDUR4E41gkCxpWZafPuM0NQZtLTD-Q&s'
        },
        date: '04 Jun 2019',
        content:
          'Hoje tem gol do GaBigol',
        comments: [
          {
            id: 4,
            author: {
              name: 'Maria Joaquina',
            },
            date: '04 Jun 2019',
            content:
              'Mengo'
          },
          {
            id: 5,
            author: {
              name: 'Jamal',
            },
            date: '04 Jun 2019',
            content:
              'Latica, ondes tas'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Blade',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNh9ykOxWmgTRfxh-7GYugpaoMjOgfr64Z7mIDCDRtD_S7pjTD8Q&s'
        },
        date: '04 Jun 2019',
        content:
          'Competitiva',
        comments: [
          {
            id: 4,
            author: {
              name: 'DJ',
              avatar: ''
            },
            date: '04 Jun 2019',
            content:
              'solta o som'
          },
          {
            id: 5,
            author: {
              name: 'Massacration',
            },
            date: '04 Jun 2019',
            content:
              'Dia de musica, bb'
          }
        ]
      }
    ]
  };
  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <SinglePost key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
