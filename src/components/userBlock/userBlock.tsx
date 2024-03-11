import style from './userBlock.module.css'
import AvatarIco from "./avatarIco/avatarIco.tsx";
import ContentGroup from "./contentGroup/contentGroup.tsx";
import {Group} from "../type/GetGroupsResponse.ts";

const UserBlock = ({...item} : Group) => {
    const avatarStyleMain = item.avatar_color ? {gridTemplateColumns: "1fr 3fr"} : {gridTemplateColumns: "1fr"}
    
    return (
        <div className={style.main} style={avatarStyleMain}>

            <AvatarIco avatar={item.avatar_color} />

            <ContentGroup {...item}/>
        </div>
    );
};

export default UserBlock;