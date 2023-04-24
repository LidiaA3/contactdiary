import './Contact.scss';

export default function Contact(props) {
    return <div className='contact'>
        <div>
            <img className='contact__img' src={ props.img } alt="contacto" />
        </div>
        <div>
            <strong>{ props.name }</strong>
            <p>{ props.text }</p>
        </div>
    </div>
}