// 麵包屑導航 傳當前第一層路由名稱，返回當前路由的所有子層路由攤平結果

let router = [
    {
        name: 'Home',
        router: 'index.html',
        child: [
            {
                name: 'about',
                router: 'about.html',
                child: [
                    {
                        name: 'www',
                        router: 'www.html',
                    },
                ],
            },
        ],
    },
    {
        name: 'aa',
        router: 'aa.html',
        child: undefined,
    },
    {
        name: 'bbbbb',
        router: 'bbbbb.html',
        child: [
            {
                name: 'bbbbb01',
                router: 'about.html',
                child: [
                    {
                        name: 'bbbbbChild',
                        router: 'bbbbbChild.html',
                    },
                ],
            },
        ],
    },
]

function routerEach(routes, title) {
    let result = [] // 在函數內部定義結果，避免全局狀態

    function addRoutes(route) {
        // 將當前路由添加到結果
        result.push({
            name: route.name,
            router: route.router,
        })

        // 如果有子路由，遞歸處理
        if (route.child && Array.isArray(route.child)) {
            route.child.forEach(addRoutes)
        }
    }

    // 遍歷所有路由
    routes.forEach((element) => {
        if (element.name === title) {
            addRoutes(element) // 如果匹配，處理當前路由及其子路由
        }
    })

    return result // 返回結果
}

console.log('routerEach', routerEach(router, 'bbbbb'))
