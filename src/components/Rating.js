import './../App.css';
import { Link } from "react-router-dom";

const Rating = ({ handleRating, rating }) => {

    return (
        <div className='rating-card-container'>
            <div className='star'>
                <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" /></svg>
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>
            <div className='rating'>
                <div className={rating === 1 ? 'circle-rating btn-clicked' : 'circle-rating '} onClick={() => handleRating(1)}>
                    <p>1</p>
                </div>
                <div className={rating === 2 ? 'circle-rating btn-clicked' : 'circle-rating '} onClick={() => handleRating(2)}>
                    <p>2</p>
                </div>
                <div className={rating === 3 ? 'circle-rating btn-clicked' : 'circle-rating '} onClick={() => handleRating(3)}>
                    <p>3</p>
                </div>
                <div className={rating === 4 ? 'circle-rating btn-clicked' : 'circle-rating '} onClick={() => handleRating(4)}>
                    <p>4</p>
                </div>
                <div className={rating === 5 ? 'circle-rating btn-clicked' : 'circle-rating '} onClick={() => handleRating(5)}>
                    <p>5</p>
                </div>
            </div>
            <Link to={rating === 0 ? '/' : '/success'} className='btn-submit'>SUBMIT</Link>
        </div >
    )
}

export default Rating