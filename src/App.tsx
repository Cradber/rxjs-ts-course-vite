import {h} from "preact";
import {LogoLink} from "./components";
import {Log} from "./helpers/log";

import {jsx, rx, typescriptLogo, vite} from "./assets";

export const App = () => {
    Log()

    return (
        <div>
                <LogoLink href="https://vitejs.dev" src={vite} className="logo" alt="TypeScript logo" />
                <LogoLink href="https://www.typescriptlang.org/" src={typescriptLogo} className="logo vanilla" alt="TypeScript logo" />
                <LogoLink href="https://reactjs.org/docs/introducing-jsx.html" src={jsx} className="logo" alt="JSX logo" />
                <LogoLink href="https://reactivex.io" src={rx} className="logo" alt="RxJS logo" />
                <h1>Vite + TypeScript + JSX + RxJS</h1>
                <span>RxJS little course</span>
        </div>
    )
}
