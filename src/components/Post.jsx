import styles from './Post.module.css';

export function Post(props) {
    console.log(props);
    const { author, content } = props;
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/andregnicoletti.png' />
                    <div className={styles.authorInfo}>
                        <strong>André Nicoletti</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='10 de Abril as 15:55' dateTime='2025-04-10' className={styles.date}>
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera!</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates voluptatum numquam, tenetur eveniet neque sunt,
                    possimus delectus fuga at inventore repellat, necessitatibus iste magnam nisi
                    praesentium accusamus quisquam totam aperiam!
                </p>
                <p><a href=''>jane.desing</a> </p>
                <p>
                    <a href=''>#novoprojeto </a> {' '}
                    <a href=''>#nwl </a> {' '}
                    <a href=''>#rocketseat </a>
                </p>
            </div>

        </article>
    )
}
