'use client'
import {Button, Input} from "antd";
import {useState} from "react";

// 将 Ant Design 组件映射为可通过字符串访问的对象
const components: any = {
    div: 'div',
    button: Button,
    input: Input,
};

interface Props {
    json: any
}

export default function Render({json}: Props) {

    if (!json || JSON.stringify(json) === '{}') {
        return ''
    }

    console.log(json)

    // 创建内部状态
    const [state, setState] = useState(json.state);

    // 创建事件
    const createEventHandler = (handlerConfig: any) => {
        console.log(111)
        // 解析配置
        const {action, targetState, value} = handlerConfig;

        // 可以根据需要扩展其他类型的操作
        switch (action) {
            case 'setState':
                return (event: any) => {
                    const newValue = eval(value); // 注意：在实际应用中使用 eval() 需要谨慎，因为它可能会执行不安全的代码
                    setState((prevState: any) => ({
                        ...prevState,
                        [targetState]: newValue,
                    }));
                };

            case 'alert':
                return () => {
                    alert(value);
                };

            default:
                return () => {
                }

        }
    };

    const resolveDynamicValue = (value: any) => {
        if (typeof value === 'string' && value.startsWith('state:')) {
            return state[value.split('state:')[1]];
        }
        return value;
    };

    // 渲染组件
    const renderComponentFromJson = (componentsJson: any) => {
        // 解构数据
        const {type, props, event, children, id} = componentsJson;

        // 判断有没有子组件
        let resolvedChildren = children;

        // 如果有子组件，则递归构建子组件
        if (Array.isArray(children)) {
            // 如果children是数组，递归处理每个子元素
            resolvedChildren = children.map(child => renderComponentFromJson(child));
        }

        // 获取组件
        const Component = components[type] || 'div';

        // 将组件设置的时间都构建成函数
        const eventHandlers = Object.keys(event || {}).reduce((acc: any, key) => {
            acc[key] = createEventHandler(event[key]);

            console.log('11', event, key)

            console.log(acc)
            return acc;
        }, {});

        // 提取参数，赋值给组件
        const resolvedProps = Object.keys(props || {}).reduce((acc: any, key) => {
            const value = props[key];
            if (key === 'style') {
                acc[key] = Object.keys(value || {}).reduce((styleAcc: any, styleKey) => {
                    styleAcc[styleKey] = resolveDynamicValue(value[styleKey]);
                    return styleAcc;
                }, {});
            } else {
                acc[key] = resolveDynamicValue(value);
            }
            return acc;
        }, {});

        // 组件渲染
        return <Component {...resolvedProps} {...eventHandlers} key={id}>{resolvedChildren}</Component>;
    };

    return renderComponentFromJson(json);
}