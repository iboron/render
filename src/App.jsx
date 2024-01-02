import {useEffect, useState} from 'react'
import {transform} from "sucrase";
import {Helmet} from "react-helmet";

function App() {

    const [reactTemplate, setReactTemplate] = useState('')

    // 信息监听
    useEffect(() => {
        window.addEventListener('message', (event) => {
            if (event?.data?.template) {
                setReactTemplate(transform(event.data.template, {transforms: ["jsx"], production: true,}).code)
            }
        }, false);
    }, [window.addEventListener]);

    return (<>
        <Helmet>
            <script type={'module'}>
                {reactTemplate}
            </script>
        </Helmet>
    </>)
}

export default App
