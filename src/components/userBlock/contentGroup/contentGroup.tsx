import style from './contentGroup.module.css'
import {useState} from "react";
import {Group} from "../../type/GetGroupsResponse.ts";

const ContentGroup = ({...item} : Group) => {
    const [showFriends, setShowFriends] = useState(false)

    const openFriends = (e : { preventDefault: () => void}) : void => {
        e.preventDefault()
        setShowFriends(!showFriends)
    }

    return (
        <div className={style.content}>
            <h2>{item.name}</h2>

            {
                item.closed ? (
                        <p>Закрытая группа</p>
                    )
                    :
                    (
                        <p>Открытая группа</p>
                    )
            }

            <p>Кол-во подписчиков: {item.members_count}</p>

            {
                item.friends ? (
                        <>
                            <button className={style.button} onClick={openFriends}>Кол-во друзей: {item.friends?.length}</button>
                            {
                                showFriends ? (
                                        <ol>
                                            {
                                                item.friends?.map((friend, index) => (
                                                    <li key={index}>{friend.first_name + " " + friend.last_name}</li>
                                                ))
                                            }
                                        </ol>
                                    )
                                    : null
                            }
                        </>

                    )
                    : null
            }
        </div>
    );
};

export default ContentGroup;