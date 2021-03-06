import React from 'react';

import Tree from 'src/components/Tree';
import Button from 'src/components/Button';
import Combine from 'src/components/Combine';

// demo start
const generateItems = (count, prefix, depth) => {
    return new Array(count).fill(null).map((v, i) => {
        const key = `${prefix}-${i}-item`;
        let subItems = [];
        if (depth) {
            subItems = generateItems(6, key, depth - 1);
        }
        return {
            key: key,
            title: key,
            children: subItems
        };
    });
};

const generateGroupData = (depth, prefix) => {
    const itemCount = 6;
    const menuItems = generateItems(itemCount, prefix, depth);
    return menuItems;
};

const initDataSource = generateGroupData(5, 'root');

const Demo = () => {
    const [dataSource, setDataSource] = React.useState(initDataSource);
    const refresh = React.useCallback(() => {
        setDataSource(generateGroupData(5, 'root'));
    }, []);
    const ref = React.useRef();
    return (
        <>
            <Combine>
                <Button onClick={refresh}>Refresh</Button>
                <h2>总计 6**6 = 46656 条数据</h2>
            </Combine>
            <Tree dataSource={dataSource} multiple onOpenKeysChange={console.log} onChange={console.log} ref={ref} />
        </>
    );
};
// demo end

export default Demo;
