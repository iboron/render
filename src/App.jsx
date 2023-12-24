import {transform} from "sucrase";
import {Helmet} from "react-helmet";

function App() {

    const compiledCode = transform(`
     import React from 'https://esm.sh/react@18.2.0'
     import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
     import {Button} from 'https://esm.sh/@mui/material@5.15.1'
     const A = ()=>(<Button >这fweq</div>)
    
ReactDOM.createRoot(document.getElementById('root')).render(
     <A/>
)
    `, {transforms: ["jsx"], production: true,}).code

    return (
        <>
            <Helmet>
                <script type={'module'}>
                    {compiledCode}
                </script>
            </Helmet>
        </>
    )
}

export default App
