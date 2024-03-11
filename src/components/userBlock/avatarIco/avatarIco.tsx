import style from './avatarIco.module.css';

const AvatarIco = ({...props}) => {
    return(
        <>
            {
                props.avatar ? (
                        <div className={style.image} style={{background: props.avatar}}></div>
                    )
                    : null
            }
        </>
    )
};

export default AvatarIco;