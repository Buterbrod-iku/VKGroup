// Класс для работы с фильтрацией
export default class FunctionFilter {
    data: [];
    setShowData: void;
    showData: [];

    constructor(data: [], showData: [],  setShowData: void) {
        this.data = data
        this.setShowData = setShowData
        this.showData = showData
    }

    // фильтрация по приватности
    privateFilter = (type: string, data: []) => {
        switch (type){
            case "all":
                return data
            case "private":
                return data.filter(item => {
                        return item.closed
                    })
            case "public":
                return data.filter(item => {
                        return !item.closed
                    })
        }
    }

    // генерация массива цветов. Цвета выводятся без текста, просто бэкграудом option, но лучше переписать дизайн
    findColor () {
        const colorArrayAll = this.data.filter((v,i,a)=>a.findIndex(v2=>(v2.avatar_color===v.avatar_color && v.avatar_color !== undefined))===i)
        const colorArray = []

        for (let i = 0; i < colorArrayAll.length; i++) {
            colorArray.push({
                text: colorArrayAll[i].avatar_color,
                value: colorArrayAll[i].avatar_color
            })
        }

        return colorArray
    }

    // фильтрация по аватарам
    avatarFilter = (type: string, data: []) => {
        if (type === "all"){
            return data
        }
        else if (type === "empty"){
            return data.filter(item => !item.avatar_color)
        } else {
            return data.filter(item => item.avatar_color === type)
        }
    }

    // фильтрация по друзьям
    friendsFilter = (type: string, data: []) => {
        switch (type){
            case "all":
                return data
            case "friends":
                return data.filter(item => {
                        return item.friends
                    })
            case "noFriends":
                return data.filter(item => {
                        return !item.friends
                    })
        }
    }

    // метод для применения фильтрации
    updateFilter = (cache) => {
        let data = this.data

        if (cache["privateFilter"] !== "all") {
            data = this.privateFilter(cache["privateFilter"], data)
        }
        if (cache["avatarFilter"] !== "all") {
            data = this.avatarFilter(cache["avatarFilter"], data)
        }
        if (cache["friendsFilter"] !== "all") {
            data = this.friendsFilter(cache["friendsFilter"], data)
        }

        this.setShowData(data)
    }
}