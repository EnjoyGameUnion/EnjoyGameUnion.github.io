/**
 * newsModel.js
 * ニュースコンテンツ データ定義
 * ▼ ニュースを追加・編集する場合はこのファイルのみ変更してください
 */

const newsContent = [
  {
    id: 1,
    title: "バラエティ動画『おしゃれ番長 エリリ・エリ コーデバトル』公開！",
    date: "2026.01.30",
    tag: "動画更新",
    thumb: "./img/news/NEWS-01-01.webp",
    body: `<img src="./img/news/NEWS-01-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="おしゃれ番長">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            『おしゃれ番長 エリリ・エリ コーデバトル』公開！
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            本番組は、VRChat内グループ「Enjoy Game Union（略称：EGU）」に所属するエリリ・エリがお届けするバラエティ企画です。<br>
            個性豊かなメンバーたちと共に繰り広げられる“コーデバトル”をぜひお楽しみください。
        </p>

        <!-- YouTube埋め込み（前編） -->
        <div class="aspect-video w-full mb-8">
            <iframe 
                class="w-full h-full rounded-3xl shadow-2xl" 
                src="https://www.youtube.com/embed/HITavvIhxUI?rel=0"
                title="【前編】おしゃれ番長 エリリ・エリ コーデバトル" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>

        <p class="mb-8 text-slate-600 leading-loose">
            後編はこちら：<br>
            <a href="https://youtu.be/ChLeWgKQbZ8" class="text-primary underline" target="_blank">
                https://youtu.be/ChLeWgKQbZ8
            </a>
        </p>

        <h3 class="text-xl font-bold mb-4">◆出演者</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li><strong>エリリ・エリ</strong><br>EGU所属の自称清楚担当。何故か今回30分越えの番組を作ることに。</li>
            <li><strong>UTAN</strong><br>EGU所属の歌姫。全会一致でいい女。</li>
            <li><strong>Sava</strong><br>EGU所属の兄貴。大体のことに巻き込まれている。</li>
        </ul>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Links</p>
            <ul class="space-y-2 text-slate-600">
                <li>
                    ◆エリリ・エリ X<br>
                    <a href="https://x.com/nameSnow66" target="_blank" class="text-primary underline">
                        https://x.com/nameSnow66
                    </a>
                </li>
                <li>
                    ◆UTAN X<br>
                    <a href="https://x.com/UTANdayote" target="_blank" class="text-primary underline">
                        https://x.com/UTANdayote
                    </a>
                </li>
                <li>
                    ◆Sava X<br>
                    <a href="https://x.com/Sava_403" target="_blank" class="text-primary underline">
                        https://x.com/Sava_403
                    </a>
                </li>
                </ul>
        </div>

        <h3 class="text-xl font-bold mb-4">◆クレジット</h3>
        <p class="text-slate-600 leading-loose">
            サムネイルイラスト：４８８様<br>
            <a href="https://x.com/wassyoihohohoi" target="_blank" class="text-primary underline">
                https://x.com/wassyoihohohoi
            </a>
        </p>`,
  },
  {
    id: 2,
    title: "歌ってみた動画『ようこそジャパリパークへ』公開！",
    date: "2026.02.14",
    tag: "動画更新",
    thumb: "./img/news/NEWS-02-01.webp",
    body: `<img src="./img/news/NEWS-02-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="ようこそジャパリパークへ">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            『ようこそジャパリパークへ』歌ってみた公開！
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            EGUあにまるずによる『ようこそジャパリパークへ』の歌ってみた動画を公開しました！<br>
            沢山の楽しいことへ！
        </p>

        <!-- YouTube埋め込み -->
        <div class="aspect-video w-full mb-8">
            <iframe 
                class="w-full h-full rounded-3xl shadow-2xl" 
                src="https://www.youtube.com/embed/gLAd9EQtDpc?rel=0" 
                title="【歌ってみた】ようこそジャパリパークへ / EGUあにまるず【UTAN×エリリ・エリ×Tooka×とと】" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>

        <p class="mb-8 text-slate-600 leading-loose">
            本家様：<br>
            <a href="https://www.youtube.com/watch?v=xkMdLcB_vNU" target="_blank" class="text-primary underline">
                https://www.youtube.com/watch?v=xkMdLcB_vNU
            </a>
        </p>

        <h3 class="text-xl font-bold mb-4">◆Vocal</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>UTAN　<a href="https://x.com/UTANdayote" target="_blank" class="text-primary underline">https://x.com/UTANdayote</a></li>
            <li>エリリ・エリ　<a href="https://x.com/nameSnow66" target="_blank" class="text-primary underline">https://x.com/nameSnow66</a></li>
            <li>Tooka　<a href="https://x.com/t1o0k" target="_blank" class="text-primary underline">https://x.com/t1o0k</a></li>
            <li>とと　<a href="https://x.com/Tototo_Tatin" target="_blank" class="text-primary underline">https://x.com/Tototo_Tatin</a></li>
        </ul>

        <h3 class="text-xl font-bold mb-4">◆制作</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>inst / mix：桜結ゆぴ　<a href="https://x.com/yupimusubi" target="_blank" class="text-primary underline">https://x.com/yupimusubi</a></li>
            <li>動画：トッサノ　<a href="https://x.com/tossanovrc" target="_blank" class="text-primary underline">https://x.com/tossanovrc</a></li>
        </ul>

        <h3 class="text-xl font-bold mb-4">◆イラスト</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>サムネイラスト：４８８　<a href="https://x.com/wassyoihohohoi" target="_blank" class="text-primary underline">https://x.com/wassyoihohohoi</a></li>
            <li>SDイラスト：住処　<a href="https://x.com/heiti__shiki" target="_blank" class="text-primary underline">https://x.com/heiti__shiki</a></li>
            <li>デフォルメイラスト：Tooka / Dr.Anri　<a href="https://x.com/Es96L4ap" target="_blank" class="text-primary underline">https://x.com/Es96L4ap</a></li>
        </ul>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Project</p>
            <ul class="space-y-2 text-slate-600">
                <li>歌詞振り分け：Sava　<a href="https://x.com/Sava_403" target="_blank" class="text-primary underline">https://x.com/Sava_403</a></li>
                <li>マネジメント：ずんだゆき　<a href="https://x.com/zund_Yuki" target="_blank" class="text-primary underline">https://x.com/zund_Yuki</a></li>
                <li>プロジェクト管理：あいづたか　<a href="https://x.com/TakaAizu" target="_blank" class="text-primary underline">https://x.com/TakaAizu</a></li>
            </ul>
        </div>`,
  },
  {
    id: 3,
    title: "ボイス『震える君を抱きしめて』販売開始！",
    date: "2026.03.14",
    tag: "活動報告",
    thumb: "./img/news/NEWS-03-01.webp",
    body: `<img src="./img/news/NEWS-03-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="震える君を抱きしめて">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            シチュエーションボイス『震える君を抱きしめて』販売開始
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            ずんだゆきによるシチュエーションボイス『震える君を抱きしめて』を販売開始しました。<br>
            優しさと狂気が交差する、没入感のある音声作品となっています。
        </p>
        <div class="flex justify-center my-8">
            <a href="https://booth.pm/ja/items/8058227" target="_blank" 
                class="group flex items-center gap-3 bg-[#fc4d50] text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-red-100 hover:bg-[#ff5a5d] hover:-translate-y-1 transition-all duration-300">
                <i class="fa-solid fa-cart-shopping text-xl"></i>
                <span>BOOTHでチェックする</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
            </a>
        </div>

        <h3 class="text-xl font-bold mb-4">◆音声概要</h3>
        <p class="mb-8 text-slate-600 leading-loose">
            雨の夜、帰宅したあなたを待っていたのは、優しくもどこか危うい愛を向ける彼。<br>
            濡れた体を気遣いながら、逃げようとする気配さえも見逃さず、静かに距離を詰めてくる。<br><br>
            「君を理解できるのは、世界で俺だけ。」<br><br>
            甘く包み込む言葉と、逃がさない独占欲。<br>
            優しさの奥に潜む狂気が、あなたを少しずつ絡め取っていく――。
        </p>

        <h3 class="text-xl font-bold mb-4">◆収録内容</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>本編：0:10:51</li>
            <li>形式：WAV / 動画編集版MP4同梱</li>
            <li>特典：メッセージカード・手書きメモ付き台本（おやつ代）</li>
        </ul>

        <h3 class="text-xl font-bold mb-4">◆注意事項</h3>
        <p class="mb-8 text-slate-600 leading-loose">
            本作品はご購入者様の個人利用に限定されます。<br>
            データ商品の二次配布・無断転載は固く禁じます。
        </p>

        <h3 class="text-xl font-bold mb-4">◆クレジット</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>ボイスアクター：ずんだゆき<br>
                <a href="https://x.com/zund_Yuki" target="_blank" class="text-primary underline">
                    https://x.com/zund_Yuki
                </a>
            </li>
            <li>効果音・音声協力：たくあんダヨ様<br>
                <a href="https://x.com/takuan_vr0721" target="_blank" class="text-primary underline">
                    https://x.com/takuan_vr0721
                </a>
            </li>
            <li>動画協力：トッサノ<br>
                <a href="https://x.com/tossanovrc" target="_blank" class="text-primary underline">
                    https://x.com/tossanovrc
                </a>
            </li>
        </ul>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">BGM</p>
            <p class="text-slate-600 leading-loose">
                フリー音楽素材 H/MIX GALLERY<br>
                管理者：秋山裕和<br>
                <a href="http://www.hmix.net/" target="_blank" class="text-primary underline">
                    http://www.hmix.net/
                </a>
            </p>
        </div>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Assets</p>
            <ul class="text-slate-600 leading-loose list-disc list-inside">
                <li>ぽんでろ様：オリジナル3Dモデル「しなの」</li>
                <li>LAYON様：【3D】WHITE DUSK =HOMME=</li>
                <li>Metror様：MELOW Eye texture1＆2</li>
                <li>Tonarino様：Unisex Short cut</li>
            </ul>
        </div>`,
  },
  {
    id: 4,
    title: "ボイス『メスガキの耳かきで屈服』販売開始！",
    date: "2026.04.01",
    tag: "活動報告",
    thumb: "./img/news/NEWS-04-01.webp",
    body: `<img src="./img/news/NEWS-04-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="メスガキに耳かきをされるシチュボ">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            シチュエーションボイス『メスガキの耳かきで屈服』販売開始
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            こまつちまによるシチュエーションボイス『メスガキの耳かきで屈服』を販売開始しました。<br>
            小悪魔的な挑発と心地よさが交差する、没入感のある音声作品となっています。
        </p>
        <div class="flex justify-center my-8">
            <a href="https://egu.booth.pm/items/8151321" target="_blank" 
                class="group flex items-center gap-3 bg-[#fc4d50] text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-red-100 hover:bg-[#ff5a5d] hover:-translate-y-1 transition-all duration-300">
                <i class="fa-solid fa-cart-shopping text-xl"></i>
                <span>BOOTHでチェックする</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
            </a>
        </div>

        <h3 class="text-xl font-bold mb-4">◆音声概要</h3>
        <p class="mb-8 text-slate-600 leading-loose">
            一人暮らしの家に突然やってきた、小悪魔的で距離感の近い少女。<br>
            生活ぶりをからかいながらも自然と距離を縮め、耳かきで勝負を持ちかける……<br>
            <br>
            甘く挑発的なやり取りに翻弄されながら、癒やしとドキドキが交差していく――<br>
            そんな不思議なひとときを描いたシチュエーションボイスです。
        </p>

        <h3 class="text-xl font-bold mb-4">◆収録内容</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>本編：0:12:01</li>
            <li>形式：WAV / 動画編集版MP4同梱</li>
            <li>おやつ代のみメッセージカード付き</li>
        </ul>

        <h3 class="text-xl font-bold mb-4">◆注意事項</h3>
        <p class="mb-8 text-slate-600 leading-loose">
            ご購入者様の個人利用にのみ限定させて頂きます。<br>
            データ商品の二次配布・無断転載を固く禁じます。
        </p>

        <h3 class="text-xl font-bold mb-4">◆クレジット</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>ボイスアクター：こまつちま<br>
                <a href="https://x.com/komatsu_chiii" target="_blank" class="text-primary underline">
                    https://x.com/komatsu_chiii
                </a>
            </li>
            <li>動画協力：トッサノ<br>
                <a href="https://x.com/tossanovrc" target="_blank" class="text-primary underline">
                    https://x.com/tossanovrc
                </a>
            </li>
        </ul>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Assets</p>
            <ul class="text-slate-600 leading-loose list-disc list-inside">
                <li>ジンゴ様：オリジナル3Dモデル「マヌカ」</li>
                <li>杜本様：『Twilight Greige』eye＋make＋body texture</li>
                <li>Iseo様：【Sweetie Story 】スイートストーリー</li>
                <li>pipiza様：Twinkle Tails</li>
                <li>ねここや@かんな久様：【VR-ASMRツールセット 9種類】</li>
            </ul>
        </div>`,
  },
  {
    id: 5,
    title: "EnjoyGameUnion!! 公式Webサイトをオープンしました！",
    date: "2026.04.06",
    tag: "お知らせ",
    thumb: "./img/news/NEWS-05-01.webp",
    body: `<img src="./img/news/NEWS-05-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="EGU公式サイト">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            EnjoyGameUnion!! 公式サイト公開のお知らせ
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            この度、EnjoyGameUnion!!の公式Webサイトをオープンいたしました。<br>
            本サイトでは、動画投稿や活動報告、お知らせなどを中心に、EGUの様々な取り組みを発信していきます。
        </p>

        <p class="mb-8 text-slate-600 leading-loose">
            今後はコンテンツの拡充や情報更新を随時行ってまいりますので、ぜひ定期的にご覧いただけますと幸いです。<br>
            これからもEnjoyGameUnion!!をよろしくお願いいたします。
        </p>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">About</p>
            <p class="text-slate-600 leading-loose">
                EnjoyGameUnion!!は、「楽しくゲームをすること」をモットーに活動するコミュニティです。<br>
                今後も様々な企画やコンテンツを展開してまいります。
            </p>
        </div>`,
  },
  {
    id: 6,
    title: "【EGUゲーム部】『誰の頭が一番《Ultimate》かって話』公開！",
    date: "2026.04.07",
    tag: "Live配信",
    thumb: "./img/news/NEWS-06-01.webp",
    body: `<img src="./img/news/NEWS-06-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="EGU ライブ配信 Ultimate Chicken Hose">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            EGUゲーム部 Ultimate Chicken Hoseをプレイします！
        </h3>
        
        <p class="mb-6 text-slate-600 leading-loose">
            EnjoyGameUnion所属メンバー、EGUゲーム部によるゲーム配信を実施！<br>
            個性豊かなメンバーによるわちゃわちゃした配信をぜひお楽しみください。
        </p>
        
        <!-- YouTube埋め込み -->
        <div class="aspect-video w-full mb-8">
            <iframe 
                class="w-full h-full rounded-3xl shadow-2xl" 
                src="https://www.youtube.com/embed/XqBU2FS48Zg?rel=0" 
                title="EGU ゲーム配信" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>
        
        <h3 class="text-xl font-bold mb-4">◆出演者</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>ぐらすず　<a href="https://x.com/gura_ow2" target="_blank" class="text-primary underline">https://x.com/gura_ow2</a><br>アルティメイトな馬枠</li>
            <li>すもももももっく　<a href="https://x.com/eiheihei_dk" target="_blank" class="text-primary underline">https://x.com/eiheihei_dk</a><br>イケメンイケボな鳥枠</li>
            <li>エリリ・エリ　<a href="https://x.com/nameSnow66" target="_blank" class="text-primary underline">https://x.com/nameSnow66</a><br>あわてんぼうな羊枠</li>
            <li>まじぇんて　<a href="https://x.com/majennte_vrc" target="_blank" class="text-primary underline">https://x.com/majennte_vrc</a><br>勝手に暴れまわる狸枠</li>
        </ul>
        
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Related Content</p>
            <ul class="space-y-3 text-slate-600">
                <li>
                    ★Sava&こまつちま歌ってみた動画「革命デュアリズム」公開中！<br>
                    <a href="https://www.youtube.com/watch?v=4qaMwhXaW2c" target="_blank" class="text-primary underline">
                        https://www.youtube.com/watch?v=4qaMwhXaW2c
                    </a>
                </li>
                <li>
                    ★ずんだゆき シチュエーションボイス販売中！<br>
                    <a href="https://egu.booth.pm/items/8058227" target="_blank" class="text-primary underline">
                        震える君を抱きしめて
                    </a>
                </li>
                <li>
                    ★こまつちま シチュエーションボイス販売中！<br>
                    <a href="https://egu.booth.pm/items/8151321" target="_blank" class="text-primary underline">
                        メスガキの耳かきで屈服させられる
                    </a>
                </li>
            </ul>
        </div>
        
        <p class="mb-8 text-slate-600 leading-loose">
            この配信はVRC内のグループ「Enjoy Game Union（EGU）」所属メンバーがお届けするゲーム配信です。
        </p>`,
  },
  {
    id: 7,
    title: "【フレ＋隅っこラジオ】ゲスト：ずんだゆき 公開！",
    date: "2026.04.10",
    tag: "Live配信",
    thumb: "./img/news/NEWS-07-01.webp",
    body: `<img src="./img/news/NEWS-07-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="フレ＋隅っこラジオずんだゆき">
  
          <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
              【フレ＋隅っこラジオ】ゲスト：ずんだゆきを公開しました。
          </h3>
  
          <p class="mb-6 text-slate-600 leading-loose">
              トッサノ、アンリによるフレ＋隅っこラジオのLive配信を行いました。<br>
              ずんだゆきからどんな秘密が飛び出すのか！？<br>
              ぜひアーカイブでお楽しみください。
          </p>
  
          <!-- YouTube埋め込み -->
          <div class="aspect-video w-full mb-8">
              <iframe 
                  class="w-full h-full rounded-3xl shadow-2xl" 
                  src="https://www.youtube.com/embed/vPBCsqsgzyw?rel=0"
                  title="Live配信アーカイブ" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
              </iframe>
          </div>
  
          <h3 class="text-xl font-bold mb-4">◆メインパーソナリティー</h3>
            <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
                <li>トッサノ　<a href="https://x.com/tossanovrc" target="_blank" class="text-primary underline">https://x.com/tossanovrc</a><br>EGUという謎グループの主催、エイプリルフールに動画を上げて疲れた</li>
                <li>Dr.Anri　<a href="https://x.com/Es96L4ap" target="_blank" class="text-primary underline">https://x.com/Es96L4ap</a><br>EGU所属の自称一般人、アイドルになるらしい、乞うご期待</li>
            </ul>

          <h3 class="text-xl font-bold mb-4">◆ゲスト</h3>
            <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
                <li>ずんだゆき　<a href="https://x.com/zund_Yuki" target="_blank" class="text-primary underline">https://x.com/zund_Yuki</a><br>EGUメンバーの優しいお兄さん担当、いつ寝てるんだろうってぐらいぶいちゃでも仕事しかしてない</li>
            </ul>
        
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Related Content</p>
            <ul class="space-y-3 text-slate-600">
                <li>
                    ★EnjoyGameUnion!!公式HP<br>
                    <a href="https://enjoygameunion.github.io" target="_blank" class="text-primary underline">
                        https://enjoygameunion.github.io
                    </a>
                </li>
                <li>
                    ★ずんだゆき シチュエーションボイス販売中！<br>
                    <a href="https://egu.booth.pm/items/8058227" target="_blank" class="text-primary underline">
                        震える君を抱きしめて
                    </a>
                </li>
                <li>
                    ★こまつちま シチュエーションボイス販売中！<br>
                    <a href="https://egu.booth.pm/items/8151321" target="_blank" class="text-primary underline">
                        メスガキの耳かきで屈服させられる
                    </a>
                </li>
                <li>
                    ★まじぇんて酒飲み相談室その2【ゲスト：こまつちま】<br>
                    <a href="https://youtube.com/live/P9nF0JQ3K7w" target="_blank" class="text-primary underline">
                        まじぇんて酒飲み相談室その2
                    </a>
                </li>
                <li>
                    ★EGUゲーム部<br>
                    <a href="https://www.youtube.com/playlist?list=PLsYg7sr7EZhMXmscI7dvX-0KCFi5agQf_" target="_blank" class="text-primary underline">
                        EGUゲーム部
                    </a>
                </li>
                <li>
                    ★ラウラ・セッテ🌿4月1日に舞い降りた天使系アイドル!!<br>
                    <a href="https://x.com/aruaLirpa/status/2042508542540943828?s=20" target="_blank" class="text-primary underline">
                        ラウラ凸待ち配信！
                    </a>
                </li>
            </ul>
        </div>
        
        <p class="mb-8 text-slate-600 leading-loose">
            この配信はVRC内のグループ「Enjoy Game Union（EGU）」所属メンバーがお届けするラジオ配信です。
        </p>`
  },
  {
    id: 8,
    title: "【まじぇんて酒飲み相談室】第2回 ゲスト：こまつちま",
    date: "2026.04.15",
    tag: "Live配信",
    thumb: "./img/news/NEWS-08-01.webp",
    body: `<img src="./img/news/NEWS-08-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="まじぇんて酒飲み相談室 第2回">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            【第2回】まじぇんて酒飲み相談室
        </h3>

        <p class="mb-2 text-slate-600 leading-loose">
            📅 2026年04月15日（水）21:00〜
        </p>

        <p class="mb-6 text-slate-600 leading-loose">
            お酒片手に何でも相談に乗る（かもしれない）配信、第2回！<br>
            今回はゲストにこまつちまを迎え、縦横無尽にぶった切るトークをお届けします！
        </p>

        <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
            <p class="text-sm font-bold text-amber-700 mb-3 uppercase tracking-widest">⚠ ご視聴の前に</p>
            <ul class="text-slate-600 leading-loose space-y-1 text-sm">
                <li>※飲酒してるので発言に責任が取れたり取れなかったりしがちです</li>
                <li>※急に大声を出す場合があるので音量注意</li>
            </ul>
        </div>

        <div class="flex justify-center my-8">
            <a href="https://marshmallow-qa.com/9g30tl6rxqlqb4b?t=ieNI7S&utm_medium=url_text&utm_source=promotion" target="_blank"
                class="group flex items-center gap-3 bg-pink-400 text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-pink-100 hover:bg-pink-500 hover:-translate-y-1 transition-all duration-300">
                <i class="fa-solid fa-envelope-open-text text-xl"></i>
                <span>ましゅまろで相談を送る</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
            </a>
        </div>

        <h3 class="text-xl font-bold mb-4">◆出演者</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>
                <strong>まじぇんて</strong>　<a href="https://x.com/majennte_vrc" target="_blank" class="text-primary underline">https://x.com/majennte_vrc</a><br>
                黒髪ロングの赤目ルルネ好きのお兄さん。<br>
                今宵は酒が入って切れ味がいつもの数段上がっている。
            </li>
            <li>
                <strong>こまつちま</strong>　<a href="https://x.com/komatsu_chiii" target="_blank" class="text-primary underline">https://x.com/komatsu_chiii</a><br>
                いつも笑顔な歌うま絵うまお姉さん。<br>
                今宵はお酒を片手に縦横無尽にぶった切る！？
            </li>
        </ul>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Related Content</p>
            <ul class="space-y-3 text-slate-600">
                <li>
                    ★こまつちまシチュエーションボイス<br>
                    メスガキの耳かきで屈服させられる【メスガキに耳かきをされるシチュボ】販売中<br>
                    <a href="https://egu.booth.pm/items/8151321" target="_blank" class="text-primary underline">
                        https://egu.booth.pm/items/8151321
                    </a>
                </li>
                <li>
                    ★EGUあにまるず歌ってみた動画「ようこそジャパリパークへ」公開中！<br>
                    <a href="https://www.youtube.com/watch?v=gLAd9EQtDpc&feature=youtu.be" target="_blank" class="text-primary underline">
                        https://www.youtube.com/watch?v=gLAd9EQtDpc
                    </a>
                </li>
                <li>
                    ★Sava&こまつちま歌ってみた動画「革命デュアリズム」公開中！<br>
                    <a href="https://www.youtube.com/watch?v=4qaMwhXaW2c" target="_blank" class="text-primary underline">
                        https://www.youtube.com/watch?v=4qaMwhXaW2c
                    </a>
                </li>
            </ul>
        </div>

        <p class="mb-8 text-slate-600 leading-loose">
            この配信はVRC内のグループ「Enjoy Game Union（EGU）」所属メンバーがお届けするLive配信です。
        </p>`
  },
  {
    id: 9,
    title: "【エイプリルフール企画】ラウラの凸待ち配信🌿",
    date: "2026.04.16",
    tag: "Live配信",
    thumb: "./img/news/NEWS-09-01.webp",
    body: `<img src="./img/news/NEWS-09-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="ラウラの凸待ち配信">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            【エイプリルフール企画】ラウラの凸待ち配信🌿
        </h3>

        <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 text-amber-800">
            <p class="font-bold text-lg mb-1">⚠️ この配信はエイプリルフールの嘘企画です</p>
            <p class="text-sm leading-relaxed">実在の人物・キャラクターとは一切関係がありません。登場する配信者も実在しません。あらかじめご了承ください。</p>
        </div>

        <p class="mb-6 text-slate-600 leading-loose">
            初めまして、それかひさしぶり！天界から舞い降りた天使、ラウラです！<br>
            ララちゃんって呼んでください🌿<br>
            トップアイドル目指して頑張るので、応援よろしくお願いします！
        </p>

        <p class="mb-8 text-slate-600 leading-loose">
            今日は初めての凸待ちだ～～(∩´∀｀)∩<br>
            どんな人たちとお話しできるか楽しみ💗
        </p>

        <!-- YouTube埋め込み -->
        <div class="aspect-video w-full mb-4">
            <iframe
                class="w-full h-full rounded-3xl shadow-2xl"
                src="https://www.youtube.com/embed/e2wrgGMKavA?rel=0"
                title="【エイプリルフール企画】ラウラの凸待ち配信🌿"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        </div>

        <p class="mb-8 text-slate-500 text-sm">
            アーカイブはこちら：
            <a href="https://youtube.com/live/e2wrgGMKavA" target="_blank" class="text-primary underline">
                https://youtube.com/live/e2wrgGMKavA
            </a>
        </p>

        <div class="overflow-hidden border border-slate-100 rounded-2xl mb-8">
            <table class="w-full text-left border-collapse">
                <tr class="bg-slate-50">
                    <th class="p-4 border-b border-slate-100 font-bold text-slate-600 w-1/3">配信日時</th>
                    <td class="p-4 border-b border-slate-100">2026年4月16日（木）22:00〜</td>
                </tr>
                <tr>
                    <th class="p-4 border-b border-slate-100 font-bold text-slate-600">ファンマーク</th>
                    <td class="p-4 border-b border-slate-100">🌿</td>
                </tr>
                <tr class="bg-slate-50">
                    <th class="p-4 border-b border-slate-100 font-bold text-slate-600">配信タグ</th>
                    <td class="p-4 border-b border-slate-100">#ラウラの懺悔室</td>
                </tr>
                <tr>
                    <th class="p-4 font-bold text-slate-600">主催</th>
                    <td class="p-4">Enjoy Game Union（EGU）</td>
                </tr>
            </table>
        </div>

        <h3 class="text-xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            🎭 企画について
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            本企画はエイプリルフールに合わせて制作された特別な嘘企画です。<br>
            「天使系アイドル・ラウラ」をはじめ、個性あふれる架空の配信者キャラクターたちが一夜限りの凸待ち配信を開催しました。<br>
            参加メンバー全員がキャラクター設定・衣装・立ち回りまでしっかりと準備を重ねてくれた、愛情たっぷりの企画です
        </p>

        <p class="mb-8 text-slate-600 leading-loose">
            それぞれが自分のキャラクターに命を吹き込むために衣装の3面図まで用意し、細部にまでこだわって臨んでくれました。<br>
            そんなみんなの努力と熱量が詰まった、とっても特別な配信をぜひお楽しみください💗
        </p>

        <h3 class="text-xl font-bold text-slate-900 mb-6 border-l-4 border-primary pl-4">
            👗 キャラクター紹介 ＆ 衣装3面図
        </h3>

        <div class="mb-10">
            <p class="font-bold text-slate-700 mb-1">ラウラ（CV：N/B）</p>
            <p class="text-slate-500 text-sm mb-3">天界から舞い降りた天使系トップアイドル志望！ 今回の主役！</p>
            <img src="./img/news/NEWS-09-02.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="ラウラ 衣装3面図">
            <img src="./img/news/NEWS-09-03.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="ラウラ thank you">
        </div>

        <div class="mb-10">
            <p class="font-bold text-slate-700 mb-1">Dr.Anri（CV：Dr.Anri）</p>
            <p class="text-slate-500 text-sm mb-3">頼まれてもいないのに萌え実験を始めるオタクサイエンティスト。<br>
            周囲の人間たちの関係性に今日も限界化！！</p>
            <img src="./img/news/NEWS-09-04.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="Dr.Anri 衣装3面図">
            <img src="./img/news/NEWS-09-05.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="Dr.Anri thank you">
        </div>

        <div class="mb-10">
            <p class="font-bold text-slate-700 mb-1">エリリ・ルミファー（CV：エリリ・エリ）</p>
            <p class="text-slate-500 text-sm mb-3">古いお屋敷「エリーヴェール」に住み着いているシルキー（屋敷に住みつく妖精）<br>
            少しポンコツだけど、いつも一生懸命。<br>
            紅茶を用意して、お客さまと静かな時間を過ごす癒し系の妖精。</p>
            <img src="./img/news/NEWS-09-06.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="エリリ・ルミファー 衣装3面図">
            <img src="./img/news/NEWS-09-07.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="エリリ・ルミファー thank you">
        </div>

        <div class="mb-10">
            <p class="font-bold text-slate-700 mb-1">倉稲ミケ（CV：Tooka）</p>
            <p class="text-slate-500 text-sm mb-3">片田舎にある小さな神社に祀られている豊穣の神様。<br>
            現代に適合して効率よく信徒を増やすために配信活動を始めた。</p>
            <img src="./img/news/NEWS-09-08.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="倉稲ミケ 衣装3面図">
            <img src="./img/news/NEWS-09-09.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="倉稲ミケ thank you">
        </div>

        <div class="mb-10">
            <p class="font-bold text-slate-700 mb-1">招福こばん（CV：ととToTo）</p>
            <p class="text-slate-500 text-sm mb-3">商売繁盛の招き猫<br>
            最近はオーナーがお店を畳んでしまったため、資産形成による一粒万倍を目指し勉強中</p>
            <img src="./img/news/NEWS-09-10.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="招福こばん 衣装3面図">
            <img src="./img/news/NEWS-09-11.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="招福こばん thank you">
        </div>

        <div class="mb-10">
            <p class="font-bold text-slate-700 mb-1">みぞれるい（CV：こまつちま）</p>
            <p class="text-slate-500 text-sm mb-3">イラストレーター兼VTuber<br>
            最近歌も歌ってます、みぞれるいです。</p>
            <img src="./img/news/NEWS-09-12.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="みぞれるい 衣装3面図">
            <img src="./img/news/NEWS-09-13.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="みぞれるい thank you">
        </div>

        <div class="mb-10">
            <p class="font-bold text-slate-700 mb-1">鎖黒霊・ねくろれい（CV：萌葱ねる）</p>
            <p class="text-slate-500 text-sm mb-3">幽霊だけどホラーが苦手系Vtuberです！ </p>
            <img src="./img/news/NEWS-09-14.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="鎖黒霊 衣装3面図">
            <img src="./img/news/NEWS-09-15.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="鎖黒霊 thank you">
        </div>

        <h3 class="text-xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            🎤 出演者
        </h3>

        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside space-y-1">
            <li><strong>N/B</strong>（ラウラ役）</li>
            <li><strong>Dr.Anri</strong></li>
            <li><strong>エリリ・エリ</strong>（エリリ・ルミファー役）</li>
            <li><strong>Tooka</strong>（倉稲ミケ役）</li>
            <li><strong>ととToTo</strong>（招福こばん役）</li>
            <li><strong>こまつちま</strong>（みぞれるい役）</li>
            <li><strong>萌葱ねる</strong>（鎖黒霊・ねくろれい役）</li>
        </ul>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">出演者 SNS</p>
            <ul class="space-y-2 text-slate-600">
                <li>◆N/B　<a href="https://x.com/Neun_VRC" target="_blank" class="text-primary underline">https://x.com/Neun_VRC</a></li>
                <li>◆Dr.Anri　<a href="https://x.com/Es96L4ap" target="_blank" class="text-primary underline">https://x.com/Es96L4ap</a></li>
                <li>◆エリリ・エリ　<a href="https://x.com/nameSnow66" target="_blank" class="text-primary underline">https://x.com/nameSnow66</a></li>
                <li>◆Tooka　<a href="https://x.com/t1o0k" target="_blank" class="text-primary underline">https://x.com/t1o0k</a></li>
                <li>◆ととToTo　<a href="https://x.com/Tototo_Tatin" target="_blank" class="text-primary underline">https://x.com/Tototo_Tatin</a></li>
                <li>◆こまつちま　<a href="https://x.com/komatsu_chiii" target="_blank" class="text-primary underline">https://x.com/komatsu_chiii</a></li>
                <li>◆萌葱ねる　<a href="https://x.com/moegineru_vrc" target="_blank" class="text-primary underline">https://x.com/moegineru_vrc</a></li>
            </ul>
        </div>

        <img src="./img/news/NEWS-09-16.webp" class="w-full h-auto rounded-2xl shadow-md mb-2" alt="thank you for watching">
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">About EGU</p>
            <ul class="space-y-2 text-slate-600">
                <li>
                    公式HP：<a href="https://enjoygameunion.github.io/" target="_blank" class="text-primary underline">https://enjoygameunion.github.io/</a>
                </li>
                <li>
                    公式X：<a href="https://x.com/EnjoyGameUnion" target="_blank" class="text-primary underline">https://x.com/EnjoyGameUnion</a>
                </li>
            </ul>
        </div>`
  },
  {
    id: 10,
    title: "【麻雀大会】春季麻雀大会、開催ッッッ！！！【#雀鯖杯】",
    date: "2026.04.17",
    tag: "Live配信",
    thumb: "./img/news/NEWS-10-01.webp",
    body: `<img src="./img/news/NEWS-10-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="春季麻雀大会 雀鯖杯">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            春季麻雀大会『雀鯖杯』、開催ッッッ！！！
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            EnjoyGameUnion!! が誇る最初で最後（になるはずがない）麻雀頂上決戦――<strong>「雀鯖杯」</strong>がついに幕を開けます！！！<br>
            EGU所属メンバーに加え、日頃からEGUと交流のある腕自慢の雀士たちが一堂に会し、計20名がシノギを削る激闘が今夜いよいよ始まります。<br>
            <br>
            「雀鯖杯」という名前は、主催・Savaの名前と「麻雀」「カップ（杯）」を掛け合わせた、この大会のためだけに生まれた特別な名前。<br>
            EGU初の麻雀大会として、全員が全力でぶつかり合います。<br>熱き戦いが今始まる！！！！
        </p>

        <!-- YouTube埋め込み -->
        <div class="aspect-video w-full mb-8">
            <iframe
                class="w-full h-full rounded-3xl shadow-2xl"
                src="https://www.youtube.com/embed/_4eFoVDdnfs?rel=0"
                title="【麻雀大会】春季麻雀大会 雀鯖杯"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        </div>

        <div class="overflow-hidden border border-slate-100 rounded-2xl mb-10">
            <table class="w-full text-left border-collapse">
                <tr class="bg-slate-50">
                    <th class="p-4 border-b border-slate-100 font-bold text-slate-600 w-1/3">大会名</th>
                    <td class="p-4 border-b border-slate-100">雀鯖杯</td>
                </tr>
                <tr>
                    <th class="p-4 border-b border-slate-100 font-bold text-slate-600">開催日時</th>
                    <td class="p-4 border-b border-slate-100">2026年4月17日（金）21:00~</td>
                </tr>
                <tr class="bg-slate-50">
                    <th class="p-4 border-b border-slate-100 font-bold text-slate-600">参加人数</th>
                    <td class="p-4 border-b border-slate-100">20名</td>
                </tr>
                <tr>
                    <th class="p-4 border-b border-slate-100 font-bold text-slate-600">主催</th>
                    <td class="p-4 border-b border-slate-100">Sava</td>
                </tr>
                <tr class="bg-slate-50">
                    <th class="p-4 font-bold text-slate-600">実況・解説</th>
                    <td class="p-4">Tooka</td>
                </tr>
            </table>
        </div>

        <!-- 麻雀している画像 -->
        <h3 class="text-xl font-bold mb-4">◆大会の様子</h3>
        <img src="./img/news/NEWS-10-02.webp" class="w-full h-auto rounded-2xl shadow-md mb-10" alt="大会の様子">

        <!-- 大会進行ルール -->
        <h3 class="text-xl font-bold mb-4">◆大会進行ルール</h3>
        <img src="./img/news/NEWS-10-03.webp" class="w-full h-auto rounded-2xl shadow-md mb-10" alt="大会進行ルール">

        <!-- 対局ルール -->
        <h3 class="text-xl font-bold mb-4">◆対局ルール</h3>
        <img src="./img/news/NEWS-10-04.webp" class="w-full h-auto rounded-2xl shadow-md mb-10" alt="対局ルール">

        <!-- 賞品 -->
        <h3 class="text-xl font-bold mb-4">◆賞品・景品</h3>
        <div class="grid grid-cols-1 gap-6 mb-10">
            <div>
                <p class="font-bold text-slate-700 mb-2">🏆 優勝賞品</p>
                <img src="./img/news/NEWS-10-05.webp" class="w-full h-auto rounded-2xl shadow-md" alt="優勝賞品">
            </div>
            <div>
                <p class="font-bold text-slate-700 mb-2">🎁 ずんだゆき賞</p>
                <img src="./img/news/NEWS-10-06.webp" class="w-full h-auto rounded-2xl shadow-md" alt="ずんだゆき賞">
            </div>
            <div>
                <p class="font-bold text-slate-700 mb-2">🎁 トッサノ賞</p>
                <img src="./img/news/NEWS-10-07.webp" class="w-full h-auto rounded-2xl shadow-md" alt="トッサノ賞">
            </div>
        </div>

        <!-- グループ予選 -->
        <h3 class="text-xl font-bold mb-4">◆グループ予選一覧</h3>
        <img src="./img/news/NEWS-10-08.webp" class="w-full h-auto rounded-2xl shadow-md mb-10" alt="グループ予選一覧">

        <!-- 出演者紹介 -->
        <h3 class="text-xl font-bold mb-6">◆出演者紹介</h3>
        <div class="grid grid-cols-2 gap-3 mb-10 sm:grid-cols-4">
            <img src="./img/news/NEWS-10-09.webp" class="w-full h-auto rounded-xl shadow-sm" alt="garavella">
            <img src="./img/news/NEWS-10-10.webp" class="w-full h-auto rounded-xl shadow-sm" alt="ibumelon">
            <img src="./img/news/NEWS-10-11.webp" class="w-full h-auto rounded-xl shadow-sm" alt="komatsu">
            <img src="./img/news/NEWS-10-12.webp" class="w-full h-auto rounded-xl shadow-sm" alt="majennte">
            <img src="./img/news/NEWS-10-13.webp" class="w-full h-auto rounded-xl shadow-sm" alt="rneguri">
            <img src="./img/news/NEWS-10-14.webp" class="w-full h-auto rounded-xl shadow-sm" alt="saboint99">
            <img src="./img/news/NEWS-10-15.webp" class="w-full h-auto rounded-xl shadow-sm" alt="Shiranatsu_haru">
            <img src="./img/news/NEWS-10-16.webp" class="w-full h-auto rounded-xl shadow-sm" alt="Zunda315">
            <img src="./img/news/NEWS-10-17.webp" class="w-full h-auto rounded-xl shadow-sm" alt="エリリ・エリ">
            <img src="./img/news/NEWS-10-18.webp" class="w-full h-auto rounded-xl shadow-sm" alt="かぐやねぃ">
            <img src="./img/news/NEWS-10-19.webp" class="w-full h-auto rounded-xl shadow-sm" alt="きゅう９">
            <img src="./img/news/NEWS-10-20.webp" class="w-full h-auto rounded-xl shadow-sm" alt="しーろさん">
            <img src="./img/news/NEWS-10-21.webp" class="w-full h-auto rounded-xl shadow-sm" alt="しんやぞ">
            <img src="./img/news/NEWS-10-22.webp" class="w-full h-auto rounded-xl shadow-sm" alt="ちぇるびん">
            <img src="./img/news/NEWS-10-23.webp" class="w-full h-auto rounded-xl shadow-sm" alt="てとらまる">
            <img src="./img/news/NEWS-10-24.webp" class="w-full h-auto rounded-xl shadow-sm" alt="トッサノ">
            <img src="./img/news/NEWS-10-25.webp" class="w-full h-auto rounded-xl shadow-sm" alt="ひすいのたけ">
            <img src="./img/news/NEWS-10-26.webp" class="w-full h-auto rounded-xl shadow-sm" alt="霞澄さん">
            <img src="./img/news/NEWS-10-27.webp" class="w-full h-auto rounded-xl shadow-sm" alt="佃煮ブラスター">
            <img src="./img/news/NEWS-10-28.webp" class="w-full h-auto rounded-xl shadow-sm" alt="萌葱ねる">
        </div>

        <!-- スタッフ -->
        <h3 class="text-xl font-bold mb-4">◆スタッフ</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>主催：Sava　<a href="https://x.com/Sava_403" target="_blank" class="text-primary underline">https://x.com/Sava_403</a></li>
            <li>実況・解説：Tooka　<a href="https://x.com/t1o0k" target="_blank" class="text-primary underline">https://x.com/t1o0k</a></li>
            <li>技術スタッフ：ずんだゆき　<a href="https://x.com/zund_Yuki" target="_blank" class="text-primary underline">https://x.com/zund_Yuki</a></li>
        </ul>

        <!-- 各視点 -->
        <h3 class="text-xl font-bold mb-4">◆各視点配信</h3>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10">
            <p class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Player POV Links</p>
            <ul class="space-y-2 text-slate-600">
                <li>エリリ・エリ　<a href="https://www.twitch.tv/namesnow66" target="_blank" class="text-primary underline">https://www.twitch.tv/namesnow66</a></li>
                <li>きゅう　<a href="https://www.youtube.com/watch?v=UEwbBwCq-ws" target="_blank" class="text-primary underline">https://www.youtube.com/watch?v=UEwbBwCq-ws</a></li>
                <li>白夏ハル　<a href="https://www.twitch.tv/shiranatsu" target="_blank" class="text-primary underline">https://www.twitch.tv/shiranatsu</a></li>
                <li>ちぇるびん　<a href="https://www.twitch.tv/che1bin" target="_blank" class="text-primary underline">https://www.twitch.tv/che1bin</a></li>
                <li>てとらまる　<a href="https://www.twitch.tv/tetramarumaru" target="_blank" class="text-primary underline">https://www.twitch.tv/tetramarumaru</a></li>
                <li>佃煮ブラスター　<a href="https://youtube.com/live/TCy5cNLLEsI?feature=share" target="_blank" class="text-primary underline">https://youtube.com/live/TCy5cNLLEsI</a></li>
            </ul>
        </div>

        <!-- 出演者一覧 -->
        <h3 class="text-xl font-bold mb-4">◆出演者一覧（雀魂名）</h3>
        <div class="overflow-hidden border border-slate-100 rounded-2xl mb-10">
            <table class="w-full text-left border-collapse text-sm">
                <thead>
                    <tr class="bg-slate-100">
                        <th class="p-3 border-b border-slate-100 font-bold text-slate-600 w-8">No</th>
                        <th class="p-3 border-b border-slate-100 font-bold text-slate-600">名前</th>
                        <th class="p-3 border-b border-slate-100 font-bold text-slate-600">雀魂名</th>
                        <th class="p-3 border-b border-slate-100 font-bold text-slate-600">X (Twitter)</th>
                    </tr>
                </thead>
                <tbody class="text-slate-600">
                    <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100">01</td><td class="p-3 border-b border-slate-100">garavella</td><td class="p-3 border-b border-slate-100">がらろ</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/garavella1010" target="_blank" class="text-primary underline">@garavella1010</a></td></tr>
                    <tr><td class="p-3 border-b border-slate-100">02</td><td class="p-3 border-b border-slate-100">ibumelon</td><td class="p-3 border-b border-slate-100">ibumelon</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/melon3837" target="_blank" class="text-primary underline">@melon3837</a></td></tr>
                    <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100">03</td><td class="p-3 border-b border-slate-100">komatsu</td><td class="p-3 border-b border-slate-100">komatsu</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/komatsu_chiii" target="_blank" class="text-primary underline">@komatsu_chiii</a></td></tr>
                    <tr><td class="p-3 border-b border-slate-100">04</td><td class="p-3 border-b border-slate-100">majennte</td><td class="p-3 border-b border-slate-100">マジェスタス</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/majennte_vrc" target="_blank" class="text-primary underline">@majennte_vrc</a></td></tr>
                    <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100">05</td><td class="p-3 border-b border-slate-100">rneguri</td><td class="p-3 border-b border-slate-100">meguri</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/rneguri" target="_blank" class="text-primary underline">@rneguri</a></td></tr>
                    <tr><td class="p-3 border-b border-slate-100">06</td><td class="p-3 border-b border-slate-100">saboint99</td><td class="p-3 border-b border-slate-100">gogogoing</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/morrimorriGhh" target="_blank" class="text-primary underline">@morrimorriGhh</a></td></tr>
                    <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100">07</td><td class="p-3 border-b border-slate-100">Shiranatsu_haru</td><td class="p-3 border-b border-slate-100">xしらなつx</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/shiranatsu_haru" target="_blank" class="text-primary underline">@shiranatsu_haru</a></td></tr>
                    <tr><td class="p-3 border-b border-slate-100">08</td><td class="p-3 border-b border-slate-100">Zunda315</td><td class="p-3 border-b border-slate-100">ぜろしきむげん</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/Zunda315_VR" target="_blank" class="text-primary underline">@Zunda315_VR</a></td></tr>
                    <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100">09</td><td class="p-3 border-b border-slate-100">エリリ・エリ</td><td class="p-3 border-b border-slate-100">エリリ・エリ</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/nameSnow66" target="_blank" class="text-primary underline">@nameSnow66</a></td></tr>
                    <tr><td class="p-3 border-b border-slate-100">10</td><td class="p-3 border-b border-slate-100">かぐやねぃ</td><td class="p-3 border-b border-slate-100">かぐやねぃちゃ</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/kaguya_nei_VRC" target="_blank" class="text-primary underline">@kaguya_nei_VRC</a></td></tr>
                    <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100">11</td><td class="p-3 border-b border-slate-100">きゅう９</td><td class="p-3 border-b border-slate-100">Europort</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/9___9_nine" target="_blank" class="text-primary underline">@9___9_nine</a></td></tr>
                    <tr><td class="p-3 border-b border-slate-100">12</td><td class="p-3 border-b border-slate-100">しーろさん</td><td class="p-3 border-b border-slate-100">N309</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/C6C6_vrc" target="_blank" class="text-primary underline">@C6C6_vrc</a></td></tr>
                    <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100">13</td><td class="p-3 border-b border-slate-100">しんやぞ</td><td class="p-3 border-b border-slate-100">マグロの教祖2</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/Zz_sinsin_Zz" target="_blank" class="text-primary underline">@Zz_sinsin_Zz</a></td></tr>
                    <tr><td class="p-3 border-b border-slate-100">14</td><td class="p-3 border-b border-slate-100">ちぇるびん</td><td class="p-3 border-b border-slate-100">ばさしポンする</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/chelb1n" target="_blank" class="text-primary underline">@chelb1n</a></td></tr>
                    <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100">15</td><td class="p-3 border-b border-slate-100">てとらまる</td><td class="p-3 border-b border-slate-100">ゆのちょす</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/tetora1747" target="_blank" class="text-primary underline">@tetora1747</a></td></tr>
                    <tr><td class="p-3 border-b border-slate-100">16</td><td class="p-3 border-b border-slate-100">トッサノ</td><td class="p-3 border-b border-slate-100">咄嗟の魚拓</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/tossanovrc" target="_blank" class="text-primary underline">@tossanovrc</a></td></tr>
                    <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100">17</td><td class="p-3 border-b border-slate-100">ひすいのたけ</td><td class="p-3 border-b border-slate-100">ヒスイノタケ</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/8TP0tg5Tje18575" target="_blank" class="text-primary underline">@8TP0tg5Tje18575</a></td></tr>
                    <tr><td class="p-3 border-b border-slate-100">18</td><td class="p-3 border-b border-slate-100">霞澄さん</td><td class="p-3 border-b border-slate-100">霞澄さんさん</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/kasumisan_VR" target="_blank" class="text-primary underline">@kasumisan_VR</a></td></tr>
                    <tr class="bg-slate-50"><td class="p-3 border-b border-slate-100">19</td><td class="p-3 border-b border-slate-100">佃煮ブラスター</td><td class="p-3 border-b border-slate-100">佃煮ブラスター</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/tukkydanibuta" target="_blank" class="text-primary underline">@tukkydanibuta</a></td></tr>
                    <tr><td class="p-3 border-b border-slate-100">20</td><td class="p-3 border-b border-slate-100">萌葱ねる</td><td class="p-3 border-b border-slate-100">ねるくん２</td><td class="p-3 border-b border-slate-100"><a href="https://x.com/moegineru_vrc" target="_blank" class="text-primary underline">@moegineru_vrc</a></td></tr>
                </tbody>
            </table>
        </div>

        <!-- Thank you -->
        <img src="./img/news/NEWS-10-29.webp" class="w-full h-auto rounded-2xl shadow-md mb-8" alt="Thank you for watching">

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">About EGU</p>
            <ul class="space-y-2 text-slate-600">
                <li>公式HP：<a href="https://enjoygameunion.github.io/" target="_blank" class="text-primary underline">https://enjoygameunion.github.io/</a></li>
                <li>公式X：<a href="https://x.com/EnjoyGameUnion" target="_blank" class="text-primary underline">https://x.com/EnjoyGameUnion</a></li>
            </ul>
        </div>`,
  },
  {
    id: 11,
    title: "【第17回】トッサノ Anriのフレ＋隅っこラジオ【ゲスト：よく寝るかれん】",
    date: "2026.04.24",
    tag: "Live配信",
    thumb: "./img/news/NEWS-11-01.webp",
    body: `<img src="./img/news/NEWS-11-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="フレ＋隅っこラジオ 第17回 よく寝るかれん">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            【第17回】トッサノ Anriのフレ＋隅っこラジオ<br>ゲスト：よく寝るかれん
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            EnjoyGameUnion!!（EGU）の看板配信のひとつ、<strong>「トッサノ Anriのフレ＋隅っこラジオ」</strong>。<br>
            主催・トッサノとDr.Anriがお届けするこのラジオも、ついに第17回を迎えました！<br>
            今回のゲストは、リアルVketでイラストや物販販売も手がける、イラストレーターの<strong>よく寝るかれん</strong>さん。<br>
            癒し系…かどうかはフレンド間でも物議を醸したそうですが、果たしてどんなお話が飛び出すのか、ぜひアーカイブでお楽しみください！
        </p>

        <!-- YouTube埋め込み -->
        <div class="aspect-video w-full mb-8">
            <iframe 
                class="w-full h-full rounded-3xl shadow-2xl" 
                src="https://www.youtube.com/embed/Ks_xzWTzgNM?rel=0"
                title="【第17回】トッサノ Anriのフレ＋隅っこラジオ【ゲスト：よく寝るかれん】" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>

        <!-- 蓋絵 -->
        <img src="./img/news/NEWS-11-02.webp" class="w-full h-auto rounded-2xl shadow-md mb-10" alt="フレ＋隅っこラジオ 蓋絵（Dr.Anri 画）">

        <h3 class="text-xl font-bold mb-4">◆番組について</h3>
        <p class="mb-8 text-slate-600 leading-loose">
            「フレ＋隅っこラジオ」は、VRC内グループ「Enjoy Game Union（EGU）」の主催・トッサノと、EGU所属メンバーのDr.Anriが毎回ゲストを招いてお届けするフリートークラジオです。<br>
            ゲームの話、VRChatの話、日常のあれこれ……隅っこでゆるーく語る雰囲気が人気の番組です。<br>
            番組へのお便りはいつでも募集中！下記フォームからぜひご投稿ください。
        </p>

        <div class="flex justify-center my-8">
            <a href="https://forms.gle/vLhpdfTYJyArNjtt5" target="_blank"
                class="group flex items-center gap-3 bg-slate-700 text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-slate-200 hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300">
                <i class="fa-solid fa-envelope text-xl"></i>
                <span>番組へのお便りはこちら</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
            </a>
        </div>

        <!-- 放送中の画像 -->
        <img src="./img/news/NEWS-11-03.webp" class="w-full h-auto rounded-2xl shadow-md mb-10" alt="放送中の様子">

        <h3 class="text-xl font-bold mb-4">◆今回のゲスト：よく寝るかれんさんについて</h3>
        <p class="mb-8 text-slate-600 leading-loose">
            今回お呼びしたよく寝るかれんさんは、VRChat内でも活動するイラストレーター。<br>
            リアルVketにてイラストやグッズの販売も手がける実力派クリエイターです。<br>
            フレンド間では「癒し系」という評判に何やら物議があったそうですが……その真相はぜひ本編でご確認ください。<br>
            Anriとはほぼ初対面に近い関係とのことで、どんな化学反応が起きるか注目です！
        </p>

        <!-- お品書き画像 -->
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">よく寝るかれん / くりえいてぃ部2 お品書き</p>
            <img src="./img/news/NEWS-11-04.webp" class="w-full h-auto rounded-2xl shadow-sm" alt="くりえいてぃ部2 お品書き">
            <p class="mt-4 text-sm text-slate-500 leading-relaxed">
                ▲よく寝るかれんさんがリアルVketにて出展された「くりえいてぃ部2」のお品書きです。<br>
                気になる方はぜひチェックしてみてください！
            </p>
        </div>

        <h3 class="text-xl font-bold mb-4">◆メインパーソナリティー</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>
                <strong>トッサノ</strong>　<a href="https://x.com/tossanovrc" target="_blank" class="text-primary underline">https://x.com/tossanovrc</a><br>
                EGUという謎グループの主催。最近だらけ切っているらしい。
            </li>
            <li>
                <strong>Dr.Anri</strong>　<a href="https://x.com/Es96L4ap" target="_blank" class="text-primary underline">https://x.com/Es96L4ap</a><br>
                EGU所属の自称一般人。ほぼ初めて話すゲストということで、軽く緊張してそう。
            </li>
        </ul>

        <h3 class="text-xl font-bold mb-4">◆ゲスト</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>
                <strong>よく寝るかれん</strong>　<a href="https://x.com/yokuneru_x" target="_blank" class="text-primary underline">https://x.com/yokuneru_x</a><br>
                イラストレーターの癒し系（？）お姉さん。フレンド間では「癒し系」に物議があったが、なぜだ。
            </li>
        </ul>

        <p class="mb-8 text-slate-600 leading-loose">
            この配信はVRC内のグループ「Enjoy Game Union（EGU）」所属メンバーがお届けするラジオ配信です。
        </p>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">About EGU</p>
            <ul class="space-y-2 text-slate-600">
                <li>
                    公式HP：<a href="https://enjoygameunion.github.io/" target="_blank" class="text-primary underline">https://enjoygameunion.github.io/</a>
                </li>
                <li>
                    公式X：<a href="https://x.com/EnjoyGameUnion" target="_blank" class="text-primary underline">https://x.com/EnjoyGameUnion</a>
                </li>
            </ul>
        </div>`,
  },
  {
    id: 12,
    title: "【Super Bunny Man】は？？？お前が足引っ張ってんだろうが？？？？？？？？？【Sava/ずんだゆき [#EGU裏方組]】",
    date: "2026.04.25",
    tag: "Live配信",
    thumb: "./img/news/NEWS-12-01.webp",
    body: `<img src="./img/news/NEWS-12-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="Super Bunny Man EGU裏方組">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            EGU裏方組、Super Bunny Manで激突！
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            普段は表に出ることなく、EGUを陰から支え続けてきた<strong>裏方組</strong>がついに配信に登場！<br>
            マネジメント担当のSavaと、技術サポート担当のずんだゆき――<br>
            普段から仲の良い（？）二人が、協力プレイで有名なあのゲームに挑みます。
        </p>

        <p class="mb-8 text-slate-600 leading-loose">
            果たして二人は力を合わせてクリアできるのか？<br>
            それとも……互いの主張がぶつかり合い、大惨事になってしまうのか？<br>
            <strong>「仲良し♡」</strong>な二人の行方を、ぜひアーカイブでお見届けください！
        </p>

        <!-- YouTube埋め込み -->
        <div class="aspect-video w-full mb-8">
            <iframe 
                class="w-full h-full rounded-3xl shadow-2xl" 
                src="https://www.youtube.com/embed/jl9Y5HZk9ME?rel=0"
                title="【Super Bunny Man】は？？？お前が足引っ張ってんだろうが？？？？？？？？？【Sava/ずんだゆき】" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>

        <h3 class="text-xl font-bold mb-4">◆EGU裏方組とは？</h3>
        <p class="mb-8 text-slate-600 leading-loose">
            EnjoyGameUnion!!（EGU）には、普段の動画や配信には登場しないながらも、グループを支える重要なメンバーたちがいます。<br>
            今回出演するSavaとずんだゆきも、まさにそんな「縁の下の力持ち」。<br>
            マネジメントと技術サポートという、それぞれ違う役割でEGUを支えている二人が、<br>
            今回はゲームという名の戦場で、その本性を剥き出しにします。
        </p>

        <!-- ゲーム中の画像 3枚分割 -->
        <h3 class="text-xl font-bold mb-4">◆大惨事の記録</h3>
        <div class="grid grid-cols-3 gap-3 mb-10">
            <img src="./img/news/NEWS-12-02.webp" class="w-full h-auto rounded-2xl shadow-md object-cover aspect-video" alt="Super Bunny Man プレイ画像1">
            <img src="./img/news/NEWS-12-03.webp" class="w-full h-auto rounded-2xl shadow-md object-cover aspect-video" alt="Super Bunny Man プレイ画像2">
            <img src="./img/news/NEWS-12-04.webp" class="w-full h-auto rounded-2xl shadow-md object-cover aspect-video" alt="Super Bunny Man プレイ画像3">
        </div>

        <h3 class="text-xl font-bold mb-4">◆二人の主張</h3>
        <div class="grid grid-cols-1 gap-4 mb-10 sm:grid-cols-2">
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <p class="font-bold text-slate-700 mb-2">Savaの言い分</p>
                <p class="text-slate-600 text-sm leading-relaxed">
                    大体のことはずんだゆきが厳しすぎるから悪い。<br>
                    もっとゆるく楽しくやればいいんだよ！
                </p>
            </div>
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <p class="font-bold text-slate-700 mb-2">ずんだゆきの言い分</p>
                <p class="text-slate-600 text-sm leading-relaxed">
                    大体のことはSavaが甘すぎるから悪い。<br>
                    ちゃんとやれば絶対クリアできるのに！
                </p>
            </div>
        </div>

        <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
            <p class="text-sm font-bold text-amber-700 mb-1">📢 なお</p>
            <p class="text-slate-600 text-sm leading-relaxed">
                EGU主催のトッサノは今回の配信に一切の関係性はありませんが、<strong>大体のことはこいつが悪い</strong>とのことです。
            </p>
        </div>

        <h3 class="text-xl font-bold mb-4">◆出演者</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>
                <strong>Sava</strong>　<a href="https://x.com/Sava_403" target="_blank" class="text-primary underline">https://x.com/Sava_403</a><br>
                EGUのマネジメント担当。大体のことはずんだゆきが厳しすぎるから悪いと思ってる。
            </li>
            <li>
                <strong>ずんだゆき</strong>　<a href="https://x.com/zund_Yuki" target="_blank" class="text-primary underline">https://x.com/zund_Yuki</a><br>
                EGUの技術サポート担当。大体のことはSavaが甘すぎるから悪いと思ってる。
            </li>
        </ul>

        <h3 class="text-xl font-bold mb-4">◆ゲーム情報</h3>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="font-bold text-slate-700 mb-1">Super Bunny Man</p>
            <p class="text-slate-500 text-sm mb-3">
                ウサギのコスプレをした二人が転がりながらコースをクリアしていく協力アクションゲーム。<br>
                シンプルそうに見えて、二人の息が合わないと想像以上にカオスになる…。
            </p>
            <a href="https://store.steampowered.com/app/672840/" target="_blank" class="text-primary underline text-sm">
                Steamページはこちら →
            </a>
        </div>

        <h3 class="text-xl font-bold mb-4">◆EnjoyGameUnion!!とは？</h3>
        <p class="mb-8 text-slate-600 leading-loose">
            VRChatで楽しく遊ぶことを目的に集まったグループ『EnjoyGameUnion!!』（通称：EGU）が、<br>
            VRChat内外で様々な楽しいことを見つけ出していくYouTubeチャンネルです！<br>
            ゲーム実況・歌ってみた・大会運営・バラエティ企画など、様々なことに挑戦していきますので、ぜひ応援よろしくお願いします！
        </p>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <p class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Related Content</p>
            <ul class="space-y-3 text-slate-600">
                <li>
                    ★ずんだゆき シチュエーションボイス販売中！<br>
                    <a href="https://egu.booth.pm/items/8058227" target="_blank" class="text-primary underline">
                        震える君を抱きしめて
                    </a>
                </li>
                <li>
                    ★EGUゲーム部プレイリスト<br>
                    <a href="https://www.youtube.com/playlist?list=PLsYg7sr7EZhMXmscI7dvX-0KCFi5agQf_" target="_blank" class="text-primary underline">
                        EGUゲーム部
                    </a>
                </li>
                <li>
                    ★EGUあにまるず 歌ってみた「ようこそジャパリパークへ」<br>
                    <a href="https://www.youtube.com/watch?v=gLAd9EQtDpc" target="_blank" class="text-primary underline">
                        https://www.youtube.com/watch?v=gLAd9EQtDpc
                    </a>
                </li>
            </ul>
        </div>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">About EGU</p>
            <ul class="space-y-2 text-slate-600">
                <li>
                    公式HP：<a href="https://enjoygameunion.github.io/" target="_blank" class="text-primary underline">https://enjoygameunion.github.io/</a>
                </li>
                <li>
                    公式X：<a href="https://x.com/EnjoyGameUnion" target="_blank" class="text-primary underline">https://x.com/EnjoyGameUnion</a>
                </li>
                <li>
                    主催：トッサノ　<a href="https://x.com/tossanovrc" target="_blank" class="text-primary underline">https://x.com/tossanovrc</a>
                </li>
            </ul>
        </div>`,
  },
  {
    id: 13,
    title: "【EGU】企画&メンバー紹介PV作成しました！",
    date: "2026.05.03",
    tag: "動画更新",
    thumb: "./img/news/NEWS-13-01.webp",
    body: `<img src="./img/news/NEWS-13-01.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="EGU企画&メンバー紹介PV">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            EnjoyGameUnion!! 企画＆メンバー紹介PV、完成しました！
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            EnjoyGameUnion!!（EGU）の企画・メンバー紹介PVが完成しました！<br>
            EGUとはどんなグループなのか、どんな活動をしているのか――<br>
            そのすべてが詰まった、EGU初の本格的なPV動画です。<br>
            ぜひご覧ください！
        </p>

        <!-- YouTube埋め込み -->
        <div class="aspect-video w-full mb-8">
            <iframe
                class="w-full h-full rounded-3xl shadow-2xl"
                src="https://www.youtube.com/embed/kaTd-SR4yp4?rel=0"
                title="【EnjoyGameUnion!!】企画&メンバー紹介PV"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        </div>

        <!-- 紹介動画カット -->
        <h3 class="text-xl font-bold mb-4">◆PVより</h3>
        <img src="./img/news/NEWS-13-02.webp" class="w-full h-auto rounded-2xl shadow-md mb-10" alt="PV紹介カット">

        <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">
            EnjoyGameUnion!! とは？
        </h3>

        <p class="mb-6 text-slate-600 leading-loose">
            EnjoyGameUnion!!（略称：EGU）は、VRChatを拠点に活動するコミュニティグループです。<br>
            「楽しくゲームをすること」をモットーに、歌ってみた・バラエティ動画・ゲーム配信・麻雀大会・ボイス作品など、<br>
            メンバーそれぞれの個性を活かしながら、様々なコンテンツを発信してきました。<br>
            <br>
            このPVは、そんなEGUのこれまでの活動と、個性豊かなメンバーたちを一本の動画にギュッと凝縮したものです。<br>
            初めてEGUを知る方にも、いつも応援してくださっている方にも、ぜひ楽しんでいただけると嬉しいです！
        </p>

        <!-- 企画画像 7枚まとめ -->
        <h3 class="text-xl font-bold mb-4">◆これまでの企画</h3>
        <div class="grid grid-cols-2 gap-3 mb-10 sm:grid-cols-3">
            <img src="./img/news/NEWS-13-03.webp" class="w-full h-auto rounded-2xl shadow-md object-cover aspect-video" alt="企画カット1">
            <img src="./img/news/NEWS-13-04.webp" class="w-full h-auto rounded-2xl shadow-md object-cover aspect-video" alt="企画カット2">
            <img src="./img/news/NEWS-13-05.webp" class="w-full h-auto rounded-2xl shadow-md object-cover aspect-video" alt="企画カット3">
            <img src="./img/news/NEWS-13-06.webp" class="w-full h-auto rounded-2xl shadow-md object-cover aspect-video" alt="企画カット4">
            <img src="./img/news/NEWS-13-07.webp" class="w-full h-auto rounded-2xl shadow-md object-cover aspect-video" alt="企画カット5">
            <img src="./img/news/NEWS-13-08.webp" class="w-full h-auto rounded-2xl shadow-md object-cover aspect-video" alt="企画カット6">
            <img src="./img/news/NEWS-13-09.webp" class="w-full h-auto rounded-2xl shadow-md object-cover aspect-video col-span-2 sm:col-span-1" alt="企画カット7">
        </div>

        <!-- Thank you -->
        <img src="./img/news/NEWS-13-10.webp" class="w-full h-auto rounded-2xl shadow-md mb-10" alt="Thank you for watching">

        <!-- インタビューセクション -->
        <div class="my-12 border-t-2 border-slate-100 pt-10">
            <h3 class="text-2xl font-bold text-slate-900 mb-2 border-l-4 border-primary pl-4">
                制作者インタビュー
            </h3>
            <p class="text-slate-500 text-sm mb-8 pl-5">PV制作担当：Tooka</p>

            <p class="mb-10 text-slate-600 leading-loose">
                今回のPVを手がけてくれたのは、EGU所属メンバーのTooka。<br>
                動画・イラスト・実況と多岐にわたる活動を持つ彼女に、今回の制作について根掘り葉掘りインタビューしました！
            </p>

            <!-- 🎨 制作について -->
            <img src="./img/news/NEWS-13-11.webp" class="w-full h-auto rounded-2xl shadow-md mb-8" alt="インタビュー写真1">

            <p class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">🎨 制作について</p>

            <div class="space-y-6 mb-12">

                <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <p class="font-bold text-slate-700 mb-3">Q1. 今回のPV制作作ろうと思ったきっかけを教えてください。</p>
                    <p class="text-slate-500 leading-loose text-sm">
                    元々メンバーが多くなってきた段階で紹介動画を作りたいねという話があって、トッサノさんが裏で作ってたんですよ。確か去年(2025年)の11月くらい？<br>
                    その時点で、動画の構成であったりとか、構図の思いつかないシーンの案出しであったりとかを手伝ってはいました。<br>
                    その後トッサノさんが他の作業で忙しいということで、わたしが巻き取ったという形になります。<br>
                    わたしも全部把握してるわけではないんですけど、どう考えても<span class="font-bold">トッサノさんの作業量がおかしい</span>んですよ。どうにかなりませんかアレ？
                    </p>
                </div>

                <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <p class="font-bold text-slate-700 mb-3">Q2. 制作する上でこだわったポイントはどこですか？</p>
                    <p class="text-slate-500 leading-loose text-sm">
                    やっぱりメンバーが多い上に<span class="font-bold">みんなを紹介したい！</span>という気持ちがあったので、動画後半のメンバー紹介の部分まで見てもらえるように工夫しました。<br>
                    たぶん長すぎても最後まで見ないだろうなとは思うし、正直わたしも見ないので、できるだけコンパクトに収めつつ、曲の展開に合わせた動画構成を心がけました。
                    </p>
                </div>

                <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <p class="font-bold text-slate-700 mb-3">Q3. 制作期間はどのくらいかかりましたか？</p>
                    <p class="text-slate-500 leading-loose text-sm">
                    1ヶ月半ぐらいですね。そのうちの大部分は写真とか映像とかの募集期間だったりします。<br>
                    同時進行でサイト作成の方も動いていたので、そちらにも使えるようにメンバーの皆さんには少し多めに撮影していただきました。自己紹介文もサイトに掲載するためのものをこちらで少しいじらせてもらって……。<br>
                    皆様ご協力ありがとうございました！
                    </p>
                </div>

                <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <p class="font-bold text-slate-700 mb-3">Q4. 一番大変だった作業はなんでしたか？</p>
                    <p class="text-slate-500 leading-loose text-sm">
                    メンバー紹介に移る直前のシーンがなんだかんだ一番面倒だったかも。<br>
                    背景を脱色して、ベースの枠を作って、写真を嵌めて、いい感じのモーションをつけて……。<br>
                    とはいえトッサノさんに案出ししたやつをそのまま使ったので、言うほど大変な作業ってあんまりなかったりします。<br>
                    誰か動画編集やりましょうよ。結構楽ですよ。
                    </p>
                </div>

                <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <p class="font-bold text-slate-700 mb-3">Q5. 使用したソフトやツールを教えてください！</p>
                    <p class="text-slate-500 leading-loose text-sm">
                    主にAviutl2を使用しました！<br>
                    元々Aviutlで動画制作をしていたので、最近出た後継が使いやすくてほとんどこれだけで作りました。<br>
                    あと長尺の動画を切り抜くためにDaVinch resolveを使ったり？<br>
                    こちらは最近教わったソフトなので全然扱いきれてないです、もっと使いたい気持ちはあるんですけど、もう、Aviutlからは離れられないかも……。
                    </p>
                </div>

            </div>

            <!-- 💡 EnjoyGameUnion!! について -->
            <img src="./img/news/NEWS-13-12.webp" class="w-full h-auto rounded-2xl shadow-md mb-8" alt="インタビュー写真2">

            <p class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">💡 EnjoyGameUnion!! について</p>

            <div class="space-y-6 mb-12">

                <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <p class="font-bold text-slate-700 mb-3">Q6. EGUのメンバーや雰囲気を動画でどう表現しようと意識しましたか？</p>
                    <p class="text-slate-500 leading-loose text-sm">
                    やっぱり<span class="font-bold">メンバーそれぞれの個性</span>ってあるんですよ。個性ってあって、メンバー紹介での写真であったり、企画紹介のシーンであったりを選定するときに、そういうのが出ているものを使うように結構意識していました。<br>
                    どうしてもわたし目線での人柄を考慮した選定ということになってしまうので、そこら辺は勘弁してほしいんですけど、個人的にはその人の個性を表したものになっているんじゃないかな、と思っております。
                    </p>
                </div>

                <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <p class="font-bold text-slate-700 mb-3">Q7. PVを通して一番伝えたかったことはなんですか？</p>
                    <p class="text-slate-500 leading-loose text-sm">
                    わたしEGUメンバー大好きなので、<span class="font-bold">好きな人たちがこんな活動してるんだよ！！！愉快な人たちだよ！！！！</span>というのを一番伝えたくて。<br>
                    こういう言い方するのもアレですけど、フォロワー数とかチャンネル登録者数とかの絶対指標にはあんまり興味なくて、ただこういう人たちが認知されていくのが嬉しいんですよね。<br>
                    これからも色んな人に布教できるように精進したいって言い方するの、オタクって感じがしてウケますね。頑張ります。
                    </p>
                </div>

            </div>

            <!-- 🙌 振り返って -->
            <img src="./img/news/NEWS-13-13.webp" class="w-full h-auto rounded-2xl shadow-md mb-8" alt="インタビュー写真3">

            <p class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">🙌 振り返って</p>

            <div class="space-y-6 mb-4">

                <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <p class="font-bold text-slate-700 mb-3">Q8. 完成した動画を見て、自分的に一番お気に入りのシーンはどこですか？</p>
                    <p class="text-slate-500 leading-loose text-sm">
                    やっぱハルさんのあのシーンですよね！！！！！！！かわいい！！！！！！！！！<br>
                    後半のシーンって、紹介すべき人数も多い分どうしてもダレてしまうんですけど、今回使わせていただいた「Nocturnal Dance」という曲にはアクセントになるパートがあって、その部分を有効活用したいがためのあのシーンです。<br>
                    <span class="font-bold">最後まで見てね。</span>
                    </p>
                </div>

                <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <p class="font-bold text-slate-700 mb-3">Q9. 次に制作するとしたら、挑戦してみたいことはありますか？</p>
                    <p class="text-slate-500 leading-loose text-sm">
                    紹介動画は今後作るかどうか分かりませんけど、個人的に動画企画を何かしら動かしたいんですよね。<br>
                    現状生配信メインでやってますけど、併せてコンスタントに発信できるコンテンツを制作したくて、いろいろ模索中です。<br>
                    <span class="font-bold">面白い企画考えたいな～～～～～～！</span>頑張ります！！！
                    </p>
                </div>

                <div class="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <p class="font-bold text-slate-700 mb-3">Q10. 最後に、視聴者やEGUメンバーへひとことお願いします！</p>
                    <p class="text-slate-500 leading-loose text-sm">
                    自分、やれることはやります。よろしくお願いします。
                    </p>
                </div>

            </div>

        </div>

        <!-- クレジット -->
        <h3 class="text-xl font-bold mb-4 mt-10">◆クレジット</h3>
        <ul class="mb-8 text-slate-600 leading-loose list-disc list-inside">
            <li>動画制作：Tooka　<a href="https://x.com/t1o0k" target="_blank" class="text-primary underline">https://x.com/t1o0k</a></li>
        </ul>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">About EGU</p>
            <ul class="space-y-2 text-slate-600">
                <li>公式HP：<a href="https://enjoygameunion.github.io/" target="_blank" class="text-primary underline">https://enjoygameunion.github.io/</a></li>
                <li>公式X：<a href="https://x.com/EnjoyGameUnion" target="_blank" class="text-primary underline">https://x.com/EnjoyGameUnion</a></li>
            </ul>
        </div>`,
  },
    
    /* ===投稿テンプレ=== */
  // {
  //     id: ,
  //     title: "タイトル",
  //     date: "YYYY.MM.DD",
  //     tag: "お知らせ・活動報告・動画更新",
  //     thumb: "サムネ画像",
  //     body: `<img src="./img/news/update.webp" class="w-full h-auto rounded-3xl mb-8 shadow-lg" alt="アイキャッチ">
  //         <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">新体制について</h3>
  //         <p class="mb-6">
  //             新メンバーの詳細は、本日20:00からの生放送にて発表いたします。ぜひリアルタイムでご覧ください。
  //         </p>
  //         <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
  //             <p class="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Update Info</p>
  //             <ul class="list-disc list-inside space-y-2 text-slate-600">
  //                 <li>新メンバー1名加入</li>
  //                 <li>公式サイトのメンバーページ更新</li>
  //                 <li>春期限定イベントの開催決定</li>
  //             </ul>
  //         </div>'
  //  },

  /* ===以下内容テンプレ=== */
  // 追加する場合はbodyに追加してもらえばOK

  /* ===タイトル=== */
  // <h3 class="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-primary pl-4">タイトル</h3>

  /* ===YouTube=== */
  // <div class="aspect-video w-full mb-8">
  //     <iframe
  //         class="w-full h-full rounded-3xl shadow-2xl"
  //         src="https://www.youtube.com/embed/VIDEO_ID&rel=0"
  //         title="YouTube video player"
  //         frameborder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //         allowfullscreen>
  //     </iframe>
  // </div>

  /* ===BOOTHボタン=== */
  // <div class="flex justify-center my-8">
  //     <a href="https://booth.pm/ja/items/ID" target="_blank"
  //         class="group flex items-center gap-3 bg-[#fc4d50] text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-red-100 hover:bg-[#ff5a5d] hover:-translate-y-1 transition-all duration-300">
  //         <i class="fa-solid fa-cart-shopping text-xl"></i>
  //         <span>BOOTHでチェックする</span>
  //         <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
  //     </a>
  // </div>

  /* ===テーブル=== */
  // <h3 class="text-2xl font-black mb-6">テーブル</h3>
  // <div class="overflow-hidden border border-slate-100 rounded-2xl mb-8">
  //     <table class="w-full text-left border-collapse">
  //         <tr class="bg-slate-50">
  //             <th class="p-4 border-b border-slate-100 font-bold text-slate-600 w-1/3">開催日時</th>
  //             <td class="p-4 border-b border-slate-100">2026年4月25日 21:00〜</td>
  //         </tr>
  //         <tr>
  //             <th class="p-4 border-b border-slate-100 font-bold text-slate-600">種目</th>
  //             <td class="p-4 border-b border-slate-100">VRChat内 特設ゲームワールド</td>
  //         </tr>
  //         <tr class="bg-slate-50">
  //             <th class="p-4 font-bold text-slate-600">参加資格</th>
  //             <td class="p-4">Union公式Discordへの参加</td>
  //         </tr>
  //     </table>
  // </div>
  // <p class="text-slate-500 text-sm italic">
  //     ※エントリーは定員に達し次第終了となります。
  // </p>
];
