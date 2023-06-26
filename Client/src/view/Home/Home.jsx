import styles from './Home.module.css'

export default function Home() {

    return (
        <div className={styles.home}>
            <div className={styles.container__cards}>

                <div className={styles.contentDiv}>
                    <h3>¡Bienvenidos, terrícolas y alienígenas curiosos, a la página de Rick and Morty en el espacio! 👩‍🚀👨‍🚀</h3>
                    <div className={styles.container__hr} >
                    <hr className={styles.heartbeat} />
                    </div>
                    <ul> Aquí, en este alucinante rincón virtual, viajaras a través de portales intergalácticos y te encontraras con los personajes más extravagantes y retorcidos que puedas imaginar. Soy Rick Sánchez, el genio científico alcohólico y excéntrico, y junto a mi nieto Morty, te llevaremos en un viaje alucinante por el universo de Rick and Morty.</ul>

                    <ul>¿Listo para descubrir los secretos más profundos de este universo caótico? Solo tienes que ingresar el <b>ID</b> o el <b>nombre</b> de un personaje en nuestra increíble barra de búsqueda y tendrás acceso a información detallada sobre ellos. 🚀🚀🚀</ul>


                </div>
                <div className={styles.profesor}></div>
            </div>

        </div>
    )
}