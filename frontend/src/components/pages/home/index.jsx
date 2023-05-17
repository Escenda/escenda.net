
import { TextField } from "components/molecules";

import 'styles/addons/markdown/github-markdown.min.css';

const Home = () => {
    return (
        <TextField text={(
            <>
                <h1>当サイトについて</h1>
                <p>どうも、インターネット上でEscendaという名前で活動している者です。</p>
                <p>読みはカタカナで、「エシェンダ」と書きます。</p>
                <p>中の人は自営業でシステム開発をしてます。</p>
                <p>スキルは多様ですが、広く浅く、それでいて業務で差し支えない程度のスキルを持っています。</p>
                <br />
                <h1>中の人が得意な開発領域</h1>
                <p>基本はフルスタックエンジニアとして、下記の領域で開発の経験を重ねています。</p>
                <h2>フロントエンド</h2>
                <p>React.js / Vue.js を使用したSPA開発</p>
                <p>Next.js を使用したSSR開発</p>
                <p>jQuery を使用してのDOM操作</p>
                <h2>バックエンド</h2>
                <p>Python / Django を使用したWebアプリケーション開発</p>
                <p>Java を使用したシステム開発</p>
                <p>RESTful API の設計・開発・実装</p>
                <h2>データベース</h2>
                <p>MySQL / PostgreSQL / SQLite などのRDBMSでの設計・運用</p>
                <p>NoSQL（MongoDB）での設計・運用</p>
                <p>ORMの使用（Django ORM / SQLAlchemy）</p>
                <h2>その他（Web以外の開発経験）</h2>
                <p>AWSでのクラウドインフラの設計・構築</p>
                <p>GCPでのCloud Functionsの開発</p>
                <p>GASでの自動化スクリプトの開発</p>
                <br />
                <h1>具体的なアーキテクチャ</h1>
                <h2>フロントエンド</h2>
                <p>HTML / CSS / JavaScript / BootStrap</p>
                <p>Next.js / React.js / Vue.js</p>
                <p>Ajax / API / SEO</p>
                <h2>バックエンド</h2>
                <p>Python / Java</p>
                <p>SSL / TLS</p>
                <p>DNS</p>
                <h2>データベース</h2>
                <p>MySQL / PostgreSQL / SQLite</p>
                <p>Amazon ElastiCache / Google Firebase / WebStorage</p>
                <h2>その他（Web以外の開発経験）</h2>
                <p>Python を使用したExcel業務自動化ソフトの設計・開発</p>
                <p>VBA を使用したExcel業務自動化プログラムの設計・開発</p>
                <br />
                <h1>前略、お客様。</h1>
                <p>何かシステム開発に関することでお困りであれば、ぜひお気軽にお問い合わせください。</p>
                <p>連絡用メールアドレス： contact@escenda.net</p>
                <br />
            </>
        )} />
    )   
}

export default Home;