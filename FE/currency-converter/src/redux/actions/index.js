export const toggle = () => {
    return {
        type: 'TOGGLE'
    }
}

export const currentPage = (pageName) => {
    if (pageName !== undefined || null) {
        return {
            type: 'CURRENTPAGE',
            payload: pageName
        }
    }
    return { type: 'null' }
}

export const currencyList = (currencyList) => {
    if (currencyList !== undefined || null) {
        return {
            type: 'CURRENCYLIST',
            payload: currencyList
        }
    }
    return { type: 'null' }
}

export const userId = (userId) => {
    if (userId !== undefined || null) {
        return {
            type: 'USERID',
            payload: userId
        }
    }
    return { type: 'null' }
}

export const pageRoute = (pageName) => {
    if (pageName !== undefined || null) {
        return {
            type: 'PAGEROUTE',
            payload: pageName
        }
    }
    return { type: 'null' }
}

export const formRoute = (pageName) => {
    if (pageName !== undefined || null) {
        return {
            type: 'FORMROUTE',
            payload: pageName
        }
    }
    return { type: 'null' }
}
