import Button from "../Button/button"
import image from "../../assets/spiaggia.jpg"
import style from "./BlogCard.module.css"
export default function BlogCard() {


    return (

        <div className={style.blogCard}>
            <img src={image} alt="" />
            <div className={style.blogCardBody}>
                <h3>Card title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, unde.</p>
                <Button />
            </div>
        </div>
    )

}