import style from './sectionFilter.module.css'

const SectionFilter = ({...props}) => {
    return (
        <div className={style.main}>
            <p className={style.title}>{props.name}</p>

            <select className={style.section} onChange={(e) => props.changeSelect(props.typeFilter, e.target.value, props.cache)}>

                {/*Если фильтр по цвету, то добавляем доп option*/}
                {
                    props.text[0].text === props.text[0].value ? (
                            <>
                                <option value={"all"} defaultChecked>Цвет</option>
                                <option value={"empty"}>Без цвета</option>
                            </>
                        )
                        : null
                }

                {/*Текст и значения option передаются пропсом */}
                {
                    props.text.map((item: object, index: number) => (
                        <option key={index} value={item.value} defaultChecked={index === 0}
                                style={{background: item.value}}>
                            {item.text !== item.value ? item.text : ""}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

export default SectionFilter;