'use client'
import Render from "@/components/Render";
import {useEffect, useState} from "react";

export default function Preview() {

    const jsonss = {
        "type": "div",
        "id": "root",
        "state": {
            "type": "primary"
        },
        "props": {
            "style": { // 容器自定义样式
                "padding": "20px"
            }
        },
        "children": [
            {
                "type": "div", // 更改为 div 来作为容器
                "id": "1",
                "props": {
                    "style": { // 容器自定义样式
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "center",
                        "padding": "20px"
                    }
                },
                "children": [
                    {
                        "type": "button",
                        "id": "1-1",
                        "state": {
                            "type": "primary"
                        },
                        "props": {
                            "type": "state:type",
                            "onClick": "handleChangeColor",
                            "children": '234',
                            "style": {
                                "backgroundColor": "#f0f0f0",
                                "border": "none",
                                "padding": "10px 20px",
                                "borderRadius": "5px"
                            }
                        },
                        "event": {
                            "handleChangeColor": {
                                "action": "setState",
                                "targetState": "type",
                                "value": "state.type === 'primary' ? 'default' : 'primary'"
                            }
                        },
                        children: [{
                            "type": "div", // 示例子组件
                            "id": "2",
                            "props": {
                                "style": {
                                    "marginTop": "10px"
                                }
                            },
                            "children": "这是一段文本，作为按钮的兄弟元素"
                        }]

                    },
                    {
                        "type": "div", // 示例子组件
                        "id": "2",
                        "props": {
                            "style": {
                                "marginTop": "10px"
                            }
                        },
                        "children": "这是一段文本，作为按钮的兄弟元素"
                    }
                ]
            }
        ]
    };

    const jsons = {
        "type": "div",
        "id": "form1",
        "state": {
            "backgroundColor": "#ffffff"
        },
        "props": {
            "style": {
                "display": "flex",
                "flexDirection": "column"
            }
        },
        "children": [
            {
                "type": "input",
                "id": "nameInput",
                "props": {
                    "style": {
                        "marginBottom": "10px"
                    },

                },

                "event": {
                    "onChange": {
                        "action": "setState",
                        "targetState": "name",
                        "value": "event.target.value"
                    }
                }
            },
            {
                "type": "input",
                "id": "idInput",
                "props": {
                    "style": {
                        "marginBottom": "10px"
                    }
                },

                "event": {
                    "onChange": {
                        "action": "setState",
                        "targetState": "id",
                        "value": "event.target.value"
                    }
                }
            }
        ]
    }

    const [json, setJson] = useState({})

    useEffect(() => {

        window.addEventListener('message', (event) => {
            if (event?.data?.json) {
                setJson(event.data.json);
                console.log(json)
            }
        });

    }, []);

    return (
        <Render json={json}/>
    );
}
