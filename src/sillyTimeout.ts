type Callback = () => void;

const getSillyTimeout = () => {
    let counter: ReturnType<typeof setTimeout>;

    return (callback: Callback, delay: number) => {
        clearTimeout(counter);
        counter = setTimeout(callback, delay);
        return counter;
    };
};

const sillyTimeout = getSillyTimeout();

// Solution
const setTimeout2 = (callback: Callback, delay: number) => {
    sillyTimeout(callback, delay)
}

const test = () => {
    setTimeout2(() => {
        console.log('5 seconds');
    }, 5000);

    setTimeout2(() => {
        console.log('2 seconds');
    }, 2000);

    setTimeout2(() => {
        console.log('10 seconds');
    }, 10000);

    setTimeout2(() => {
        console.log('0.1 seconds');
    }, 100);
};

test();

