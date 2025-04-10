import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            author="André Nicoletti"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas assumenda esse iusto, aliquam velit aspernatur odit, error et praesentium voluptatem nulla pariatur illo dolore explicabo, nobis temporibus laboriosam ducimus!"
          />
          <Post
            author="Raul Nicoletti"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, deserunt. Vero a adipisci odio illum, commodi veniam eius? Ipsum aut nihil officiis reprehenderit laudantium hic consectetur tempora voluptates recusandae veritatis?"
          />
        </main>
      </div>
    </>
  )
}

