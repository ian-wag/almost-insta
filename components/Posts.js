import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'mbn',
    userImg:
      'https://avatars.githubusercontent.com/u/64107817?s=400&u=89b23fddfe3b1006b3d51c2f38fd3eebaf56dc07&v=4',
    img: 'https://pbs.twimg.com/media/E-YEPflXICsKbuQ?format=jpg&name=large',
    caption: 'we out here.',
  },
  {
    id: '123',
    username: 'mbn',
    userImg:
      'https://avatars.githubusercontent.com/u/64107817?s=400&u=89b23fddfe3b1006b3d51c2f38fd3eebaf56dc07&v=4',
    img: 'https://pbs.twimg.com/media/E-YEPflXICsKbuQ?format=jpg&name=large',
    caption: 'we out here.',
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
