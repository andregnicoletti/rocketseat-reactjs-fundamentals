import { Post } from './Post'

export function App() {

  return (
    <>
      <h1>Hello World</h1>
      <>
        <Post
          author="André Nicoletti"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas assumenda esse iusto, aliquam velit aspernatur odit, error et praesentium voluptatem nulla pariatur illo dolore explicabo, nobis temporibus laboriosam ducimus!" 
          />
        <Post 
          author="Raul Nicoletti"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, deserunt. Vero a adipisci odio illum, commodi veniam eius? Ipsum aut nihil officiis reprehenderit laudantium hic consectetur tempora voluptates recusandae veritatis?"
        />

      </>
    </>
  )
}

