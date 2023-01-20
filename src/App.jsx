import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

export function App() {
  return (
    <div>
      <Header />
  
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
            author="Mateus Catão"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam unde accusantium minima delectus nostrum at officia itaque distinctio id obcaecati fugit officiis quae a aliquid, porro modi ducimus natus nihil."
          />
          <Post
            author="John Doe"
            content="Um novo post."
          />
        </main>
      </div>
    </div>
  )
}
