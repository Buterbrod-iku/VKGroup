import style from './filter.module.css'
import SectionFilter from "./sectionFilter/sectionFilter.tsx";
import {friendsSelect, privateSelect} from "./dataFilter/textSelect.ts";
import {useEffect, useState} from "react";

const Filter = ({...props}) => {
    //запоминаем занчения чтоб применялись все фильтрации
    const [cache, setCache] = useState({
        "privateFilter": "all",
        "avatarFilter": "all",
        "friendsFilter": "all"
    })

    const changeSelect = (typeFilter: string, newValue: string) => {
        setCache((prevState) => ({ ...prevState, [typeFilter]: newValue }))
    }

    useEffect(() => {
        props.fun.updateFilter(cache)
    }, [cache])


    return (
        <div className={style.main}>
            <SectionFilter name="По типу приватности" text={privateSelect} typeFilter={"privateFilter"} changeSelect={changeSelect}/>

            <SectionFilter name="По цвету аватарки" text={props.fun.findColor()} typeFilter={"avatarFilter"} changeSelect={changeSelect}/>

            <SectionFilter name="По друзьям" text={friendsSelect} typeFilter={"friendsFilter"} changeSelect={changeSelect}/>
        </div>
    );
};

export default Filter;