import style from './App.module.css';
import {useEffect, useState} from "react";
import UserBlock from "./components/userBlock/userBlock.tsx";
import Filter from "./components/filterBlock/filter.tsx";
import FunctionFilter from "./components/filterBlock/dataFilter/functionFilter.ts";
import {useFetching} from "./hooks/useFetching.ts";
import axios from 'axios';

function App() {
    const [data, setData] = useState([])
    const [showData, setShowData] = useState([])

    // !!!!!!!!
    // ИСКУСТВЕННАЯ ЗАДЕРЖКА РЕАЛИЗОВАНА В ХУКЕ (useFetching), ЧТОБ УБРАТЬ ЗАДЕРЖКУ НАДО УБРАТЬ setTimeout В ХУКЕ useFetching
    const [fetchingData, isLoading, error] = useFetching(async () => {
        const response = await axios
            .get("/src/assets/groups.json")
            .then((res) => res.data)


        setData(response)
        setShowData(response)
    })

    useEffect(() => {
        fetchingData()
    }, []);

    return (
        <main className={style.main}>
            <h1 className={style.title}>VKGroup</h1>

            {
                isLoading ? (
                    <p>Loading</p>
                )
                : (
                    <>
                        <Filter fun={new FunctionFilter(data, showData, setShowData)}/>

                        <div className={style.positionBlock}>
                            {
                                showData.map(item => (
                                    <UserBlock key={item.id} {...item} />
                                ))
                            }
                        </div>
                    </>
                    )
            }

            {
                // Если пришла ошибка, выводим
                error && (
                    <>
                        <h3>ОШИБКА СЕРВЕРА</h3>
                        <p>{error}</p>
                    </>
                )
            }
        </main>
    )
}

export default App
