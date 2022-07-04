export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`
    const queue = [document.body.children];

    while (queue.length > 0) {
        let current = queue.shift();

        for (let key in current) {
            if (current[key].id === id) {return current[key]}
            queue.push(current[key].children);
        }
    }

    return "no element of specified id found"
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
    const queue = [document.body.children];

    while (queue.length > 0) {
        let current = queue.shift();

        for (let key in current) {
            if (current[key].tagName === tag) {return current[key]}
            queue.push(current[key].children);
        }
    }

    return "no element of specified tag found"
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`
    const queue = [document.body.children];

    while (queue.length > 0) {
        let current = queue.shift();

        for (let key in current) {
            let classList = current[key].classList;
            for (let i = 0; i < classList.length; i++) {
                if (classList[i] === cls) {return current[key]}
            }

            queue.push(current[key].children);
        }
    }

    return "no element of specified class found"
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
    const queue = [document.body.children];
    const tags = [];

    while (queue.length > 0) {
        let current = queue.shift();

        for (let key in current) {
            if (current[key].tagName === tag) {tags.push(current[key])}
            queue.push(current[key].children);
        }
    }

    return tags;
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    const queue = [document.body.children];
    const clsArr = [];

    while (queue.length > 0) {
        let current = queue.shift();

        for (let key in current) {
            let classList = current[key].classList;
            if (classList) {
                for (let i = 0; i < classList.length; i++) {
                    if (classList[i] === cls) {clsArr.push(current[key])}
                }
            }

            queue.push(current[key].children);
        }
    }

    return clsArr;
}
