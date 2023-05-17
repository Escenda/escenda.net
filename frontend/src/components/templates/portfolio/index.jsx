import { TextField } from "components/molecules";

import 'styles/addons/markdown/github-markdown.min.css';
import 'styles/templates/portfolio/index.style.css';

const PortfolioIndex = () => {
    return (
        <section className='portfolio-index'>
            <TextField text={(
                <div></div>
            )} />
        </section>
    )
}

export default PortfolioIndex;